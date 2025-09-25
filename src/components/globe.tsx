"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const vertex = `
  uniform float u_time;
  uniform float u_maxExtrusion;

  void main() {
    vec3 newPosition = position;
    if(u_maxExtrusion > 1.0) {
      newPosition.xyz = newPosition.xyz * u_maxExtrusion + sin(u_time);
    } else {
      newPosition.xyz = newPosition.xyz * u_maxExtrusion;
    }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragment = `
  uniform float u_time;

  vec3 colorA = vec3(0.196, 0.631, 0.886);
  vec3 colorB = vec3(0.192, 0.384, 0.498);

  void main() {
    float pct = abs(sin(u_time));
    vec3 color = mix(colorA, colorB, pct);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    let sizes = {
      width: container.offsetWidth,
      height: container.offsetHeight,
    };

    // === Scene Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      30,
      sizes.width / sizes.height,
      1,
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(sizes.width, sizes.height);

    // Lights
    const pointLight = new THREE.PointLight(0x081b26, 17, 200);
    pointLight.position.set(-50, 0, 60);
    scene.add(pointLight);
    scene.add(new THREE.HemisphereLight(0xffffbb, 0x080820, 1.5));

    // Base Sphere
    const baseSphere = new THREE.SphereGeometry(19.5, 35, 35);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b2636,
      transparent: true,
      opacity: 0.9,
    });
    const baseMesh = new THREE.Mesh(baseSphere, baseMaterial);
    scene.add(baseMesh);

    // Shader Material
    const materials: THREE.ShaderMaterial[] = [];
    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        u_time: { value: 1.0 },
        u_maxExtrusion: { value: 1.0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.minPolarAngle = Math.PI / 2 - 0.5;
    controls.maxPolarAngle = Math.PI / 2 + 0.5;

    // === MAP dots ===
    const activeLatLon: Record<number, number[]> = {};
    const dotSphereRadius = 20;

    const readImageData = (imageData: Uint8ClampedArray) => {
      for (
        let i = 0, lon = -180, lat = 90;
        i < imageData.length;
        i += 4, lon++
      ) {
        if (!activeLatLon[lat]) activeLatLon[lat] = [];
        const [red, green, blue] = [
          imageData[i],
          imageData[i + 1],
          imageData[i + 2],
        ];
        if (red < 80 && green < 80 && blue < 80) activeLatLon[lat].push(lon);
        if (lon === 180) {
          lon = -180;
          lat--;
        }
      }
    };

    const visibilityForCoordinate = (lon: number, lat: number) => {
      if (!activeLatLon[lat]?.length) return false;
      const closest = activeLatLon[lat].reduce((prev, curr) =>
        Math.abs(curr - lon) < Math.abs(prev - lon) ? curr : prev
      );
      return Math.abs(lon - closest) < 0.5;
    };

    const calcPosFromLatLonRad = (lon: number, lat: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(dotSphereRadius * Math.sin(phi) * Math.cos(theta)),
        dotSphereRadius * Math.cos(phi),
        dotSphereRadius * Math.sin(phi) * Math.sin(theta)
      );
    };

    const createMaterial = (timeValue: number) => {
      const m = material.clone();
      m.uniforms.u_time.value = timeValue * Math.sin(Math.random());
      materials.push(m);
      return m;
    };

    const setDots = () => {
      const dotDensity = 2.5;
      for (let lat = 90, i = 0; lat > -90; lat--, i++) {
        const radius =
          Math.cos(Math.abs(lat) * (Math.PI / 180)) * dotSphereRadius;
        const circumference = radius * Math.PI * 2;
        const dotsForLat = circumference * dotDensity;

        for (let x = 0; x < dotsForLat; x++) {
          const lon = -180 + (x * 360) / dotsForLat;
          if (!visibilityForCoordinate(lon, lat)) continue;
          const vector = calcPosFromLatLonRad(lon, lat);
          const dotGeo = new THREE.CircleGeometry(0.1, 5);
          dotGeo.lookAt(vector);
          dotGeo.translate(vector.x, vector.y, vector.z);
          const m = createMaterial(i);
          const mesh = new THREE.Mesh(dotGeo, m);
          scene.add(mesh);
        }
      }
    };

    const image = new Image();
    image.src = "/world_alpha_mini.jpg";
    image.onload = () => {
      const imageCanvas = document.createElement("canvas");
      imageCanvas.width = image.width;
      imageCanvas.height = image.height;
      const ctx = imageCanvas.getContext("2d")!;
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, image.width, image.height);
      readImageData(imageData.data);
      setDots();
    };

    // Resize
    const resize = () => {
      sizes = {
        width: container.offsetWidth,
        height: container.offsetHeight,
      };
      if (window.innerWidth > 700) camera.position.z = 100;
      else camera.position.z = 140;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };
    window.addEventListener("resize", resize);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      materials.forEach((m) => (m.uniforms.u_time.value += 0.03));
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen relative">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

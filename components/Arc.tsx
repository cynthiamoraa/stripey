import * as THREE from "three";
import { Line } from "@react-three/drei";

// --- Utility: convert lat/lon to 3D position on sphere ---
function latLonToVector3(lat: number, lon: number, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// --- Flying Arc ---
export default function Arc({
  start,
  end,
  color = "#f472b6",
}: {
  start: [number, number];
  end: [number, number];
  color?: string;
}) {
  const startVec = latLonToVector3(start[0], start[1], 1.01); // slightly above surface
  const endVec = latLonToVector3(end[0], end[1], 1.01);

  // Midpoint lifted up to make an arc
  const midVec = startVec.clone().add(endVec).multiplyScalar(0.5);
  midVec.normalize().multiplyScalar(1.3); // arc height

  // Curve through start -> mid -> end
  const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
  const points = curve.getPoints(50);

  return <Line points={points} color={color} lineWidth={2} />;
}

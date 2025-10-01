// components/GrowthSection.tsx
export default function GrowthSection() {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Accent bars */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rotate-[2deg]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rotate-[-2deg]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <p className="text-blue-600 font-medium">
          Trust, Evidence, and Control
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-snug text-gray-900">
          Audit-Ready Compliance Built In
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl">
          Ensure transparency, accuracy, and control across your billing and
          compliance workflows. Every action is recorded, validated, and
          protected to help you stay ahead of audits and client requirements.
        </p>

        {/* Zigzag layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Left Card */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h4 className="font-semibold text-gray-900">
              Signed Activity Logs
            </h4>
            <p className="text-gray-500 text-sm mt-2">
              Cryptographically recorded and tamper-evident audit trails.
              Timestamped entries with digital signatures for verifiable billing
              proof.
            </p>
          </div>

          {/* Right Card with offset */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:mt-16">
            <h4 className="font-semibold text-gray-900">Billing Checks</h4>
            <p className="text-gray-500 text-sm mt-2">
              Automated validation against client billing rules. Prevent
              rejections and write-downs with detailed compliance reports.
            </p>
          </div>

          {/* Left Card offset */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:mt-16">
            <h4 className="font-semibold text-gray-900">Access Controls</h4>
            <p className="text-gray-500 text-sm mt-2">
              Enterprise security with SSO/SCIM integration and role-based
              permissions. Audit-ready access management and data controls.
            </p>
          </div>
        </div>

        {/* Final Button */}
        <div className="mt-16 flex justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition">
            Open Evidence Pack Sample
          </button>
        </div>
      </div>
    </section>
  );
}

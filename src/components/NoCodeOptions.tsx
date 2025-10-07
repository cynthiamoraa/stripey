import Guides from "./Guides";

export default function TrustEvidenceControl() {
  return (
    <section className="relative bg-[#f6f9fc] py-20 px-4 lg:px-22">
      {/* Header */}
      <Guides />
      <div className="max-w-6xl relative mx-auto px-6 text-center lg:text-left">
        <h4 className="text-sm font-semibold text-purple-600 mb-2">
          Trust, Evidence, and Control
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transparent billing with security at the core
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Ensure compliance, accuracy, and accountability with audit-ready
          billing solutions designed for enterprises.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl relative mx-auto mt-12 px-6 grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <div className=" bg-gray-50 flex items-center justify-center rounded-lg mb-6">
            <img
              src="https://www.sque.ai/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F9175760%2Fpexels-photo-9175760.jpeg&w=3840&q=75"
              alt=""
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Signed Activity Logs</h3>
          <p className="text-gray-600 mb-4">
            Cryptographically recorded and tamper-evident audit trails.
            Timestamped entries with digital signatures for verifiable billing
            proof.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <div className=" bg-gray-50 flex items-center justify-center rounded-lg mb-6">
            <img
              src="https://www.sque.ai/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F9175759%2Fpexels-photo-9175759.jpeg&w=3840&q=75"
              alt=""
            />{" "}
          </div>
          <h3 className="text-xl font-semibold mb-2">Billing Checks</h3>
          <p className="text-gray-600 mb-4">
            Automated validation against client billing rules. Prevent
            rejections and write-downs with detailed compliance reports.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <div className=" bg-gray-50 flex items-center justify-center rounded-lg mb-6">
            <img
              src="https://www.sque.ai/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F9175758%2Fpexels-photo-9175758.jpeg&w=3840&q=75"
              alt=""
            />{" "}
          </div>
          <h3 className="text-xl font-semibold mb-2">Access Controls</h3>
          <p className="text-gray-600 mb-4">
            Enterprise security with SSO/SCIM integration and role-based
            permissions. Audit-ready access management and data controls.
          </p>
        </div>
      </div>

      {/* CTA Footer (button card) */}
      <div className="max-w-6xl relative mx-auto mt-12 px-6 flex justify-center">
        <button className="px-8 py-4 bg-purple-600 text-white font-medium rounded-xl shadow hover:bg-purple-700 transition">
          Open Evidence Pack Sample
        </button>
      </div>
    </section>
  );
}

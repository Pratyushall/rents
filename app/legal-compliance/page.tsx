"use client";

import { useState } from "react";

const tasks = [
  { name: "Gas Safety Certificate", status: "valid", expires: "2026-03-15" },
  {
    name: "EPC (Energy Performance Certificate)",
    status: "expiring",
    expires: "2025-08-01",
  },
  { name: "HMO Licence", status: "missing", expires: null },
  { name: "Fire & Electrical Check", status: "valid", expires: "2025-12-20" },
];

export default function LegalCompliancePage() {
  const [list, setList] = useState(tasks);

  const handleUpload = (index: number) => {
    const now = new Date();
    const updated = [...list];
    updated[index] = {
      ...updated[index],
      status: "valid",
      expires: new Date(now.setFullYear(now.getFullYear() + 1))
        .toISOString()
        .split("T")[0],
    };
    setList(updated);
  };

  return (
    <section className="min-h-screen bg-white px-6 py-16 text-black font-bold">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl text-pink-500">Legal Compliance Engine</h1>
        <p className="text-lg font-normal text-black">
          Stay on top of all your legal documents, licences and
          renewals—automatically.
        </p>

        <div className="border-2 rounded-xl overflow-hidden">
          <div className="bg-pink-500 text-white grid grid-cols-12 gap-4 py-3 px-4 font-semibold">
            <div className="col-span-6">Requirement</div>
            <div>Status</div>
            <div>Expiry Date</div>
            <div className="text-center">Actions</div>
          </div>

          {list.map((item, idx) => (
            <div
              key={item.name}
              className="grid grid-cols-12 gap-4 py-4 px-4 even:bg-pink-50"
            >
              <div className="col-span-6">{item.name}</div>

              <div>
                {item.status === "valid" && (
                  <span className="text-green-600">✅ Valid</span>
                )}
                {item.status === "expiring" && (
                  <span className="text-orange-500">⚠️ Expiring Soon</span>
                )}
                {item.status === "missing" && (
                  <span className="text-red-600">❌ Missing</span>
                )}
              </div>

              <div>{item.expires ?? "—"}</div>

              <div className="text-center">
                <button
                  onClick={() => handleUpload(idx)}
                  className="bg-black text-pink-100 px-3 py-1 rounded hover:bg-pink-500 hover:text-black transition font-semibold"
                >
                  {item.status === "valid" ? "Re‑upload" : "Upload"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="font-normal">
          Upload or renew documents before expiry to stay compliant and avoid
          penalties.
        </p>
      </div>
    </section>
  );
}

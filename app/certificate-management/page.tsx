"use client";

import { useState } from "react";

const initialCerts = [
  {
    name: "Gas Safety Certificate",
    uploaded: "2025-01-10",
    expires: "2026-01-09",
    status: "valid",
  },
  {
    name: "Electrical Safety Certificate",
    uploaded: null,
    expires: null,
    status: "missing",
  },
  {
    name: "EPC (Energy Performance Certificate)",
    uploaded: "2024-07-01",
    expires: "2025-07-01",
    status: "expiring",
  },
];

export const dynamic = "error";
export const revalidate = 3600;

export default function CertManagementPage() {
  const [certs, setCerts] = useState(initialCerts);

  const handleUpload = (i: number) => {
    const updated = [...certs];
    const now = new Date().toISOString().split("T")[0];
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    updated[i] = {
      ...updated[i],
      uploaded: now,
      expires: nextYear.toISOString().split("T")[0],
      status: "valid",
    };
    setCerts(updated);
  };

  return (
    <section className="min-h-screen bg-white px-6 py-16 text-black font-bold">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl text-pink-500">Certificate Management</h1>
        <p className="text-lg font-normal">
          Upload, view, and track your property safety certificates—never miss
          an expiry again.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-pink-500 text-white">
              <tr>
                <th className="p-3 text-left">Certificate</th>
                <th className="p-3">Uploaded</th>
                <th className="p-3">Expires</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {certs.map((c, i) => (
                <tr key={c.name} className={i % 2 === 0 ? "bg-pink-50" : ""}>
                  <td className="p-3">{c.name}</td>
                  <td className="p-3">{c.uploaded ?? "—"}</td>
                  <td
                    className={`p-3 ${
                      c.status === "expiring" ? "text-orange-500" : ""
                    }`}
                  >
                    {c.expires ?? "—"}
                  </td>
                  <td className="p-3">
                    {c.status === "valid" && (
                      <span className="text-green-600">✅ Valid</span>
                    )}
                    {c.status === "expiring" && (
                      <span className="text-orange-500">⚠️ Expiring</span>
                    )}
                    {c.status === "missing" && (
                      <span className="text-red-600">❌ Missing</span>
                    )}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleUpload(i)}
                      className="bg-black text-pink-100 px-4 py-1 rounded hover:bg-pink-500 hover:text-black transition font-semibold"
                    >
                      {c.status === "valid" ? "Re-upload" : "Upload"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-normal">
          You’ll receive formal reminders 30 and 7 days before expiry. Keep
          certificates valid to avoid compliance fines.
        </p>
      </div>
    </section>
  );
}

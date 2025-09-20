"use client";

export default function SmartRemindersPage() {
  const reminders = [
    {
      type: "Rent Due Reminder",
      sent: "2025-06-30",
      frequency: "3 days before due date",
      status: "active",
      recipient: "Tenant",
    },
    {
      type: "Gas Certificate Expiry",
      sent: "2025-06-01",
      frequency: "30, 14, 7 days before expiry",
      status: "active",
      recipient: "Landlord",
    },
    {
      type: "Lease End Reminder",
      sent: "2025-05-01",
      frequency: "60, 30 days before expiry",
      status: "paused",
      recipient: "Tenant + Landlord",
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-16 text-black font-bold">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl text-pink-500">Smart Reminders & Notices</h1>
        <p className="text-lg font-normal">
          Your automated assistant for rent, leases, certificates, and legal
          notices — always on time, always on point.
        </p>

        <div className="overflow-x-auto rounded-xl border-2 border-black">
          <table className="w-full table-auto">
            <thead className="bg-pink-500 text-white">
              <tr>
                <th className="p-4 text-left">Reminder Type</th>
                <th className="p-4">Last Sent</th>
                <th className="p-4">Frequency</th>
                <th className="p-4">Recipient</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {reminders.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-pink-50" : "bg-white"}>
                  <td className="p-4">{r.type}</td>
                  <td className="p-4">{r.sent}</td>
                  <td className="p-4">{r.frequency}</td>
                  <td className="p-4">{r.recipient}</td>
                  <td className="p-4">
                    {r.status === "active" ? (
                      <span className="text-green-600">✅ Active</span>
                    ) : (
                      <span className="text-gray-500">⏸️ Paused</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-sm font-normal mt-8">
          <p>
            RentEase sends reminders via email and SMS based on property role.
            Customize frequencies from the dashboard settings.
          </p>
        </div>
      </div>
    </section>
  );
}

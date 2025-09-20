"use server";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/auth";
import { Button } from "../components/ui/button";

export default async function RentPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/signup?redirectTo=/rent");

  const hasUploadedCertificates = false; // mock
  const applicationStatus = "Pending"; // mock

  return (
    <div className="min-h-screen px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-primary">
          Explore Rentals
        </h1>

        {/* Listings Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Available Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition border"
              >
                <div className="h-40 bg-gray-200 rounded mb-4" />
                <h3 className="text-lg font-bold mb-2">
                  London Apartment #{id}
                </h3>
                <p className="text-gray-600 text-sm">2BHK near King’s Cross</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance & Certificate Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Verification</h2>

          {!hasUploadedCertificates ? (
            <div className="bg-yellow-100 border border-yellow-300 p-6 rounded-lg">
              <p className="text-yellow-800 mb-4">
                You haven’t uploaded the required safety certificates yet.
              </p>
              <Button className="bg-primary text-white font-bold">
                Upload Now
              </Button>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <p className="text-green-800 font-medium mb-2">
                Uploaded Certificates:
              </p>
              <ul className="list-disc ml-6 text-sm text-green-900">
                <li>Electrical Safety Certificate</li>
                <li>Gas Safety Certificate</li>
              </ul>
            </div>
          )}
        </section>

        {/* Application Status Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Application Status</h2>
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <p className="text-blue-800 font-medium">
              Your current rental application status is:
            </p>
            <p className="text-2xl font-bold text-blue-900 mt-2">
              {applicationStatus}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Link from "next/link";
import { UploadCloud, FileCheck2 } from "lucide-react";

export default function UploadCertificatesPage() {
  const [epcName, setEpcName] = useState("");
  const [gasName, setGasName] = useState("");

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Upload Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* EPC Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="text-pink-600 flex items-center gap-2">
              <UploadCloud className="w-5 h-5" />
              Energy Performance Certificate (EPC)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4 text-sm">
              Ensure your EPC is valid for the property you’re renting.
            </p>

            <label className="inline-flex items-center px-4 py-2 border border-pink-600 text-pink-600 font-semibold rounded-md cursor-pointer hover:bg-pink-50 transition duration-200 mb-2">
              <UploadCloud className="w-4 h-4 mr-2" />
              Choose File
              <input
                type="file"
                className="hidden"
                onChange={(e) => setEpcName(e.target.files?.[0]?.name || "")}
              />
            </label>

            {epcName && (
              <p className="text-sm text-gray-700 mb-2">
                Selected: <span className="font-medium">{epcName}</span>
              </p>
            )}

            <Button className="bg-pink-600 hover:bg-pink-500 text-white font-bold">
              Upload EPC
            </Button>
          </CardContent>
        </Card>

        {/* Gas Safety Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="text-pink-600 flex items-center gap-2">
              <UploadCloud className="w-5 h-5" />
              Gas Safety Certificate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4 text-sm">
              Upload the latest gas safety certificate for your property.
            </p>

            <label className="inline-flex items-center px-4 py-2 border border-pink-600 text-pink-600 font-semibold rounded-md cursor-pointer hover:bg-pink-50 transition duration-200 mb-2">
              <UploadCloud className="w-4 h-4 mr-2" />
              Choose File
              <input
                type="file"
                className="hidden"
                onChange={(e) => setGasName(e.target.files?.[0]?.name || "")}
              />
            </label>

            {gasName && (
              <p className="text-sm text-gray-700 mb-2">
                Selected: <span className="font-medium">{gasName}</span>
              </p>
            )}

            <Button className="bg-pink-600 hover:bg-pink-500 text-white font-bold">
              Upload Certificate
            </Button>
          </CardContent>
        </Card>

        {/* Uploaded Certificates */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-pink-600 flex items-center gap-2">
              <FileCheck2 className="w-5 h-5" />
              Uploaded Certificates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 text-sm">
              <li>EPC - Uploaded on July 10, 2025</li>
              <li>Gas Safety Certificate - Pending</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Link href="/tenant/home">
          <Button variant="outline">← Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}

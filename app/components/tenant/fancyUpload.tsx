"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function FancyUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="mb-6">
      <label className="inline-flex items-center px-5 py-3 border border-pink-600 text-pink-600 font-bold rounded-lg cursor-pointer hover:bg-pink-50 transition duration-200">
        <UploadCloud className="w-5 h-5 mr-2" />
        Choose File
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {fileName && (
        <p className="mt-2 text-sm text-gray-700">
          Selected: <span className="font-medium">{fileName}</span>
        </p>
      )}
    </div>
  );
}

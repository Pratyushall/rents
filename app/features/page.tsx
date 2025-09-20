"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Legal Compliance Engine",
    description:
      "Auto-verify HMO licensing, max occupants, and rent deposit rules. Stay aligned with UK housing regulations.",
    link: "/legal-compliance",
    emoji: "📜",
  },
  {
    title: "Certificate Management",
    description:
      "Upload and track fire safety, gas, and electrical certificates. Get expiry reminders and upload alerts.",
    link: "/certificate-management",
    emoji: "📂",
  },
  {
    title: "Role-Based Dashboards",
    description:
      "Different portals for landlords, tenants, property managers, and admins — personalized to their needs.",
    link: "/role-based-dashboards",
    emoji: "🧑‍💼",
  },
  {
    title: "Smart Reminders & Notices",
    description:
      "Auto-send rent reminders, Section 8 notices, and legal prompts to users when needed.",
    link: "/smart-reminders",
    emoji: "⏰",
  },
  {
    title: "Maintenance Reporting",
    description:
      "Tenants can raise issues. Landlords/managers get access to verified plumbers, electricians, and more.",
    link: "/maintenance-reporting",
    emoji: "🔧",
  },
  {
    title: "Secure Document Storage",
    description:
      "All legal files stored in one place, with encryption and role-based access. No more email chains.",
    link: "/secure-storage",
    emoji: "🔐",
  },
];

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen py-20 px-6 bg-white text-black font-bold">
      {/* Optional background image with soft white overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/bggg.jpg')" }}
      />
      <div className="absolute inset-0 bg-white z-0 opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-pink-500 drop-shadow">
            All-in-One Features
          </h1>
          <p className="text-lg font-normal max-w-2xl mx-auto bg-white/80 rounded-xl px-6 py-4 text-black">
            Everything you need to manage properties, people, and peace of mind
            — beautifully built, legally backed.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={feature.link}>
                <div className="bg-white border-2 border-pink-500 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                  <div className="text-3xl mb-2">{feature.emoji}</div>
                  <h2 className="text-xl font-extrabold mb-1 text-pink-500">
                    {feature.title}
                  </h2>
                  <p className="text-black font-normal">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

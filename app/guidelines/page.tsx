"use client";

import { useState } from "react";
import Link from "next/link";

const guidelineSections = [
  {
    title: "1. Renters’ Rights Reforms",
    points: [
      "Section 21 no-fault evictions are being phased out.",
      "Rent increases limited to once per year at fair market rates.",
      "Only one month’s rent can be collected in advance.",
      "Minimum four-month notice period for landlord move-in or sale.",
    ],
  },
  {
    title: "2. Deposit Protection",
    points: [
      "Deposits (max 5 weeks’ rent) must be protected in a government-approved scheme within 30 days.",
      "Prescribed information must be shared with tenants within that window.",
      "Deposit must be returned within 10 days after tenancy ends.",
    ],
  },
  {
    title: "3. Maintenance & Property Access",
    points: [
      "Landlords must give 24-hour written notice before entering (except in emergencies).",
      "Landlords are legally responsible for maintaining structure, water, heating, gas, and electrical systems.",
    ],
  },
  {
    title: "4. Right to Rent Checks",
    points: [
      "Before renting, landlords must verify tenant immigration status using Home Office guidelines.",
    ],
  },
  {
    title: "5. HMO Licensing & Holiday Lets",
    points: [
      "If you rent to 5+ unrelated people, you must get an HMO license.",
      "Holiday lets have different legal frameworks—fire safety, max stay limits, etc.",
    ],
  },
];

const externalResources = [
  {
    title: "Renters’ Rights Reforms (No-Fault Eviction Ban)",
    link: "https://moneyweek.com/investments/buy-to-let/renters-rights-bill-landmark-reforms-to-put-an-end-to-no-fault-evictions?utm_source=chatgpt.com",
    image:
      "https://moneyweek.com/images/default-source/default-album/moneyweek-renters-rights-bill.jpg",
  },
  {
    title: "Are Reforms Driving Landlords Away?",
    link: "https://www.thetimes.co.uk/article/will-reforms-be-the-final-nail-in-the-coffin-for-landlords-7rzd86grt?utm_source=chatgpt.com",
    image:
      "https://www.thetimes.co.uk/images/default-source/default-album/rental-market-uk.jpg",
  },
  {
    title: "Rental Bidding Wars Ban",
    link: "https://www.theguardian.com/money/2024/sep/11/bill-to-ban-england-and-wales-landlords-from-rental-bidding-wars?utm_source=chatgpt.com",
    image:
      "https://i.guim.co.uk/img/media/33b2954ab5d9d85c2f6e6eb3a79e1f3d44c2b9b2/0_0_6720_4032/master/6720.jpg?width=700&quality=85&auto=format&fit=max&s=01c37045aebfd4e09b77d30b07d8a4bb",
  },
];

export default function GuidelinesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-pink-100 text-black font-bold px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-4xl md:text-5xl text-black">
          UK Rental Guidelines 2025
        </h1>

        {/* Sections */}
        <div className="space-y-6">
          {guidelineSections.map((section, index) => (
            <div
              key={index}
              className="bg-pink-200 border-2 border-black rounded-2xl p-6 transition-all duration-300"
            >
              <button
                className="w-full text-left text-xl"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {section.title}
              </button>

              {expanded === index && (
                <ul className="mt-4 list-disc list-inside space-y-2 text-base font-normal">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* External Resources */}
        <div className="space-y-6">
          <h2 className="text-3xl">More Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {externalResources.map((res, index) => (
              <Link
                key={index}
                href={res.link}
                target="_blank"
                className="bg-pink-200 border-2 border-black rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-200"
              >
                <img
                  src={res.image}
                  alt={res.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 font-semibold text-black">{res.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

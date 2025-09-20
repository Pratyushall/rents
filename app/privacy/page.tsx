export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-pink-100 text-black font-bold px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl mb-8">Privacy Policy</h1>

        <p>
          At RentEase, your privacy is not just a formality — it's a promise.
          This policy explains what we collect, why we collect it, and how we
          keep it safe.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl">1. What Data We Collect</h2>
          <ul className="list-disc list-inside font-normal">
            <li>Name, email, and contact info</li>
            <li>Uploaded documents (certificates, proof of ID, etc.)</li>
            <li>Messages between users</li>
            <li>Login and usage activity</li>
          </ul>

          <h2 className="text-2xl">2. How We Use Your Data</h2>
          <p className="font-normal">
            We use your data to verify tenants, manage properties, enable secure
            communication, and personalize your experience on RentEase.
          </p>

          <h2 className="text-2xl">3. Legal Basis</h2>
          <p className="font-normal">
            Under GDPR, we process your data with your consent, to fulfill
            contracts, or under our legitimate interest in providing rental
            services.
          </p>

          <h2 className="text-2xl">4. Who We Share It With</h2>
          <p className="font-normal">We may share your data with:</p>
          <ul className="list-disc list-inside font-normal">
            <li>Certificate verification services</li>
            <li>Tenant screening & affordability check agencies</li>
            <li>Cloud hosting and infrastructure providers</li>
          </ul>

          <h2 className="text-2xl">5. Cookies</h2>
          <p className="font-normal">
            We use essential cookies for authentication and optional cookies for
            analytics. You can manage cookie preferences in your browser
            settings.
          </p>

          <h2 className="text-2xl">6. How Long We Keep Your Data</h2>
          <p className="font-normal">
            We retain your data as long as your account is active or as required
            by law (e.g., financial or verification records).
          </p>

          <h2 className="text-2xl">7. Your Rights</h2>
          <ul className="list-disc list-inside font-normal">
            <li>Access or correct your personal data</li>
            <li>Request deletion (subject to legal constraints)</li>
            <li>Object to certain uses</li>
            <li>Complain to the UK Information Commissioner’s Office (ICO)</li>
          </ul>

          <h2 className="text-2xl">8. Contact Us</h2>
          <p className="font-normal">
            For any privacy concerns, contact us at:
            <br />
            <span className="underline">privacy@rentease.co.uk</span>
          </p>
        </div>
      </div>
    </section>
  );
}

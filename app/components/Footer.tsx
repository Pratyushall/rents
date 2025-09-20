export default function Footer() {
  return (
    <footer className="bg-black text-white font-bold text-base px-6 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-pink-500 pb-6">
          <p className="text-center md:text-left mb-4 md:mb-0">
            © 2012 – 2025 RentEase Ltd.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-pink-400">
            <a href="#">Back to Top</a>
            <a href="#">Blog</a>
            <a href="#">Help Centre</a>
            <a href="#">Community</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Affiliates</a>
            <a href="#">Testimonials</a>
            <a href="#">Press</a>
            <a href="#">Jobs</a>
          </div>
        </div>

        <div className="mt-8 text-center md:text-left text-pink-300">
          <p>Ask Question — RentEase Ltd, 20 Wonderlock Road, London, N1 7GU</p>
          <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-6 text-pink-400">
            <a href="#">Landlords</a>
            <a href="#">Tenants</a>
            <a href="#">Search Houses for Rent</a>
            <a href="#">Properties in London</a>
            <a href="#">Properties in the UK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

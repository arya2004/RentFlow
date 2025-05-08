import { useSelector } from "react-redux";
import { Header, Logo, Footer } from "../components";
import { Link } from "react-router-dom";

const AboutPageComponent = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 py-12 px-4 md:px-20">
      <h2 className="text-3xl font-extrabold text-center text-slate-800 uppercase mb-10 font-heading tracking-wide">
        About Corazon Homes
      </h2>

      <div className="space-y-8 max-w-5xl mx-auto">
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Corazon Homes is a real estate advisor built on trust, transparency,
          and expertise. As a digital marketplace with an exhaustive range of
          property listings, we guide homebuyers from search to loan assistance
          and registration.
        </p>

        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Founded in 2013, Corazon Homes has grown rapidly, bridging the gap
          between property supply and demand using technology and a seasoned
          team of experts including ex-bankers and Ivy League alumni.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {[
            {
              title: "Consultation",
              desc: "Strategic advice at every acquisition stage—sourcing, valuation, negotiation, and due diligence with vetted professionals.",
            },
            {
              title: "After Sales",
              desc: "You’re part of our family. Enjoy progress updates, market insights, and query resolution within 72 hours.",
            },
            {
              title: "Home Loans",
              desc: "We help with home and commercial loan processes, giving you due diligence and access to multiple financing options.",
            },
            {
              title: "Property Management",
              desc: "From finance to beautification and reselling, we manage everything so you can enjoy a hassle-free property experience.",
            },
            {
              title: "NRI Corner",
              desc: "With the RERA Act 2016, buying in India is simpler for NRIs. We provide end-to-end support including loans and registrations.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-200"
            >
              <h4 className="text-xl font-semibold text-indigo-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="flex items-center shadow-sm p-4 bg-white">
          <Logo />
          <div className="ml-3">
            <h5 className="font-display text-xl font-semibold">
              Corazon Homes
            </h5>
            <p className="text-sm text-gray-500">It’s great to be home!</p>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <AboutPageComponent />

        {/* FOOTER */}
        <footer className="bg-slate-800 text-white p-6 md:px-20 md:py-10 mt-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <Logo />
              <div>
                <h1 className="text-xl font-bold">Corazon Homes</h1>
                <p className="text-sm">It’s great to be home!</p>
              </div>
            </div>

            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-500" />

          <div className="text-center text-sm">
            <p>
              Office No. 404, City Avenue, Near Hotel Sayaji, Wakad, Pune -
              411057
            </p>
            <p>Phone: +91-7276004884 | Email: sales@corazonhomes.com</p>
            <p className="mt-2">
              &copy; 2025{" "}
              <Link to="/" className="hover:underline">
                Corazon Homes
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  // Logged-in users
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AboutPageComponent />
      <Footer />
    </div>
  );
};

export default AboutPage;

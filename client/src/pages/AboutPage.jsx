import { useSelector } from "react-redux";
import { Header, Logo, Footer } from "../components";
import { Link } from "react-router-dom";

const AboutPageComponent = () => {
  return (
    <div className="flex flex-col items-center mx-auto w-3/4 mb-12">
      <h2 className="font-heading font-bold mt-8 uppercase">About</h2>
      <div className="mt-6 space-y-6">
        <p>
          Corazon Homes is a real estate advisor that functions on the pillars of trust, transparency and expertise. As a digital marketplace with an exhaustive range of property listings, we guide home buyers from the very start of their search all the way through loan assistance and property registration.
        </p>

        <p>
          Founded in 2013, Corazon Homes has grown at a scorching pace, consolidating supply and demand to create significant barriers to entry through scale, sourcing capabilities, demand aggregation, and cutting-edge technology. Our accomplished team—ex-bankers and Ivy League alumni—ensure your search for a dream property ends here.
        </p>

        <h4 className="font-bold">Consultation</h4>
        <p>
          We provide strategic advice at every stage of acquisition: sourcing and identification, valuation, negotiation, and due diligence. Our network of vetted professionals brings you the best support to secure the right property at the best price.
        </p>

        <h4 className="font-bold">After Sales</h4>
        <p>
          You’re not just a customer—you’re part of our family. Our after-sales team keeps you updated with progress reports and market insights, and resolves any query within 72 hours to ensure your complete satisfaction.
        </p>

        <h4 className="font-bold">Home Loans</h4>
        <p>
          We assist with home and commercial loan processes, ensuring you have the freedom to choose the best bank for your needs. As our client, you get full due diligence and multiple financing options.
        </p>

        <h4 className="font-bold">Property Management</h4>
        <p>
          From finance and legal procedures to beautification, interiors, leasing, and reselling, we handle it all so you can enjoy the final result without worry.
        </p>

        <h4 className="font-bold">NRI Corner</h4>
        <p>
          India is a land of opportunity for NRIs. Thanks to RERA Act 2016, buying property is now simpler and more transparent. We offer end-to-end support on site visits, home loans, and registrations to make your investment safe and profitable.
        </p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div>
        {/* HEADER */}
        <header className="flex m-1 shadow-sm items-center">
          <Logo />
          <div className="flex flex-col justify-center ml-2">
            <h5 className="font-display">Corazon Homes</h5>
            <p className="hidden text-xs md:block md:text-sm">
              It’s great to be home!
            </p>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <AboutPageComponent />

        {/* FOOTER */}
        <footer className="p-4 shadow-sm md:px-6 md:py-8 bg-slate-300 mt-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Logo />
              <div className="flex flex-col ml-3 justify-center">
                <h1 className="font-display text-xl md:text-2xl">
                  Corazon Homes
                </h1>
                <p className="text-xs md:text-sm">It’s great to be home!</p>
              </div>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
              <li>
                <Link to="/about" className="mr-4 hover:underline md:mr-6">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <div className="text-sm sm:text-center text-gray-800">
            <p>Office No. 404, City Avenue, Near Hotel Sayaji, Wakad, Pune - 411057</p>
            <p>Phone: +91-7276004884 | Email: sales@corazonhomes.com</p>
            <p className="mt-2">
              &copy; 2025{" "}
              <Link to="/" className="hover:underline">
                Corazon Homes
              </Link>{" "}
              | All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    );
  }

  // Logged-in users
  return (
    <div>
      <Header />
      <AboutPageComponent />
      <Footer />
    </div>
  );
};

export default AboutPage;
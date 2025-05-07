import { Logo } from "./";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { userType } = useSelector((store) => store.auth);

  return (
    <footer className="p-4 shadow-sm md:px-6 md:py-8 bg-slate-300 mt-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Logo />
          <div className="flex flex-col ml-3 justify-center">
            <h1 className="font-display text-xl md:text-2xl">Corazon Homes</h1>
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
          <li>
            <a
              href="mailto:sales@corazonhomes.com"
              className="mr-4 hover:underline md:mr-6"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

      <div className="text-sm sm:text-center text-gray-800">
        <p>Office No. 404, City Avenue, Near Hotel Sayaji, Wakad, Pune - 411057</p>
        <p>Phone: +91-7276004884 | Email: sales@corazonhomes.com</p>
        <p className="mt-2">
          &copy; 2025{" "}
          <Link to={`/${userType}`} className="hover:underline">
            Corazon Homes
          </Link>{" "}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

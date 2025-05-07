import { useSelector } from "react-redux";
import { Header, Logo, Footer } from "../components";
import { Link } from "react-router-dom";

const PrivacyComponent = () => {
  return (
    <div className="flex flex-col items-center mx-auto w-3/4 mb-12">
      <h2 className="font-heading font-bold mt-8 uppercase">
        Privacy Policies
      </h2>
      <div className="">
        <div className="mt-6">
          <p>
            At Corazon Homes, we collect, use, and share personal data in accordance with applicable privacy laws to protect your rights. This Privacy Policy describes what data we gather, why we need it, and how we keep it secure across all our services—from property search and consultation to loan processing and after-sales support.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="font-bold">Data Collection</h4>
          <p>
            We collect personal information such as your name, email address, phone number, and address. When you use our platform to:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Browse or shortlist properties</li>
            <li>Request site visits or consultation</li>
            <li>Apply for home or commercial loans</li>
            <li>Register for after-sales updates</li>
            <li>Access NRI services</li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-bold">Use of Data</h4>
          <p>
            Collected data powers our core features:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Consultation:</strong> Matching you with vetted professionals and scheduling site visits.</li>
            <li><strong>After Sales:</strong> Sending progress reports, photos, and market insights.</li>
            <li><strong>Home Loans:</strong> Facilitating multiple bank options and due diligence.</li>
            <li><strong>Property Management:</strong> Coordinating finance, legal, interiors, leasing, and resale.</li>
            <li><strong>NRI Corner:</strong> Guiding Non-Resident Indians through RERA-compliant investments and registrations.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-bold">Data Sharing</h4>
          <p>
            We do not sell or rent your personal data. We share necessary information only with:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Our network of consultants, lenders, and legal partners</li>
            <li>Cloudinary, for secure media storage</li>
            <li>Email providers (e.g., Gmail/Ethereal) strictly to send notifications</li>
          </ul>
          <p className="mt-2">
            Any third-party partner receives data only to fulfill the service you requested, and under strict confidentiality agreements.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="font-bold">Security</h4>
          <p>
            We implement industry-standard safeguards—SSL/TLS, JWT authentication with access and refresh tokens, and encrypted environment variables—to protect your data against unauthorized access or alteration.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="font-bold">Data Retention</h4>
          <p>
            We retain your personal data only as long as necessary to provide our services, comply with legal obligations, and resolve disputes. When data is no longer needed, it is securely deleted or anonymized.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="font-bold">User Rights</h4>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Access your personal information</li>
            <li>Correct or update inaccurate data</li>
            <li>Request deletion of your account and data</li>
            <li>Withdraw consent at any time (for marketing communications)</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, please contact us at <a href="mailto:sales@corazonhomes.com" className="text-blue-600 hover:underline">sales@corazonhomes.com</a>.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="font-bold">Changes to Policy</h4>
          <p>
            We may update this Privacy Policy to reflect changes in our practices or legal requirements. When significant changes occur, we will notify you by email and post an announcement on our website with the revision date.
          </p>
        </div>
      </div>
    </div>
  );
};

const PrivacyPoliciesPage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div>
        <header className="flex m-1 shadow-sm">
          <Logo />
          <div className="flex flex-col justify-center ml-2">
            <h5 className="font-display">Corazon Homes</h5>
            <p className="hidden text-xs md:block md:text-sm">
              Find and Manage your rentals in one place
            </p>
          </div>
        </header>
        <PrivacyComponent />
        <footer className="p-4 shadow-sm md:px-6 md:py-8 bg-slate-300 mt-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Logo />
              <div className="flex flex-col ml-3 justify-center">
                <h1 className="font-display text-xl md:text-2xl">
                Corazon Homes
                </h1>
                <p className="text-xs md:text-sm">
                  Find and Manage your rentals in one place
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
              <li>
                <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
          <span className="block text-sm  sm:text-center ">
            2023 |{" "}
            <Link to="/" className="hover:underline">
              Property Plus
            </Link>
          </span>
        </footer>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <PrivacyComponent />
      <Footer />
    </div>
  );
};

export default PrivacyPoliciesPage;

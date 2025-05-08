import { useSelector } from "react-redux";
import { Header, Logo, Footer } from "../components";
import { Link } from "react-router-dom";

const PrivacyComponent = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 py-12 px-4 md:px-20">
      <h2 className="text-3xl font-extrabold text-center text-slate-800 uppercase mb-10 font-heading tracking-wide">
        Privacy Policy
      </h2>

      <div className="max-w-5xl mx-auto space-y-12 text-gray-700 leading-relaxed text-base">
        <section>
          <p>
            At Corazon Homes, we collect, use, and share personal data in
            accordance with privacy laws. This policy explains what data we
            gather, why it’s needed, and how we protect it—across services from
            property search to loan processing.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold text-indigo-700 mb-2">
            Data Collection
          </h4>
          <p>
            We collect details like name, email, phone number, and address when
            you:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Browse or shortlist properties</li>
            <li>Request site visits or consultations</li>
            <li>Apply for home or commercial loans</li>
            <li>Register for after-sales services</li>
            <li>Use our NRI support features</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold text-indigo-700 mb-2">
            Use of Data
          </h4>
          <p>We use your data to power core services, such as:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Consultation:</strong> Schedule visits and match you with
              professionals.
            </li>
            <li>
              <strong>After Sales:</strong> Share updates, photos, and insights.
            </li>
            <li>
              <strong>Loans:</strong> Assist with lender comparison and
              application processing.
            </li>
            <li>
              <strong>Management:</strong> Coordinate resale, interiors, and
              legal support.
            </li>
            <li>
              <strong>NRI Services:</strong> Offer RERA-compliant guidance and
              registrations.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold text-indigo-700 mb-2">
            Data Sharing
          </h4>
          <p>We never sell or rent your data. We only share with:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Our verified consultants and legal partners</li>
            <li>Cloudinary for secure image storage</li>
            <li>
              Email services (e.g., Gmail, Ethereal) for transactional messages
            </li>
          </ul>
          <p className="mt-2">
            Third parties access only what's needed for your request, under
            strict agreements.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold text-indigo-700 mb-2">
            Security
          </h4>
          <p>
            Your data is protected via SSL/TLS encryption, secure JWT-based
            login, and private environment variables to ensure safe transmission
            and storage.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold text-indigo-700 mb-2">
            Data Retention
          </h4>
          <p>
            We retain your data only as long as required for legal or
            service-related purposes. After that, it’s securely erased or
            anonymized.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold text-indigo-700 mb-2">
            Your Rights
          </h4>
          <p>You can:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Access or correct your data</li>
            <li>Request deletion of your account</li>
            <li>Withdraw marketing consent anytime</li>
          </ul>
          <p className="mt-2">
            Contact us at{" "}
            <a
              href="mailto:sales@corazonhomes.com"
              className="text-blue-600 hover:underline"
            >
              sales@corazonhomes.com
            </a>{" "}
            to exercise your rights.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold text-indigo-700 mb-2">
            Policy Updates
          </h4>
          <p>
            We may revise this policy as needed. Major changes will be announced
            via email and website banners with the effective date.
          </p>
        </section>
      </div>
    </div>
  );
};

const PrivacyPoliciesPage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header */}
        <header className="flex items-center justify-between shadow-sm px-6 py-4 bg-white">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <h5 className="font-display text-xl font-semibold text-indigo-700">
                Corazon Homes
              </h5>
              <p className="text-sm text-gray-500">
                Find and Manage your rentals in one place
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <PrivacyComponent />

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-200 mt-auto px-6 py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Logo />
              <div>
                <h1 className="text-lg font-bold">Corazon Homes</h1>
                <p className="text-sm text-gray-400">
                  Find and Manage your rentals in one place
                </p>
              </div>
            </div>
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="text-center text-sm space-y-1">
            <p>
              © 2025{" "}
              <Link to="/" className="hover:underline">
                Property Plus
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <PrivacyComponent />
      <Footer />
    </div>
  );
};

export default PrivacyPoliciesPage;

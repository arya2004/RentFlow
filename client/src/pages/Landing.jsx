import { useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, AlertToast, Footer } from "../components";
import landingImg from "../assets/images/landing1.svg";
import landingImg2 from "../assets/images/landing2.svg";
import landingTitle from "../assets/images/landingTitle.svg";

import { Button } from "@mui/material";
import { clearAlert } from "../features/auth/authSlice";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef(null);

  const { user, userType, errorFlag, alertType, errorMsg } = useSelector(
    (store) => store.auth
  );

  useEffect(() => {
    if (user) {
      navigate(`/${userType}`);
    }
  }, [user, navigate, userType]);

  const handleAlertClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") return;
      dispatch(clearAlert());
    },
    [dispatch]
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="flex items-center px-6 py-4 shadow-sm bg-white">
        <Logo />
        <div className="ml-3">
          <h1 className="text-xl font-bold text-gray-800">Corazon Homes</h1>
          <p className="text-sm text-gray-500">
            Trust · Transparency · Expertise
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center px-6 py-12">
        <section className="text-center max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            Your Trusted{" "}
            <span className="text-blue-600">Real Estate Advisor</span>
          </h1>
          <p className="text-gray-600">
            Since 2013, Corazon Homes has guided buyers and sellers through
            every step—from property search and valuation to loan assistance and
            registration—backed by an exhaustive network of vetted
            professionals.
          </p>
        </section>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button
            variant="contained"
            sx={{ color: "white" }}
            onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started
          </Button>
          <Button variant="outlined" onClick={() => navigate("/about")}>
            Learn More
          </Button>
        </div>

        <div className="max-w-xl mt-10">
          <img src={landingTitle} alt="Corazon Homes" className="w-full" />
        </div>

        <section ref={ref} className="mt-20 w-full max-w-6xl space-y-16">
          {/* Owner Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white shadow p-6 rounded-xl">
            <img
              className="hidden md:block w-1/2"
              src={landingImg2}
              alt="Owner"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                Are you a Property Owner?
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>List your properties on our digital marketplace</li>
                <li>Connect with qualified buyers and investors</li>
                <li>Manage offers, contracts, and post-sale support</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate("/login/owner")}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/register/owner")}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>

          {/* Buyer Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white shadow p-6 rounded-xl">
            <img
              className="hidden md:block w-1/2"
              src={landingImg}
              alt="Buyer"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                Are you a Home Buyer?
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Browse verified listings across India & UAE</li>
                <li>Schedule site visits with ease</li>
                <li>Get expert guidance on home loans and registration</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate("/login/tenant")}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="info"
                  onClick={() => navigate("/register/tenant")}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AlertToast
        alertFlag={errorFlag}
        alertMsg={errorMsg}
        alertType={alertType}
        handleClose={handleAlertClose}
      />
    </div>
  );
};

export default Landing;

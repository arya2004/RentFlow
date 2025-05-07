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
    <div>
      <header className="flex m-1 shadow-sm">
        <Logo />
        <div className="flex flex-col justify-center ml-2">
          <h5 className="font-display">Corazon Homes</h5>
          <p className="hidden text-xs md:block md:text-sm">
            Trust · Transparency · Expertise
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center my-16">
        <div className="md:w-2/3 text-center">
          <h1 className="text-2xl md:text-4xl font-heading font-extrabold">
            Your Trusted{" "}
            <span className="text-primaryDark">Real Estate Advisor</span>
          </h1>
          <p className="mt-8 text-gray-700 w-4/5 mx-auto">
            Since 2013, Corazon Homes has guided buyers and sellers through every
            step—from property search and valuation to loan assistance and
            registration—backed by an exhaustive network of vetted professionals.
          </p>
        </div>

        <div className="flex mt-8 gap-8 flex-wrap w-2/3 justify-center">
          <Button
            variant="contained"
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={() => {
              ref.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={useCallback(() => navigate("/about"), [navigate])}
          >
            Learn More
          </Button>
        </div>

        <div className="md:w-2/4">
          <img src={landingTitle} alt="Corazon Homes" className="w-full" />
        </div>

        <main ref={ref} className="">
          <section className="flex gap-16">
            <img className="hidden md:block" src={landingImg2} alt="" />
            <div className="flex flex-col self-center mx-auto p-4 w-full">
              <h3 className="font-display mb-2">Are you a Property Owner?</h3>
              <p>List your properties on our digital marketplace</p>
              <p>Connect with qualified buyers and investors</p>
              <p>Manage offers, contracts, and post-sale support</p>
              <div className="flex justify-start mt-7">
                <Button
                  onClick={useCallback(() => navigate("/login/owner"), [
                    navigate,
                  ])}
                  variant="contained"
                  size="medium"
                  color="secondary"
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Login
                </Button>
                <span className="mx-3 sm:text-2xl">|</span>
                <Button
                  onClick={useCallback(() => navigate("/register/owner"), [
                    navigate,
                  ])}
                  variant="contained"
                  size="medium"
                  color="primary"
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </section>

          <hr className="my-4" />

          <section className="flex gap-16 mt-5">
            <img className="hidden md:block" src={landingImg} alt="" />
            <div className="flex flex-col self-center mx-auto p-4 w-full">
              <h3 className="font-display mb-2">Are you a Home Buyer?</h3>
              <p>Browse verified listings across India & UAE</p>
              <p>Schedule site visits with ease</p>
              <p>Get expert guidance on home loans and registration</p>
              <div className="flex justify-start mt-7">
                <Button
                  onClick={useCallback(() => navigate("/login/tenant"), [
                    navigate,
                  ])}
                  variant="contained"
                  size="medium"
                  color="secondary"
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Login
                </Button>
                <span className="mx-3 sm:text-2xl">|</span>
                <Button
                  onClick={useCallback(() => navigate("/register/tenant"), [
                    navigate,
                  ])}
                  variant="contained"
                  size="medium"
                  color="tertiary"
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "tertiary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </section>
        </main>
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

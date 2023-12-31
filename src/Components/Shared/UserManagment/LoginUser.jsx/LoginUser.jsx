import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import API_ROOT from "../../../../../config";

const LoginUser = () => {
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);

  const handleGoogleSignIn = async () => {
    setLoginError(null);
    googleLogIn()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const userEmail = user.email;
        const userName = user.displayName;
        const userPhotoUrl = user.photoURL;

        const newUser = { userEmail, userName, userPhotoUrl, userCart: [] };

        fetch(`${API_ROOT}/addNewUser`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        console.log("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(`Invalid Email/Password. Please Enter Correctly. `);
        console.log(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userEmail = form.get("email").toLocaleLowerCase();
    const userPassword = form.get("password");

    logInUser(userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoginError(
          `Invalid Email/Password. Please enter correct credentials. ${errorMessage}`
        );
      });
  };

  return (
    <div>
      <section>
        <div className="py-4">
          <div className="mx-auto max-w-xl bg-[#f2f2f7] px-5 py-12 text-center md:px-10">
            <h2 className="text-3xl font-bold mb-4 md:text-5xl">Login Now</h2>

            <button
              onClick={handleGoogleSignIn}
              href="#"
              className="mx-auto flex max-w-sm justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] w-full"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19d23637f876_GoogleLogo.svg"
                alt=""
                className="mr-4"
              />
              <p className="font-bold">Sign up with Google</p>
            </button>
            <div className="mx-auto mb-8 mt-8 flex max-w-sm justify-around">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg"
                alt=""
                className="inline-block"
              />
              <p className="text-sm text-[#647084]">or sign up with email</p>
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg"
                alt=""
                className="inline-block"
              />
            </div>
            {loginError && (
              <div className="form-control mb-4">
                <p className="text-lg text-red-500">{loginError}</p>
              </div>
            )}
            <form
              onSubmit={handleLogin}
              className="mx-auto mb-4 max-w-sm pb-4"
              name="wf-form-password"
              method="get"
            >
              <div className="relative">
                <FontAwesomeIcon
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  icon={faEnvelope}
                />
                <input
                  type="email"
                  className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
                  maxLength="256"
                  name="email"
                  placeholder="Email Address"
                  required=""
                />
              </div>

              <div className="relative mb-4 pb-2">
                <FontAwesomeIcon
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  icon={faLock}
                />
                <input
                  type="password"
                  className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
                  name="password"
                  placeholder="Password "
                  required=""
                />
              </div>

              <button
                type="submit"
                href="#"
                className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] w-full"
              >
                <p className="mr-6 font-bold">Login To FlashTech</p>
                <div className="h-4 w-4 flex-none">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </button>
            </form>
            <p className=" text-[#636262]">
              Do not have an account?{" "}
              <Link
                to={"/register"}
                className="font-[Montserrat,_sans-serif] text-sm font-bold text-black"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginUser;

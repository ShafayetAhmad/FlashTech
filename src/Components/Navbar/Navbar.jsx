import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import API_ROOT from "../../../config";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_ROOT}/getUserDetails?userEmail=${user.email}`,
          {}
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, [setLoading, user, setUserData]);

  const handleSignOut = () => {
    userLogOut();
  };

  const navLinks = (
    <>
      <li className="text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="add-product">Add Product</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/my-cart">MyCart</NavLink>
      </li>
      {user ? (
        <li className="text-xl rounded-3xl font-semibold">
          <button className="btn-success font-semibold" onClick={handleSignOut}>
            <NavLink to="/">LogOut</NavLink>
          </button>
        </li>
      ) : (
        <li className="text-xl btn-info rounded-3xl font-semibold">
          <button onClick={handleSignOut}>
            <NavLink to="/login">LogIn/SignUp</NavLink>
          </button>
        </li>
      )}
    </>
  );

  const userLinks = (
    <>
      {user ? (
        <div className="navbar-end text-lg">
          <p className="mr-4">
            Hey, {userData.userName ? userData.userName : "Member"}
          </p>
          <li className="text-xl justify-between"></li>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    userData.userPhotoUrl
                      ? userData.userPhotoUrl
                      : "https://i.ibb.co/vYJwWBL/user.png "
                  }
                  alt="user avatar"
                />
              </div>
            </label>
            
          </div>
        </div>
      ) : (
        <div className="navbar-end text-lg">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://i.ibb.co/vYJwWBL/user.png "
                  alt="user avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/login" className="text-xl justify-between">
                  LogIn
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="text-xl justify-between">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="navbar bg-base-100 mb-8">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {navLinks}
              </ul>
            </div>
            <Link to={"/"}>
              {" "}
              <img
                className="lg:w-44 w-24"
                src="https://i.ibb.co/R2xCPnN/flashtechlogo.png"
                alt="logo"
              ></img>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          {userLinks}
        </div>
      )}
    </>
  );
};

export default Navbar;

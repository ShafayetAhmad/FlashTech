import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const ErrorPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <section>
        <div className="py-4 md:py-8 lg:py-12 px-5 md:px-10">
          <div className="mx-auto flex-col flex w-full max-w-3xl items-center">
            <img
              src="https://i.ibb.co/WfbF9JY/FS30042-14-69371-52478.jpg"
              alt=""
              className="mb-8 mx-auto inline-block h-56 w-56 flex-none object-cover"
            />

            <div className="text-center">
              <h1 className="font-bold mb-4 text-4xl md:text-6xl">404 Error</h1>
              <div className="mx-auto max-w-[528px] mb-5 md:mb-6 lg:mb-8">
                <p className="text-[#636262] text-xl">
                  The page you were looking for went on vacation. Maybe
                  it iss sipping virtual piña coladas somewhere. In the meantime,
                  why not head back home and enjoy a digital siesta?
                </p>
              </div>
              <Link
                to={"/"}
                className="inline-block items-center bg-black px-8 py-4 text-center font-semibold text-white"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;

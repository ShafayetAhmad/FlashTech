const Slider = () => {
  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="w-full max-h-[800px] h-[75vh] carousel rounded-3xl">
          <div id="slide1" className="carousel-item relative w-full ">
            <img
              src="https://i.ibb.co/7tm9576/slider-2.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <p className="text-white font-bold text-4xl leading-tight mb-6 p-4 shadow-lg bg-gray-800 bg-opacity-70  px-16 rounded-full text-center">
                <span className="text-blue-300">
                  Explore Googles Latest Gadgets.
                </span>{" "}
                <br />
                <span className="text-green-300">
                  Elevate Your Tech Experience.
                </span>{" "}
                <br />
                <span className="text-yellow-300">
                  Shop with Google for Quality and Fun!
                </span>
              </p>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/zNQk3zs/slider-1.jpg "
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <p className="text-white font-bold text-4xl leading-tight mb-6 p-4 shadow-lg bg-gray-800 bg-opacity-70 px-16 rounded-full text-center">
                <span className="text-blue-300">
                  Discover Apples Innovation.
                </span>{" "}
                <br />
                <span className="text-green-300">
                  Elevate Your Tech Lifestyle.
                </span>{" "}
                <br />
                <span className="text-yellow-300">
                  Shop with Apple for Quality and Style!
                </span>
              </p>

              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/H4S3S7L/slider-3.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <p className="text-white font-bold text-4xl leading-tight mb-6 p-4 shadow-lg bg-gray-800 bg-opacity-70 px-16 rounded-full text-center">
                <span className="text-blue-300">
                  Explore Microsofts Technological Advancements.
                </span>{" "}
                <br />
                <span className="text-green-300">
                  Elevate Your Digital Experience.
                </span>{" "}
                <br />
                <span className="text-yellow-300">
                  Shop with Microsoft for Cutting-Edge Solutions!
                </span>
              </p>

              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

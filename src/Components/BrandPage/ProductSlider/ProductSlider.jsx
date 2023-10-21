/* eslint-disable react/prop-types */

import Separator from "../../Shared/Separator/Separator";

const ProductSlider = ({ Brand, brandData }) => {
  const bannerData = brandData
    .slice(0, 4)
    .map(
      ({
        ProductImage,
        ProductName,
        ProductPrice,
        ProductDescription,
        BrandName,
      }) => ({
        ProductImage,
        ProductName,
        ProductPrice,
        ProductDescription,
        BrandName,
      })
    );
  console.log(bannerData);
  return (
    <div>
      <div>{brandData.length}</div>
      <div>
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full ">
            <div className="flex  w-full">
              <div className="flex-1 border-4 border-gray-400 rounded-lg overflow-hidden flex justify-center">
                <img src={bannerData[0].ProductImage} className="w-96" alt="" />
              </div>

              <div className="flex-1">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-lg h-full  text-center ">
                  <p className="text-5xl font-bold">Flash Sale Going On</p>
                  <p className="text-3xl font-extrabold my-2">
                    {bannerData[0].ProductName}
                  </p>
                  <p className="text-2xl font-semibold my-2">
                    {`Brand :  
                    ${bannerData[0].BrandName}`}
                  </p>
                  <p className="text-2xl my-2">
                    {bannerData[0].ProductDescription}
                  </p>
                  <p className="text-5xl font-extrabold my-2">
                    Get it Now for Only <br />
                    {bannerData[0].ProductPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full">
            <div className="flex  w-full">
              <div className="flex-1 border-4 border-gray-400 rounded-lg overflow-hidden flex justify-center">
                <img src={bannerData[1].ProductImage} className="w-96" alt="" />
              </div>

              <div className="flex-1">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-lg h-full  text-center ">
                  <p className="text-5xl font-bold">Flash Sale Going On</p>
                  <p className="text-3xl font-extrabold my-2">
                    {bannerData[1].ProductName}
                  </p>
                  <p className="text-2xl font-semibold my-2">
                    {`Brand :  
                    ${bannerData[1].BrandName}`}
                  </p>
                  <p className="text-2xl my-2">
                    {bannerData[1].ProductDescription}
                  </p>
                  <p className="text-5xl font-extrabold my-2">
                    Get it Now for Only <br />
                    {bannerData[1].ProductPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full">
            <div className="flex  w-full">
              <div className="flex-1 border-4 border-gray-400 rounded-lg overflow-hidden flex justify-center">
                <img src={bannerData[2].ProductImage} className="w-96" alt="" />
              </div>

              <div className="flex-1">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-lg h-full  text-center ">
                  <p className="text-5xl font-bold">Flash Sale Going On</p>
                  <p className="text-3xl font-extrabold my-2">
                    {bannerData[2].ProductName}
                  </p>
                  <p className="text-2xl font-semibold my-2">
                    {`Brand :  
                    ${bannerData[2].BrandName}`}
                  </p>
                  <p className="text-2xl my-2">
                    {bannerData[2].ProductDescription}
                  </p>
                  <p className="text-5xl font-extrabold my-2">
                    Get it Now for Only <br />
                    {bannerData[2].ProductPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="item4" className="carousel-item w-full">
            <div className="flex  w-full">
              <div className="flex-1 border-4 border-gray-400 rounded-lg overflow-hidden flex justify-center">
                <img src={bannerData[3].ProductImage} className="w-96" alt="" />
              </div>

              <div className="flex-1">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-lg h-full  text-center ">
                  <p className="text-5xl font-bold">Flash Sale Going On</p>
                  <p className="text-3xl font-extrabold my-2">
                    {bannerData[3].ProductName}
                  </p>
                  <p className="text-2xl font-semibold my-2">
                    {`Brand :  
                    ${bannerData[3].BrandName}`}
                  </p>
                  <p className="text-2xl my-2">
                    {bannerData[3].ProductDescription}
                  </p>
                  <p className="text-5xl font-extrabold my-2">
                    Get it Now for Only <br />
                    {bannerData[3].ProductPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
      <Separator
        text={`Products by ${Brand}`}
        color={"bg-blue-600"}
      ></Separator>
    </div>
  );
};

export default ProductSlider;

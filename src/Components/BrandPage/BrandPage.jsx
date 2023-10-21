import { useParams } from "react-router-dom";

const BrandPage = () => {
  let Brand = useParams().brand;
  console.log(Brand);
  return <div></div>;
};

export default BrandPage;

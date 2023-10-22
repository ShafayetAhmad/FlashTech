import { useContext } from "react";
// import API_ROOT from "../../../../../config";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  //   useEffect(() => {
  //     fetch(`${API_ROOT}/getProductByBrand?brand=${Brand}`, {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setBrandData(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //         setLoading(false);
  //       });
  //   }, [Brand]);

  return <div></div>;
};

export default MyCart;

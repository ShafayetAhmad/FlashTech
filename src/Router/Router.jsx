import App from "../App";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

export default router;

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const Route = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Route
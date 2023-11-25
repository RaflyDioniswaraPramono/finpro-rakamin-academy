import { useState } from "react";
import { itmLogo } from "../assets";
import axios from "axios";
import { AlertBox } from "../components";
import { Backdrop, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("Error");
  const [alertSeverity, setAlertSeverity] = useState("error");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:3001/api/v1/admins/login", {
        email: inputValues.email,
        password: inputValues.password,
      })
      .then((response) => {
        setIsLoggedIn(true);
        setShowAlert(true);                
        localStorage.setItem("access_token", JSON.stringify(response.data.access_token))

        setTimeout(() => {
          setIsLoggedIn(false);
          setShowAlert(false);
          navigate("/")
        }, 3000)

        setAlertSeverity("success");
        setAlertMessage(response.data.message);
        setAlertTitle("Success!")
      })
      .catch((error) => {
        setShowAlert(true);
        setAlertMessage(error.response.data.message);
        setAlertTitle("Error!")
        setAlertSeverity("error");
      });
  };

  return (
    <div className="h-screen bg-black relative">
      <AlertBox
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        alertMessage={alertMessage}
        alertSeverity={alertSeverity}
        alertTitle={alertTitle}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoggedIn}>
        <div className="flex justify-center items-center flex-col">
          <CircularProgress color="inherit" sx={{mb: 3}}/>
          Please wait, redirecting to the main page ...
        </div>
      </Backdrop>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-[70%] -z-1">
        <div className="grid grid-cols-5 gap-20">
          <div className="col-span-3 flex justify-center items-center">
            <img
              src={itmLogo}
              alt="Inventory Tracking Master Logo"
              className="rounded-full"
            />
          </div>
          <div className="col-span-2 bg-slate-100 shadow-2xl py-10 px-5 relative rounded-lg z-10">
            <h1 className="text-center mb-10 text-3xl tracking-widest font-bold text-slate-800">
              LOGIN
            </h1>
            <form onSubmit={handleLogin}>
              <div className="mb-5">
                <p className="text-sm text-slate-600 font-medium mb-2 tracking-wider">
                  E-MAIL
                </p>
                <input
                  type="text"
                  value={inputValues.email}
                  name="email"
                  required
                  autoComplete="off"
                  className="p-3 w-full text-sm tracking-wider bg-slate-700 text-white rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-10">
                <p className="text-sm text-slate-600 font-medium mb-2 tracking-wider">
                  PASSWORD
                </p>
                <input
                  type="password"
                  value={inputValues.password}
                  name="password"
                  required
                  autoComplete="off"
                  className="p-3 w-full text-sm tracking-wider bg-slate-700 text-white rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-20">
                <button
                  type="submit"
                  className="py-3 bg-[#ff8906] hover:bg-[#f25f4c] text-white w-full rounded-md">
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <p className="text-sm text-center text-slate-500 font-medium tracking-wide">
                Copyright & All Rights Reserved by FSWD 6B
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

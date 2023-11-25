import { useEffect } from "react";
import ContentHeader from "../ContentHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashboardContent = () => {
  const navigate = useNavigate();
  const { access_token } = JSON.parse(localStorage.getItem("access_token"));    

  useEffect(() => {
    const fetchingData = async () => {
      await axios
        .get("http://localhost:3001/api/v1/products", {
          headers: {
            access_token: access_token
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response.data.message)
          navigate("/login")
        });
    };
    fetchingData();
  }, []);

  return (
    <div>
      <ContentHeader
        title="Dashboard"
        paragraph="Pada page ini anda dapat melihat data secara keseluruhan dari statistik produk, laporan supplier, laporan distributor dan lain-lain. Terdapat fitur cetak data disetiap pencatatatan data yang anda ingin cetak."
      />
      <div className="grid grid-cols-2 gap-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="py-3 px-5 bg-slate-100 shadow-lg">
            <h3 className="font-bold tracking-wider text-lg mb-3">Products</h3>
            <h1 className="text-2xl tracking-wide">156</h1>
          </div>
          <div className="py-3 px-5 bg-slate-100 shadow-lg">
            <h3 className="font-bold tracking-wider text-lg mb-3">Suppliers</h3>
            <h1 className="text-2xl tracking-wide">202</h1>
          </div>
          <div className="py-3 px-5 bg-slate-100 shadow-lg">
            <h3 className="font-bold tracking-wider text-lg mb-3">
              Distributors
            </h3>
            <h1 className="text-2xl tracking-wide">133</h1>
          </div>
          <div className="py-3 px-5 bg-slate-100 shadow-lg">
            <h3 className="font-bold tracking-wider text-lg mb-3">Reports</h3>
            <h1 className="text-2xl tracking-wide">90</h1>
          </div>
        </div>
        <div className="py-3 px-5 bg-slate-100 shadow-lg">
          <h3 className="font-bold tracking-wider text-lg mb-3">Stats</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

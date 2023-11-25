import PropTypes from "prop-types";
import { SideMenu, Navbar } from "../components";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../redux/states";
import {
  DashboardContent,
  DistributorManagement,
  DistributorReport,
  ExportData,
  ImportData,
  ProductManagement,
  ProductViewer,
  SupplierManagement,
  SupplierReport,
} from "../components/Contents";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const Dashboard = (props) => {
  Dashboard.propTypes = {
    isSideMenuOpen: PropTypes.any,
    contentId: PropTypes.number,
  };  

  const navigate = useNavigate();

  const cekToken = localStorage.getItem("access_token");  
  if (!cekToken) {
    return navigate("/login")
  } 

  const handleChangeContent = () => {    
    switch (props.contentId) {
      case 1:
        return <DashboardContent />;
      case 2:
        return <ProductViewer />;
      case 3:
        return <ProductManagement />;
      case 4:
        return <SupplierReport />;
      case 5:
        return <SupplierManagement />;
      case 6:
        return <DistributorReport />;
      case 7:
        return <DistributorManagement />;
      case 8:
        return <ImportData />;
      case 9:
        return <ExportData />;
      default:
        return <DashboardContent />;
    }
  };  

  return (
    <div className="grid grid-cols-4">
      <div
        className={
          props.isSideMenuOpen
            ? "col-span-1 h-screen bg-[#16161a]"
            : "hidden h-screen bg-[#16161a]"
        }>
        <SideMenu />
      </div>
      <div className={props.isSideMenuOpen ? "col-span-3" : "col-span-4"}>
        <Navbar />
        <div className="p-3">
          {handleChangeContent()}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

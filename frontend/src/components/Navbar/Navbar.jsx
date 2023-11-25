import PropTypes from "prop-types";
import { NotifIcon, SideMenuButton, UserIcon } from "../../assets";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/states";

// eslint-disable-next-line react-refresh/only-export-components
const Navbar = (props) => {
  Navbar.propTypes = {
    toggleSideMenu: PropTypes.func,    
  }  

  return (
    <div className="grid grid-cols-2 py-5 px-3 bg-[#0f0e17] text-white">
      <div className="flex items-center">
        <button onClick={() => props.toggleSideMenu()}>
          <SideMenuButton />
        </button>
      </div>
      <div className="flex justify-end items-center">
        <button>
          <NotifIcon />
        </button>
        <button>
          <UserIcon />
        </button>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

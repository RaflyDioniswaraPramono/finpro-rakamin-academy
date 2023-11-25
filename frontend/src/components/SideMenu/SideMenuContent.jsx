import PropTypes from "prop-types";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Crud2Icon,
  CrudIcon,
  DashboardIcon,
  DistributorIcon,
  DocumentIcon,
  ExportIcon,
  ImportIcon,
  ListIcon,
  ProductIcon,
  ReportIcon,
  SettingIcon,
  SupplierIcon,
} from "../../assets";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { mapStateToProps, mapDispatchToProps } from "../../redux/states";
import { connect } from "react-redux";

// eslint-disable-next-line react-refresh/only-export-components
const SideMenuContent = (props) => {
  SideMenuContent.propTypes = {
    contentId: PropTypes.number,
    openDashboard: PropTypes.func,
    openProductViewer: PropTypes.func,
    openProductManagement: PropTypes.func,
    openSupplierReport: PropTypes.func,
    openSupplierManagement: PropTypes.func,
    openDistributorReport: PropTypes.func,
    openDistributorManagement: PropTypes.func,
    openImportData: PropTypes.func,
    openExportData: PropTypes.func,
  };

  const [showProductsChild, setShowProductsChild] = useState(false);
  const [showReportsChild, setShowReportsChild] = useState(false);
  const [showSuppliersChild, setShowSuppliersChild] = useState(true);
  const [showDistributorsChild, setShowDistributorsChild] = useState(true);
  const [showSettingChild, setShowSettingChild] = useState(false);

  const handleShowButtonChild = (id) => {
    switch (id) {
      case 1:
        setShowProductsChild(!showProductsChild);
        break;
      case 2:
        setShowReportsChild(!showReportsChild);
        break;
      case 3:
        setShowSuppliersChild(!showSuppliersChild);
        break;
      case 4:
        setShowDistributorsChild(!showDistributorsChild);
        break;
      case 5:
        setShowSettingChild(!showSettingChild);
        break;
      default:
        null;
    }
  };

  return (
    <List className="text-white" sx={{ padding: 0 }}>
      <ListItemButton
        onClick={() => props.openDashboard()}
        sx={{
          backgroundColor: props.contentId === 1 ? "#ff8906" : "inherit",
          ":hover": {
            backgroundColor: props.contentId === 1 ? "#ff8906" : "#E7963B",
          },
        }}>
        <ListItemIcon sx={{ color: "white" }}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dasboard" />
      </ListItemButton>

      <ListItemButton
        sx={{
          ":hover": {
            backgroundColor: "#E7963B",
          },
        }}
        onClick={() => handleShowButtonChild(1)}>
        <ListItemIcon sx={{ color: "white" }}>
          <ProductIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
        {showProductsChild ? <ArrowUp /> : <ArrowDown />}
      </ListItemButton>
      <Collapse in={showProductsChild} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => props.openProductViewer()}
            sx={{
              pl: 4,
              backgroundColor: props.contentId === 2 ? "#ff8906" : "inherit",
              ":hover": {
                backgroundColor: props.contentId === 2 ? "#ff8906" : "#E7963B",
              },
            }}>
            <ListItemIcon sx={{ color: "white" }}>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Product Viewer" />
          </ListItemButton>
          <ListItemButton
            onClick={() => props.openProductManagement()}
            sx={{
              pl: 4,
              backgroundColor: props.contentId === 3 ? "#ff8906" : "inherit",
              ":hover": {
                backgroundColor: props.contentId === 3 ? "#ff8906" : "#E7963B",
              },
            }}>
            <ListItemIcon sx={{ color: "white" }}>
              <CrudIcon />
            </ListItemIcon>
            <ListItemText primary="Product Management" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{
          ":hover": {
            backgroundColor: "#E7963B",
          },
        }}
        onClick={() => handleShowButtonChild(2)}>
        <ListItemIcon sx={{ color: "white" }}>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {showReportsChild ? <ArrowUp /> : <ArrowDown />}
      </ListItemButton>
      <Collapse in={showReportsChild} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => handleShowButtonChild(3)}
            sx={{
              pl: 4,
              ":hover": {
                backgroundColor: "#E7963B",
              },
            }}>
            <ListItemIcon sx={{ color: "white" }}>
              <SupplierIcon />
            </ListItemIcon>
            <ListItemText primary="Suppliers" />
            {showSuppliersChild ? <ArrowUp /> : <ArrowDown />}
          </ListItemButton>
          <Collapse in={showSuppliersChild} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => props.openSupplierReport()}
                sx={{
                  pl: 8,
                  backgroundColor:
                    props.contentId === 4 ? "#ff8906" : "inherit",
                  ":hover": {
                    backgroundColor:
                      props.contentId === 4 ? "#ff8906" : "#E7963B",
                  },
                }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <DocumentIcon />
                </ListItemIcon>
                <ListItemText primary="Supplier Data Report" />
              </ListItemButton>
              <ListItemButton
                onClick={() => props.openSupplierManagement()}
                sx={{
                  pl: 8,
                  backgroundColor:
                    props.contentId === 5 ? "#ff8906" : "inherit",
                  ":hover": {
                    backgroundColor:
                      props.contentId === 5 ? "#ff8906" : "#E7963B",
                  },
                }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Crud2Icon />
                </ListItemIcon>
                <ListItemText primary="Supplier Management" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            onClick={() => handleShowButtonChild(4)}
            sx={{
              pl: 4,
              ":hover": {
                backgroundColor: "#E7963B",
              },
            }}>
            <ListItemIcon sx={{ color: "white" }}>
              <DistributorIcon />
            </ListItemIcon>
            <ListItemText primary="Distributors" />
            {showDistributorsChild ? <ArrowUp /> : <ArrowDown />}
          </ListItemButton>
          <Collapse in={showDistributorsChild} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => props.openDistributorReport()}
                sx={{
                  pl: 8,
                  backgroundColor:
                    props.contentId === 6 ? "#ff8906" : "inherit",
                  ":hover": {
                    backgroundColor:
                      props.contentId === 6 ? "#ff8906" : "#E7963B",
                  },
                }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <DocumentIcon />
                </ListItemIcon>
                <ListItemText primary="Distributor Data Report" />
              </ListItemButton>
              <ListItemButton
                onClick={() => props.openDistributorManagement()}
                sx={{
                  pl: 8,
                  backgroundColor:
                    props.contentId === 7 ? "#ff8906" : "inherit",
                  ":hover": {
                    backgroundColor:
                      props.contentId === 7 ? "#ff8906" : "#E7963B",
                  },
                }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Crud2Icon />
                </ListItemIcon>
                <ListItemText primary="Distributor Management" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>

      <ListItemButton
        sx={{
          ":hover": {
            backgroundColor: "#E7963B",
          },
        }}
        onClick={() => handleShowButtonChild(5)}>
        <ListItemIcon sx={{ color: "white" }}>
          <SettingIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {showSettingChild ? <ArrowUp /> : <ArrowDown />}
      </ListItemButton>
      <Collapse in={showSettingChild} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => props.openImportData()}
            sx={{
              pl: 4,
              backgroundColor: props.contentId === 8 ? "#ff8906" : "inherit",
              ":hover": {
                backgroundColor: props.contentId === 8 ? "#ff8906" : "#E7963B",
              },
            }}>
            <ListItemIcon sx={{ color: "white" }}>
              <ImportIcon />
            </ListItemIcon>
            <ListItemText primary="Import Data" />
          </ListItemButton>
          <ListItemButton
            onClick={() => props.openExportData()}
            sx={{
              pl: 4,
              backgroundColor: props.contentId === 9 ? "#ff8906" : "inherit",
              ":hover": {
                backgroundColor: props.contentId === 9 ? "#ff8906" : "#E7963B",
              },
            }}>
            <ListItemIcon sx={{ color: "white" }}>
              <ExportIcon />
            </ListItemIcon>
            <ListItemText primary="Export Data" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(SideMenuContent);

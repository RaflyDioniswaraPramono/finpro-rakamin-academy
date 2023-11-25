export const mapStateToProps = (state) => {
  return {
    isSideMenuOpen: state.side.isSideMenuOpen,
    contentId: state.content.contentId,    
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    toggleSideMenu: () => dispatch({ type: "TOGGLE_SIDEMENU" }),
    openDashboard: () => dispatch({ type: "OPEN_DASHBOARD" }),
    openProductViewer: () => dispatch({ type: "OPEN_PRODUCT_VIEWER" }),
    openProductManagement: () => dispatch({ type: "OPEN_PRODUCT_MANAGEMENT" }),
    openSupplierReport: () => dispatch({ type: "OPEN_SUPPLIER_REPORT" }),
    openSupplierManagement: () =>
      dispatch({ type: "OPEN_SUPPLIER_MANAGEMENT" }),
    openDistributorReport: () => dispatch({ type: "OPEN_DISTRIBUTOR_REPORT" }),
    openDistributorManagement: () =>
      dispatch({ type: "OPEN_DISTRIBUTOR_MANAGEMENT" }),
    openImportData: () => dispatch({ type: "OPEN_IMPORT_DATA" }),
    openExportData: () => dispatch({ type: "OPEN_EXPORT_DATA" }),    
  };
};

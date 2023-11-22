const initialState = {
  isSideMenuOpen: true,
};

const sideMenuReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_SIDEMENU") {
    if (state.isSideMenuOpen === true) {
      return {
        ...state,
        isSideMenuOpen: (state.isSideMenuOpen = false),
      };
    } else {
      return {
        ...state,
        isSideMenuOpen: (state.isSideMenuOpen = true),
      };
    }
  }

  return {
    ...state,
  };
};

export default sideMenuReducer;

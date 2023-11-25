const initialState = {
  contentId: 1,
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DASHBOARD":
      return {
        ...state,
        contentId: (state.contentId = 1),
      };
    case "OPEN_PRODUCT_VIEWER":
      return {
        ...state,
        contentId: (state.contentId = 2),
      };
    case "OPEN_PRODUCT_MANAGEMENT":
      return {
        ...state,
        contentId: (state.contentId = 3),
      };
    case "OPEN_SUPPLIER_REPORT":
      return {
        ...state,
        contentId: (state.contentId = 4),
      };
    case "OPEN_SUPPLIER_MANAGEMENT":
      return {
        ...state,
        contentId: (state.contentId = 5),
      };
    case "OPEN_DISTRIBUTOR_REPORT":
      return {
        ...state,
        contentId: (state.contentId = 6),
      };
    case "OPEN_DISTRIBUTOR_MANAGEMENT":
      return {
        ...state,
        contentId: (state.contentId = 7),
      };
    case "OPEN_IMPORT_DATA":
      return {
        ...state,
        contentId: (state.contentId = 8),
      };
    case "OPEN_EXPORT_DATA":
      return {
        ...state,
        contentId: (state.contentId = 9),
      };
    default:
      return {
        ...state,
      };
  }
};

export default contentReducer;

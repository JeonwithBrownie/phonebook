let initialState = {
  contactList: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNumber: payload.phoneNumber },
        ],
      };
    case "ADD_SEARCH_NAME":
      state.keyword = payload.keyword;
      break;
    default:
      return { ...state };
  }
}

export default reducer;

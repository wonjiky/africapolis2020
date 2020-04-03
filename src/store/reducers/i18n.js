const initialState = {
    data: {},
}

export function reducer(state = initialState, action) {
    switch (action.type) {
      case "FETCH_i18N_DATA": return { ...state, data: action.data };
      case "FETCH_i18N_DATA_FAIL": return { ...state };
      default:
        return state;
    }
}
  
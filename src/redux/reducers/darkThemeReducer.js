const initialState = {
  darkThemeOn: false
};

export default function darkThemeReducer(state = initialState, action) {
  switch (action.type) {
    case "DARK_THEME":
      return {
        ...state,
        darkThemeOn: !state.darkThemeOn
      };

    default:
      return state;
  }
}
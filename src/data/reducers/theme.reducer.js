import { TOGGLE_DARKTHEME } from '../types';

const theme = (state = { darkThemeEnabled: false }, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return {
        ...state,
        darkThemeEnabled: !state.darkThemeEnabled,
      };
    default:
      return state;
  }
};
export default theme;

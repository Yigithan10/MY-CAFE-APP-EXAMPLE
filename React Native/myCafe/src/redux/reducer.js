const INITIAL_STATE = {
  lang: "",
};

//-----

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, lang: action.payload };

    default:
      return state;
  }
};

export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const INIT_EXPERIENCES = "INIT_EXPERIENCES";
export const REMOVE_EXPERIENCE = "REMOVE_EXPERIENCE";
export const LIST_EXPERIENCES = "LIST_EXPERIENCE";

export const addExperience = (experience) => {
  return (dispatch) => {
    dispatch({
      type: ADD_EXPERIENCE,
      payload: { experience: experience },
    });
  };
};

export const initExperiences = (experiences) => {
  return (dispatch) => {
    dispatch({
      type: INIT_EXPERIENCES,
      payload: { experiences },
    });
  };
};

export const removeExperience = (poste) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_EXPERIENCE,
      payload: { poste: poste },
    });
  };
};

export const listExperience = () => {
  return (dispatch) => {
    dispatch({
      type: LIST_EXPERIENCES,
    });
  };
};

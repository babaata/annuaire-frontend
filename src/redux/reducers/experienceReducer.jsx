import {
  ADD_EXPERIENCE,
  INIT_EXPERIENCES,
  LIST_EXPERIENCES,
  REMOVE_EXPERIENCE,
} from "../actions/experienceAction";

const initState = {
  experiences: [],
};

const experienceReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_EXPERIENCES:
      return {
        experiences: [action.payload.experiences],
      };

    case ADD_EXPERIENCE:
      let experiences = [...state.experiences, action.payload.experience];

      // pour eviter les dupplications
      const key = "occupation";
      experiences = [
        ...new Map(experiences.map((item) => [item[key], item])).values(),
      ];

      return {
        experiences: experiences,
      };

    case REMOVE_EXPERIENCE:
      return {
        experiences: state.experiences.filter(
          (experience) => experience.occupation !== action.payload.occupation
        ),
      };

    case LIST_EXPERIENCES:
      return {
        experiences: state.experiences,
      };

    default:
      return state;
  }
};

export default experienceReducer;

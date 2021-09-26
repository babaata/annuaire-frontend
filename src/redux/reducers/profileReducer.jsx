import {
  CREATE_PROFIL,
  LOADING_PROFIL,
  READ_PROFIL,
  DELETE_PROFIL,
  UPDATE_PROFIL,
  INFO_PROFIL,
} from "../actions/profilAction";

const initState = {
  loadingProfil: false,
  profil: [],
};

const profilReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_PROFIL:
      return { ...state, loadingProfil: true };

    case CREATE_PROFIL:
      return {
        ...state,
        profil: [...state.profil, action.payload],
        loadingProfil: false,
      };

    case READ_PROFIL:
      return {
        ...state,
        profil: action.payload.items,
      };

    // case UPDATE_PROFIL:
    //   return {
    //     ...state,
    //     profil: state.profil.map((product) => {
    //       if(profil.id !== action.payload.id) {
    //         return product
    //       }
    //       return {
    //         ...profil,
    //         nom: action.payload.data.nom,
    //         prenom: action.payload.data.prenom,
    //         telephone: action.payload.data.telephone,
    //         email: action.payload.data.email,
    //         password: action.payload.data.password,
    //       };
    //     }),
    //   };

    case DELETE_PROFIL:
      return {
        ...state,
        profil: state.profil.filter((pro) => pro.id !== action.payload),
      };

    default:
      return state;
  }
};

export default profilReducer;

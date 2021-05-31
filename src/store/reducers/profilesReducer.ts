import Profile from '../../models/Profile';
import {
  ProfilesDispatchTypes,
  PROFILES_FETCH_FAIL,
  PROFILES_FETCH_LOADING,
  PROFILES_FETCH_SUCCESS,
  PROFILE_CREATE,
} from '../actions/profiles/profilesActionTypes';

interface IDefaultState {
  profiles: Profile[];
  loading?: boolean;
  error?: string;
}
export const profilesReducer = (
  state: IDefaultState = { profiles: [] },
  action: ProfilesDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case PROFILES_FETCH_LOADING:
      return { ...state, loading: true };
    case PROFILES_FETCH_SUCCESS:
      return { profiles: action.payload };
    case PROFILES_FETCH_FAIL:
      return { ...state, error: action.payload };
    case PROFILE_CREATE:
      const newProfile = new Profile(
        action.payload.name,
        action.payload.email,
        action.payload.street,
        action.payload.suite,
        action.payload.city,
        action.payload.zipcode,
        action.payload.phone,
        action.payload.website,
        action.payload.profilePic
      );

      console.log(newProfile);

      let newProfilesArray = [...state.profiles];
      newProfilesArray.unshift(newProfile);

      return { loading: false, profiles: newProfilesArray };
    default:
      return state;
  }
};

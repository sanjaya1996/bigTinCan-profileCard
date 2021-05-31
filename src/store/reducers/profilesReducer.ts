import { BIGTINCAN_PROFILES } from '../../data/profiles';
import Profile from '../../models/Profile';
import { generateUniqueId } from '../../utils/uniqueId';
import {
  ProfilesDispatchTypes,
  PROFILES_FETCH_FAIL,
  PROFILES_FETCH_LOADING,
  PROFILES_FETCH_SUCCESS,
  PROFILE_CREATE,
  PROFILE_DELETE,
  PROFILE_UPDATE,
} from '../actions/profiles/profilesActionTypes';

interface IDefaultState {
  profiles: Profile[];
  loading?: boolean;
  error?: string;
}
export const profilesReducer = (
  state: IDefaultState = { profiles: BIGTINCAN_PROFILES },
  action: ProfilesDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case PROFILES_FETCH_LOADING:
      return { ...state, loading: true };
    case PROFILES_FETCH_SUCCESS:
      return { profiles: state.profiles.concat(action.payload) };
    case PROFILES_FETCH_FAIL:
      return { ...state, error: action.payload };
    case PROFILE_CREATE:
      const newProfile = new Profile(
        generateUniqueId(),
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
      let newProfilesArray = [...state.profiles];
      newProfilesArray.unshift(newProfile);

      return { loading: false, profiles: newProfilesArray };

    case PROFILE_UPDATE:
      const profileId = action.payload.id;
      const profileData = action.payload.profileData;

      const profileIndex = state.profiles.findIndex(
        (prof) => prof.id === profileId
      );

      const updatedProfile = new Profile(
        profileId,
        profileData.name,
        profileData.email,
        profileData.street,
        profileData.suite,
        profileData.city,
        profileData.zipcode,
        profileData.phone,
        profileData.website,
        profileData.profilePic
      );

      const updatedProfilesArray = [...state.profiles];
      updatedProfilesArray[profileIndex] = updatedProfile;
      return { ...state, profiles: updatedProfilesArray };

    case PROFILE_DELETE:
      return {
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

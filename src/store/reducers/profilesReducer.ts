import Profile from '../../models/Profile';
import {
  ProfilesDispatchTypes,
  PROFILES_FETCH_FAIL,
  PROFILES_FETCH_LOADING,
  PROFILES_FETCH_SUCCESS,
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
    default:
      return state;
  }
};

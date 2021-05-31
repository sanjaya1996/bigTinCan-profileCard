import Profile from '../../../models/Profile';

export const PROFILES_FETCH_LOADING = 'PROFILES_FETCH_LOADING';
export const PROFILES_FETCH_SUCCESS = 'PROFILES_FETCH_SUCCESS';
export const PROFILES_FETCH_FAIL = 'PROFILES_FETCH_FAIL';
export const PROFILE_CREATE = 'PROFILE_CREATE';
export const PROFILE_UPDATE = 'PROFILE_UPDATE';
export const PROFILE_DELETE = 'PROFILE_DELETE';

export interface ProfileFormData {
  name: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  profilePic?: string;
}

export interface ProfilesFetchLoading {
  type: typeof PROFILES_FETCH_LOADING;
}

export interface ProfilesFetchSuccess {
  type: typeof PROFILES_FETCH_SUCCESS;
  payload: Profile[];
}

export interface ProfilesFetchFail {
  type: typeof PROFILES_FETCH_FAIL;
  payload: string;
}

export interface ProfileCreate {
  type: typeof PROFILE_CREATE;
  payload: ProfileFormData;
}

export interface ProfileUpdate {
  type: typeof PROFILE_UPDATE;
  payload: { id: string; profileData: ProfileFormData };
}

export type ProfilesDispatchTypes =
  | ProfilesFetchLoading
  | ProfilesFetchSuccess
  | ProfilesFetchFail
  | ProfileCreate
  | ProfileUpdate;

import { Dispatch } from 'react';
import Profile from '../../../models/Profile';

import {
  ProfileCreate,
  ProfileFormData,
  ProfilesDispatchTypes,
  PROFILES_FETCH_FAIL,
  PROFILES_FETCH_LOADING,
  PROFILES_FETCH_SUCCESS,
  ProfileUpdate,
  PROFILE_CREATE,
  PROFILE_UPDATE,
} from './profilesActionTypes';

export const fetchProfiles = () => {
  return async (dispatch: Dispatch<ProfilesDispatchTypes>) => {
    try {
      dispatch({ type: PROFILES_FETCH_LOADING });
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      if (!response.ok) {
        const errorResData = await response.json();
        throw new Error(errorResData.message);
      }

      const resData = await response.json();
      const loadedProfiles = [];

      for (const key in resData) {
        const {
          name,
          email,
          phone,
          website,
          address: { street, suite, city, zipcode },
        } = resData[key] as Profile;

        const newProfile = new Profile(
          Date.now().toString + Math.random().toString(),
          name,
          email,
          street,
          suite,
          city,
          zipcode,
          phone,
          website
        );

        loadedProfiles.push(newProfile);
      }

      dispatch({ type: PROFILES_FETCH_SUCCESS, payload: loadedProfiles });
    } catch (err) {
      dispatch({ type: PROFILES_FETCH_FAIL, payload: err.message });
    }
  };
};

export const createProfile = (profileData: ProfileFormData): ProfileCreate => {
  return { type: PROFILE_CREATE, payload: profileData };
};

export const updateProfile = (
  id: string,
  profileData: ProfileFormData
): ProfileUpdate => {
  return { type: PROFILE_UPDATE, payload: { id, profileData } };
};

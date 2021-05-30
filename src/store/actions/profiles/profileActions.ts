import { Dispatch } from 'react';
import Profile from '../../../models/Profile';

import {
  ProfilesDispatchTypes,
  PROFILES_FETCH_FAIL,
  PROFILES_FETCH_LOADING,
  PROFILES_FETCH_SUCCESS,
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

        const newAddress = { street, suite, city, zipcode };
        const newProfile = new Profile(name, email, newAddress, phone, website);

        loadedProfiles.push(newProfile);
      }

      dispatch({ type: PROFILES_FETCH_SUCCESS, payload: loadedProfiles });
    } catch (err) {
      dispatch({ type: PROFILES_FETCH_FAIL, payload: err.message });
    }
  };
};

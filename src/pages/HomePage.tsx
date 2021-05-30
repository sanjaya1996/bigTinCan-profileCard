import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddButton from '../components/addButton/AddButton';
import Page from '../components/page/Page';
import ProfileCardList from '../components/profileCard/ProfileCardList';
import * as profilesActions from '../store/actions/profiles/profileActions';

import { RootStore } from '../store/store';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const profilesState = useSelector((store: RootStore) => store.profiles);
  const { loading, error, profiles } = profilesState;

  useEffect(() => {
    dispatch(profilesActions.fetchProfiles());
  }, [dispatch]);
  return (
    <Page>
      <ProfileCardList profiles={profiles} loading={loading} error={error} />
      <AddButton />
    </Page>
  );
};

export default HomePage;

import React from 'react';
import { useSelector } from 'react-redux';
import AddButton from '../components/addButton/AddButton';
import Page from '../components/page/Page';
import ProfileCardList from '../components/profileCard/ProfileCardList';

import { RootStore } from '../store/store';

const HomePage: React.FC = () => {
  const profilesList = useSelector((store: RootStore) => store.profiles);
  console.log(profilesList);
  return (
    <Page>
      <ProfileCardList />
      <AddButton />
    </Page>
  );
};

export default HomePage;

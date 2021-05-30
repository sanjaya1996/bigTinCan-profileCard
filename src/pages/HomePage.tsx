import React from 'react';
import AddButton from '../components/addButton/AddButton';
import Page from '../components/page/Page';
import ProfileCardList from '../components/profileCard/ProfileCardList';

const HomePage: React.FC = () => {
  return (
    <Page>
      <ProfileCardList />
      <AddButton />
    </Page>
  );
};

export default HomePage;

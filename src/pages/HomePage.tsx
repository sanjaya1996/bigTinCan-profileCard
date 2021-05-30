import React from 'react';
import Page from '../components/page/Page';
import ProfileCardList from '../components/profileCard/ProfileCardList';

const HomePage: React.FC = () => {
  return (
    <Page>
      <ProfileCardList />
    </Page>
  );
};

export default HomePage;

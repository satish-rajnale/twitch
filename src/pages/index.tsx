import React from 'react';
import Head from 'next/head';
import MainBody  from  "../components/MainBody"

import { Container } from '../styles/pages/Home';
import Header from '../components/Header';
// import Main from '../components/Main';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Twitch Clone</title>
      </Head>

      <Header />
      <MainBody/>
      {/* <Main /> */}
    </Container>
  );
};

export default Home;

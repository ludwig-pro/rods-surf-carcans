import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>
      <Header />
      <div className="bg-white">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

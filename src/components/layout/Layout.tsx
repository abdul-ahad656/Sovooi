import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => (
  <div className="app-layout">
    <Header />
    <div className="app-body">
      <Sidebar />
      <main className="app-main">{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;

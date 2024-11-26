import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Render the Header */}
      <Header />

      {/* Main content section */}
      <main>
        {children}
      </main>

      {/* Render the Footer */}
      <Footer />
    </div>
  );
};

// Define prop types
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure `children` is a valid React node and is required
};

export default Layout;

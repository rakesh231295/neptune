import React from 'react';
import TypewriterSearch from './TypeWriterSearch';
import { Helmet } from 'react-helmet';
import logo from '/assets/images/logo2.png';
import investor from '/assets/images/investor.png';
import login from '/assets/images/login.png';
import location from '/assets/images/location.png';
import trend from '/assets/images/trend.png';
import destination from '/assets/images/destination.png';
import cityTour from '/assets/images/city-tour.png';
import vacation from '/assets/images/vacation.png';
import taxi from '/assets/images/taxi.png';
import resort from '/assets/images/resort.png';
import plane from '/assets/images/plane.png';

 

const Header = () => {

  return (
    
    <div className="body header-fixed">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <div className="preload preload-container">
        <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
          <circle
            className="pl__ring pl__ring--a"
            cx="120"
            cy="120"
            r="105"
            fill="none"
            stroke="#000"
            strokeWidth="20"
            strokeDasharray="0 660"
            strokeDashoffset="-330"
            strokeLinecap="round"
          />
          <circle
            className="pl__ring pl__ring--b"
            cx="120"
            cy="120"
            r="35"
            fill="none"
            stroke="#000"
            strokeWidth="20"
            strokeDasharray="0 220"
            strokeDashoffset="-110"
            strokeLinecap="round"
          />
          <circle
            className="pl__ring pl__ring--c"
            cx="85"
            cy="120"
            r="70"
            fill="none"
            stroke="#000"
            strokeWidth="20"
            strokeDasharray="0 440"
            strokeLinecap="round"
          />
          <circle
            className="pl__ring pl__ring--d"
            cx="155"
            cy="120"
            r="70"
            fill="none"
            stroke="#000"
            strokeWidth="20"
            strokeDasharray="0 440"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div id="wrapper">
        <div id="pagee" className="clearfix">
          <header className="main-header header-style1 flex">
            <div id="header">
              <div className="header-lower">
                <div className="tf-container full">
                  <div className="row">
                    <div className="col-lg-4"></div>

                    <div className="col-lg-4 mt-3">
                      <TypewriterSearch />
                      {/* <div className="searchInputWrapper">
                        <input
                          className="searchInput"
                          type="text"
                          placeholder="Search for Destination, State & City"
                        />
                        <i className="searchInputIcon fa fa-search"></i>
                      </div> */}
                    </div>
                    <div className="col-lg-4 text-end mt-2">
                      <a href="#" className="btn-main-blue">
                        <p className="btn-main-text">
                          <i className="fa fa-phone call-vibration"></i> &nbsp;Instant Call Back
                        </p>
                        <p className="iconer">
                          <i className="icon-13"></i>
                        </p>
                      </a>
                    </div>

                    <div className="col-lg-12">
                      <div className="inner-container flex justify-space align-center">
                        <div className="logo-box mtlogo">
                          <div className="logo">
                            <a href="/">
                            <img src={logo} alt="Logo" />
                            </a>
                          </div>
                        </div>

                        <div className="nav-outer flex align-center">
                          <nav className="main-menu show navbar-expand-md">
                            <div
                              className="navbar-collapse collapse clearfix"
                              id="navbarSupportedContent"
                            >
                              <ul className="navigation clearfix">
                                <li>
                                  <img
                                    src={plane}
                                    className="naviconwidth"
                                    alt="Flight"
                                  />
                                  <a href="#">Flight</a>
                                </li>
                                <li>
                                  <img
                                    src={resort}
                                    className="naviconwidth"
                                    alt="Hotels"
                                  />
                                  <a href="#">Hotels</a>
                                </li>
                                <li>
                                  <img
                                    src={taxi}
                                    className="naviconwidth"
                                    alt="Cabs"
                                  />
                                  <a href="#">Cabs</a>
                                </li>
                                <li>
                                  <img
                                    src={vacation}
                                    className="naviconwidth"
                                    alt="Holidays"
                                  />
                                  <a href="#">Holidays</a>
                                </li>
                                <li>
                                  <img
                                    src={cityTour}
                                    className="naviconwidth"
                                    alt="Activity"
                                  />
                                  <a href="#">Activity</a>
                                </li>
                                <li>
                                  <img
                                    src={destination}
                                    className="naviconwidth"
                                    alt="Destination"
                                  />
                                  <a href="#">Destination</a>
                                </li>
                                <li>
                                  <img
                                    src={trend}
                                    className="naviconwidth"
                                    alt="Trending"
                                  />
                                  <a href="#">Trending</a>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>

                        <div className="header-account flex align-center">
                          <div className="language">
                            <div className="nice-select" tabIndex="0">
                              <img src={location} alt="Language" />
                              <span className="current">English</span>
                              <ul className="list">
                                <li className="option selected">English</li>
                                <li className="option">Vietnam</li>
                                <li className="option">German</li>
                                <li className="option">Russian</li>
                                <li className="option">Canada</li>
                              </ul>
                            </div>
                          </div>

                          <div className="language">
                            <div className="nice-select" tabIndex="0">
                              <img src={login} alt="Sign In" />
                              <span className="current">Sign In</span>
                            </div>
                          </div>

                          <div className="language">
                            <div className="nice-select" tabIndex="0">
                              <img src={investor} alt="Investor" />
                              <span className="current">Investor</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;

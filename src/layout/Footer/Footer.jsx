import React, {useEffect} from 'react'

const Footer = () => {
  useEffect(() => {
    // Dynamically adding script tags
    const scriptPaths = [
      "/assets/js/jquery.min.js",
      "/assets/js/jquery.nice-select.min.js",
      "/assets/js/bootstrap.min.js",
      "/assets/js/jquery.magnific-popup.min.js",
      "/assets/js/countto.js",
      "/assets/js/swiper-bundle.min.js",
      "/assets/js/swiper.js",
      "/assets/js/price-ranger.js",
      "/assets/js/textanimation.js",
      "/assets/js/plugin.js",
      "/assets/js/jquery.fancybox.js",
      "/assets/js/shortcodes.js",
      "/assets/js/main.js",
    ];

    scriptPaths.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;  // Optional: use `async` or `defer` if necessary
      document.body.appendChild(script);

      // Cleanup script tags when component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    });
  }, []);
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n   .footer-tabs-container {\n   width: 100%;\n   height: auto; /* Make the height flexible */\n   margin-top: 10%;\n   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n   overflow: hidden;\n   position: relative;\n   }\n   .footer-tabs {\n   padding: 10px 20px 15px 20px; \n   }\n   .footer-tab-links {\n   display: flex;\n   justify-content: space-between;\n   border-bottom: 1px solid #f0f0f0;\n   }\n   .footer-tab-link {\n   background: none;\n   border: none;\n   font-size: 16px;\n   font-weight: 500;\n   padding: 15px 30px; \n   color: #ccc;\n   cursor: pointer;\n   position: relative;\n   transition: color 0.3s ease;\n   }\n   .footer-tab-link.active-tab,\n   .footer-tab-link:hover {\n   color: #b84de5; \n   }\n   .footer-tab-link i {\n   margin-right: 10px;\n   }\n   .footer-tab-link::after {\n   content: '';\n   position: absolute;\n   width: 0;\n   height: 3px;\n   bottom: -1px;\n   left: 50%;\n   background: linear-gradient(45deg, #b84de5, #7d41ff); \n   transition: all 0.4s ease;\n   }\n   .footer-tab-link.active-tab::after {\n   width: 100%;\n   left: 0;\n   }\n   .footer-tab-content {\n   display: none;\n   animation: fadeInUp 0.5s ease;\n   padding: 5px 10px 15px 10px;\n   margin-top:3%;\n   }\n   .footer-tab-content.active-tab {\n   display: block;\n   }\n   @keyframes fadeInUp {\n   from {\n   opacity: 0;\n   transform: translateY(20px);\n   }\n   to {\n   opacity: 1;\n   transform: translateY(0);\n   }\n   }\n  \n   @media screen and (max-width: 600px) {\n   .tab-links {\n   flex-direction: column;\n   align-items: center;\n   }\n   .tab-link {\n   text-align: center;\n   width: 100%;\n   padding: 15px 0;\n   }\n   }\n   .footer-section {\n   display: grid;\n   grid-template-columns: repeat(6, 1fr); /* Six equal columns */\n   gap: 40px; /* Spacing between columns */\n   max-width: 1400px;\n   margin: 0 auto; /* Center aligns content */\n   }\n   .footer-column {\n   text-align: left;\n   }  \n   .footer-title {\n   font-size: 16px;\n   font-weight: bold;\n   color: #fff;\n   margin-bottom: 15px;\n   text-transform: initial;\n   }\n   .footer-links {\n   list-style: none;\n   padding: 0;\n   margin: 0;\n   }\n   .footer-links li {\n   font-size: 14px;\n   line-height: 1.8;\n   color: #ccc;\n   cursor: pointer;\n   transition: color 0.3s ease;\n   }\n   .footer-links li:hover {\n   color: #fff; /* Highlight on hover */\n   }\n"
        }}
      />
      <section className="mb--93 relative z-index3">
        <div className="tf-container">
          <div className="callt-to-action flex-two">
            <div className="callt-to-action-content flex-three">
              <div className="content">
                <h2 className="title-call">Ready to adventure and enjoy natural</h2>
                <p className="des">
                  Lorem ipsum dolor sit amet, consectetur notted adipisicin
                </p>
              </div>
            </div>
            <img
              src="./assets/images/page/vector4.png"
              alt=""
              className="shape-ab"
            />
            <div className="callt-to-action-button">
              <a href="#" className="get-call">
                Let,s get started
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer footer-style1 ">
        <div className="footer-tabs-container">
          <div className="footer-tabs">
            <div className="footer-tab-links">
              <button className="footer-tab-link active-tab" data-tab="tab-1">
                <i className="fa fa-info-circle" /> About Company
              </button>
              <button className="footer-tab-link" data-tab="tab-2">
                <i className="fa fa-plane" /> International Holidays
              </button>
              <button className="footer-tab-link" data-tab="tab-3">
                <i className="fa fa-map" /> India Holidays
              </button>
              <button className="footer-tab-link" data-tab="tab-4">
                <i className="fa fa-location-arrow" /> Destination
              </button>
              <button className="footer-tab-link" data-tab="tab-5">
                <i className="fa fa-car" /> Travel Blogs
              </button>
              <button className="footer-tab-link" data-tab="tab-6">
                <i className="fa fa-inr" /> Investor Relations
              </button>
            </div>
            <div className="footer-tab-content active-tab" id="tab-1">
              <div className="footer-section">
                <div className="footer-column">
                  <h3 className="footer-title">About Company</h3>
                  <ul className="footer-links">
                    <li>Contact Us</li>
                    <li>Store / Branch Locator</li>
                    <li>Terms Of Use</li>
                    <li>Disclaimer</li>
                    <li>Privacy Policy</li>
                    <li>Careers</li>
                    <li>Become Travel Business Associate</li>
                    <li>Thomas Cook News</li>
                    <li>Stock Exchange Intimation</li>
                    <li>Cookie Policy</li>
                    <li>Investor Relations</li>
                    <li>Travel &amp; Tourism Training</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">PRODUCTS &amp; SERVICES</h3>
                  <ul className="footer-links">
                    <li>Holidays</li>
                    <li>Honeymoon Packages</li>
                    <li>Foreign Exchange (FOREX)</li>
                    <li>
                      Meetings, Incentives, Conferences &amp; Exhibitions (MICE)
                    </li>
                    <li>Gift Cards</li>
                    <li>Travel Insurance</li>
                    <li>Flights</li>
                    <li>Hotels</li>
                    <li>Travel Blog</li>
                    <li>Corporate Travel</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">QUICK LINKS</h3>
                  <ul className="footer-links">
                    <li>Travel E-Brochure</li>
                    <li>Staff / Agent Login Target</li>
                    <li>Offers</li>
                    <li>Holiday App</li>
                    <li>Forex App</li>
                    <li>Transfer Money Abroad</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">SITEMAPS</h3>
                  <ul className="footer-links">
                    <li>Sitemap</li>
                    <li>Forex Sitemap</li>
                    <li>Domestic Packages From City</li>
                    <li>International Packages From City</li>
                    <li>Domestic Flights Sitemap</li>
                    <li>International Flights Sitemap</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">TRENDING HOLIDAY THEMES</h3>
                  <ul className="footer-links">
                    <li>Cruise Packages</li>
                    <li>Experiential Travel Packages</li>
                    <li>Youth Special Packages</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">
                    TRAVEL GUIDELINES AND ASSURED TRAVEL
                  </h3>
                  <ul className="footer-links">
                    <li>Assured Safe Travel Program</li>
                    <li>COVID 19 Certification</li>
                    <li>International Travel Guideline</li>
                    <li>India Travel Guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-tab-content" id="tab-2">
              <div className="footer-section">
                <div className="footer-column">
                  <h3 className="footer-title">About Company</h3>
                  <ul className="footer-links">
                    <li>Contact Us</li>
                    <li>Store / Branch Locator</li>
                    <li>Terms Of Use</li>
                    <li>Disclaimer</li>
                    <li>Privacy Policy</li>
                    <li>Careers</li>
                    <li>Become Travel Business Associate</li>
                    <li>Thomas Cook News</li>
                    <li>Stock Exchange Intimation</li>
                    <li>Cookie Policy</li>
                    <li>Investor Relations</li>
                    <li>Travel &amp; Tourism Training</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">PRODUCTS &amp; SERVICES</h3>
                  <ul className="footer-links">
                    <li>Holidays</li>
                    <li>Honeymoon Packages</li>
                    <li>Foreign Exchange (FOREX)</li>
                    <li>
                      Meetings, Incentives, Conferences &amp; Exhibitions (MICE)
                    </li>
                    <li>Gift Cards</li>
                    <li>Travel Insurance</li>
                    <li>Flights</li>
                    <li>Hotels</li>
                    <li>Travel Blog</li>
                    <li>Corporate Travel</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">QUICK LINKS</h3>
                  <ul className="footer-links">
                    <li>Travel E-Brochure</li>
                    <li>Staff / Agent Login Target</li>
                    <li>Offers</li>
                    <li>Holiday App</li>
                    <li>Forex App</li>
                    <li>Transfer Money Abroad</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">SITEMAPS</h3>
                  <ul className="footer-links">
                    <li>Sitemap</li>
                    <li>Forex Sitemap</li>
                    <li>Domestic Packages From City</li>
                    <li>International Packages From City</li>
                    <li>Domestic Flights Sitemap</li>
                    <li>International Flights Sitemap</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">TRENDING HOLIDAY THEMES</h3>
                  <ul className="footer-links">
                    <li>Cruise Packages</li>
                    <li>Experiential Travel Packages</li>
                    <li>Youth Special Packages</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">
                    TRAVEL GUIDELINES AND ASSURED TRAVEL
                  </h3>
                  <ul className="footer-links">
                    <li>Assured Safe Travel Program</li>
                    <li>COVID 19 Certification</li>
                    <li>International Travel Guideline</li>
                    <li>India Travel Guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-tab-content" id="tab-3">
              <div className="footer-section">
                <div className="footer-column">
                  <h3 className="footer-title">About Company</h3>
                  <ul className="footer-links">
                    <li>Contact Us</li>
                    <li>Store / Branch Locator</li>
                    <li>Terms Of Use</li>
                    <li>Disclaimer</li>
                    <li>Privacy Policy</li>
                    <li>Careers</li>
                    <li>Become Travel Business Associate</li>
                    <li>Thomas Cook News</li>
                    <li>Stock Exchange Intimation</li>
                    <li>Cookie Policy</li>
                    <li>Investor Relations</li>
                    <li>Travel &amp; Tourism Training</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">PRODUCTS &amp; SERVICES</h3>
                  <ul className="footer-links">
                    <li>Holidays</li>
                    <li>Honeymoon Packages</li>
                    <li>Foreign Exchange (FOREX)</li>
                    <li>
                      Meetings, Incentives, Conferences &amp; Exhibitions (MICE)
                    </li>
                    <li>Gift Cards</li>
                    <li>Travel Insurance</li>
                    <li>Flights</li>
                    <li>Hotels</li>
                    <li>Travel Blog</li>
                    <li>Corporate Travel</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">QUICK LINKS</h3>
                  <ul className="footer-links">
                    <li>Travel E-Brochure</li>
                    <li>Staff / Agent Login Target</li>
                    <li>Offers</li>
                    <li>Holiday App</li>
                    <li>Forex App</li>
                    <li>Transfer Money Abroad</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">SITEMAPS</h3>
                  <ul className="footer-links">
                    <li>Sitemap</li>
                    <li>Forex Sitemap</li>
                    <li>Domestic Packages From City</li>
                    <li>International Packages From City</li>
                    <li>Domestic Flights Sitemap</li>
                    <li>International Flights Sitemap</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">TRENDING HOLIDAY THEMES</h3>
                  <ul className="footer-links">
                    <li>Cruise Packages</li>
                    <li>Experiential Travel Packages</li>
                    <li>Youth Special Packages</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">
                    TRAVEL GUIDELINES AND ASSURED TRAVEL
                  </h3>
                  <ul className="footer-links">
                    <li>Assured Safe Travel Program</li>
                    <li>COVID 19 Certification</li>
                    <li>International Travel Guideline</li>
                    <li>India Travel Guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-tab-content" id="tab-4">
              <div className="footer-section">
                <div className="footer-column">
                  <h3 className="footer-title">About Company</h3>
                  <ul className="footer-links">
                    <li>Contact Us</li>
                    <li>Store / Branch Locator</li>
                    <li>Terms Of Use</li>
                    <li>Disclaimer</li>
                    <li>Privacy Policy</li>
                    <li>Careers</li>
                    <li>Become Travel Business Associate</li>
                    <li>Thomas Cook News</li>
                    <li>Stock Exchange Intimation</li>
                    <li>Cookie Policy</li>
                    <li>Investor Relations</li>
                    <li>Travel &amp; Tourism Training</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">PRODUCTS &amp; SERVICES</h3>
                  <ul className="footer-links">
                    <li>Holidays</li>
                    <li>Honeymoon Packages</li>
                    <li>Foreign Exchange (FOREX)</li>
                    <li>
                      Meetings, Incentives, Conferences &amp; Exhibitions (MICE)
                    </li>
                    <li>Gift Cards</li>
                    <li>Travel Insurance</li>
                    <li>Flights</li>
                    <li>Hotels</li>
                    <li>Travel Blog</li>
                    <li>Corporate Travel</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">QUICK LINKS</h3>
                  <ul className="footer-links">
                    <li>Travel E-Brochure</li>
                    <li>Staff / Agent Login Target</li>
                    <li>Offers</li>
                    <li>Holiday App</li>
                    <li>Forex App</li>
                    <li>Transfer Money Abroad</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">SITEMAPS</h3>
                  <ul className="footer-links">
                    <li>Sitemap</li>
                    <li>Forex Sitemap</li>
                    <li>Domestic Packages From City</li>
                    <li>International Packages From City</li>
                    <li>Domestic Flights Sitemap</li>
                    <li>International Flights Sitemap</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">TRENDING HOLIDAY THEMES</h3>
                  <ul className="footer-links">
                    <li>Cruise Packages</li>
                    <li>Experiential Travel Packages</li>
                    <li>Youth Special Packages</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">
                    TRAVEL GUIDELINES AND ASSURED TRAVEL
                  </h3>
                  <ul className="footer-links">
                    <li>Assured Safe Travel Program</li>
                    <li>COVID 19 Certification</li>
                    <li>International Travel Guideline</li>
                    <li>India Travel Guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-tab-content" id="tab-5">
              <div className="footer-section">
                <div className="footer-column">
                  <h3 className="footer-title">About Company</h3>
                  <ul className="footer-links">
                    <li>Contact Us</li>
                    <li>Store / Branch Locator</li>
                    <li>Terms Of Use</li>
                    <li>Disclaimer</li>
                    <li>Privacy Policy</li>
                    <li>Careers</li>
                    <li>Become Travel Business Associate</li>
                    <li>Thomas Cook News</li>
                    <li>Stock Exchange Intimation</li>
                    <li>Cookie Policy</li>
                    <li>Investor Relations</li>
                    <li>Travel &amp; Tourism Training</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">PRODUCTS &amp; SERVICES</h3>
                  <ul className="footer-links">
                    <li>Holidays</li>
                    <li>Honeymoon Packages</li>
                    <li>Foreign Exchange (FOREX)</li>
                    <li>
                      Meetings, Incentives, Conferences &amp; Exhibitions (MICE)
                    </li>
                    <li>Gift Cards</li>
                    <li>Travel Insurance</li>
                    <li>Flights</li>
                    <li>Hotels</li>
                    <li>Travel Blog</li>
                    <li>Corporate Travel</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">QUICK LINKS</h3>
                  <ul className="footer-links">
                    <li>Travel E-Brochure</li>
                    <li>Staff / Agent Login Target</li>
                    <li>Offers</li>
                    <li>Holiday App</li>
                    <li>Forex App</li>
                    <li>Transfer Money Abroad</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">SITEMAPS</h3>
                  <ul className="footer-links">
                    <li>Sitemap</li>
                    <li>Forex Sitemap</li>
                    <li>Domestic Packages From City</li>
                    <li>International Packages From City</li>
                    <li>Domestic Flights Sitemap</li>
                    <li>International Flights Sitemap</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">TRENDING HOLIDAY THEMES</h3>
                  <ul className="footer-links">
                    <li>Cruise Packages</li>
                    <li>Experiential Travel Packages</li>
                    <li>Youth Special Packages</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">
                    TRAVEL GUIDELINES AND ASSURED TRAVEL
                  </h3>
                  <ul className="footer-links">
                    <li>Assured Safe Travel Program</li>
                    <li>COVID 19 Certification</li>
                    <li>International Travel Guideline</li>
                    <li>India Travel Guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-tab-content" id="tab-6">
              <div className="footer-section">
                <div className="footer-column">
                  <h3 className="footer-title">About Company</h3>
                  <ul className="footer-links">
                    <li>Contact Us</li>
                    <li>Store / Branch Locator</li>
                    <li>Terms Of Use</li>
                    <li>Disclaimer</li>
                    <li>Privacy Policy</li>
                    <li>Careers</li>
                    <li>Become Travel Business Associate</li>
                    <li>Thomas Cook News</li>
                    <li>Stock Exchange Intimation</li>
                    <li>Cookie Policy</li>
                    <li>Investor Relations</li>
                    <li>Travel &amp; Tourism Training</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">PRODUCTS &amp; SERVICES</h3>
                  <ul className="footer-links">
                    <li>Holidays</li>
                    <li>Honeymoon Packages</li>
                    <li>Foreign Exchange (FOREX)</li>
                    <li>
                      Meetings, Incentives, Conferences &amp; Exhibitions (MICE)
                    </li>
                    <li>Gift Cards</li>
                    <li>Travel Insurance</li>
                    <li>Flights</li>
                    <li>Hotels</li>
                    <li>Travel Blog</li>
                    <li>Corporate Travel</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">QUICK LINKS</h3>
                  <ul className="footer-links">
                    <li>Travel E-Brochure</li>
                    <li>Staff / Agent Login Target</li>
                    <li>Offers</li>
                    <li>Holiday App</li>
                    <li>Forex App</li>
                    <li>Transfer Money Abroad</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">SITEMAPS</h3>
                  <ul className="footer-links">
                    <li>Sitemap</li>
                    <li>Forex Sitemap</li>
                    <li>Domestic Packages From City</li>
                    <li>International Packages From City</li>
                    <li>Domestic Flights Sitemap</li>
                    <li>International Flights Sitemap</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">TRENDING HOLIDAY THEMES</h3>
                  <ul className="footer-links">
                    <li>Cruise Packages</li>
                    <li>Experiential Travel Packages</li>
                    <li>Youth Special Packages</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">
                    TRAVEL GUIDELINES AND ASSURED TRAVEL
                  </h3>
                  <ul className="footer-links">
                    <li>Assured Safe Travel Program</li>
                    <li>COVID 19 Certification</li>
                    <li>International Travel Guideline</li>
                    <li>India Travel Guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-3 mb-3">
              <div className="col-md-4 text-center">
                <h2 className="footer-title mt-3">
                  <i className="fa fa-envelope call-vibration" />
                  &nbsp; enquiry@neptuneholidays.com
                </h2>
              </div>
              <div className="col-md-4 text-center">
                <h2 className="footer-title mt-3">
                  <i className="fa fa-phone call-vibration" />
                  &nbsp; +91 33 4022 9591 (Toll Free No.)
                </h2>
              </div>
              <div className="col-md-4 text-center">
                <ul className="social flex-six text-center">
                  <h2 className="footer-title mt-3">Follow us: </h2>
                  <li>
                    <a href="#">
                      <i className="icon-icon-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-x" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-icon_03" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-2" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <p className="copy-right">
                Copyright © 2024 NeptuneHolidays. All Rights Reserved. Design &amp;
                Developed by{" "}
                <a
                  href="https://webingo.in"
                  target="_blank"
                  style={{ color: "#fff", fontWeight: 600 }}
                >
                  Webingo
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom */}
      {/* /#page */}
      {/* Modal Popup Bid */}
      <a id="scroll-top" className="button-go" />
      {/* Modal search*/}
      <div
        className="modal search-mobie fade"
        id="exampleModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body">
              <form action="/" className="search-form-mobie">
                <div className="search">
                  <i className="icon-circle2017" />
                  <input
                    type="search"
                    placeholder="Search Travel"
                    className="search-input"
                    autoComplete="off"
                  />
                  <button type="button">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="logo-canvas">
            <img src="./assets/images/logo.png" alt="image" />
          </div>
          <p className="des">
            Neptune is one of the leading IATA approved Travel Agents of Eastern
            India having its head office at Kolkata and branch office at Jaipur and
            Siliguri. With a sound experience of over 26 years, Neptune has proved
            itself to be the most reliable and efficient among its counterparts in
            this region.
          </p>
          <ul className="canvas-info">
            <li className="flex-three mb-2">
              <i className="icon-noun-mail-5780740-1" />
              <p>enquiry@neptuneholidays.com</p>
            </li>
            <li className="flex-three mb-2">
              <i className="icon-Group-9" />
              <p>+91 33 4022 9591</p>
            </li>
            <li className="flex-three mb-2">
              <i className="icon-Layer-19" />
              <p>
                Arihant Benchmark, 113/F, Matheswartolla Road, Near Topsia Crossing,
                Axis Bank Building, 3rd Floor, Kolkata – 700046
              </p>
            </li>
          </ul>
          <ul className="social flex-three">
            <li>
              <a href="#">
                <i className="icon-icon-2" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-x" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-8" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*footer tab */}
      {/*searchbar type writter animation*/}
      {/* Javascript */}
    </>

  )
}

export default Footer

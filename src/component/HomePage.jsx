import React from 'react'
import { Slide } from 'react-slideshow-image';
import Offer from '../layout/Offer/Offer';
import PackageOffer from '../layout/Offer/PackageOffer';
import 'react-slideshow-image/dist/styles.css';
import Layout from '../layout/layout';
import t1 from '/assets/images/1.jpg';
import t2 from '/assets/images/2.jpg';
import t3 from '/assets/images/3.jpg';
import t4 from '/assets/images/4.jpg';
import o1 from '/assets/images/o1.png';
import o2 from '/assets/images/o2.png';
import o3 from '/assets/images/o3.png';
import o4 from '/assets/images/o4.png';
import testimonial1 from '/assets/images/testimonial1.jpg';
import testimonial2 from '/assets/images/testimonial2.jpg';
import user1 from '/assets/images/7.jpg';
import user2 from '/assets/images/8.jpg';
import user3 from '/assets/images/9.jpg';

// Home slider
const imageData = {
  images: [
    { id: "image1", url: "/assets/images/b1.png" },
    { id: "image2", url: "/assets/images/b2.png" },
    { id: "image3", url: "/assets/images/b3.jpg" },
  ],
};

// Top State Destinations By Travel Experts
const stateData = {
  states: [
    { id: "1", state: "Sikkim", url: "/assets/images/Sikkim.jpeg", package: "3 Package", startingPrice: "Starting from  ₹5999" },
    { id: "2", state: "Arunanchal", url: "/assets/images/Arunachal.jpeg", package: "4 Package", startingPrice: "Starting from  ₹6999" },
    { id: "3", state: "Bhutan", url: "/assets/images/Bhutan.jpeg", package: "5 Package", startingPrice: "Starting from  ₹8999" },
    { id: "4", state: "Odisha", url: "/assets/images/Odisha.jpeg", package: "7 Package", startingPrice: "Starting from  ₹9999" },

  ],
};
// Top Destinations By Travel Experts
const destinationData = {
  destination: [
    { id: "1", state: "Gangtok", url: "/assets/images/tour/1.jpg", package: "3 Package", startingPrice: "Starting from  ₹5999" },
    { id: "2", state: "Munnar", url: "/assets/images/tour/2.jpg", package: "7 Package", startingPrice: "Starting from  ₹6999" },
    { id: "3", state: "Rajkot", url: "/assets/images/tour/3.jpg", package: "6 Package", startingPrice: "Starting from  ₹8999" },
    { id: "4", state: "Pangong lake", url: "/assets/images/tour/4.jpg", package: "8 Package", startingPrice: "Starting from  ₹9999" },

  ],
};

const HomePage = () => {
  return (
    <Layout>
      <main id="main">
        {/* Widget Slider */}
        <Slide arrows={false} indicators="true">
          {imageData.images.map((image) => (
            <div className="each-slide-effect" key={image.id}>
              <div style={{ backgroundImage: `url(${image.url})` }}></div>
            </div>
          ))}
        </Slide>
        {/* Widget Slider */}

        {/* Widget Tourpackage */}
        <section className="tour-package pd-main">
          <div className="tf-container w-1456">
            <div className="row">
              <div className="col-lg-12">
                <div className="center m0-auto w-text-heading">
                  <h2 className="title-heading mb-40 fadeInUp wow">
                    Amazing Featured Tour Package the world
                  </h2>
                </div>
                <div className="tab-tour-list">
                  <ul
                    className="nav justify-content-center tab-list mb-37"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="new-york-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#new-york-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="new-york-tab-pane"
                        aria-selected="true"
                      >
                        Sikkim
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="london-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#london-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="london-tab-pane"
                        aria-selected="false"
                      >
                        Assam
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="tokyo-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tokyo-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="tokyo-tab-pane"
                        aria-selected="false"
                      >
                        Rajasthan
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="los-angelas-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#los-angelas-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="los-angelas-tab-pane"
                        aria-selected="false"
                      >
                        Bhutan
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="manila-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#manila-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="manila-tab-pane"
                        aria-selected="false"
                      >
                        West Bengal
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="new-york-tab-pane"
                      role="tabpanel"
                      aria-labelledby="new-york-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div
                            className="tour-listing wow fadeInUp animated "
                            data-wow-delay="0.1s"
                          >
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t1}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div
                            className="tour-listing wow fadeInUp animated "
                            data-wow-delay="0.2s"
                          >
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t2}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Trending</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div
                            className="tour-listing wow fadeInUp animated "
                            data-wow-delay="0.3s"
                          >
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t3}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Hot sell</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div
                            className="tour-listing wow fadeInUp animated "
                            data-wow-delay="0.4s"
                          >
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t4}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row wow fadeInUp">
                        <div className="col-lg-12 center mt-44">
                          <a href="#" className="btn-main">
                            <p className="btn-main-text">View all tour</p>
                            <p className="iconer">
                              <i className="icon-13" />
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="london-tab-pane"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t1}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t2}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Trending</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t3}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Hot sell</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t4}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 center mt-44">
                          <a href="#" className="btn-main">
                            <p className="btn-main-text">View all tour</p>
                            <p className="iconer">
                              <i className="icon-13" />
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tokyo-tab-pane"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t1}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t2}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Trending</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t3}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Hot sell</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t4}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 center mt-44">
                          <a href="#" className="btn-main">
                            <p className="btn-main-text">View all tour</p>
                            <p className="iconer">
                              <i className="icon-13" />
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="los-angelas-tab-pane"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t1}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t2}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Trending</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t3}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Hot sell</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t4}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 center mt-44">
                          <a href="#" className="btn-main">
                            <p className="btn-main-text">View all tour</p>
                            <p className="iconer">
                              <i className="icon-13" />
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="manila-tab-pane"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t1}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t2}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Trending</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t3}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Hot sell</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                              </div>
                              <img
                                src={t4}
                                alt="Image Listing"
                              />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="tag-listing">Bestseller</span>
                              <span className="map">
                                <i className="icon-Vector4" />
                                Sikkim, India
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">Days and 6 nights From Lachen</a>
                              </h3>
                              <div className="review">
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <i className="icon-Star" />
                                <span>(2500+ Sold)</span>
                              </div>
                              <div className="flex-two">
                                <div className="price-box flex-three">
                                  <p>
                                    From <span className="price-sale">₹169.00</span>
                                  </p>
                                  <span className="price">₹199.00</span>
                                </div>
                                <div className="icon-bookmark">
                                  <i className="icon-Vector-151" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 center mt-44">
                          <a href="#" className="btn-main">
                            <p className="btn-main-text">View all tour</p>
                            <p className="iconer">
                              <i className="icon-13" />
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Widget Tourpackage */}


        {/* Widget state destination */}
        <section className="widget-destination pd-main">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="left mb-50">
                  <h2 className="title-heading fadeInUp wow">
                    Top State Destinations By Travel Experts
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid-three-destination">
              {stateData.states.map((states) => (
                <>
                  <div
                    className="tf-widget-destination wow fadeInUp animated"
                    data-wow-delay="0.1s" key={states.id}
                  >
                    <a href="#" className="destination-imgae">
                      <span className="tour">{states.package}</span>
                      <img className='rounded' src={states.url} alt="" />
                    </a>
                    <div className="destination-content">
                      <span className="nation">{states.state}</span>
                      <div className="flex-two btn-destination">
                        <h6 className="title">
                          <a href="#">{states.startingPrice}</a>
                        </h6>
                        <a href="#" className="flex-five btn-view">
                          <i className="icon-Vector-32" />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ))
              }
            </div>
          </div>
        </section>
        {/* Widget state destination end */}

        <div className="container mb-5">
          <Offer />
        </div>

        {/* Widget Tourpackage */}
        <section className="tour-package pd-main">
          <div className="tf-container w-1456">
            <div className="row">
              <div className="col-lg-12">
                <div className="center m0-auto w-text-heading">
                  <h2 className="title-heading mb-40 fadeInUp wow">
                    Exclusive Offers
                  </h2>
                </div>
                <div className="tab-tour-list">
                  <ul
                    className="nav justify-content-center tab-list mb-37"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="new-york-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#new-york-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="new-york-tab-pane"
                        aria-selected="true"
                      >
                        Best Offers
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="london-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#london-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="london-tab-pane"
                        aria-selected="false"
                      >
                        Flight
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="tokyo-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tokyo-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="tokyo-tab-pane"
                        aria-selected="false"
                      >
                        Hotels
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="los-angelas-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#los-angelas-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="los-angelas-tab-pane"
                        aria-selected="false"
                      >
                        Cabs
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="manila-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#manila-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="manila-tab-pane"
                        aria-selected="false"
                      >
                        Holidays
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="new-york-tab-pane"
                      role="tabpanel"
                      aria-labelledby="new-york-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div
                            className="tour-listing wow fadeInUp animated "
                            data-wow-delay="0.1s"
                          >
                            <a href="#" className="tour-listing-image">
                              <img src={o1} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div
                            className="tour-listing wow fadeInUp animated "
                            data-wow-delay="0.2s"
                          >
                            <a href="#" className="tour-listing-image">
                              <img src={o2} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div
                            className="tour-listing wow fadeInUp animated "
                            data-wow-delay="0.3s"
                          >
                            <a href="#" className="tour-listing-image">
                              <img src={o3} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div
                            className="tour-listing wow fadeInUp animated "
                            data-wow-delay="0.4s"
                          >
                            <a href="#" className="tour-listing-image">
                              <img src={o4} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*
                                      <div class="row wow fadeInUp">
                                          <div class="col-lg-12 center mt-44">
                                              <a href="#" class="btn-main">
                                                  <p class="btn-main-text">View all tour</p>
                                                  <p class="iconer">
                                                      <i class="icon-13"></i>
                                                  </p>
                                              </a>
                                          </div>
                                      </div>
*/}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="london-tab-pane"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o1} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o2} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o3} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o4} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*
                                      <div class="row">
                                          <div class="col-lg-12 center mt-44">
                                              <a href="#" class="btn-main">
                                                  <p class="btn-main-text">View all tour</p>
                                                  <p class="iconer">
                                                      <i class="icon-13"></i>
                                                  </p>
                                              </a>
                                          </div>
                                      </div>
*/}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tokyo-tab-pane"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o1} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o2} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o3} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o4} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*
                                      <div class="row">
                                          <div class="col-lg-12 center mt-44">
                                              <a href="#" class="btn-main">
                                                  <p class="btn-main-text">View all tour</p>
                                                  <p class="iconer">
                                                      <i class="icon-13"></i>
                                                  </p>
                                              </a>
                                          </div>
                                      </div>
*/}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="los-angelas-tab-pane"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o1} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o2} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o3} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o4} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*
                                      <div class="row">
                                          <div class="col-lg-12 center mt-44">
                                              <a href="#" class="btn-main">
                                                  <p class="btn-main-text">View all tour</p>
                                                  <p class="iconer">
                                                      <i class="icon-13"></i>
                                                  </p>
                                              </a>
                                          </div>
                                      </div>
*/}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="manila-tab-pane"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o1} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o2} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o3} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <div className="tour-listing">
                            <a href="#" className="tour-listing-image">
                              <img src={o4} alt="Image Listing" />
                            </a>
                            <div className="tour-listing-content pb-4">
                              <span className="map">
                                <i className="fa fa-gift" />
                                Book Now
                              </span>
                              <h3 className="title-tour-list">
                                <a href="#">
                                  Fly to your dream destination with exclusive deals
                                  and discounted fares on international airlines
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*
                                      <div class="row">
                                          <div class="col-lg-12 center mt-44">
                                              <a href="#" class="btn-main">
                                                  <p class="btn-main-text">View all tour</p>
                                                  <p class="iconer">
                                                      <i class="icon-13"></i>
                                                  </p>
                                              </a>
                                          </div>
                                      </div>
*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Widget Tourpackage */}

        {/* Widget destination */}
        <section className="widget-destination1 pb-60">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-50 left">

                  <h2 className="title-heading wow fadeInUp animated">
                    Popular Destinations
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {destinationData.destination.map((destination) => (
                <>
              <div
                className="col-md-3 col-lg-3 mb-30 wow fadeInUp animated "
                data-wow-delay="0.1s" key={destination.id}
              >
                <a href="#" className="destination-style relative">
                  <span className="tour">{destination.package}</span>
                  <img src={destination.url} alt="" />
                  <div className="destination-content">
                    <div className="travel font-yes text-white">Travel to</div>
                    <p className="text-white">{destination.state}</p>
                    <p style={{ color: "#ffd700", fontSize: 13 }}>
                      {destination.startingPrice}
                    </p>
                  </div>
                </a>
              </div>
              </>
              ))}
              <div className="col-lg-12 center mt-4">
                <a href="#" className="btn-main">
                  <p className="btn-main-text">View all tour</p>
                  <p className="iconer">
                    <i className="icon-13" />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Widget destination */}
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-md-12">
              <PackageOffer />
            </div>
          </div>
        </div>
        {/* Widget Testimonial */}
        <section className="widget-testimonial-style01">
          <div className="tf-container">
            <div className="row">
              <div className="col-md-5 relative">
                <div
                  className="image-box-tesimonial box-testimonial1 wow fadeInLeft animated "
                  data-wow-delay="0.1s"
                >
                  <img src={testimonial1} alt="" />
                </div>
                <div
                  className="image-box-tesimonial box-testimonial2 wow fadeInUp animated "
                  data-wow-delay="0.3s"
                >
                  <img src={testimonial2} alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="widget-testimonial overflow-hidden ">
                  <div className="swiper mySwiper2">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-content relative">
                          <div className="profile mb-15">
                            <h3 className="name">Piter Bowman</h3>
                            <span className="job">Business CEO</span>
                          </div>
                          <p className="tes">
                            Leverage agile frameworks to provide a robust synopsis for
                            high level overviews. Iterative in approaches to corporate
                            strategy data foster go to collaborative thinking.
                          </p>
                          <span className="line" />
                          <div className="icon-tes flex-five">
                            <i className="icon-Group-1000002944" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-content relative">
                          <div className="profile mb-15">
                            <h3 className="name">Piter Bowman</h3>
                            <span className="job">Business CEO</span>
                          </div>
                          <p className="tes">
                            Leverage agile frameworks to provide a robust synopsis for
                            high level overviews. Iterative in approaches to corporate
                            strategy data foster go to collaborative thinking.
                          </p>
                          <span className="line" />
                          <div className="icon-tes flex-five">
                            <i className="icon-Group-1000002944" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-content relative">
                          <div className="profile mb-15">
                            <h3 className="name">Piter Bowman</h3>
                            <span className="job">Business CEO</span>
                          </div>
                          <p className="tes">
                            Leverage agile frameworks to provide a robust synopsis for
                            high level overviews. Iterative in approaches to corporate
                            strategy data foster go to collaborative thinking.
                          </p>
                          <span className="line" />
                          <div className="icon-tes flex-five">
                            <i className="icon-Group-1000002944" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper testimonial-image">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide avata">
                        <img src={user1} alt="Image Testimonial" />
                      </div>
                      <div className="swiper-slide avata">
                        <img src={user2} alt="Image Testimonial" />
                      </div>
                      <div className="swiper-slide avata">
                        <img src={user3} alt="Image Testimonial" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Widget Testimonial */}
      </main>

    </Layout>
  )
}

export default HomePage

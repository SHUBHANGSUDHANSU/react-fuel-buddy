import { useState } from "react";

export default function AboutUs() {
  const [formStatus, setFormStatus] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formKey = form.getAttribute("data-form-key") || "default";

    setFormStatus((prev) => ({ ...prev, [formKey]: "loading" }));

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setFormStatus((prev) => ({ ...prev, [formKey]: "success" }));
      } else {
        setFormStatus((prev) => ({ ...prev, [formKey]: "error" }));
      }
    } catch (error) {
      setFormStatus((prev) => ({ ...prev, [formKey]: "error" }));
    }
  };
  return (
    <>
    <div id="cms-page" className="cms-page">
      <div className="cms-header-wraps">
        <header id="cms-header" className="cms-header header-layout2 is-sticky is-ontop header-ontop cms-header-bg">
          <div className="header-container container-wide">
            <div className="row justify-content-between">
              <div className="cms-header-logo col-auto align-self-center">
                <a className="logo-default" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="https://www.fuelbuddy.in/wp-content/uploads/2023/10/logo-12.png" alt="Fuelbuddy" />
                </a>
                <a className="logo-ontop" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="https://www.fuelbuddy.in/wp-content/uploads/2023/10/LOGO-3-2.png" alt="Fuelbuddy" />
                </a>
                <a className="logo-sticky" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="https://www.fuelbuddy.in/wp-content/uploads/2023/10/logo-12.png" alt="Fuelbuddy" />
                </a>
                <a className="logo-mobile" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="https://www.fuelbuddy.in/wp-content/uploads/2023/10/Screenshot-2023-10-25-at-16.42.41-1.png" alt="Fuelbuddy" />
                </a>
                <a className="logo-mobile-ontop" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="https://www.fuelbuddy.in/wp-content/uploads/2023/10/Screenshot-2023-10-25-at-16.42.41-1.png" alt="Fuelbuddy" />
                </a>
              </div>
              <div className="cms-navigation col">
                <div className="row align-items-center justify-content-end gutters-30">
                  <div className="cms-main-navigation col-12 col-desktop-auto">
                    <ul id="cms-primary-menu" className="cms-primary-menu clearfix">
                      <li id="menu-item-4497" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-4497">
                        <a href="/" className="cms-menu-link">
                          <span className="menu-title-wraps">
                            <span className="menu-title title">
                              Home
                            </span>
                          </span>
                        </a>
                      </li>
                      <li id="menu-item-4487" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-4487">
                        <a href="javascript:void(0)" data-toggle="submenu" className="cms-menu-link">
                          <span className="menu-title-wraps">
                            <span className="menu-title title">
                              Company
                            </span>
                            <span className="main-menu-toggle pl-5"></span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-4499" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-130 current_page_item menu-item-4499">
                            <a href="/about-us" aria-current="page" className="cms-menu-link">
                              <span className="menu-title-wraps">
                                <span className="menu-title title">
                                  About Us
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-6631" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6631">
                            <a href="/leadership-team" className="cms-menu-link">
                              <span className="menu-title-wraps">
                                <span className="menu-title title">
                                  Our Team
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-7250" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7250">
                            <a href="/careers" className="cms-menu-link">
                              <span className="menu-title-wraps">
                                <span className="menu-title title">
                                  Career
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-6022" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6022">
                        <a href="javascript:void(0)" data-toggle="submenu" className="cms-menu-link">
                          <span className="menu-title-wraps">
                            <span className="menu-title title">
                              Solution
                            </span>
                            <span className="main-menu-toggle pl-5"></span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-6030" className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-6030">
                            <a href="/solutions/buddy-can" className="cms-menu-link">
                              <span className="menu-title-wraps">
                                <span className="menu-title title">
                                  Buddy Can
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-6027" className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-6027">
                            <a href="/solutions/smart-tank" className="cms-menu-link">
                              <span className="menu-title-wraps">
                                <span className="menu-title title">
                                  Smart Tank
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-6028" className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-6028">
                            <a href="/solutions/diesel-on-tap" className="cms-menu-link">
                              <span className="menu-title-wraps">
                                <span className="menu-title title">
                                  DOT (Diesel on Tap)
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-6031" className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-6031">
                            <a href="/solutions/fb-vault" className="cms-menu-link">
                              <span className="menu-title-wraps">
                                <span className="menu-title title">
                                  FB-Vault
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-4489" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4489">
                        <a href="javascript:void(0)" data-toggle="submenu" className="cms-menu-link">
                          <span className="menu-title-wraps">
                            <span className="menu-title title">
                              News & Media
                            </span>
                            <span className="main-menu-toggle pl-5"></span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-8108" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8108">
                            <a href="/our-blog" className="cms-menu-link">
                              <span className="menu-title-wraps">
                                <span className="menu-title title">
                                  Our Blog
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-4512" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4512">
                            <a href="/awards-recognition" className="cms-menu-link">
                              <span className="menu-title-wraps">
                                <span className="menu-title title">
                                  Awards & Recognition
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-4518" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4518">
                        <a href="/contact-us" className="cms-menu-link">
                          <span className="menu-title-wraps">
                            <span className="menu-title title">
                              Contact Us
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cms-navigation-attrs has-atts col-auto align-self-end">
                <div className="row align-itemsx-center justify-xcontent-end gutters-20 gutters-desktop-60">
                  <div className="cms-header-btn cms-header-btn1 col-auto cms-hidden-tablet pb-15 pb-desktop-25">
                    <a href="/order-fuel" target="_self" className="h-btn btn btn-fill btn-hover-fill btn-primary btn-hover-accent text-white text-hover-white" data-classes={"{\"default\":\"btn-primary btn-hover-accent text-white text-hover-white\",\"ontop\":\"btn-white btn-hover-accent text-primary text-hover-white\"}"}>
                      <span className="cms-btn-content">
                        <span className="cms-btn-text">
                          Order Fuel
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="cms-header-btn cms-header-btn1 col-auto cms-hidden-desktop pb-15 pb-desktop-25">
                    <a href="/order-fuel" target="_self" className="h-btn btn btn-xs btn-fill btn-hover-fill btn-primary btn-hover-accent text-white text-hover-white" data-classes={"{\"default\":\"btn-primary btn-hover-accent text-white text-hover-white\",\"ontop\":\"btn-white btn-hover-accent text-primary text-hover-white\"}"}>
                      <span className="cms-btn-content">
                        <span className="cms-btn-icon order-last">
                          <span className="cmsi-arrow-right rtl-flip"></span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div id="main-menu-mobile" className="main-menu-mobile col-auto p-tb-15 pb-desktop-25">
                    <div className="main-menu-mobile">
                      <span className="btn-nav-mobile open-menu">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div id="cms-main" className="cms-main cms-main-elementor">
        <div className="cms-content-container elementor-container">
          <div data-elementor-type="wp-page" data-elementor-id="130" className="elementor elementor-130" data-elementor-post-type="page">
            <div className="elementor-section elementor-top-section elementor-element elementor-element-d5481f5 elementor-section-full_width elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-full-content-with-space-none cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="d5481f5" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-923b127" data-id="923b127" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-c3d895e cms-page-title-layout-4 elementor-widget elementor-widget-cms_page_title" data-id="c3d895e" data-element_type="widget" data-widget_type="cms_page_title.default">
                      <div className="elementor-widget-container">
                        <div className="cms-page-title-wrapper cms-overlay-gradient-1 text-center" style={{backgroundImage: "url(https://www.fuelbuddy.in/wp-content/uploads/2023/10/Untitled-design-170.png)"}}>
                          <div className="cms-page-title-overlay cms-page-title-gradient cms-overlay-gradient"></div>
                          <div className="extra-space-top pt-50 pt-tablet-90 pt-desktop-130"></div>
                          <div className="container">
                            <div className="row empty-none justify-content-center">
                              <div className="cms-page-title-content-col col-12 col-tablet-8 col-desktop-6">
                                <div className="cms-page-title-content">
                                  <h1 className="cms-mainheading cms-heading text-tablet-50 text-tablet-extra-75 lh-1/13 text-white">
                                    About Us 
                                    <div className="extra-space clearfix"></div>
                                  </h1>
                                  <div className="cms-desc text-17 font-700 pt-20 mt-n3 text-white">
                                    FuelBuddy is India’s first and largest mobile energy distribution platform focused on providing the right quality and quantity of fuel at the touch of a button. The company has established itself as an end-to-end service provider emphasising on managing the consumer’s fueling needs through their industry-first IoT and Cloud enabled products. 
                                    <br />
                                    <div className="extra-space clearfix"></div>
                                  </div>
                                  <div className="row gutters-30 gutters-grid align-items-center pt-30 empty-none justify-content-center">
                                    <div className="col-auto ml-10">
                                      <div className="cms-video-lightbox animated-normal" data-settings="[]" data-elementor-open-lightbox="yes" data-elementor-lightbox={"{\"type\":\"video\",\"videoType\":\"youtube\",\"url\":\"https:\\/\\/www.youtube.com\\/embed\\/6RDE7ynncLM?feature=oembed&loop=0&controls=1&mute=0&rel=0&modestbranding=0\",\"modalOptions\":{\"id\":\"cms-lightbox-c3d895e\",\"entranceAnimation\":\"slideInUp\",\"entranceAnimation_tablet\":\"\",\"entranceAnimation_mobile\":\"\",\"videoAspectRatio\":\"169\"}}"}>
                                        <div className="cms-video-lightbox-inner row align-items-center gutters-30">
                                          <div className="col-auto">
                                            <div className="cms-video-btn cms-ripple layout-ripple text-center bg-white bg-hover-accent text-primary text-hover-white size-68 cms-ripple size-68 cms-transition has-stroke">
                                              <div className="cms-video-btn-strokes cms-video-btn-stroke stroke- bdr-white"></div>
                                              <span className="cmsi-play"></span>
                                            </div>
                                          </div>
                                          <div className="empty-none font-700 lh-1 text-white col">
                                            How it works
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="extra-space-bottom pt-30 pt-tablet-60"></div>
                          <div className="cms-pagetitle-breadcrumb elementor-element pt-35 pb-30 relative">
                            <div className="container">
                              <div className="cms-breadcrumb justify-content-center text-14">
                                <div className="breadcrumb-item d-flex align-items-center">
                                  <a className="breadcrumb-link link-white" href="/">
                                    Home
                                  </a>
                                  <span className="breadcrumb-divider text-white cmsi-chevron-right rtl-flip"></span>
                                </div>
                                <div className="breadcrumb-item d-flex align-items-center">
                                  <span className="breadcrumb-text text-white">
                                    About Us
                                  </span>
                                  <span className="breadcrumb-divider text-white cmsi-chevron-right rtl-flip"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-64cdef5 e-flex e-con-boxed e-con e-parent" data-id="64cdef5" data-element_type="container" data-settings={"{\"content_width\":\"boxed\"}"} data-core-v316-plus="true">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-1bd2ef3 cms-heading-layout-4 elementor-widget elementor-widget-global elementor-global-6976 elementor-widget-cms_heading" data-id="1bd2ef3" data-element_type="widget" data-settings={"{\"_animation\":\"none\"}"} data-widget_type="cms_heading.default">
                  <div className="elementor-widget-container">
                    <div className="cms-heading-wrapper text-start">
                      <div className="row justify-content-center gutters-grid">
                        <div className="pl-desktop-130 pr-desktop-40 pb-15 col-desktop-9 col-tablet-8 col-12">
                          <h2 className="cms-mainheading heading mt-n5 text-tablet-40 lh-1/375 text-center text-heading elementor-invisible animated-normal" data-settings={"{\"_animation\":\"none\",\"animation_delay\":\"\"}"}>
                            Bharat’s most loved and trusted Doorstep Diesel Delivery Service
                            <br />
                            <div className="extra-space clearfix"></div>
                          </h2>
                        </div>
                        <div className="col-12 col-tablet-6 col-desktop-7 empty-none">
                          <div className="cms-video-lightbox relative animated-normal" data-settings="[]" data-elementor-open-lightbox="yes" data-elementor-lightbox={"{\"type\":\"video\",\"videoType\":\"youtube\",\"url\":\"https:\\/\\/www.youtube.com\\/embed\\/6RDE7ynncLM?feature=oembed&loop=0&controls=1&mute=0&rel=0&modestbranding=0\",\"modalOptions\":{\"id\":\"cms-lightbox-1bd2ef3\",\"entranceAnimation\":\"slideInUp\",\"entranceAnimation_tablet\":\"\",\"entranceAnimation_mobile\":\"\",\"videoAspectRatio\":\"169\"}}"}>
                            <div className="cms-image relative cms-image-as-bg" style={{backgroundImage: "url(https://www.fuelbuddy.in/wp-content/uploads/2023/10/india-website-banner-3.jpg)"}}>
                              <img fetchpriority="high" decoding="async" width="1200" height="900" src="https://www.fuelbuddy.in/wp-content/uploads/2023/10/india-website-banner-3.jpg" className="rtl-flip cms-img" alt="" srcSet="https://www.fuelbuddy.in/wp-content/uploads/2023/10/india-website-banner-3.jpg 1200w, https://www.fuelbuddy.in/wp-content/uploads/2023/10/india-website-banner-3-600x450.jpg 600w, https://www.fuelbuddy.in/wp-content/uploads/2023/10/india-website-banner-3-16x12.jpg 16w" sizes="(max-width: 1200px) 100vw, 1200px" />
                            </div>
                            <div className="cms-video-lightbox-inner absolute cms-abs-t-0 mt-n20 ml-n20 row align-items-center gutters-30">
                              <div className="col-auto">
                                <div className="cms-video-btn cms-ripple layout-ripple text-center bg-white bg-hover-primary text-primary text-hover-white-25 size-88 cms-transition has-stroke">
                                  <div className="cms-video-btn-strokes cms-video-btn-stroke stroke- bdr-white"></div>
                                  <span className="cmsi-play"></span>
                                </div>
                              </div>
                              <div className="empty-none font-700 lh-1 text-custom-1 col">
                                .
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-tablet-6 col-desktop-5 empty-none">
                          <div className="pl-desktop-70">
                            <div className="cms-desc cms-desc-bold text-17 font-700 mb-30 mt-n5 text-custom elementor-invisible animated-normal" data-settings={"{\"_animation\":\"none\",\"animation_delay\":\"\"}"}>
                              Your go-to solution for seamless fuelling experiences! 
                              <div className="extra-space clearfix"></div>
                            </div>
                            <div className="cms-desc text-17 mt-n5 text-body elementor-invisible animated-normal" data-settings={"{\"_animation\":\"none\",\"animation_delay\":\"\"}"}>
                              Searching for a faster, more efficient way to refuel ? Look no further than FuelBuddy. Our mission is to provide you with a seamless and secure experience, delivering the precise quality and quantity of diesel right at your fingertips. We're proud to be the industry's pioneers in IoT and Cloud-enabled solutions, dedicated to managing all your fuelling needs. 
                              <div className="extra-space clearfix"></div>
                            </div>
                            <div className="cms-fetures-wrap pt-30">
                              <div className="row">
                                <div className="cms-features cms-list col cms-list-1 icon-default">
                                  <div className="cms-list-item">
                                    <div className="cms-list-item-inner row gutters-20 align-items-center">
                                      <div className="col-auto">
                                        <span className="cms-icon-wrap cms-list-icon text-26 d-inline-block text-accent text-hover-accent">
                                          <span aria-hidden="true" className="cms-icon cmsi-check-circle-2"></span>
                                        </span>
                                      </div>
                                      <div className="col cms-list-content">
                                        <div className="cms-list-title text-thirdary text-16 font-700">
                                          Easy-to-use App
                                        </div>
                                        <div className="cms-list-item-divider bg-body"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cms-list-item">
                                    <div className="cms-list-item-inner row gutters-20 align-items-center">
                                      <div className="col-auto">
                                        <span className="cms-icon-wrap cms-list-icon text-26 d-inline-block text-accent text-hover-accent">
                                          <span aria-hidden="true" className="cms-icon cmsi-check-circle-2"></span>
                                        </span>
                                      </div>
                                      <div className="col cms-list-content">
                                        <div className="cms-list-title text-thirdary text-16 font-700">
                                          Championing on-time deliveries
                                        </div>
                                        <div className="cms-list-item-divider bg-body"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cms-list-item">
                                    <div className="cms-list-item-inner row gutters-20 align-items-center">
                                      <div className="col-auto">
                                        <span className="cms-icon-wrap cms-list-icon text-26 d-inline-block text-accent text-hover-accent">
                                          <span aria-hidden="true" className="cms-icon cmsi-check-circle-2"></span>
                                        </span>
                                      </div>
                                      <div className="col cms-list-content">
                                        <div className="cms-list-title text-thirdary text-16 font-700">
                                          Save Time & Money
                                        </div>
                                        <div className="cms-list-item-divider bg-body"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cms-list-item">
                                    <div className="cms-list-item-inner row gutters-20 align-items-center">
                                      <div className="col-auto">
                                        <span className="cms-icon-wrap cms-list-icon text-26 d-inline-block text-accent text-hover-accent">
                                          <span aria-hidden="true" className="cms-icon cmsi-check-circle-2"></span>
                                        </span>
                                      </div>
                                      <div className="col cms-list-content">
                                        <div className="cms-list-title text-thirdary text-16 font-700">
                                          Cashless Transactions
                                        </div>
                                        <div className="cms-list-item-divider bg-body"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cms-list-item">
                                    <div className="cms-list-item-inner row gutters-20 align-items-center">
                                      <div className="col-auto">
                                        <span className="cms-icon-wrap cms-list-icon text-26 d-inline-block text-accent text-hover-accent">
                                          <span aria-hidden="true" className="cms-icon cmsi-check-circle-2"></span>
                                        </span>
                                      </div>
                                      <div className="col cms-list-content">
                                        <div className="cms-list-title text-thirdary text-16 font-700">
                                          Smart Storage & Monitoring
                                        </div>
                                        <div className="cms-list-item-divider bg-body"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row gutters-grid pt-35">
                              <div className="cms-btn-wraps col-auto text-start">
                                <a href="#" className="btn btn-fill btn-primary text-white btn-hover-fill btn-hover-accent text-hover-white btn-lg w-mobile-auto w-extra-mobile-auto w-tablet-auto w-tablet-extra-100 w-laptop-100 w-widescreen-auto btn-no-icon cms-animate elementor-invisible" data-settings={"{\"_animation\":\"none\",\"animation\":\"none\",\"animation_delay\":300}"}>
                                  <span className="cms-btn-content justify-content-center">
                                    <span className="cms-icon-wrap cms-btn-icon order-last icon-outline- text-10 rtl-flip d-inline-block" title="Order Now">
                                      <span aria-hidden="true" className="cms-icon cmsi-arrow-right" title="Order Now"></span>
                                    </span>
                                    <span className="cms-btn-text text-center">
                                      Order Now 
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-4879650 e-flex e-con-boxed e-con e-parent" data-id="4879650" data-element_type="container" data-settings={"{\"background_background\":\"classic\",\"content_width\":\"boxed\"}"} data-core-v316-plus="true">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-4f714b8 cms-post-layout-2 cms-sliders-full-no elementor-widget elementor-widget-cms_post_carousel" data-id="4f714b8" data-element_type="widget" data-widget_type="cms_post_carousel.default">
                  <div className="elementor-widget-container">
                    <div className="cms-swiper-sliders">
                      <div className="cms-swiper-slider-wrap">
                        <div className="cms-swiper-container cms-swiper-arrows-false cms-swiper-arrows-laptop-false cms-swiper-arrows-tablet-extra-false cms-swiper-arrows-tablet-false cms-swiper-arrows-mobile-extra-false cms-swiper-arrows-mobile-false cms-swiper-arrows-icon-chevron cms-swiper-nav-in-vertical cms-swiper-dots-true cms-swiper-dots-tablet-true cms-swiper-dots-mobile-true cms-swiper-dots-color-primary cms-swiper-dots-color-hover-accent cms-swiper-dots-align-center cms-swiper-dots-align-tablet-center cms-swiper-dots-align-mobile-center cms-swiper-dots-out" dir="ltr" data-settings={"{\"slide_direction\":\"horizontal\",\"slide_percolumn\":1,\"slide_percolumnfill\":\"column\",\"slide_mode\":\"slide\",\"slides_to_show\":3,\"slides_to_show_widescreen\":3,\"slides_to_show_laptop\":3,\"slides_to_show_tablet_extra\":3,\"slides_to_show_tablet\":2,\"slides_to_show_mobile_extra\":2,\"slides_to_show_mobile\":1,\"slides_to_scroll\":3,\"slides_to_scroll_widescreen\":3,\"slides_to_scroll_laptop\":3,\"slides_to_scroll_tablet_extra\":3,\"slides_to_scroll_tablet\":2,\"slides_to_scroll_mobile_extra\":2,\"slides_to_scroll_mobile\":1,\"slides_gutter\":40,\"arrow\":\"false\",\"arrow_tablet\":\"false\",\"arrow_mobile\":\"false\",\"dots\":\"true\",\"dots_el\":\".cms-swiper-dots\",\"dots_tablet\":\"true\",\"dots_mobile\":\"true\",\"dots_style\":\"divider\",\"autoplay\":\"true\",\"pause_on_hover\":\"true\",\"pause_on_interaction\":\"true\",\"delay\":5000,\"loop\":\"true\",\"speed\":300}"}>
                          <div className="cms-swiper-wrapper swiper-wrapper">
                            <div className="cms-swiper-slide swiper-slide item-1">
                              <div className="cms-item-content relative pb-40 cms-media-gradient-1-parent">
                                <div className="cms-featured cms-post-standard relative cms-xmedia relative cms-media-gradient-1">
                                  <div className="post-image cms-post-image">
                                    <a href="#" title="7522About Us" rel="nofollow" className="d-block h-100">
                                      <img decoding="async" className="w-100 cms-img" src="https://www.fuelbuddy.in/wp-content/uploads/2024/02/23.jpg" width="400" height="500" alt="23" title="23" attrs="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="cms-item-content-inner bg-white p-tb-40 p-lr-20 p-lr-tablet-40 m-lr-10 m-lr-mobile-20 m-lr-tablet-30 cms-shadow-4 cms-radius-4 absolute cms-abs-b-0 text-center">
                                  <div className="cms-post-icon bg-accent circle cms-transition m-lr-auto">
                                    <span className="cmsi-chevron-up cms-post--icon cms-transition d-block text-white text-64"></span>
                                  </div>
                                  <div className="row gutters-15 align-items-center empty-none"></div>
                                  <h2 className="cms-item-content-title cms-heading text-21 lh-1/571 mb-10 pb-3 mt-n7">
                                    <a href="#">
                                      Doorstep Diesel Delivery
                                    </a>
                                  </h2>
                                  <div className="cms-item-content-excerpt empty-none text-16 lh-1/625 cms-transition">
                                    <div className="cms-post-excerpt">
                                       Industry and fleet-tailored solutions for HSD storage, monitoring, and dispensing. Say goodbye to 
                                    </div>
                                  </div>
                                  <div className="cms-btn-wraps cms-post-item-readmore cms-transition pt-15 mb-n7">
                                    <a href="#" className="cms-readmore text-accent text-hover-primary font-700 mb-n7">
                                      <span className="cms-btn-content justify-content-center">
                                        <span className="cms-btn-text">
                                          Explore More
                                        </span>
                                        <span className="cms-btn-icon">
                                          <span className="cmsi-arrow-right"></span>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cms-swiper-slide swiper-slide item-2">
                              <div className="cms-item-content relative pb-40 cms-media-gradient-1-parent">
                                <div className="cms-featured cms-post-standard relative cms-xmedia relative cms-media-gradient-1">
                                  <div className="post-image cms-post-image">
                                    <a href="/solutions/diesel-on-tap" title="678About Us" rel="nofollow" className="d-block h-100">
                                      <img decoding="async" className="w-100 cms-img" src="https://www.fuelbuddy.in/wp-content/uploads/2022/10/7.jpg" width="400" height="500" alt="7" title="7" attrs="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="cms-item-content-inner bg-white p-tb-40 p-lr-20 p-lr-tablet-40 m-lr-10 m-lr-mobile-20 m-lr-tablet-30 cms-shadow-4 cms-radius-4 absolute cms-abs-b-0 text-center">
                                  <div className="cms-post-icon bg-accent circle cms-transition m-lr-auto">
                                    <span className="cmsi-chevron-up cms-post--icon cms-transition d-block text-white text-64"></span>
                                  </div>
                                  <div className="row gutters-15 align-items-center empty-none"></div>
                                  <h2 className="cms-item-content-title cms-heading text-21 lh-1/571 mb-10 pb-3 mt-n7">
                                    <a href="/solutions/diesel-on-tap">
                                      DOT (Diesel on Tap)
                                    </a>
                                  </h2>
                                  <div className="cms-item-content-excerpt empty-none text-16 lh-1/625 cms-transition">
                                    <div className="cms-post-excerpt">
                                       Industry and fleet-tailored solutions for HSD storage, monitoring, and dispensing. Say goodbye to 
                                    </div>
                                  </div>
                                  <div className="cms-btn-wraps cms-post-item-readmore cms-transition pt-15 mb-n7">
                                    <a href="/solutions/diesel-on-tap" className="cms-readmore text-accent text-hover-primary font-700 mb-n7">
                                      <span className="cms-btn-content justify-content-center">
                                        <span className="cms-btn-text">
                                          Explore More
                                        </span>
                                        <span className="cms-btn-icon">
                                          <span className="cmsi-arrow-right"></span>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cms-swiper-slide swiper-slide item-3">
                              <div className="cms-item-content relative pb-40 cms-media-gradient-1-parent">
                                <div className="cms-featured cms-post-standard relative cms-xmedia relative cms-media-gradient-1">
                                  <div className="post-image cms-post-image">
                                    <a href="/solutions/smart-tank" title="676About Us" rel="nofollow" className="d-block h-100">
                                      <img loading="lazy" decoding="async" className="w-100 cms-img" src="https://www.fuelbuddy.in/wp-content/uploads/2022/10/9.jpg" width="400" height="500" alt="9" title="9" attrs="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="cms-item-content-inner bg-white p-tb-40 p-lr-20 p-lr-tablet-40 m-lr-10 m-lr-mobile-20 m-lr-tablet-30 cms-shadow-4 cms-radius-4 absolute cms-abs-b-0 text-center">
                                  <div className="cms-post-icon bg-accent circle cms-transition m-lr-auto">
                                    <span className="cmsi-chevron-up cms-post--icon cms-transition d-block text-white text-64"></span>
                                  </div>
                                  <div className="row gutters-15 align-items-center empty-none"></div>
                                  <h2 className="cms-item-content-title cms-heading text-21 lh-1/571 mb-10 pb-3 mt-n7">
                                    <a href="/solutions/smart-tank">
                                      Smart Tank
                                    </a>
                                  </h2>
                                  <div className="cms-item-content-excerpt empty-none text-16 lh-1/625 cms-transition">
                                    <div className="cms-post-excerpt">
                                       A PESO-approved, smart, and customised answer to expanding your fuel storage. Effectively control 
                                    </div>
                                  </div>
                                  <div className="cms-btn-wraps cms-post-item-readmore cms-transition pt-15 mb-n7">
                                    <a href="/solutions/smart-tank" className="cms-readmore text-accent text-hover-primary font-700 mb-n7">
                                      <span className="cms-btn-content justify-content-center">
                                        <span className="cms-btn-text">
                                          Explore More
                                        </span>
                                        <span className="cms-btn-icon">
                                          <span className="cmsi-arrow-right"></span>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cms-swiper-slide swiper-slide item-4">
                              <div className="cms-item-content relative pb-40 cms-media-gradient-1-parent">
                                <div className="cms-featured cms-post-standard relative cms-xmedia relative cms-media-gradient-1">
                                  <div className="post-image cms-post-image">
                                    <a href="/solutions/buddy-can" title="674About Us" rel="nofollow" className="d-block h-100">
                                      <img loading="lazy" decoding="async" className="w-100 cms-img" src="https://www.fuelbuddy.in/wp-content/uploads/2022/10/8.jpg" width="400" height="500" alt="8" title="8" attrs="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="cms-item-content-inner bg-white p-tb-40 p-lr-20 p-lr-tablet-40 m-lr-10 m-lr-mobile-20 m-lr-tablet-30 cms-shadow-4 cms-radius-4 absolute cms-abs-b-0 text-center">
                                  <div className="cms-post-icon bg-accent circle cms-transition m-lr-auto">
                                    <span className="cmsi-chevron-up cms-post--icon cms-transition d-block text-white text-64"></span>
                                  </div>
                                  <div className="row gutters-15 align-items-center empty-none"></div>
                                  <h2 className="cms-item-content-title cms-heading text-21 lh-1/571 mb-10 pb-3 mt-n7">
                                    <a href="/solutions/buddy-can">
                                      Buddy Can
                                    </a>
                                  </h2>
                                  <div className="cms-item-content-excerpt empty-none text-16 lh-1/625 cms-transition">
                                    <div className="cms-post-excerpt">
                                       Simplify fuel storage with our smart, PESO-approved 20-liter containers. Enjoy secure, leak-proof 
                                    </div>
                                  </div>
                                  <div className="cms-btn-wraps cms-post-item-readmore cms-transition pt-15 mb-n7">
                                    <a href="/solutions/buddy-can" className="cms-readmore text-accent text-hover-primary font-700 mb-n7">
                                      <span className="cms-btn-content justify-content-center">
                                        <span className="cms-btn-text">
                                          Explore More
                                        </span>
                                        <span className="cms-btn-icon">
                                          <span className="cmsi-arrow-right"></span>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cms-swiper-slide swiper-slide item-5">
                              <div className="cms-item-content relative pb-40 cms-media-gradient-1-parent">
                                <div className="cms-featured cms-post-standard relative cms-xmedia relative cms-media-gradient-1">
                                  <div className="post-image cms-post-image">
                                    <a href="/solutions/fb-vault" title="672About Us" rel="nofollow" className="d-block h-100">
                                      <img loading="lazy" decoding="async" className="w-100 cms-img" src="https://www.fuelbuddy.in/wp-content/uploads/2022/10/10.jpg" width="400" height="500" alt="10" title="10" attrs="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="cms-item-content-inner bg-white p-tb-40 p-lr-20 p-lr-tablet-40 m-lr-10 m-lr-mobile-20 m-lr-tablet-30 cms-shadow-4 cms-radius-4 absolute cms-abs-b-0 text-center">
                                  <div className="cms-post-icon bg-accent circle cms-transition m-lr-auto">
                                    <span className="cmsi-chevron-up cms-post--icon cms-transition d-block text-white text-64"></span>
                                  </div>
                                  <div className="row gutters-15 align-items-center empty-none"></div>
                                  <h2 className="cms-item-content-title cms-heading text-21 lh-1/571 mb-10 pb-3 mt-n7">
                                    <a href="/solutions/fb-vault">
                                      FB-Vault
                                    </a>
                                  </h2>
                                  <div className="cms-item-content-excerpt empty-none text-16 lh-1/625 cms-transition">
                                    <div className="cms-post-excerpt">
                                       The smooth running of vehicles is a must when it comes to logistics or going on trips. Uncover yo 
                                    </div>
                                  </div>
                                  <div className="cms-btn-wraps cms-post-item-readmore cms-transition pt-15 mb-n7">
                                    <a href="/solutions/fb-vault" className="cms-readmore text-accent text-hover-primary font-700 mb-n7">
                                      <span className="cms-btn-content justify-content-center">
                                        <span className="cms-btn-text">
                                          Explore More
                                        </span>
                                        <span className="cms-btn-icon">
                                          <span className="cmsi-arrow-right"></span>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cms-swiper-arrow cms-swiper-arrows-size-44 cms-swiper-arrows-shape-square square cms-swiper-arrows-outline-no text-accent text-hover-primary bg-transparent bg-hover-transparent cms-transition cms-swiper-arrow-prev">
                            <span className="cmsi-icon prev-icon"></span>
                          </div>
                          <div className="cms-swiper-arrow cms-swiper-arrows-size-44 cms-swiper-arrows-shape-square square cms-swiper-arrows-outline-no text-accent text-hover-primary bg-transparent bg-hover-transparent cms-transition cms-swiper-arrow-next">
                            <span className="cmsi-icon next-icon"></span>
                          </div>
                          <div className="row justify-content-between empty-none pt-30 mt-7">
                            <div className="col">
                              <div className="cms-swiper-dots cms-swiper-dots--dots cms-swiper-dots-color-primary cms-swiper-dots-color-hover-accent cms-swiper-dots-divider justify-content-center pt-0"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6358267 elementor-hidden-desktop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-id="6358267" data-element_type="container" data-settings={"{\"background_background\":\"classic\",\"content_width\":\"boxed\"}"} data-core-v316-plus="true">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-63e878a elementor-widget elementor-widget-cms_company_history" data-id="63e878a" data-element_type="widget" data-widget_type="cms_company_history.default">
                  <div className="elementor-widget-container">
                    <div className="cms-company-history">
                      <div className="history-content-items">
                        <div className="content-item">
                          <div className="left-content">
                            <span className="dot"></span>
                            <div className="timeline-year">
                              2016
                            </div>
                          </div>
                          <div className="right-content">
                            <div className="cms-heading text-19 timeline-title">
                              Founded in 2016
                            </div>
                            <p className="timeline-text">
                              He then traveled to Philadelphia, Pennsylvania to complete a Fellowship in Intervention Cardiology at Hahnemann Hospital in conjunction with Drexel University, where he received extensive training in coronary as well as peripheral interventions and salvage procedures. 
                            </p>
                          </div>
                        </div>
                        <div className="content-item">
                          <div className="left-content">
                            <span className="dot"></span>
                            <div className="timeline-year">
                              MyPetrol Pump
                            </div>
                          </div>
                          <div className="right-content">
                            <div className="cms-heading text-19 timeline-title">
                              Fellowship, Royal College of Physicians of Harvard
                            </div>
                            <p className="timeline-text">
                              After relocating to Louisiana he served as Director of the Cardiac Catheterization Lab at Regional Medical Center of Acadiana. He was honored by the Medical Association for Physician's Recognition Award from March of 2015 through May 2016.
                            </p>
                          </div>
                        </div>
                        <div className="content-item">
                          <div className="left-content">
                            <span className="dot"></span>
                            <div className="timeline-year">
                              2010
                            </div>
                          </div>
                          <div className="right-content">
                            <div className="cms-heading text-19 timeline-title">
                              Residency, St. Harvard University Hospital
                            </div>
                            <p className="timeline-text">
                              Dr has also had professional accomplishments at the University of Southern California School of Medicine and Medical Center including Instructor of Medicine, Chief Administrative Fellow, Division of Cardiology University of Southern California.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-section elementor-top-section elementor-element elementor-element-11aaef00 p-tb-40 pt-tablet-90 pb-tablet-80 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="11aaef00" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2e687288" data-id="2e687288" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-section elementor-inner-section elementor-element elementor-element-49f5b5dc pb-10 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="49f5b5dc" data-element_type="section">
                      <div className="cms-overlay-gradient"></div>
                      <div className="cms-section-boxed-bg"></div>
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-64d86369" data-id="64d86369" data-element_type="column">
                          <div className="elementor-widget-wrap"></div>
                        </div>
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-394c6393 p-lr-tablet-40" data-id="394c6393" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-5460700e cms-heading-layout-2 elementor-widget elementor-widget-cms_heading" data-id="5460700e" data-element_type="widget" data-widget_type="cms_heading.default">
                              <div className="elementor-widget-container">
                                <div className="cms-heading-wrapper text-center">
                                  <div className="cms-smallheading text-16 font-700 mt-n5 pb-10 text-accent">
                                    Taking Over The World’s Fuelling Needs 
                                    <div className="extra-space clearfix"></div>
                                  </div>
                                  <h2 className="cms-mainheading heading mt-n5 text-tablet-extra-37 lh-1/375 text-heading">
                                    1500+ PIN codes activated. Over 2000 successful fuel deliveries and counting! 
                                    <div className="extra-space clearfix"></div>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2515b766" data-id="2515b766" data-element_type="column">
                          <div className="elementor-widget-wrap"></div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-section elementor-inner-section elementor-element elementor-element-4e9ca455 pb-35 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="4e9ca455" data-element_type="section">
                      <div className="cms-overlay-gradient"></div>
                      <div className="cms-section-boxed-bg"></div>
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2709598b pr-desktop-40" data-id="2709598b" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-1ab893e cms-counters cms-counter-layout1 elementor-widget elementor-widget-global elementor-global-5312 elementor-widget-cms_counter" data-id="1ab893e" data-element_type="widget" data-widget_type="cms_counter.default">
                              <div className="elementor-widget-container">
                                <div className="row cms-counter-layout-grid cms-row-cols-1">
                                  <div className="cms-counter-wrap cms-counter-item">
                                    <div className="cms-counter-wrap-inner text-start row justify-content-start relative cms-animate-icon">
                                      <div className="cms-counter-number-wrapper col">
                                        <div className="cms-counter-number-wrap font-heading text-45 lh-1 pb-10 mt-n7 text-accent">
                                          <span className="cms-counter-number-prefix empty-none"></span>
                                          <span className="cms-counter-number" data-duration="4000" data-to-value="55" data-delimiter=".">
                                            1
                                          </span>
                                          <span className="cms-counter-number-suffix empty-none">
                                            K
                                          </span>
                                        </div>
                                        <div className="cms-counter-small-title cms-heading text-19 mb-n7 text-darken-primary empty-none">
                                          App Downloads
                                          <br />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cms-counter-wrap cms-counter-item">
                                    <div className="cms-counter-wrap-inner text-start row justify-content-start relative cms-animate-icon">
                                      <div className="cms-counter-number-wrapper col">
                                        <div className="cms-counter-number-wrap font-heading text-45 lh-1 pb-10 mt-n7 text-accent">
                                          <span className="cms-counter-number-prefix empty-none"></span>
                                          <span className="cms-counter-number" data-duration="4000" data-to-value="180" data-delimiter=".">
                                            1
                                          </span>
                                          <span className="cms-counter-number-suffix empty-none">
                                            +
                                          </span>
                                        </div>
                                        <div className="cms-counter-small-title cms-heading text-19 mb-n7 text-darken-primary empty-none cms-counter-small-title cms-heading text-19 mb-n7 text-darken-primary empty-none">
                                          Cities in India
                                          <br />
                                           UAE & Mozambique
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cms-counter-wrap cms-counter-item">
                                    <div className="cms-counter-wrap-inner text-start row justify-content-start relative cms-animate-icon">
                                      <div className="cms-counter-number-wrapper col">
                                        <div className="cms-counter-number-wrap font-heading text-45 lh-1 pb-10 mt-n7 text-accent">
                                          <span className="cms-counter-number-prefix empty-none">
                                            $
                                          </span>
                                          <span className="cms-counter-number" data-duration="4000" data-to-value="20" data-delimiter=".">
                                            1
                                          </span>
                                          <span className="cms-counter-number-suffix empty-none">
                                            M+
                                          </span>
                                        </div>
                                        <div className="cms-counter-small-title cms-heading text-19 mb-n7 text-darken-primary empty-none cms-counter-small-title cms-heading text-19 mb-n7 text-darken-primary empty-none cms-counter-small-title cms-heading text-19 mb-n7 text-darken-primary empty-none">
                                          <br />
                                           Recently raised Funding
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-383eebeb" data-id="383eebeb" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-a4ee36d elementor-widget__width-auto cms-locate-pointer cms-locate-pointer-layout-1 elementor-widget elementor-widget-global elementor-global-5315 elementor-widget-cms_locate_pointers" data-id="a4ee36d" data-element_type="widget" data-widget_type="cms_locate_pointers.default">
                              <div className="elementor-widget-container">
                                <div className="cms-imagepointers-wrapper">
                                  <div className="inner-content relative">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="777" height="418" src="https://www.fuelbuddy.in/wp-content/uploads/world-map3.png" className="w-100 cms-img" alt="" srcSet="https://www.fuelbuddy.in/wp-content/uploads/world-map3.png 777w, https://www.fuelbuddy.in/wp-content/uploads/world-map3-600x323.png 600w, https://www.fuelbuddy.in/wp-content/uploads/world-map3-18x10.png 18w" sizes="(max-width: 777px) 100vw, 777px" />
                                    </div>
                                    <div id="9115ef9" className="item-pointer holder-right elementor-repeater-item-9115ef9 active">
                                      <div className="item--inner">
                                        <div className="item--image cms-ripple size-28">
                                          <div className="item--pointer circle"></div>
                                        </div>
                                        <div className="item-holder absolute cms-transition">
                                          <div className="inner-holder cms-shadow-1 cms-radius-5 relative">
                                            <div className="item--excerpt">
                                              <div className="heading font-400 text-24 text-tablet-35 lh-1 text-accent mt-n5 mb-10 empty-none">
                                                India
                                              </div>
                                              <div className="text-16 font-700 mb-n5">
                                                180+ Cites
                                              </div>
                                            </div>
                                            <div className="inner-holder-arrow"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div id="bfa3caa" className="item-pointer holder-right elementor-repeater-item-bfa3caa">
                                      <div className="item--inner">
                                        <div className="item--image cms-ripple size-28">
                                          <div className="item--pointer circle"></div>
                                        </div>
                                        <div className="item-holder absolute cms-transition">
                                          <div className="inner-holder cms-shadow-1 cms-radius-5 relative">
                                            <div className="item--excerpt">
                                              <div className="heading font-400 text-24 text-tablet-35 lh-1 text-accent mt-n5 mb-10 empty-none">
                                                Dubai 
                                              </div>
                                              <div className="text-16 font-700 mb-n5">
                                                Coming Soon
                                              </div>
                                            </div>
                                            <div className="inner-holder-arrow"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div id="e418cdd" className="item-pointer holder-right elementor-repeater-item-e418cdd">
                                      <div className="item--inner">
                                        <div className="item--image cms-ripple size-28">
                                          <div className="item--pointer circle"></div>
                                        </div>
                                        <div className="item-holder absolute cms-transition">
                                          <div className="inner-holder cms-shadow-1 cms-radius-5 relative">
                                            <div className="item--excerpt">
                                              <div className="heading font-400 text-24 text-tablet-35 lh-1 text-accent mt-n5 mb-10 empty-none">
                                                Mozambique
                                              </div>
                                              <div className="text-16 font-700 mb-n5">
                                                Coming Soon
                                              </div>
                                            </div>
                                            <div className="inner-holder-arrow"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-section elementor-top-section elementor-element elementor-element-fb129d1 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="fb129d1" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fdef0be" data-id="fdef0be" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-36faf6b elementor-widget elementor-widget-spacer" data-id="36faf6b" data-element_type="widget" data-widget_type="spacer.default">
                      <div className="elementor-widget-container">
                        <style dangerouslySetInnerHTML={{ __html: `
                          /*! elementor - v3.18.0 - 08-12-2023 */ .elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-con{--container-widget-width:100%}.e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));--align-self:var(--container-widget-align-self,initial);--flex-shrink:0}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container{height:100%;width:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}.e-con-inner>.elementor-widget-spacer.elementor-widget-empty,.e-con>.elementor-widget-spacer.elementor-widget-empty{position:relative;min-height:22px;min-width:22px}.e-con-inner>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon,.e-con>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;padding:0;width:22px;height:22px}
                        ` }} />
                        <div className="elementor-spacer">
                          <div className="elementor-spacer-inner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2a2b866d e-flex e-con-boxed e-con e-parent" data-id="2a2b866d" data-element_type="container" data-settings={"{\"content_width\":\"boxed\"}"} data-core-v316-plus="true">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-1f6add8e e-con-full e-flex e-con e-child" data-id="1f6add8e" data-element_type="container" data-settings={"{\"content_width\":\"full\"}"}>
                  <div className="elementor-element elementor-element-4f8774c8 elementor-widget elementor-widget-heading" data-id="4f8774c8" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <style dangerouslySetInnerHTML={{ __html: `
                        /*! elementor - v3.18.0 - 08-12-2023 */ .elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}
                      ` }} />
                      <h2 className="elementor-heading-title elementor-size-default">
                        Frequently Asked Questions
                      </h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-6570a058 cms-accordions cms-accordion-layout-1 elementor-widget elementor-widget-global elementor-global-5462 elementor-widget-cms_accordion" data-id="6570a058" data-element_type="widget" data-widget_type="cms_accordion.default">
                    <div className="elementor-widget-container">
                      <div className="cms-accordion-buttons row gutters-30 gutters-grid align-items-center empty-none pb-50 pb-tablet-110"></div>
                      <div id="cms_accordion-6570a058" className="cms-accordion bdr-t-accent" data-icon-open="cmsi-chevron-down" data-icon-close="cmsi-chevron-right" data-icon-open-color="text-white" data-icon-close-color="text-white" data-title-color="body" data-title-hover-color="accent">
                        <div className="cms-accordion-item bdr-b-border active" data-target="#c2d5000">
                          <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-accent">
                            <div className="cms-ac-title-icon col-auto order-first">
                              <span className="cms-ac-title--icon rtl-flip cmsi-chevron-down text-white bg-accent active"></span>
                            </div>
                            <div className="cms-ac-title-text col text-19 font-600">
                              What is FuelBuddy?
                            </div>
                          </div>
                          <div id="c2d5000" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body" style={{display: "block"}}>
                            FuelBuddy is an online fuel delivery platform that provides doorstep delivery in a safe, reliable, and efficient way. You can place your order online and get fuel delivered to your location in specialized Refuellers (FuelBuddy Tankers) according to your chosen schedule. We are making refueling smarter!
                          </div>
                        </div>
                        <div className="cms-accordion-item bdr-b-border" data-target="#5090ecd">
                          <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-body">
                            <div className="cms-ac-title-icon col-auto order-first">
                              <span className="cms-ac-title--icon rtl-flip cmsi-chevron-right text-white bg-body"></span>
                            </div>
                            <div className="cms-ac-title-text col text-19 font-600">
                              Which areas are being served by FuelBuddy right now?
                            </div>
                          </div>
                          <div id="5090ecd" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body">
                            Fuel delivery services are available in Bangalore, Hyderabad, Delhi-NCR, Chennai, Kolkata, Pune, Navi Mumbai, Thane, Ahmedabad, Nasik, Lucknow, Kanpur and several tier 2 cities across India at present. 
                          </div>
                        </div>
                        <div className="cms-accordion-item bdr-b-border" data-target="#f52c1b1">
                          <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-body">
                            <div className="cms-ac-title-icon col-auto order-first">
                              <span className="cms-ac-title--icon rtl-flip cmsi-chevron-right text-white bg-body"></span>
                            </div>
                            <div className="cms-ac-title-text col text-19 font-600">
                              What are FuelBuddy’s hours of operation?
                            </div>
                          </div>
                          <div id="f52c1b1" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body">
                            Our vehicles operate and provide deliveries 24x7 round the clock. 
                          </div>
                        </div>
                        <div className="cms-accordion-item bdr-b-border" data-target="#d6ed083">
                          <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-body">
                            <div className="cms-ac-title-icon col-auto order-first">
                              <span className="cms-ac-title--icon rtl-flip cmsi-chevron-right text-white bg-body"></span>
                            </div>
                            <div className="cms-ac-title-text col text-19 font-600">
                              Where does FuelBuddy source its fuel from? 
                            </div>
                          </div>
                          <div id="d6ed083" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body">
                            FuelBuddy sources fuel from authorized and selected dealers of oil companies near your location. We follow a strict quality assurance program to ensure every drop of fuel is checked for quality before it gets loaded into our refuellers for delivery. We do not purchase or stock fuel before the delivery. Fuel is sourced only upon receiving orders from customers. 
                          </div>
                        </div>
                        <div className="cms-accordion-item bdr-b-border" data-target="#70b0267">
                          <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-body">
                            <div className="cms-ac-title-icon col-auto order-first">
                              <span className="cms-ac-title--icon rtl-flip cmsi-chevron-right text-white bg-body"></span>
                            </div>
                            <div className="cms-ac-title-text col text-19 font-600">
                              Can I schedule my future requirement for fuel instead of ordering when I need it? 
                            </div>
                          </div>
                          <div id="70b0267" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body">
                            We offer flexibility for scheduling orders. For fuel-on-call assistance, please reach out to us at 80 88 99 4444, and we'll be happy to assist you. 
                          </div>
                        </div>
                        <div className="cms-accordion-item bdr-b-border" data-target="#ec856f5">
                          <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-body">
                            <div className="cms-ac-title-icon col-auto order-first">
                              <span className="cms-ac-title--icon rtl-flip cmsi-chevron-right text-white bg-body"></span>
                            </div>
                            <div className="cms-ac-title-text col text-19 font-600">
                              What is Express Delivery? 
                            </div>
                          </div>
                          <div id="ec856f5" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body">
                            With Express Delivery, you can book orders in the current slot or the next slot - depending on the time of the booking. The estimated delivery time for the fuel delivery express orders is a minimum of 2 hours to a maximum of 4 hours, based on the time of order booking. 
                          </div>
                        </div>
                        <div className="cms-accordion-item bdr-b-border" data-target="#0e44503">
                          <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-body">
                            <div className="cms-ac-title-icon col-auto order-first">
                              <span className="cms-ac-title--icon rtl-flip cmsi-chevron-right text-white bg-body"></span>
                            </div>
                            <div className="cms-ac-title-text col text-19 font-600">
                              Is doorstep refueling a dangerous new concept? 
                            </div>
                          </div>
                          <div id="0e44503" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body">
                            Doorstep refueling is neither dangerous nor is it a new concept. Let us compare it with the more hazardous gas fuel LPG. Over 18 million metric tonnes of LPG is consumed in India. LPG is a pressurized gas with the risk of a BLEVE (Boiling Liquid Expanding Vapour Explosion) Despite that, it is safely delivered to homes by thousands of small trucks that carry 2,000 to 20,000 litres of LPG. LPG is also being delivered to many consumers in metro cities through piped connections to the consumer's kitchen. 
                            <br />
                            <br />
                             In comparison, we deliver liquid fuel in small tanks of less than 2,000 Litre capacity. Diesel and Petrol are not pressurized and are much safer to transport, especially in small quantities. Our operators are Hazmat trained, in addition to being extensively trained in the safe handling of fuel. Our refuellers are designed and fabricated as per guidelines in the Petroleum Act and Rules by PESO (Petroleum Explosive Safety Organization of India). Additionally, they are equipped with spill containment kits, fire extinguishers, and first aid to ensure complete compliance and safety. Doorstep delivery of fuel has already been implemented in countries like the USA, Canada, Australia, and New Zealand
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-35ad030f e-con-full e-flex e-con e-child" data-id="35ad030f" data-element_type="container" data-settings={"{\"content_width\":\"full\"}"}>
                  <div className="elementor-element elementor-element-8a6629a cms-form-field-border-grey4 cms-form-field-border-grey4 cms-cf7-layout-1 elementor-widget elementor-widget-global elementor-global-5465 elementor-widget-cms_ctf7" data-id="8a6629a" data-element_type="widget" data-settings={"{\"sticky\":\"top\",\"sticky_parent\":\"yes\",\"motion_fx_motion_fx_scrolling\":\"yes\",\"motion_fx_devices\":[\"desktop\",\"tablet_extra\",\"tablet\",\"mobile\"],\"sticky_on\":[\"desktop\",\"tablet_extra\",\"tablet\",\"mobile\"],\"sticky_offset\":0,\"sticky_effects_offset\":0}"} data-widget_type="cms_ctf7.default">
                    <div className="elementor-widget-container">
                      <div className="cms-cf7 relative p-tb-50 p-lr-20 p-lr-lg-50 bg-white cms-shadow-1 cms-radius-16">
                        <div className="cms-cf7-inner">
                          <div className="cms-banner">
                            <div className="cms-cf7-banner-inner">
                              <div className="cms-form-desc mb-25 text-body">
                                Please complete the form below, to request a quote, and we’ll be in touch. Or you can call us 8088994444 and our specialists will provide the necessary help!
                                <br />
                                <div className="extra-space clearfix"></div>
                              </div>
                            </div>
                          </div>
                          <div className="wpcf7 no-js" id="wpcf7-f1514-p130-o1" lang="en-US" dir="ltr">
                            <div className="screen-reader-response">
                              <p role="status" aria-live="polite" aria-atomic="true"></p>
                              <ul></ul>
                            </div>
                            <form action="https://formspree.io/f/xkoowlbe" method="post" className="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init" data-form-key="about-us" onSubmit={handleSubmit}>
                              <input type="hidden" name="form_source" value="About Us - Quote Form" />
                              <div style={{display: "none"}}>
                                <input type="hidden" name="_wpcf7" value="1514" />
                                <input type="hidden" name="_wpcf7_version" value="5.9.3" />
                                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1514-p130-o1" />
                                <input type="hidden" name="_wpcf7_container_post" value="130" />
                                <input type="hidden" name="_wpcf7_posted_data_hash" />
                              </div>
                              <div className="row gutters-30">
                                <div className="col-12 col-tablet-6 pb-20">
                                  <p>
                                    <label>
                                      <span className="label-inner">
                                        First Name*
                                      </span>
                                      <span className="wpcf7-form-control-wrap" data-name="first_name">
                                        <input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="First Name" type="text" name="first_name" />
                                      </span>
                                    </label>
                                  </p>
                                </div>
                                <div className="col-12 col-tablet-6 pb-20">
                                  <p>
                                    <label>
                                      <span className="label-inner">
                                        Last Name*
                                      </span>
                                      <span className="wpcf7-form-control-wrap" data-name="last_name">
                                        <input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Last Name" type="text" name="last_name" />
                                      </span>
                                    </label>
                                  </p>
                                </div>
                                <div className="col-12 col-tablet-6 pb-20">
                                  <p>
                                    <label>
                                      <span className="label-inner">
                                        Email Address*
                                      </span>
                                      <span className="wpcf7-form-control-wrap" data-name="email">
                                        <input size="40" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email Address" type="email" name="email" />
                                      </span>
                                    </label>
                                  </p>
                                </div>
                                <div className="col-12 col-tablet-6 pb-20">
                                  <p>
                                    <label>
                                      <span className="label-inner">
                                        Phone Number*
                                      </span>
                                      <span className="wpcf7-form-control-wrap" data-name="mobile_number">
                                        <input size="40" className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel" aria-required="true" aria-invalid="false" placeholder="+91XXXXXXXXXX" type="tel" name="mobile_number" />
                                      </span>
                                    </label>
                                  </p>
                                </div>
                                <div className="col-12 col-tablet pt-10">
                                  <p>
                                    <label>
                                      <br />
                                      <span className="wpcf7-form-control-wrap" data-name="TermsofService">
                                        <span className="wpcf7-form-control wpcf7-acceptance optional">
                                          <span className="wpcf7-list-item">
                                            <label>
                                              <input type="checkbox" name="TermsofService" value="1" aria-invalid="false" />
                                              <span className="wpcf7-list-item-label">
                                                By checking this box, you agree to be bound by our 
                                                <a href="#refund" className="text-accent text-hover-primary">
                                                  Terms of Service
                                                </a>
                                                 and our 
                                                <a href="#privacy" className="text-accent text-hover-primary">
                                                  Privacy Policy.
                                                </a>
                                              </span>
                                            </label>
                                          </span>
                                        </span>
                                      </span>
                                      <br />
                                    </label>
                                  </p>
                                </div>
                                <div className="col-12 col-tablet-auto pt-15">
                                  <p>
                                    <div className="cms-submit">
                                      <button className="wpcf7-form-control wpcf7-submit btn btn-fill btn-xl btn-primary text-white btn-hover-accent text-hover-white" type="submit">
                                        <span className="cms-btn-content justify-content-center">
                                          <span className="cms-btn-text">
                                            Submit Request
                                          </span>
                                        </span>
                                      </button>
                                    </div>
                                    {formStatus["about-us"] === "loading" && (
                                      <div style={{ marginTop: 12 }}>
                                        Sending...
                                      </div>
                                    )}
                                    {formStatus["about-us"] === "success" && (
                                      <div style={{ color: "#1a7f37", marginTop: 12 }}>
                                        Thank you! We will get back to you soon.
                                      </div>
                                    )}
                                    {formStatus["about-us"] === "error" && (
                                      <div style={{ color: "#c0392b", marginTop: 12 }}>
                                        Sorry, something went wrong. Please try again.
                                      </div>
                                    )}
                                  </p>
                                </div>
                              </div>
                              <p></p>
                              <p style={{display: "none"}} className="akismet-fields-container" data-prefix="_wpcf7_ak_">
                                <label>
                                  Δ
                                  <textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea>
                                </label>
                                <input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="171" />
                              </p>
                              <div className="wpcf7-response-output" aria-hidden="true"></div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cms-footer" className="cms-footer relative cms-footer-elementor">
        <div data-elementor-type="wp-post" data-elementor-id="232" className="elementor elementor-232" data-elementor-post-type="cms-footer">
          <div className="elementor-section elementor-top-section elementor-element elementor-element-388e550 bg-secondary p-tb-40 p-tb-tablet-70 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="388e550" data-element_type="section" data-settings={"{\"background_background\":\"classic\"}"}>
            <div className="cms-overlay-gradient"></div>
            <div className="cms-section-boxed-bg"></div>
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-aaf8a20" data-id="aaf8a20" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-f69c071 cms-quick-contact-layout-2 elementor-widget elementor-widget-cms_quickcontact" data-id="f69c071" data-element_type="widget" data-widget_type="cms_quickcontact.default">
                    <div className="elementor-widget-container">
                      <div className="cms-qc-wrap justify-content-start text-body">
                        <div className="cms-qc-inner">
                          <h4 className="cms-mainheading cms-heading text-17 font-600 mt-n5 mb-40 text-white">
                            Quick Contact 
                            <div className="extra-space clearfix"></div>
                          </h4>
                          <div className="cms-desc text-14 mb-20 text-white">
                            If you have any questions or need help, feel free to contact with our team. 
                            <div className="extra-space clearfix"></div>
                          </div>
                          <div className="cms-qc-lists row gutters-10 gutters-grid">
                            <div className="cms-qc-list elementor-repeater-item-95f540b col-12">
                              <div className="qc-line-1 empty-none">
                                <div className="cms-contact-text text-ellipsis cms-heading font-400 text-17 text-accent">
                                  <a className="cms-contact-link link-accent link-hover-white" href="mailto:support@fuelbuddy.in">
                                    <span className="cms-icon-wrap text-accent text-16 pr-10 d-inline-block cms-icon-animate cms-transition">
                                      <span aria-hidden="true" className="cms-icon cmsi cmsi-email"></span>
                                    </span>
                                    support@fuelbuddy.in
                                  </a>
                                </div>
                              </div>
                              <div className="qc-line-2 empty-none"></div>
                            </div>
                            <div className="cms-qc-list elementor-repeater-item-79886e6 col-12">
                              <div className="qc-line-1 empty-none">
                                <div className="cms-contact-text text-ellipsis cms-heading font-400 text-17 text-accent">
                                  <a className="cms-contact-link link-accent link-hover-white" href="tel:8088994444">
                                    <span className="cms-icon-wrap text-accent text-16 pr-10 d-inline-block cms-icon-animate cms-transition">
                                      <span aria-hidden="true" className="cms-icon cmsi cmsi-phone-alt-2"></span>
                                    </span>
                                    +91-8088994444
                                  </a>
                                </div>
                              </div>
                              <div className="qc-line-2 empty-none"></div>
                            </div>
                          </div>
                          <div className="qc-maps pt-20">
                            <div className="cms-mapadd text-14 text-body">
                              Treis Solutions Private Limited First Floor, Tower B, Quattro Towers, Plot no 249D, Udyog vihar Phase 4, Gurugram, Haryana-122016. 
                              <div className="extra-space clearfix"></div>
                            </div>
                            <a href="https://www.google.com/maps/place/FuelBuddy/@28.4967704,77.0811352,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce33a4c66cbc5:0xd66957f76553542d!8m2!3d28.4967657!4d77.0837155!16s%2Fg%2F11fkf5tf7c?authuser=0&entry=ttu" target="_blank" className="mt-20 d-block"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-3ff34c6 pl-xl-30" data-id="3ff34c6" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-e0874a1 cms-menu-layout-1 elementor-widget elementor-widget-cms_menu" data-id="e0874a1" data-element_type="widget" data-widget_type="cms_menu.default">
                    <div className="elementor-widget-container">
                      <div className="cms-menu-wraps relative">
                        <h4 className="cms-largeheading cms-heading mt-n5 mb-7 text-18 text-white">
                          <a className="menu-heading" href="">
                            Company
                          </a>
                          <div className="extra-space clearfix"></div>
                        </h4>
                        <div className="menu-company-footer-container">
                          <ul id="menu-company-footer" className="cms-menu cms-menu-vert -">
                            <li id="menu-item-4492" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-130 current_page_item menu-item-4492">
                              <a href="/about-us" aria-current="page" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
                                <span className="menu-title title">
                                  About Us
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-8642" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8642">
                              <a href="/privacy-policy" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
                                <span className="menu-title title">
                                  Privacy Policy
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-4496" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4496">
                              <a href="#" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
                                <span className="menu-title title">
                                  Our Products
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-9fe9a74" data-id="9fe9a74" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-b8fcaed cms-menu-layout-1 elementor-widget elementor-widget-cms_menu" data-id="b8fcaed" data-element_type="widget" data-widget_type="cms_menu.default">
                    <div className="elementor-widget-container">
                      <div className="cms-menu-wraps relative">
                        <h4 className="cms-largeheading cms-heading mt-n5 mb-7 text-18 text-white">
                          <a className="menu-heading" href="">
                            Solutions
                          </a>
                          <div className="extra-space clearfix"></div>
                        </h4>
                        <div className="menu-solutions-footer-container">
                          <ul id="menu-solutions-footer" className="cms-menu cms-menu-vert -">
                            <li id="menu-item-4506" className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4506">
                              <a href="/solutions/diesel-on-tap" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
                                <span className="menu-title title">
                                  DOT (Diesel on Tap)
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-4507" className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4507">
                              <a href="/solutions/smart-tank" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
                                <span className="menu-title title">
                                  Smart Tank
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-4508" className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4508">
                              <a href="/solutions/buddy-can" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
                                <span className="menu-title title">
                                  Buddy Can
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-4509" className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4509">
                              <a href="/solutions/fb-vault" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
                                <span className="menu-title title">
                                  FB-Vault
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-6acb9ad elementor-hidden-desktop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile" data-id="6acb9ad" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-b0ec130 cms-menu-layout-1 elementor-widget elementor-widget-cms_menu" data-id="b0ec130" data-element_type="widget" data-widget_type="cms_menu.default">
                    <div className="elementor-widget-container">
                      <div className="cms-menu-wraps relative">
                        <h4 className="cms-largeheading cms-heading mt-n5 mb-7 text-18 text-white">
                          <a className="menu-heading" href="">
                            Industries
                          </a>
                          <div className="extra-space clearfix"></div>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-959a5dc" data-id="959a5dc" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-5608f66 cms-download-layout-2 elementor-widget elementor-widget-cms_download" data-id="5608f66" data-element_type="widget" data-widget_type="cms_download.default">
                    <div className="elementor-widget-container">
                      <div className="cms-downloads text-end text-mobile-start">
                        <h2 className="cms-heading text-17 mt-n5 mb-40 text-white">
                          Download Our App 
                          <div className="extra-space clearfix"></div>
                        </h2>
                        <div className="cms-desc text-14 mb-20 text-white">
                          Download now to order diesel at your doorstep. We are here to make the procurement of diesel a smooth and smarter process. 
                          <div className="extra-space clearfix"></div>
                        </div>
                        <div className="row gutters-10 gutters-grid justify-content-end justify-content-mobile-start-max"></div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-5b7efce elementor-widget elementor-widget-html" data-id="5b7efce" data-element_type="widget" data-widget_type="html.default">
                    <div className="elementor-widget-container">
                      <div style={{display: "flex"}}>
                        <a href="https://fuelbuddy.app.link/QyzwczcStGb" style={{display: "inline-block", overflow: "hidden", borderRadius: "10px", marginRight: "15px"}}>
                          <img src="https://www.fuelbuddy.in/wp-content/uploads/2024/01/ios_app_store___newww.png" alt="Download on the App Store" style={{borderRadius: "10px", width: "150px", height: "45px"}} />
                        </a>
                        <a href="https://fuelbuddy.app.link/QyzwczcStGb" style={{display: "inline-block", overflow: "hidden", borderRadius: "10px", marginRight: "4px"}}>
                          <img src="https://www.fuelbuddy.in/wp-content/uploads/2024/01/google_play_store___Newwww.png" alt="Download on the App Store" style={{borderRadius: "10px", width: "150px", height: "45px"}} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-section elementor-top-section elementor-element elementor-element-83b9ade p-tb-25 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="83b9ade" data-element_type="section">
            <div className="cms-overlay-gradient"></div>
            <div className="cms-section-boxed-bg"></div>
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-dc66c9c" data-id="dc66c9c" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-41526c0 cms-menu-layout-2 elementor-widget elementor-widget-cms_menu" data-id="41526c0" data-element_type="widget" data-widget_type="cms_menu.default">
                    <div className="elementor-widget-container">
                      <div className="cms-menu-wraps relative">
                        <div className="menu-footer-menu-container">
                          <ul id="menu-footer-menu" className="cms-menu cms-menu-horz cms-menu-separator cms-menu-separator-divider cms-menu-separator-primary justify-content-start">
                            <li id="menu-item-4503" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4503">
                              <a href="/terms-conditions" className="cms-menu-link link-default link-hover-default bg-transparent bg-hover-transparent cms-transition">
                                <span className="menu-title title">
                                  Terms & Conditions
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-45b4053 cms-copyright-layout-1 elementor-widget elementor-widget-cms_copyright" data-id="45b4053" data-element_type="widget" data-widget_type="cms_copyright.default">
                    <div className="elementor-widget-container">
                      <div className="cms-copyright-text - text-body">
                         ©2023 Fuelbuddy, All Rights Reserved.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7c45c99 cms-column-element-horizontal" data-id="7c45c99" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-d1a3ae7 cms-socials cms-socials-layout-1 elementor-widget elementor-widget-cms_socials" data-id="d1a3ae7" data-element_type="widget" data-widget_type="cms_socials.default">
                    <div className="elementor-widget-container">
                      <div className="cms-socials-wrap">
                        <div className="row gutters-10 gutters-grid -">
                          <div className="cms-social cms-social-item col-auto">
                            <a className="cms-icon-wrap social-icon text-20 bg-transparent bg-hover-accent circle text-primary text-hover-white size-40 d-inline-block text-primary cms-icon-animate cms-transition" href="https://www.facebook.com/FuelBuddy.Official" target="_blank" title="Facebook">
                              <span aria-hidden="true" className="cms-icon cmsi-facebook" title="Facebook"></span>
                            </a>
                          </div>
                          <div className="cms-social cms-social-item col-auto">
                            <a className="cms-icon-wrap social-icon text-20 bg-transparent bg-hover-accent circle text-primary text-hover-white size-40 d-inline-block text-primary cms-icon-animate cms-transition" href="https://x.com/fuelbuddy_india" target="_blank" title="Twitter">
                              <span aria-hidden="true" className="cms-icon cmsi-twitter-circle" title="Twitter"></span>
                            </a>
                          </div>
                          <div className="cms-social cms-social-item col-auto">
                            <a className="cms-icon-wrap social-icon text-20 bg-transparent bg-hover-accent circle text-primary text-hover-white size-40 d-inline-block text-primary cms-icon-animate cms-transition" href="https://www.linkedin.com/company/fuelbuddy/" target="_blank" title="Linkedin">
                              <span aria-hidden="true" className="cms-icon cmsi-linkedin-circle" title="Linkedin"></span>
                            </a>
                          </div>
                          <div className="cms-social cms-social-item col-auto">
                            <a className="cms-icon-wrap social-icon text-20 bg-transparent bg-hover-accent circle text-primary text-hover-white size-40 d-inline-block text-primary cms-icon-animate cms-transition" href="https://www.instagram.com/fuelbuddy.official/" title="Instagram">
                              <span aria-hidden="true" className="cms-icon cmsi cmsi-instagram" title="Instagram"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-f2edafd cms-scrolltop-layout-2 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-cms_anchor" data-id="f2edafd" data-element_type="widget" data-widget_type="cms_anchor.default">
                    <div className="elementor-widget-container">
                      <div className="text-start">
                        <a className="cms-anchor d-flex align-items-center text-start text-primary text-hover-accent bg-white bg-hover-white" href="#cms-page">
                           Back To Top
                          <span className="text-12 pl-20">
                            <span className="cms-icon-wrap cms-anchor-icon rtl-flip d-block d-inline-block cms-icon-animate cms-transition">
                              <span aria-hidden="true" className="cms-icon cmsi-arrow-up-2"></span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="cms-search-popup" className="cms-search-popup cms-modal-html cms-transition bg-white">
      <div className="cms-modal-close cms-transition">
        <span className="cmsi-remove"></span>
      </div>
      <div className="cms-search-popup-inner cms-modal-inner container">
        <form role="search" method="get" className="cms-search-form cms-search-form-popup" action="https://www.fuelbuddy.in/">
          <input type="search" className="cms-search-field" placeholder="Type Words Then Enter" name="s" />
          <button type="submit" className="cms-search-submit" value="Search"></button>
        </form>
      </div>
    </div>
    <link rel="stylesheet" id="elementor-post-232-css" href="#" media="all" />
    </>
  )
}

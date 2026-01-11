import { useState } from "react";

export default function ContactUs() {
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
        <header id="cms-header" className="cms-header header-layout2 is-sticky cms-header-bg">
          <div className="header-container container-wide">
            <div className="row justify-content-between">
              <div className="cms-header-logo col-auto align-self-center">
                <a className="logo-default" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="./wp-content/uploads/2023/10/logo-12.png" alt="Fuelbuddy" />
                </a>
                <a className="logo-ontop" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="./wp-content/uploads/2023/10/LOGO-3-2.png" alt="Fuelbuddy" />
                </a>
                <a className="logo-sticky" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="./wp-content/uploads/2023/10/logo-12.png" alt="Fuelbuddy" />
                </a>
                <a className="logo-mobile" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="./wp-content/uploads/2023/10/Screenshot-2023-10-25-at-16.42.41-1.png" alt="Fuelbuddy" />
                </a>
                <a className="logo-mobile-ontop" href="/" title="Fuelbuddy" rel="home">
                  <img className="cms-logo" src="./wp-content/uploads/2023/10/Screenshot-2023-10-25-at-16.42.41-1.png" alt="Fuelbuddy" />
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
                      <li id="menu-item-4487" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4487">
                        <a data-toggle="submenu" href="javascript:void(0)" className="cms-menu-link">
                          <span className="menu-title-wraps">
                            <span className="menu-title title">
                              Company
                            </span>
                            <span className="main-menu-toggle pl-5"></span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-4499" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4499">
                            <a href="/about-us" className="cms-menu-link">
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
                        <a data-toggle="submenu" href="javascript:void(0)" className="cms-menu-link">
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
                        <a data-toggle="submenu" href="javascript:void(0)" className="cms-menu-link">
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
                      <li id="menu-item-4518" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-152 current_page_item menu-item-4518">
                        <a href="/contact-us" aria-current="page" className="cms-menu-link">
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
          <div data-elementor-type="wp-page" data-elementor-id="152" className="elementor elementor-152" data-elementor-post-type="page">
            <div className="elementor-section elementor-top-section elementor-element elementor-element-ab3e497 elementor-section-full_width elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-full-content-with-space-none cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="ab3e497" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-20d45d6" data-id="20d45d6" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-c2c328e cms-maps-layout-2 cms-accordions cms-accordion-layout-2 elementor-widget elementor-widget-cms_map" data-id="c2c328e" data-element_type="widget" data-widget_type="cms_map.default">
                      <div className="elementor-widget-container">
                        <div className="cms-map-wrapper relative cms-map-height d-flex align-items-center text-start">
                          <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Plot%20no%20249D%2C%20Quattro%20Towers%2C%20First%20Floor%2C%20Tower%20B%2C%20Phase%20IV%2C%20Gurugram%2C%20Haryana%20122016&t=m&z=14&output=embed&iwloc=near" title="Plot no 249D, Quattro Towers, First Floor, Tower B, Phase IV, Gurugram, Haryana 122016" aria-label="Plot no 249D, Quattro Towers, First Floor, Tower B, Phase IV, Gurugram, Haryana 122016" className="cms-map-iframe cms-map-height absolute w-100"></iframe>
                          <div className="map-container relative z-top">
                            <div className="bg-accent cms-heading text-19 cms-radius-t-2 p-30 text-white">
                              Global Locations 
                              <div className="extra-space clearfix"></div>
                            </div>
                            <div className="p-lr-20 p-lr-tablet-30 cms-accordion bdr-t-accent relative z-top bg-white cms-radius-b-2" id="cms_map-c2c328e" data-icon-open="cmsi-minus" data-icon-close="cmsi-plus" data-icon-open-color="text-white" data-icon-close-color="text-white" data-title-color="primary" data-title-hover-color="accent">
                              <div className="cms-accordion-item bdr-b-border active" data-target="#942a03d">
                                <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-accent">
                                  <div className="cms-ac-title-icon col-auto order-last">
                                    <span className="cms-ac-title--icon rtl-flip cmsi-minus text-white bg-accent active"></span>
                                  </div>
                                  <div className="cms-ac-title-text col text-19 font-700">
                                    Headquarters - India
                                  </div>
                                </div>
                                <div id="942a03d" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body text-14 lh-32" style={{display: "block"}}>
                                  Phone :- 8088994444
                                  <br />
                                   Email: support@fuelbuddy.in
                                  <br />
                                  <br />
                                   Plot no 249D, Quattro Towers, First Floor, Tower B, Phase IV, Gurugram, Haryana 122016
                                </div>
                              </div>
                              <div className="cms-accordion-item bdr-b-border" data-target="#1387aff">
                                <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-primary">
                                  <div className="cms-ac-title-icon col-auto order-last">
                                    <span className="cms-ac-title--icon rtl-flip cmsi-plus text-white bg-primary"></span>
                                  </div>
                                  <div className="cms-ac-title-text col text-19 font-700">
                                    India - Bangalore 
                                  </div>
                                </div>
                                <div id="1387aff" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body text-14 lh-32">
                                  Phone :- 8088994444
                                  <br />
                                   Email: support@fuelbuddy.in
                                  <br />
                                  <br />
                                   27th CROSS, Hosapalya Main Rd, ITI Layout, Sector 7, HSR Layout, Bengaluru, Karnataka 560102
                                </div>
                              </div>
                              <div className="cms-accordion-item bdr-b-border" data-target="#b25735c">
                                <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-primary">
                                  <div className="cms-ac-title-icon col-auto order-last">
                                    <span className="cms-ac-title--icon rtl-flip cmsi-plus text-white bg-primary"></span>
                                  </div>
                                  <div className="cms-ac-title-text col text-19 font-700">
                                    UAE - Dubai
                                  </div>
                                </div>
                                <div id="b25735c" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body text-14 lh-32">
                                  Phone: 800FUELBUDDY
                                  <br />
                                   Email: order@fuelbuddy.ae
                                  <br />
                                  <br />
                                   Address: Al Sharafi Building 101 Opposite Mussala Towers, Near Al Fahidi Metro Station, Bur Dubai, UAE
                                </div>
                              </div>
                              <div className="cms-accordion-item bdr-b-border" data-target="#6a3c1e9">
                                <div className="cms-ac-title row gutters-20 justify-content-between align-items-center text-hover-accent cms-transition text-primary">
                                  <div className="cms-ac-title-icon col-auto order-last">
                                    <span className="cms-ac-title--icon rtl-flip cmsi-plus text-white bg-primary"></span>
                                  </div>
                                  <div className="cms-ac-title-text col text-19 font-700">
                                    Mozambique
                                  </div>
                                </div>
                                <div id="6a3c1e9" className="cms-ac-content mb-n3 pl-40 pr-20 pt-15 text-body text-hover-body text-14 lh-32">
                                  Coming Soon
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
            <div className="elementor-section elementor-top-section elementor-element elementor-element-2056fd4 p-tb-40 pt-tablet-110 pb-tablet-90 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="2056fd4" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-e6dec98 elementor-hidden-tablet elementor-hidden-mobile" data-id="e6dec98" data-element_type="column">
                  <div className="elementor-widget-wrap"></div>
                </div>
                <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-0d3f81d" data-id="0d3f81d" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-cc25a4c cms-cf7-layout-3 elementor-widget elementor-widget-cms_ctf7" data-id="cc25a4c" data-element_type="widget" data-widget_type="cms_ctf7.default">
                      <div className="elementor-widget-container">
                        <div className="d-flex justify-content-center text-center">
                          <div className="cms-element-heading w-100 pb-50">
                            <div className="cms-smallheading font-700 text-16 mt-n5 pb-15 text-accent">
                              <div>
                                <span style={{color: "var(--color-accent)"}}>
                                  Get In Touch with us!
                                </span>
                                <span style={{color: "var(--color-accent)"}}></span>
                              </div>
                              <div className="extra-space clearfix"></div>
                            </div>
                            <h2 className="cms-mainheading cms-heading text-tablet-extra-37 text-heading">
                              <span style={{color: "rgb(51, 51, 51)", fontFamily: "\"trebuchet ms\", sans-serif", fontSize: "18px", textAlign: "start", whiteSpaceCollapse: "collapse"}}>
                                Thank you for your interest in FuelBuddy's services. Please provide the following information about your business needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 48 hours.
                              </span>
                              <div className="extra-space clearfix"></div>
                            </h2>
                          </div>
                        </div>
                        <div className="cms-cf7 relative bg-transparent">
                          <div className="cms-cf7-inner">
                            <div className="cms-banner">
                              <div className="cms-cf7-banner-inner"></div>
                            </div>
                            <div className="wpcf7 no-js" id="wpcf7-f3341-p152-o1" lang="en-US" dir="ltr">
                              <div className="screen-reader-response">
                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                <ul></ul>
                              </div>
                              <form action="https://formspree.io/f/xkoowlbe" method="post" className="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init" data-form-key="contact-us" onSubmit={handleSubmit}>
                                <input type="hidden" name="form_source" value="Contact Us" />
                                <div style={{display: "none"}}>
                                  <input type="hidden" name="_wpcf7" value="3341" />
                                  <input type="hidden" name="_wpcf7_version" value="5.9.3" />
                                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f3341-p152-o1" />
                                  <input type="hidden" name="_wpcf7_container_post" value="152" />
                                  <input type="hidden" name="_wpcf7_posted_data_hash" />
                                </div>
                                <div className="row gutters-30 gutters-grid">
                                  <div className="col-tablet-4">
                                    <p>
                                      <span className="wpcf7-form-control-wrap" data-name="your-name">
                                        <input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name" type="text" name="your-name" />
                                      </span>
                                    </p>
                                  </div>
                                  <div className="col-tablet-4">
                                    <p>
                                      <span className="wpcf7-form-control-wrap" data-name="your-email">
                                        <input size="40" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" type="email" name="your-email" />
                                      </span>
                                    </p>
                                  </div>
                                  <div className="col-tablet-4">
                                    <p>
                                      <span className="wpcf7-form-control-wrap" data-name="phone">
                                        <input size="40" className="wpcf7-form-control wpcf7-tel wpcf7-text wpcf7-validates-as-tel" aria-invalid="false" placeholder="Phone" type="tel" name="phone" />
                                      </span>
                                    </p>
                                  </div>
                                  <div className="col-12">
                                    <p>
                                      <span className="wpcf7-form-control-wrap" data-name="your-message">
                                        <textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Additional Details" name="your-message"></textarea>
                                      </span>
                                    </p>
                                  </div>
                                  <p>
                                    [recaptcha] 
                                  </p>
                                  <div className="col-12 text-center mt-10">
                                    <p>
                                      <div className="cms-submit">
                                        <button className="wpcf7-form-control wpcf7-submit btn btn-fill btn-xl btn-accent text-white btn-hover-primary text-hover-white" type="submit">
                                          <span className="cms-btn-content justify-content-center">
                                            <span className="wpcf7-submit-icon cms-btn-icon">
                                              <span className="cmsi-arrow-circle-right rtl-flip text-26"></span>
                                            </span>
                                            <span className="cms-btn-text">
                                              Submit Request
                                            </span>
                                          </span>
                                        </button>
                                      </div>
                                      {formStatus["contact-us"] === "loading" && (
                                        <div style={{ marginTop: 12 }}>
                                          Sending...
                                        </div>
                                      )}
                                      {formStatus["contact-us"] === "success" && (
                                        <div style={{ color: "#1a7f37", marginTop: 12 }}>
                                          Thank you! We will get back to you soon.
                                        </div>
                                      )}
                                      {formStatus["contact-us"] === "error" && (
                                        <div style={{ color: "#c0392b", marginTop: 12 }}>
                                          Sorry, something went wrong. Please try again.
                                        </div>
                                      )}
                                    </p>
                                  </div>
                                </div>
                                <p style={{display: "none"}} className="akismet-fields-container" data-prefix="_wpcf7_ak_">
                                  <label>
                                    Δ
                                    <textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea>
                                  </label>
                                  <input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="96" />
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
                <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-9f0efb6 elementor-hidden-tablet elementor-hidden-mobile" data-id="9f0efb6" data-element_type="column">
                  <div className="elementor-widget-wrap"></div>
                </div>
              </div>
            </div>
            <div className="elementor-section elementor-top-section elementor-element elementor-element-735ce596 p-tb-40 pt-tablet-110 pb-tablet-80 cms-overlay-gradient-secondary cms-overlay-gradient-mode-tb elementor-reverse-tablet_extra elementor-reverse-tablet elementor-reverse-mobile elementor-hidden-desktop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-bg-yes" data-id="735ce596" data-element_type="section" data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-61d26955 pr-desktop-110" data-id="61d26955" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-3056c964 cms-heading-layout-10 elementor-widget elementor-widget-cms_heading" data-id="3056c964" data-element_type="widget" data-widget_type="cms_heading.default">
                      <div className="elementor-widget-container">
                        <div className="cms-heading-wrapper text-start">
                          <div className="cms-smallheading text-16 font-700 mt-n7 pb-20 text-accent elementor-invisible animated-normal" data-settings={"{\"_animation\":\"fadeInUp\",\"animation_delay\":\"\"}"}>
                            EV Charging Solutions Made Very Simple! 
                            <div className="extra-space clearfix"></div>
                          </div>
                          <h2 className="cms-mainheading cms-heading text-tablet-40 mt-n7 text-white elementor-invisible animated-normal" data-settings={"{\"_animation\":\"fadeInUp\",\"animation_delay\":\"\"}"}>
                            We Are Pioneering Flexible Ways To Make EV Mobility Your Easy Choice. 
                            <div className="extra-space clearfix"></div>
                          </h2>
                          <div className="cms-desc text-17 font-700 pt-70 text-white elementor-invisible animated-normal" data-settings={"{\"_animation\":\"fadeInUp\",\"animation_delay\":\"\"}"}>
                            In today’s economy where many services are easily accessible and costs are transparent, it’s no surprise that drivers are having high expectations to pay for power usage in a fast and reliable way is precisely what electric drivers are expecting. As a result, the demand for charging stations is too. 
                            <div className="extra-space clearfix"></div>
                          </div>
                          <div className="cms-desc text-17 pt-25 text-custom-2 elementor-invisible animated-normal" data-settings={"{\"_animation\":\"fadeInUp\",\"animation_delay\":\"\"}"}>
                            We have developed a solution tailored to the needs of all modern drivers: a smooth customer experience, fast and easy payment and perfectly aligned with your processes. 
                            <div className="extra-space clearfix"></div>
                          </div>
                          <div className="cms-fetures-wrap pt-50">
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
                                      <div className="cms-list-title text-white text-16 font-700">
                                        Reducing CO2 emissions by manufacturing locally
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
                                      <div className="cms-list-title text-white text-16 font-700">
                                        Global supply chain for continuous improvement
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
                                      <div className="cms-list-title text-white text-16 font-700">
                                        Real-Time Tracking, 24/7 Hours Support For All Clients
                                      </div>
                                      <div className="cms-list-item-divider bg-body"></div>
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
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4ad0bbe7" data-id="4ad0bbe7" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-3b7bbbcc cms-counters cms-counter-layout3 cms-sticky cms-swiper-nav-color-hover-white cms-sliders-full-no elementor-invisible elementor-widget elementor-widget-cms_counter" data-id="3b7bbbcc" data-element_type="widget" data-settings={"{\"_animation\":\"fadeInUp\"}"} data-widget_type="cms_counter.default">
                      <div className="elementor-widget-container">
                        <div className="cms-counter-slider cms-swiper-sliders">
                          <div className="cms-swiper-slider-wrap">
                            <div className="cms-swiper-container cms-swiper-arrows-true cms-swiper-arrows-laptop-true cms-swiper-arrows-tablet-extra-true cms-swiper-arrows-tablet-true cms-swiper-arrows-mobile-extra-true cms-swiper-arrows-mobile-true cms-swiper-arrows-icon-chevron cms-swiper-nav-bottom-end cms-swiper-dots-false cms-swiper-dots-tablet-false cms-swiper-dots-mobile-false cms-swiper-dots-color-primary cms-swiper-dots-color-hover-accent cms-swiper-dots-align-center cms-swiper-dots-align-tablet-center cms-swiper-dots-align-mobile-center cms-swiper-dots-out" dir="ltr" data-settings={"{\"slide_direction\":\"horizontal\",\"slide_percolumn\":1,\"slide_percolumnfill\":\"column\",\"slide_mode\":\"slide\",\"slides_to_show\":1,\"slides_to_show_widescreen\":1,\"slides_to_show_laptop\":1,\"slides_to_show_tablet_extra\":1,\"slides_to_show_tablet\":1,\"slides_to_show_mobile_extra\":1,\"slides_to_show_mobile\":1,\"slides_to_scroll\":1,\"slides_to_scroll_widescreen\":1,\"slides_to_scroll_laptop\":1,\"slides_to_scroll_tablet_extra\":1,\"slides_to_scroll_tablet\":1,\"slides_to_scroll_mobile_extra\":1,\"slides_to_scroll_mobile\":1,\"slides_gutter\":40,\"arrow\":\"true\",\"arrow_tablet\":\"true\",\"arrow_mobile\":\"true\",\"dots\":\"false\",\"dots_el\":\".cms-swiper-dots\",\"dots_tablet\":\"false\",\"dots_mobile\":\"false\",\"dots_style\":\"divider\",\"autoplay\":\"true\",\"pause_on_hover\":\"true\",\"pause_on_interaction\":\"true\",\"delay\":2000,\"loop\":\"true\",\"speed\":300}"}>
                              <div className="cms-swiper-wrapper swiper-wrapper">
                                <div className="cms-counter-wrap relative text-start cms-counter-item cms-swiper-slide swiper-slide">
                                  <div className="cms-counter-banner">
                                    <div className="cms-image relative cms-gradient-primary pt-150 pt-mobile-100 pt-tablet-0 cms-image-as-bg" style={{backgroundImage: "url(./wp-content/uploads/2024/02/20.jpg)"}}>
                                      <img fetchpriority="high" decoding="async" className="- cms-img" src="./wp-content/uploads/2024/02/20.jpg" width="620" height="450" alt="FuelBuddy" title="FuelBuddy" attrs="" />
                                    </div>
                                    <div className="cms-circle-text relative p-0 overflow-hidden absolute cms-abs-t-0 cms-abs-r-0" style={{width: "120px", height: "120px"}}>
                                      <div className="cms-overlay circle bg-transparent opacity-100"></div>
                                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve" className="cms-spin text-30 text-normal font-700 letter-spacing-8">
                                        <defs>
                                          <path id="cms-criclePath" d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0"></path>
                                        </defs>
                                        <circle cx="150" cy="150" r="150" fill="transparent"></circle>
                                        <g>
                                          <use xlink:href="#cms-criclePath" fill="none"></use>
                                          <text fill="accent">
                                            <textpath xlink:href="#cms-criclePath">
                                              Manufacture High Quality Products
                                            </textpath>
                                          </text>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="cms-counter-content cms-radius-8 absolute cms-abs-b-40 cms-abs-l-40 p-40 bg-white cms-shadow-1">
                                    <div className="cms-counter-number-wrapper mb-15">
                                      <div className="text-white empty-none">
                                        <div className="cms-counter-icon text-64 lh-1 mb-30 bg-accent cms-radius-2 text-center">
                                          <div className="cms-icon-wrap d-inline-block cms-icon-animate cms-transition">
                                            <span aria-hidden="true" className="cms-icon evwayicon- evway-icon-green-energy"></span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="cms-counter-number-wrap font-heading text-45 lh-1 text-accent mt-7">
                                        <span className="cms-counter-number-prefix empty-none"></span>
                                        <span className="cms-counter-number" data-duration="4000" data-to-value="980" data-delimiter=".">
                                          1
                                        </span>
                                        <span className="cms-counter-number-suffix empty-none">
                                          K
                                        </span>
                                      </div>
                                    </div>
                                    <div className="cms-counter-small-title text-19 cms-heading mt-7 mb-n7 text-heading empty-none">
                                      Electric Vehicle Owners
                                    </div>
                                    <div className="cms-triangle white"></div>
                                  </div>
                                </div>
                                <div className="cms-counter-wrap relative text-start cms-counter-item cms-swiper-slide swiper-slide">
                                  <div className="cms-counter-banner">
                                    <div className="cms-image relative cms-gradient-primary pt-150 pt-mobile-100 pt-tablet-0 cms-image-as-bg" style={{backgroundImage: "url(./wp-content/uploads/2024/02/20.jpg)"}}>
                                      <img fetchpriority="high" decoding="async" className="- cms-img" src="./wp-content/uploads/2024/02/20.jpg" width="620" height="450" alt="FuelBuddy" title="FuelBuddy" attrs="" />
                                    </div>
                                    <div className="cms-circle-text relative p-0 overflow-hidden absolute cms-abs-t-0 cms-abs-r-0" style={{width: "120px", height: "120px"}}>
                                      <div className="cms-overlay circle bg-transparent opacity-100"></div>
                                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve" className="cms-spin text-30 text-normal font-700 letter-spacing-8">
                                        <defs>
                                          <path id="cms-criclePath" d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0"></path>
                                        </defs>
                                        <circle cx="150" cy="150" r="150" fill="transparent"></circle>
                                        <g>
                                          <use xlink:href="#cms-criclePath" fill="none"></use>
                                          <text fill="accent">
                                            <textpath xlink:href="#cms-criclePath">
                                              Manufacture High Quality Products
                                            </textpath>
                                          </text>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="cms-counter-content cms-radius-8 absolute cms-abs-b-40 cms-abs-l-40 p-40 bg-white cms-shadow-1">
                                    <div className="cms-counter-number-wrapper mb-15">
                                      <div className="text-white empty-none text-white empty-none">
                                        <div className="cms-counter-icon text-64 lh-1 mb-30 bg-accent cms-radius-2 text-center">
                                          <div className="cms-icon-wrap d-inline-block cms-icon-animate cms-transition">
                                            <span aria-hidden="true" className="cms-icon evwayicon- evway-icon-place"></span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="cms-counter-number-wrap font-heading text-45 lh-1 text-accent mt-7">
                                        <span className="cms-counter-number-prefix empty-none"></span>
                                        <span className="cms-counter-number" data-duration="4000" data-to-value="30" data-delimiter=".">
                                          1
                                        </span>
                                        <span className="cms-counter-number-suffix empty-none">
                                          K
                                        </span>
                                      </div>
                                    </div>
                                    <div className="cms-counter-small-title text-19 cms-heading mt-7 mb-n7 text-heading empty-none cms-counter-small-title text-19 cms-heading mt-7 mb-n7 text-heading empty-none">
                                      Charging Ports Worldwide
                                    </div>
                                    <div className="cms-triangle white"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="cms-swiper-dots cms-swiper-dots--dots cms-swiper-dots-color-primary cms-swiper-dots-color-hover-accent cms-swiper-dots-divider justify-content-center"></div>
                              <div className="cms-swiper-arrows cms-swiper-arrows-bottom cms-swiper-arrows-icon-chevron d-flex justify-content-end cms-swiper-arrows-outline-no">
                                <div className="cms-swiper-arrow cms-swiper-arrows-size-44 cms-swiper-arrows-shape-square square cms-swiper-arrows-outline-no text-accent text-hover-white bg-transparent bg-hover-transparent cms-transition cms-swiper-arrow-prev">
                                  <span className="cmsi-icon rtl-flip prev-icon"></span>
                                </div>
                                <div className="cms-swiper-arrow cms-swiper-arrows-size-44 cms-swiper-arrows-shape-square square cms-swiper-arrows-outline-no text-accent text-hover-white bg-transparent bg-hover-transparent cms-transition cms-swiper-arrow-next">
                                  <span className="cmsi-icon rtl-flip next-icon"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-70aaf012" data-id="70aaf012" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-50a4c62f cms-ctas cms-cta-layout-2 pt-15 elementor-invisible elementor-widget elementor-widget-cms_cta" data-id="50a4c62f" data-element_type="widget" data-settings={"{\"_animation\":\"fadeInUp\"}"} data-widget_type="cms_cta.default">
                      <div className="elementor-widget-container">
                        <div className="cms-cta-wrap row gutters-40 gutters-grid align-items-center text-center justify-content-center">
                          <div className="col-12 col-md-8 col-tablet-5">
                            <div className="row align-items-center gutters-10 gutters-grid">
                              <div className="col-12">
                                <div className="cms-desc font-700 text-white">
                                  These reports and publications are based on the data available at the time of publication available from our businesses. 
                                  <span className="cms-link text-start">
                                    <a href="http://7oroof.com/tfdemos/evway/wp-content/uploads/CMS-Brochure.pdf" target="_blank" className="cms--link d-inline-block text-accent text-hover-white bottom-line-no">
                                      <span className="cms-btn-content">
                                        <span className="cms-icon-wrap cms-link-icon cms-align-icon-right text- text-hover-inherit rtl-flip order-right icon-outline-no text-10 d-inline-block">
                                          <span aria-hidden="true" className="cms-icon cmsi cmsi-arrow-right"></span>
                                        </span>
                                        <span className="cms-btn-text">
                                          Download 2024 Report
                                        </span>
                                      </span>
                                    </a>
                                  </span>
                                  <div className="extra-space clearfix"></div>
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
            <div className="elementor-element elementor-element-c406472 e-flex e-con-boxed e-con e-parent" data-id="c406472" data-element_type="container" data-settings={"{\"content_width\":\"boxed\"}"} data-core-v316-plus="true">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-a0c9a5f elementor-widget elementor-widget-shortcode" data-id="a0c9a5f" data-element_type="widget" data-widget_type="shortcode.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div data-elementor-type="section" data-elementor-id="5325" className="elementor elementor-5325" data-elementor-post-type="elementor_library">
                        <div className="elementor-section elementor-top-section elementor-element elementor-element-4f7c71ca pt-90 pt-tablet-150 pb-40 pb-tablet-70 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="4f7c71ca" data-element_type="section">
                          <div className="cms-overlay-gradient"></div>
                          <div className="cms-section-boxed-bg"></div>
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-65b221a0" data-id="65b221a0" data-element_type="column">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-507360e cms-counters cms-counter-layout4 elementor-widget elementor-widget-cms_counter" data-id="507360e" data-element_type="widget" data-widget_type="cms_counter.default">
                                  <div className="elementor-widget-container">
                                    <div className="cms-counter-wrap">
                                      <div className="cms-counter-wrap-inner text-start row justify-content-start relative">
                                        <div className="cms-counter-number-wrapper col">
                                          <div className="relative mb-10">
                                            <div className="cms-counter-icon text-117 lh-1 ml-n30">
                                              <div className="opacity-40 text-lighten-accent empty-none">
                                                <div className="cms-icon-wrap d-inline-block cms-icon-animate cms-transition">
                                                  <span aria-hidden="true" className="cms-icon cmsi-double-quotes-square-rounded-up"></span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="cms-counter-number-wrap absolute left cms-abs-t-0 text-82 font-heading text-accent lh-1 pt-20 text-accent">
                                              <span className="cms-counter-number-prefix empty-none"></span>
                                              <span className="cms-counter-number" data-duration="4000" data-to-value="98" data-delimiter=".">
                                                1
                                              </span>
                                              <span className="cms-counter-number-suffix empty-none">
                                                %
                                              </span>
                                            </div>
                                          </div>
                                          <h2 className="cms-counter-title cms-heading text-25 text-primary empty-none">
                                            Customer Satisfaction
                                          </h2>
                                          <div className="cms-desc cms-counter-desc font-700 pt-15 text-body empty-none">
                                            Based on 33,000 reviews and over 55,000 happy customers who deeply trust us.
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-4ab50c6d pl-desktop-90" data-id="4ab50c6d" data-element_type="column">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-657b3ced cms-testimonial-layout-4 cms-sliders-full-no elementor-widget elementor-widget-cms_testimonial" data-id="657b3ced" data-element_type="widget" data-widget_type="cms_testimonial.default">
                                  <div className="elementor-widget-container">
                                    <div className="cms-ttmn-wrapper">
                                      <div className="cms-ttmn-slider cms-swiper-slider">
                                        <div className="cms-swiper-slider-wrap">
                                          <div className="cms-swiper-container cms-swiper-arrows-false cms-swiper-arrows-laptop-false cms-swiper-arrows-tablet-extra-false cms-swiper-arrows-tablet-false cms-swiper-arrows-mobile-extra-false cms-swiper-arrows-mobile-false cms-swiper-arrows-icon-chevron cms-swiper-nav-in-vertical cms-swiper-dots-true cms-swiper-dots-tablet-true cms-swiper-dots-mobile-true cms-swiper-dots-color-custom-2 cms-swiper-dots-color-hover-accent cms-swiper-dots-align-center cms-swiper-dots-align-tablet-center cms-swiper-dots-align-mobile-center cms-swiper-dots-out" dir="ltr" data-settings={"{\"slide_direction\":\"horizontal\",\"slide_percolumn\":1,\"slide_percolumnfill\":\"column\",\"slide_mode\":\"slide\",\"slides_to_show\":2,\"slides_to_show_widescreen\":2,\"slides_to_show_laptop\":2,\"slides_to_show_tablet_extra\":2,\"slides_to_show_tablet\":2,\"slides_to_show_mobile_extra\":2,\"slides_to_show_mobile\":1,\"slides_to_scroll\":2,\"slides_to_scroll_widescreen\":2,\"slides_to_scroll_laptop\":2,\"slides_to_scroll_tablet_extra\":2,\"slides_to_scroll_tablet\":2,\"slides_to_scroll_mobile_extra\":2,\"slides_to_scroll_mobile\":1,\"slides_gutter\":40,\"arrow\":\"false\",\"arrow_tablet\":\"false\",\"arrow_mobile\":\"false\",\"dots\":\"true\",\"dots_el\":\".cms-swiper-dots\",\"dots_tablet\":\"true\",\"dots_mobile\":\"true\",\"dots_style\":\"divider\",\"autoplay\":\"true\",\"pause_on_hover\":\"true\",\"pause_on_interaction\":\"true\",\"delay\":2000,\"loop\":\"true\",\"speed\":300}"} data-customdothtml={"<div class=\"dot-item dot-item-0 row align-items-center gutters-20 gutters-grid\"></div>,<div class=\"dot-item dot-item-1 row align-items-center gutters-20 gutters-grid\"></div>,<div class=\"dot-item dot-item-2 row align-items-center gutters-20 gutters-grid\"></div>,<div class=\"dot-item dot-item-3 row align-items-center gutters-20 gutters-grid\"></div>,<div class=\"dot-item dot-item-4 row align-items-center gutters-20 gutters-grid\"></div>,<div class=\"dot-item dot-item-5 row align-items-center gutters-20 gutters-grid\"></div>"}>
                                            <div className="cms-swiper-wrapper swiper-wrapper">
                                              <div className="cms-swiper-slide swiper-slide">
                                                <div className="ttmn-text-wrap relative pt-70 pb-50 p-lr-30 p-lr-mobile-50 mt-40 bg-white relative cms-radius-8 cms-shadow-1">
                                                  <div className="absolute cms-abs-t-0 mt-n30 cms-abs-l-50 d-flex">
                                                    <div className="cms-image relative">
                                                      <img decoding="async" className="default-thumb circle cms-img" src="./wp-content/themes/evway/assets/images/placeholder/placeholder-60x60.jpg" width="60" height="60" alt="Fuelbuddy" />
                                                    </div>
                                                  </div>
                                                  <div className="row justify-content-between pb-40 empty-none"></div>
                                                  <div className="cms-ttmn-title cms-heading text-20 text-tablet-extra-25 pb-20 mt-n7 mb-n7">
                                                    Devyani International Ltd 
                                                  </div>
                                                  <div className="cms-ttmn-desc font-500i text-17 text-tablet-extra-21 lh-1/667 text-darken-primary mt-n7 mb-n7">
                                                    FuelBuddy helps us run our KFC and Pizza Hut outlets smoothly with worry-free fuel delivery. They're more than just a supplier, they're a partner. 
                                                  </div>
                                                  <div className="row gutters-grid pt-30 align-items-center empty-none"></div>
                                                  <div className="cms-triangle absolute cms-abs-b-0 cms-abs-l-50 mb-n20"></div>
                                                </div>
                                                <div className="row gutters-grid align-items-center pt-40 pl-30">
                                                  <div className="col-auto">
                                                    <div className="cms-ttmn-author cms-heading text-18 text-heading">
                                                      Sanjay Gupta 
                                                    </div>
                                                    <div className="cms-ttmn-position text-14 text-body">
                                                      General Manager Supply Chain
                                                    </div>
                                                  </div>
                                                  <div className="cms-star-ratings row align-items-center gutters-20 col">
                                                    <div className="col-auto">
                                                      <div className="cms-star-rating relative">
                                                        <div className="cms-star-rated absolute text-rating" data-width="100" style={{width: "100%"}}></div>
                                                      </div>
                                                    </div>
                                                    <div className="col empty-none text-16 font-700"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="cms-swiper-slide swiper-slide">
                                                <div className="ttmn-text-wrap relative pt-70 pb-50 p-lr-30 p-lr-mobile-50 mt-40 bg-white relative cms-radius-8 cms-shadow-1">
                                                  <div className="absolute cms-abs-t-0 mt-n30 cms-abs-l-50 d-flex">
                                                    <div className="cms-image relative">
                                                      <img decoding="async" className="default-thumb circle cms-img" src="./wp-content/themes/evway/assets/images/placeholder/placeholder-60x60.jpg" width="60" height="60" alt="Fuelbuddy" />
                                                    </div>
                                                  </div>
                                                  <div className="row justify-content-between pb-40 empty-none"></div>
                                                  <div className="cms-ttmn-title cms-heading text-20 text-tablet-extra-25 pb-20 mt-n7 mb-n7">
                                                    Prem Motors 
                                                  </div>
                                                  <div className="cms-ttmn-desc font-500i text-17 text-tablet-extra-21 lh-1/667 text-darken-primary mt-n7 mb-n7">
                                                    It is really great experience to be a part of FuelBuddy family. We appreciate your immediate action towards our response of diesel requirement for our generators. We would like to continue to use doorstep diesel delivery for my company. 
                                                  </div>
                                                  <div className="row gutters-grid pt-30 align-items-center empty-none"></div>
                                                  <div className="cms-triangle absolute cms-abs-b-0 cms-abs-l-50 mb-n20"></div>
                                                </div>
                                                <div className="row gutters-grid align-items-center pt-40 pl-30">
                                                  <div className="col-auto">
                                                    <div className="cms-ttmn-author cms-heading text-18 text-heading">
                                                      Manish Yadav -
                                                    </div>
                                                    <div className="cms-ttmn-position text-14 text-body">
                                                      Trasport Supervisor
                                                    </div>
                                                  </div>
                                                  <div className="cms-star-ratings row align-items-center gutters-20 col">
                                                    <div className="col-auto">
                                                      <div className="cms-star-rating relative">
                                                        <div className="cms-star-rated absolute text-rating" data-width="100" style={{width: "100%"}}></div>
                                                      </div>
                                                    </div>
                                                    <div className="col empty-none text-16 font-700"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="cms-swiper-slide swiper-slide">
                                                <div className="ttmn-text-wrap relative pt-70 pb-50 p-lr-30 p-lr-mobile-50 mt-40 bg-white relative cms-radius-8 cms-shadow-1">
                                                  <div className="absolute cms-abs-t-0 mt-n30 cms-abs-l-50 d-flex">
                                                    <div className="cms-image relative">
                                                      <img decoding="async" className="default-thumb circle cms-img" src="./wp-content/themes/evway/assets/images/placeholder/placeholder-60x60.jpg" width="60" height="60" alt="Fuelbuddy" />
                                                    </div>
                                                  </div>
                                                  <div className="row justify-content-between pb-40 empty-none"></div>
                                                  <div className="cms-ttmn-title cms-heading text-20 text-tablet-extra-25 pb-20 mt-n7 mb-n7">
                                                    Taurus Sarovar Portico, New Delhi-IGI Airport 
                                                  </div>
                                                  <div className="cms-ttmn-desc font-500i text-17 text-tablet-extra-21 lh-1/667 text-darken-primary mt-n7 mb-n7">
                                                    FuelBuddy team is doing excellent work. As soon as we place an order for fuel, we get the delivery in 4 hours, and there is no follow up needed. The entire process is very smooth, right from placing the order via the mobile app to getting notifications and invoices via mail.
                                                  </div>
                                                  <div className="row gutters-grid pt-30 align-items-center empty-none"></div>
                                                  <div className="cms-triangle absolute cms-abs-b-0 cms-abs-l-50 mb-n20"></div>
                                                </div>
                                                <div className="row gutters-grid align-items-center pt-40 pl-30">
                                                  <div className="col-auto">
                                                    <div className="cms-ttmn-author cms-heading text-18 text-heading">
                                                      Vinay Kumar
                                                    </div>
                                                    <div className="cms-ttmn-position text-14 text-body">
                                                      General Manager
                                                    </div>
                                                  </div>
                                                  <div className="cms-star-ratings row align-items-center gutters-20 col">
                                                    <div className="col-auto">
                                                      <div className="cms-star-rating relative">
                                                        <div className="cms-star-rated absolute text-rating" data-width="100" style={{width: "100%"}}></div>
                                                      </div>
                                                    </div>
                                                    <div className="col empty-none text-16 font-700"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="cms-swiper-slide swiper-slide">
                                                <div className="ttmn-text-wrap relative pt-70 pb-50 p-lr-30 p-lr-mobile-50 mt-40 bg-white relative cms-radius-8 cms-shadow-1">
                                                  <div className="absolute cms-abs-t-0 mt-n30 cms-abs-l-50 d-flex">
                                                    <div className="cms-image relative">
                                                      <img decoding="async" className="default-thumb circle cms-img" src="./wp-content/themes/evway/assets/images/placeholder/placeholder-60x60.jpg" width="60" height="60" alt="Fuelbuddy" />
                                                    </div>
                                                  </div>
                                                  <div className="row justify-content-between pb-40 empty-none"></div>
                                                  <div className="cms-ttmn-title cms-heading text-20 text-tablet-extra-25 pb-20 mt-n7 mb-n7">
                                                    Park Plaza, Gurgaon
                                                  </div>
                                                  <div className="cms-ttmn-desc font-500i text-17 text-tablet-extra-21 lh-1/667 text-darken-primary mt-n7 mb-n7">
                                                    Excellent fuel delivery service,trusted brand,fuel pump high accuracy machine. Thank You for introducing us to Doorstep Diesel Delivery. 
                                                  </div>
                                                  <div className="row gutters-grid pt-30 align-items-center empty-none"></div>
                                                  <div className="cms-triangle absolute cms-abs-b-0 cms-abs-l-50 mb-n20"></div>
                                                </div>
                                                <div className="row gutters-grid align-items-center pt-40 pl-30">
                                                  <div className="col-auto">
                                                    <div className="cms-ttmn-author cms-heading text-18 text-heading">
                                                      Naresh Kaushik 
                                                    </div>
                                                    <div className="cms-ttmn-position text-14 text-body">
                                                      Chief Engineer
                                                    </div>
                                                  </div>
                                                  <div className="cms-star-ratings row align-items-center gutters-20 col">
                                                    <div className="col-auto">
                                                      <div className="cms-star-rating relative">
                                                        <div className="cms-star-rated absolute text-rating" data-width="100" style={{width: "100%"}}></div>
                                                      </div>
                                                    </div>
                                                    <div className="col empty-none text-16 font-700"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="cms-swiper-slide swiper-slide">
                                                <div className="ttmn-text-wrap relative pt-70 pb-50 p-lr-30 p-lr-mobile-50 mt-40 bg-white relative cms-radius-8 cms-shadow-1">
                                                  <div className="absolute cms-abs-t-0 mt-n30 cms-abs-l-50 d-flex">
                                                    <div className="cms-image relative">
                                                      <img decoding="async" className="default-thumb circle cms-img" src="./wp-content/themes/evway/assets/images/placeholder/placeholder-60x60.jpg" width="60" height="60" alt="Fuelbuddy" />
                                                    </div>
                                                  </div>
                                                  <div className="row justify-content-between pb-40 empty-none"></div>
                                                  <div className="cms-ttmn-title cms-heading text-20 text-tablet-extra-25 pb-20 mt-n7 mb-n7">
                                                    BallPark
                                                  </div>
                                                  <div className="cms-ttmn-desc font-500i text-17 text-tablet-extra-21 lh-1/667 text-darken-primary mt-n7 mb-n7">
                                                    Just wanted to express my sincere gratitude for introducing me to FuelBuddy. The services have been excellent, exceeding my expectations in every way. I am truly impressed with the convenience, efficiency, and professionalism of your team. Thank you for making my life easier and saving me valuable time
                                                  </div>
                                                  <div className="row gutters-grid pt-30 align-items-center empty-none"></div>
                                                  <div className="cms-triangle absolute cms-abs-b-0 cms-abs-l-50 mb-n20"></div>
                                                </div>
                                                <div className="row gutters-grid align-items-center pt-40 pl-30">
                                                  <div className="col-auto">
                                                    <div className="cms-ttmn-author cms-heading text-18 text-heading">
                                                      Aasheesh Kapur
                                                    </div>
                                                    <div className="cms-ttmn-position text-14 text-body">
                                                      Chief Engineer
                                                    </div>
                                                  </div>
                                                  <div className="cms-star-ratings row align-items-center gutters-20 col">
                                                    <div className="col-auto">
                                                      <div className="cms-star-rating relative">
                                                        <div className="cms-star-rated absolute text-rating" data-width="100" style={{width: "100%"}}></div>
                                                      </div>
                                                    </div>
                                                    <div className="col empty-none text-16 font-700"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="cms-swiper-slide swiper-slide">
                                                <div className="ttmn-text-wrap relative pt-70 pb-50 p-lr-30 p-lr-mobile-50 mt-40 bg-white relative cms-radius-8 cms-shadow-1">
                                                  <div className="absolute cms-abs-t-0 mt-n30 cms-abs-l-50 d-flex">
                                                    <div className="cms-image relative">
                                                      <img decoding="async" className="default-thumb circle cms-img" src="./wp-content/themes/evway/assets/images/placeholder/placeholder-60x60.jpg" width="60" height="60" alt="Fuelbuddy" />
                                                    </div>
                                                  </div>
                                                  <div className="row justify-content-between pb-40 empty-none"></div>
                                                  <div className="cms-ttmn-title cms-heading text-20 text-tablet-extra-25 pb-20 mt-n7 mb-n7">
                                                    Onesto Labs Pvt Ltd 
                                                  </div>
                                                  <div className="cms-ttmn-desc font-500i text-17 text-tablet-extra-21 lh-1/667 text-darken-primary mt-n7 mb-n7">
                                                    We have been using FuelBuddy for over 4 months. We are satisfied with the service and quality and have saved considerable costs at our sites and factory.
                                                  </div>
                                                  <div className="row gutters-grid pt-30 align-items-center empty-none"></div>
                                                  <div className="cms-triangle absolute cms-abs-b-0 cms-abs-l-50 mb-n20"></div>
                                                </div>
                                                <div className="row gutters-grid align-items-center pt-40 pl-30">
                                                  <div className="col-auto">
                                                    <div className="cms-ttmn-author cms-heading text-18 text-heading">
                                                      Tanveer Ahemad
                                                    </div>
                                                    <div className="cms-ttmn-position text-14 text-body">
                                                      Accounts
                                                    </div>
                                                  </div>
                                                  <div className="cms-star-ratings row align-items-center gutters-20 col">
                                                    <div className="col-auto">
                                                      <div className="cms-star-rating relative">
                                                        <div className="cms-star-rated absolute text-rating" data-width="100" style={{width: "100%"}}></div>
                                                      </div>
                                                    </div>
                                                    <div className="col empty-none text-16 font-700"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="cms-swiper-dots cms-swiper-dots--dots cms-swiper-dots-color-custom-2 cms-swiper-dots-color-hover-accent cms-swiper-dots-divider justify-content-center"></div>
                                            <div className="cms-swiper-arrow cms-swiper-arrows-size-44 cms-swiper-arrows-shape-square square cms-swiper-arrows-outline-no text-accent text-hover-primary bg-transparent bg-hover-transparent cms-transition cms-swiper-arrow-prev">
                                              <span className="cmsi-icon prev-icon"></span>
                                            </div>
                                            <div className="cms-swiper-arrow cms-swiper-arrows-size-44 cms-swiper-arrows-shape-square square cms-swiper-arrows-outline-no text-accent text-hover-primary bg-transparent bg-hover-transparent cms-transition cms-swiper-arrow-next">
                                              <span className="cmsi-icon next-icon"></span>
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
            </div>
            <div className="elementor-section elementor-top-section elementor-element elementor-element-5a0eef6c bdr-t-border p-tb-20 p-tb-tablet-50 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="5a0eef6c" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e54565f" data-id="e54565f" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-fca32ed elementor-widget elementor-widget-heading" data-id="fca32ed" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <style dangerouslySetInnerHTML={{ __html: `
                          /*! elementor - v3.18.0 - 08-12-2023 */ .elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}
                        ` }} />
                        <h2 className="elementor-heading-title elementor-size-default">
                          Our Clients 
                        </h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-87eb0c2 cms-clients cms-clients-layout-1 cms-sliders-full-no elementor-widget elementor-widget-global elementor-global-5152 elementor-widget-cms_clients" data-id="87eb0c2" data-element_type="widget" data-widget_type="cms_clients.default">
                      <div className="elementor-widget-container">
                        <div className="cms-client-slider cms-swiper-sliders">
                          <div className="cms-swiper-slider-wrap">
                            <div className="cms-swiper-container cms-swiper-arrows-false cms-swiper-arrows-laptop-false cms-swiper-arrows-tablet-extra-false cms-swiper-arrows-tablet-false cms-swiper-arrows-mobile-extra-false cms-swiper-arrows-mobile-false cms-swiper-arrows-icon-chevron cms-swiper-nav-in-vertical cms-swiper-dots-false cms-swiper-dots-tablet-false cms-swiper-dots-mobile-false cms-swiper-dots-color-primary cms-swiper-dots-color-hover-accent cms-swiper-dots-align-center cms-swiper-dots-align-tablet-center cms-swiper-dots-align-mobile-center no-shadow" dir="ltr" data-settings={"{\"slide_direction\":\"horizontal\",\"slide_percolumn\":1,\"slide_percolumnfill\":\"column\",\"slide_mode\":\"slide\",\"slides_to_show\":6,\"slides_to_show_widescreen\":6,\"slides_to_show_laptop\":6,\"slides_to_show_tablet_extra\":5,\"slides_to_show_tablet\":4,\"slides_to_show_mobile_extra\":4,\"slides_to_show_mobile\":2,\"slides_to_scroll\":6,\"slides_to_scroll_widescreen\":6,\"slides_to_scroll_laptop\":6,\"slides_to_scroll_tablet_extra\":5,\"slides_to_scroll_tablet\":4,\"slides_to_scroll_mobile_extra\":4,\"slides_to_scroll_mobile\":2,\"slides_gutter\":40,\"arrow\":\"false\",\"arrow_tablet\":\"false\",\"arrow_mobile\":\"false\",\"dots\":\"false\",\"dots_el\":\".cms-swiper-dots\",\"dots_tablet\":\"false\",\"dots_mobile\":\"false\",\"dots_style\":\"divider\",\"autoplay\":\"true\",\"pause_on_hover\":\"true\",\"pause_on_interaction\":\"true\",\"delay\":2000,\"loop\":\"true\",\"speed\":300}"}>
                              <div className="cms-swiper-wrapper swiper-wrapper align-items-center">
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/Client-Logo-2.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/Client-Logo-2.png 500w, ./wp-content/uploads/2023/12/Client-Logo-2-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/Client-Logo-1.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/Client-Logo-1.png 500w, ./wp-content/uploads/2023/12/Client-Logo-1-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/Client-Logo.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/Client-Logo.png 500w, ./wp-content/uploads/2023/12/Client-Logo-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/14.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/14.png 500w, ./wp-content/uploads/2023/12/14-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/13.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/13.png 500w, ./wp-content/uploads/2023/12/13-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/12.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/12.png 500w, ./wp-content/uploads/2023/12/12-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/11.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/11.png 500w, ./wp-content/uploads/2023/12/11-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/10.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/10.png 500w, ./wp-content/uploads/2023/12/10-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/9.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/9.png 500w, ./wp-content/uploads/2023/12/9-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/8.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/8.png 500w, ./wp-content/uploads/2023/12/8-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                                <div className="cms-client-item cms-swiper-slide swiper-slide">
                                  <a href="#" target="_blank" className="d-block text-center">
                                    <div className="cms-image relative">
                                      <img loading="lazy" decoding="async" width="500" height="300" src="./wp-content/uploads/2023/12/7.png" className="cms-radius-5 cms-img" alt="" srcSet="./wp-content/uploads/2023/12/7.png 500w, ./wp-content/uploads/2023/12/7-18x12.png 18w" sizes="(max-width: 500px) 100vw, 500px" />
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="cms-swiper-arrow cms-swiper-arrows-size-44 cms-swiper-arrows-shape-square square cms-swiper-arrows-outline-no text-accent text-hover-primary bg-transparent bg-hover-transparent cms-transition cms-swiper-arrow-prev">
                                <span className="cmsi-icon prev-icon"></span>
                              </div>
                              <div className="cms-swiper-arrow cms-swiper-arrows-size-44 cms-swiper-arrows-shape-square square cms-swiper-arrows-outline-no text-accent text-hover-primary bg-transparent bg-hover-transparent cms-transition cms-swiper-arrow-next">
                                <span className="cmsi-icon next-icon"></span>
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
                            <li id="menu-item-4492" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4492">
                              <a href="/about-us" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
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
                              <a href="/our-products" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
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
                          <img src="./wp-content/uploads/2024/01/ios_app_store___newww.png" alt="Download on the App Store" style={{borderRadius: "10px", width: "150px", height: "45px"}} />
                        </a>
                        <a href="https://fuelbuddy.app.link/QyzwczcStGb" style={{display: "inline-block", overflow: "hidden", borderRadius: "10px", marginRight: "4px"}}>
                          <img src="./wp-content/uploads/2024/01/google_play_store___Newwww.png" alt="Download on the App Store" style={{borderRadius: "10px", width: "150px", height: "45px"}} />
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
    <link rel="stylesheet" id="elementor-post-5325-css" href="#" media="all" />
    <link rel="stylesheet" id="elementor-post-232-css" href="#" media="all" />
    <link rel="stylesheet" id="e-animations-css" href="#" media="all" />
    </>
  )
}

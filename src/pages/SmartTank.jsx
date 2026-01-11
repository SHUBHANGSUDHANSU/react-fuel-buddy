import { useState } from "react";

export default function SmartTank() {
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
                      <li id="menu-item-4487" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4487">
                        <a href="javascript:void(0)" data-toggle="submenu" className="cms-menu-link">
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
                      <li id="menu-item-6022" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-6022">
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
                          <li id="menu-item-6027" className="menu-item menu-item-type-post_type menu-item-object-solutions current-menu-item menu-item-6027">
                            <a href="/solutions/smart-tank" aria-current="page" className="cms-menu-link">
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
          <div data-elementor-type="wp-post" data-elementor-id="676" className="elementor elementor-676" data-elementor-post-type="solutions">
            <div className="elementor-section elementor-top-section elementor-element elementor-element-3a12cc7c elementor-section-full_width elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-full-content-with-space-none cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="3a12cc7c" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-820bd05" data-id="820bd05" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-40e2b77a cms-page-title-layout-4 elementor-widget elementor-widget-cms_page_title" data-id="40e2b77a" data-element_type="widget" data-widget_type="cms_page_title.default">
                      <div className="elementor-widget-container">
                        <div className="cms-page-title-wrapper cms-overlay-gradient-1 text-center" style={{backgroundImage: "url(https://www.fuelbuddy.in/wp-content/uploads/2022/10/9.jpg)"}}>
                          <div className="cms-page-title-overlay cms-page-title-gradient cms-overlay-gradient"></div>
                          <div className="extra-space-top pt-50 pt-tablet-90 pt-desktop-130"></div>
                          <div className="container">
                            <div className="row empty-none justify-content-center">
                              <div className="cms-page-title-content-col col-12 col-tablet-8 col-desktop-6">
                                <div className="cms-page-title-content">
                                  <h1 className="cms-mainheading cms-heading text-tablet-50 text-tablet-extra-75 lh-1/13 text-white">
                                    Smart Tank 
                                    <div className="extra-space clearfix"></div>
                                  </h1>
                                  <div className="cms-desc text-17 font-700 pt-20 mt-n3 text-white">
                                    Upgrade your Diesel Storage with Smart Tank’s Monitored Precision 
                                    <div className="extra-space clearfix"></div>
                                  </div>
                                  <div className="row gutters-30 gutters-grid align-items-center pt-30 empty-none justify-content-center"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="extra-space-bottom pt-30 pt-tablet-60"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-section elementor-top-section elementor-element elementor-element-12e4b4d9 p-tb-40 p-tb-tablet-90 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="12e4b4d9" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7153877" data-id="7153877" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-b815dc9 cms-cf7-layout-1 elementor-widget elementor-widget-cms_ctf7" data-id="b815dc9" data-element_type="widget" data-settings={"{\"motion_fx_motion_fx_scrolling\":\"yes\",\"sticky\":\"top\",\"sticky_parent\":\"yes\",\"motion_fx_devices\":[\"desktop\",\"tablet_extra\",\"tablet\",\"mobile\"],\"sticky_on\":[\"desktop\",\"tablet_extra\",\"tablet\",\"mobile\"],\"sticky_offset\":0,\"sticky_effects_offset\":0}"} data-widget_type="cms_ctf7.default">
                      <div className="elementor-widget-container">
                        <div className="cms-cf7 relative p-tb-50 p-lr-20 p-lr-lg-50 bg-white cms-shadow-1 cms-radius-16">
                          <div className="cms-cf7-inner">
                            <div className="cms-banner">
                              <div className="cms-cf7-banner-inner">
                                <div className="cms-form-desc mb-25 text-body">
                                  Please complete the form below, to request a quote, and we’ll be in touch. Or you can call us 8088994444 and our specialists will provide the necessary help! 
                                  <div className="extra-space clearfix"></div>
                                </div>
                              </div>
                            </div>
                            <div className="wpcf7 no-js" id="wpcf7-f1514-p676-o1" lang="en-US" dir="ltr">
                              <div className="screen-reader-response">
                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                <ul></ul>
                              </div>
                              <form action="https://formspree.io/f/xkoowlbe" method="post" className="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init" data-form-key="smart-tank" onSubmit={handleSubmit}>
                                <input type="hidden" name="form_source" value="Smart Tank - Quote Form" />
                                <div style={{display: "none"}}>
                                  <input type="hidden" name="_wpcf7" value="1514" />
                                  <input type="hidden" name="_wpcf7_version" value="5.9.3" />
                                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1514-p676-o1" />
                                  <input type="hidden" name="_wpcf7_container_post" value="676" />
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
                                    {formStatus["smart-tank"] === "loading" && (
                                      <div style={{ marginTop: 12 }}>
                                        Sending...
                                      </div>
                                    )}
                                    {formStatus["smart-tank"] === "success" && (
                                      <div style={{ color: "#1a7f37", marginTop: 12 }}>
                                        Thank you! We will get back to you soon.
                                      </div>
                                    )}
                                    {formStatus["smart-tank"] === "error" && (
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
                                  <input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="136" />
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
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-255f41fb" data-id="255f41fb" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-3f739edf elementor-widget elementor-widget-heading" data-id="3f739edf" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <style dangerouslySetInnerHTML={{ __html: `
                          /*! elementor - v3.18.0 - 08-12-2023 */ .elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}
                        ` }} />
                        <h2 className="elementor-heading-title elementor-size-default">
                          Smart Tank
                        </h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-1e5d1c69 elementor-widget elementor-widget-text-editor" data-id="1e5d1c69" data-element_type="widget" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <style dangerouslySetInnerHTML={{ __html: `
                          /*! elementor - v3.18.0 - 08-12-2023 */ .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}
                        ` }} />
                        <p>
                          Looking for an easy and effective solution to manage your Diesel needs? Your search ends here! Smart Tank, the user-friendly answer to your requirements is available in 500 liters, 1000 liters, and 2000 liters for various applications.
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-1e75aa44 elementor-widget elementor-widget-heading" data-id="1e75aa44" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          What Makes It Great?
                        </h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-383e0b elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="383e0b" data-element_type="widget" data-widget_type="icon-list.default">
                      <div className="elementor-widget-container">
                        <link rel="stylesheet" href="#" />
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              <strong>
                                Huge Savings:
                              </strong>
                               With Smart Tank, you can save up to Rs 10,000 per month by ensuring every liter of fuel is accounted for and tracked, eliminating losses due to pilferage
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              <strong>
                                Better Safety: 
                              </strong>
                              Our design is built with sturdy materials and a secure keypad lock to keep your diesel safe. This ensures that the risk of pilferage and adulteration is eliminated
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              <strong>
                                Business Continuity:
                              </strong>
                               With our robust storage system we assure adequate backup, ensuring your business keeps running smoothly. 
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              <strong>
                                Efficient Reconciliation:
                              </strong>
                               Say goodbye to the issues of manual record-keeping. Our digital records make the audit process hassle-free, saving you time and effort.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-4c329160 elementor-widget elementor-widget-heading" data-id="4c329160" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Perfect for Every Situation
                        </h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-68eae7c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="68eae7c" data-element_type="widget" data-widget_type="icon-list.default">
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              IT Parks: Ensuring backup power for critical IT systems
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              Real Estate Projects: Supporting construction equipment with 24/7 Diesel supply
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              Commercial Buildings: Offering Diesel storage for multiple businesses.
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              Mining: Providing continuous Diesel supply for machinery
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              Schools: Safeguarding vehicles and backup generators
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              Industries: Offering emergency Diesel backup for equipment and DGs
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-5a760c8 elementor-widget elementor-widget-heading" data-id="5a760c8" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Why You'll Love It?
                        </h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-a8b80f4 elementor-widget elementor-widget-text-editor" data-id="a8b80f4" data-element_type="widget" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>
                          FuelBuddy’s IoT-enabled Smart Tank takes your diesel storage and monitoring to the next level. You can access any information by just interacting with the tank.
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6256ff6 elementor-widget elementor-widget-heading" data-id="6256ff6" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                           Here's how it works:
                        </h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-b702fd4 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="b702fd4" data-element_type="widget" data-widget_type="icon-list.default">
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              The communication is done over WIFI. 
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              Your data is sent and hosted on a secure database.
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              Access the data and receive reports on our user-friendly dashboard (available on both mobile and desktop) or through email and SMS.
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="cmsi cmsi-arrow-circle-right"></i>
                            </span>
                            <span className="elementor-icon-list-text">
                              Our easy-to-read reports help to fasten your decision-making process.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-48eead96 pt-20 elementor-hidden-desktop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile cms-charts cms-chart-layout-1 elementor-widget elementor-widget-cms_chart" data-id="48eead96" data-element_type="widget" data-widget_type="cms_chart.default">
                      <div className="elementor-widget-container">
                        <div className="cms-charts-wrap row">
                          <div className="cms-headings cms-chart-headings empty-none text-start col-mobile-6">
                            <div className="d-flex justify-content-start text-start">
                              <div className="cms-element-heading w-100">
                                <h2 className="cms-mainheading cms-heading text-24 text-heading">
                                  Stats & Charts 
                                  <div className="extra-space clearfix"></div>
                                </h2>
                                <div className="cms-desc text-17 pt-15 text-body">
                                  Our mix of company-owned and contractor assets allows us to retain optimal levels of control whilst expanding our reach to over 96% of towns in Australia. With 40 years of LTL experience, we are now a trusted LTL freight provider for shippers of all sizes and commodity types.
                                  <br />
                                  <br />
                                   Our LTL service extends to all states and territories, and includes multiple per-week services to places many others only serve occasionally, including Darwin, Alice Springs, Newman, Mt. Isa, Launceston and Burnie.
                                  <br />
                                  <br />
                                   We pride ourselves on providing the best transport and shipping services currently available in Australia. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience, ensure all freight is are shipped, trans-shipped and delivered as 
                                  <div className="extra-space clearfix"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-mobile-6 pt-50">
                            <div className="cms-sticky">
                              <div className="cms-charts-chart m-lr-auto mb-20">
                                <canvas id="cms_chart-48eead96" className="cms-charts" data-settings={"{\"type\":\"doughnut\",\"labels\":[\"Retail\",\"Sciences\",\"Industrial\",\"Power\",\"Oil & Gas\"],\"value\":[40,20,15,15,10],\"colors\":[\"#9bcb3b\",\"#5553ce\",\"#f13a30\",\"#f8a137\",\"#1875f0\"],\"legend_display\":\"false\",\"legend_position\":null,\"title_display\":\"false\",\"title_position\":null,\"title_text\":null}"}></canvas>
                              </div>
                              <div className="cms-chart-items row justify-content-center">
                                <div className="cms-chart-item-title col-12 col-mobile-auto font-700 text-14">
                                  <span className="d-inline-block circle mr-10" style={{width: "10px", height: "10px", backgroundColor: "#9bcb3b"}}></span>
                                  Retail & Consumer
                                </div>
                                <div className="cms-chart-item-title col-12 col-mobile-auto font-700 text-14">
                                  <span className="d-inline-block circle mr-10" style={{width: "10px", height: "10px", backgroundColor: "#5553ce"}}></span>
                                  Sciences & Healthcare
                                </div>
                                <div className="cms-chart-item-title col-12 col-mobile-auto font-700 text-14">
                                  <span className="d-inline-block circle mr-10" style={{width: "10px", height: "10px", backgroundColor: "#f13a30"}}></span>
                                  Industrial & Chemical
                                </div>
                                <div className="cms-chart-item-title col-12 col-mobile-auto font-700 text-14">
                                  <span className="d-inline-block circle mr-10" style={{width: "10px", height: "10px", backgroundColor: "#f8a137"}}></span>
                                  Power Generation
                                </div>
                                <div className="cms-chart-item-title col-12 col-mobile-auto font-700 text-14">
                                  <span className="d-inline-block circle mr-10" style={{width: "10px", height: "10px", backgroundColor: "#1875f0"}}></span>
                                  Oil & Gas
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
            <div className="elementor-element elementor-element-e5abdb1 e-flex e-con-boxed e-con e-parent" data-id="e5abdb1" data-element_type="container" data-settings={"{\"content_width\":\"boxed\"}"} data-core-v316-plus="true">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-4bca499 elementor-widget elementor-widget-shortcode" data-id="4bca499" data-element_type="widget" data-widget_type="shortcode.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div data-elementor-type="container" data-elementor-id="6430" className="elementor elementor-6430" data-elementor-post-type="elementor_library">
                        <div className="elementor-element elementor-element-143a05a8 e-flex e-con-boxed e-con e-parent" data-id="143a05a8" data-element_type="container" data-settings={"{\"background_background\":\"classic\",\"content_width\":\"boxed\"}"} data-core-v316-plus="true">
                          <div className="e-con-inner">
                            <div className="elementor-element elementor-element-462bcda e-con-full e-flex e-con e-child" data-id="462bcda" data-element_type="container" data-settings={"{\"content_width\":\"full\"}"}>
                              <div className="elementor-element elementor-element-638dc03f elementor-widget elementor-widget-heading" data-id="638dc03f" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Download Now
                                  </h2>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-23a1f54d elementor-widget elementor-widget-heading" data-id="23a1f54d" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Upgrade your refueling 
                                    <br />
                                    experience with FuelBuddy!
                                  </h2>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-321dd319 elementor-widget elementor-widget-text-editor" data-id="321dd319" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <div>
                                    <span className="gmail_signature_prefix">
                                      <span className="gmail_default">
                                        Download
                                      </span>
                                      <span className="gmail_default">
                                         now to order diesel at your doorstep. We are here to make the procurement of diesel a smooth and smarter process. 
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-4b917a8b elementor-widget elementor-widget-html" data-id="4b917a8b" data-element_type="widget" data-widget_type="html.default">
                                <div className="elementor-widget-container">
                                  <div style={{display: "flex"}}>
                                    <a href="https://fuelbuddy.app.link/QyzwczcStGb" style={{display: "inline-block", overflow: "hidden", borderRadius: "10px", marginRight: "4px"}}>
                                      <img decoding="async" src="https://www.fuelbuddy.in/wp-content/uploads/2023/12/32da6e01e3da34be7a7114e6dd343c5a.png" alt="Download on the App Store" style={{borderRadius: "10px", width: "150px", height: "45px"}} />
                                    </a>
                                    <a href="https://fuelbuddy.app.link/QyzwczcStGb">
                                      <img decoding="async" style={{width: "169px", marginTop: "-12px", height: "70px"}} alt="Get it on Google Play" src="https://www.fuelbuddy.in/wp-content/uploads/2023/12/9dd72903f0b3c10237bd476e61b212da.png" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-6df45f3a e-con-full e-flex e-con e-child" data-id="6df45f3a" data-element_type="container" data-settings={"{\"content_width\":\"full\"}"}>
                              <div className="elementor-element elementor-element-3670bd01 elementor-widget elementor-widget-global elementor-global-5787 elementor-widget-image" data-id="3670bd01" data-element_type="widget" data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                  <style dangerouslySetInnerHTML={{ __html: `
                                    /*! elementor - v3.18.0 - 08-12-2023 */ .elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}
                                  ` }} />
                                  <img fetchpriority="high" decoding="async" width="570" height="570" src="https://www.fuelbuddy.in/wp-content/uploads/2024/01/Pixel-True-Mockup-570x570.png" className="attachment-medium size-medium wp-image-5767" alt="" srcSet="https://www.fuelbuddy.in/wp-content/uploads/2024/01/Pixel-True-Mockup-570x570.png 570w, https://www.fuelbuddy.in/wp-content/uploads/2024/01/Pixel-True-Mockup-80x80.png 80w, https://www.fuelbuddy.in/wp-content/uploads/2024/01/Pixel-True-Mockup-1536x1536.png 1536w, https://www.fuelbuddy.in/wp-content/uploads/2024/01/Pixel-True-Mockup-12x12.png 12w, https://www.fuelbuddy.in/wp-content/uploads/2024/01/Pixel-True-Mockup.png 1920w" sizes="(max-width: 570px) 100vw, 570px" />
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
                            <li id="menu-item-4507" className="menu-item menu-item-type-post_type menu-item-object-solutions current-menu-item menu-item-4507">
                              <a href="/solutions/smart-tank" aria-current="page" className="cms-menu-link link-white link-hover-accent bg-transparent bg-hover-transparent text-14">
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
    <link rel="stylesheet" id="elementor-post-6430-css" href="#" media="all" />
    </>
  )
}

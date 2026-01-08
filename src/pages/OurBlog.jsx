import { useParams } from 'react-router-dom'
import blogPosts from '../data/blogPosts.json'

export default function OurBlog() {
  const { page, slug } = useParams()
  const getPostSlug = (post) => {
    if (post.slug) return post.slug
    if (!post.link) return ''
    const parts = post.link.split('/').filter(Boolean)
    return parts[parts.length - 1] || ''
  }

  const isPostView = Boolean(slug)
  const perPage = 6
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / perPage))
  const requestedPage = isPostView ? 1 : Number(page) || 1
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages)
  const startIndex = (currentPage - 1) * perPage
  const pagePosts = isPostView ? [] : blogPosts.slice(startIndex, startIndex + perPage)
  const currentPost = isPostView
    ? blogPosts.find((post) => getPostSlug(post) === slug)
    : null

  const stripTags = (value) => (value || '').replace(/<[^>]*>/g, '').trim()

  const visibleCount = Math.min(6, totalPages)
  const visiblePages = Array.from({ length: visibleCount }, (_, idx) => idx + 1)
  const showLastPage = totalPages > visibleCount
  const nextPage = Math.min(currentPage + 1, totalPages)
  const pageHref = (pageNumber) => (pageNumber === 1 ? '/our-blog' : `/our-blog/page/${pageNumber}`)
  const postHref = (post) => {
    const postSlug = getPostSlug(post)
    return postSlug ? `/our-blog/${postSlug}` : '#'
  }

  const loadmoreData = JSON.stringify({
    element_name: 'cms_post_grid',
    post_type: 'post',
    layout: '1',
    startPage: currentPage,
    maxPages: totalPages,
    total: blogPosts.length,
    nextLink: pageHref(nextPage),
    source: '',
    orderby: 'date',
    order: 'desc',
    limit: perPage,
    perpage: perPage,
    pagination_type: 'pagination',
    masonry_mode: 'fitRows',
    gap: 40,
    gap_extra: -30,
    grid: true,
    thumbnail_size: 'custom',
    thumbnail_custom_dimension: { width: '400', height: '267' },
    excerpt_lenght: '180',
    excerpt_more_text: '',
    readmore_text: 'Read More',
  })

  const queryData = JSON.stringify({
    post_type: 'post',
    post_status: 'publish',
    posts_per_page: perPage,
    order: 'desc',
    orderby: 'date',
    tax_query: { relation: 'OR' },
  })

  return (
    <>
    <div id="cms-page" className="cms-page">
      <div className="cms-header-wraps">
        <header id="cms-header" className="cms-header header-layout2 is-sticky cms-header-bg">
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
                        <a href="#" className="cms-menu-link">
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
                        <a href="#" className="cms-menu-link">
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
                      <li id="menu-item-4489" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-4489">
                        <a href="#" className="cms-menu-link">
                          <span className="menu-title-wraps">
                            <span className="menu-title title">
                              News & Media
                            </span>
                            <span className="main-menu-toggle pl-5"></span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-8108" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-8108">
                            <a href="/our-blog" aria-current="page" className="cms-menu-link">
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
          <div data-elementor-type="wp-page" data-elementor-id="7912" className="elementor elementor-7912" data-elementor-post-type="page">
            <div className="elementor-section elementor-top-section elementor-element elementor-element-2087434c elementor-section-full_width elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-full-content-with-space-none cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="2087434c" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-80cb0db" data-id="80cb0db" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-59ca9574 cms-page-title-layout-7 elementor-widget elementor-widget-cms_page_title" data-id="59ca9574" data-element_type="widget" data-widget_type="cms_page_title.default">
                      <div className="elementor-widget-container">
                        <div className="cms-page-title-wrapper cms-overlay-gradient-1 text-center" style={{backgroundImage: "url(https://www.fuelbuddy.in/wp-content/uploads/2024/05/website-landing-page.jpg)"}}>
                          <div className="cms-page-title-overlay cms-page-title-gradient cms-overlay-gradient"></div>
                          <div className="extra-space-top pt-50 pt-tablet-90 pt-desktop-130"></div>
                          <div className="container">
                            <div className="row empty-none justify-content-around">
                              <div className="cms-page-title-content-col col-12 col-mobile-8 col-tablet-6">
                                <div className="cms-page-title-content">
                                  <h1 className="cms-mainheading cms-heading text-tablet-50 text-tablet-extra-75 font-600 lh-1/13 text-white elementor-invisible animated-normal" data-settings={"{\"_animation\":\"fadeInUp\",\"animation_delay\":\"\"}"}>
                                    OUR BLOG 
                                    <div className="extra-space clearfix"></div>
                                  </h1>
                                  <div className="cms-desc pt-20 text-17 lh-1/529 font-700 text-white elementor-invisible animated-normal" data-settings={"{\"_animation\":\"fadeInUp\",\"animation_delay\":\"\"}"}>
                                    Our thoughts, views and everything else 
                                    <div className="extra-space clearfix"></div>
                                  </div>
                                  <div className="row gutters-30 gutters-grid align-items-center pt-30 empty-none justify-content-around"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="extra-space-bottom pt-60 pt-tablet-90 pt-desktop-140"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isPostView ? (
              <div className="elementor-section elementor-top-section elementor-element elementor-element-1b01cac7 p-tb-40 pt-lg-70 pb-lg-90 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="1b01cac7" data-element_type="section">
                <div className="cms-overlay-gradient"></div>
                <div className="cms-section-boxed-bg"></div>
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4ef6857f" data-id="4ef6857f" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-18e8dfcf cms-post-layout-1 elementor-widget elementor-widget-cms_post_grid" data-id="18e8dfcf" data-element_type="widget" data-widget_type="cms_post_grid.default">
                        <div className="elementor-widget-container">
                          {currentPost ? (
                            <div className="cms-post-single">
                              {currentPost.image?.src ? (
                                <div className="cms-featured cms-post-standard relative cms-media mb-40">
                                  <img loading="lazy" decoding="async" className="w-100 cms-img" src={currentPost.image.src} alt={currentPost.image.alt || stripTags(currentPost.title)} />
                                </div>
                              ) : null}
                              <h2 className="cms-item-content-title cms-heading text-30 lh-1/45 pt-5 mb-20" dangerouslySetInnerHTML={{ __html: currentPost.title }} />
                              <div className="cms-post-meta text-14 mt-n5 pb-20">
                                <div className="cms-post-meta-inner row align-items-center gutters-20">
                                  <span className="cms-post-date col-auto empty-none text-primary">
                                    <span className="meta-inner">
                                      {currentPost.dateDay} {currentPost.dateMonth}
                                    </span>
                                  </span>
                                  <span className="cms-meta-separator align-self-center"></span>
                                  <span className="cms-post-author col-auto">
                                    <span className="meta-inner">
                                      {currentPost.author?.name || ''}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="cms-post-content text-17" dangerouslySetInnerHTML={{ __html: currentPost.content || currentPost.excerpt }}></div>
                              <div className="pt-30">
                                <a href="/our-blog" className="btn btn-md btn-outline btn-grey4 text-primary btn-hover-fill btn-hover-primary text-hover-white">
                                  <span className="cms-btn-content">
                                    <span className="cms-btn-text">
                                      Back to Our Blog
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          ) : (
                            <div className="cms-post-single">
                              <h2 className="cms-item-content-title cms-heading text-30 lh-1/45 pt-5 mb-20">
                                Post not found
                              </h2>
                              <a href="/our-blog" className="btn btn-md btn-outline btn-grey4 text-primary btn-hover-fill btn-hover-primary text-hover-white">
                                <span className="cms-btn-content">
                                  <span className="cms-btn-text">
                                    Back to Our Blog
                                  </span>
                                </span>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
            <div className="elementor-section elementor-top-section elementor-element elementor-element-1b01cac7 p-tb-40 pt-lg-70 pb-lg-90 elementor-section-boxed elementor-section-height-default elementor-section-height-default cms-remove-container-max-width-no cms-boxed-bg-false cms-overlay-gradient-mode-bt cms-overlay-gradient-bg-yes" data-id="1b01cac7" data-element_type="section">
              <div className="cms-overlay-gradient"></div>
              <div className="cms-section-boxed-bg"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4ef6857f" data-id="4ef6857f" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-18e8dfcf cms-post-layout-1 elementor-widget elementor-widget-cms_post_grid" data-id="18e8dfcf" data-element_type="widget" data-widget_type="cms_post_grid.default">
                      <div className="elementor-widget-container">
                        <div id="cms_post_grid-18e8dfcf" className="cms-grid" data-layoutmode="fitRows" data-layout="masonry" data-start-page={currentPage} data-max-pages={totalPages} data-total={blogPosts.length} data-perpage={perPage} data-next-link={pageHref(nextPage)}>
                          <div className="cms-grid-inner cms-grid-masonry row relative cms-row-cols-3 cms-row-cols-tablet-2 cms-row-cols-mobile-1" data-layout="fitRows" style={{margin: "-20px"}}>
                            <div className="cms-grid-sizer"></div>
                            {pagePosts.map((post, index) => (
                              <div key={post.id ?? index} className={`cms-grid-item item-${index + 1}`} style={{padding: "20px", marginBottom: "-30px"}}>
                                <div className="cms-item-content bg-white cms-shadow-hover-1 cms-transition">
                                  <div className="cms-featured cms-post-standard relative cms-media">
                                    <div className="post-image cms-post-image">
                                      <a href={postHref(post)} title={stripTags(post.title)} rel="nofollow" className="d-block h-100">
                                        <img loading="lazy" decoding="async" src={post.image.src} className="w-100 cms-img" alt={post.image.alt || stripTags(post.title)} />
                                      </a>
                                    </div>
                                    <span className="cms-post-date cms-media-meta absolute cms-abs-t-0 bg-lighten-primary text-white text-uppercase font-heading p-lr-10 text-center pb-10">
                                      <span className="meta-inner">
                                        <span className="date text-35 d-block">
                                          {post.dateDay}
                                        </span>
                                        <span className="month text-14 d-block pt-8">
                                          {post.dateMonth}
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <div className="p-tb-40 p-lr-20 p-lr-tablet-40">
                                    <div className="cms-post-meta text-14 mt-n5 pb-10">
                                      <div className="cms-post-meta-inner row align-items-center gutters-20">
                                        <span className="cms-post-cat col-auto empty-none text-primary">
                                          <span className="meta-inner">
                                            {post.categories.map((category, categoryIndex) => (
                                              <span key={`${category.name}-${categoryIndex}`}>
                                                <a href={category.link || "#"} className="cms-term text-primary text-hover-accent">
                                                  {category.name}
                                                </a>
                                                {categoryIndex < post.categories.length - 1 ? ", " : null}
                                              </span>
                                            ))}
                                          </span>
                                        </span>
                                        <span className="cms-meta-separator align-self-center"></span>
                                        <span className="cms-post-author col-auto">
                                          <span className="meta-inner">
                                            <a href={post.author.link || "#"} title={post.author.name} className="cms-post--author text-primary text-hover-accent">
                                              {post.author.name}
                                            </a>
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row gutters-15 align-items-center empty-none p-tb-20"></div>
                                    <h2 className="cms-item-content-title cms-heading text-20 lh-1/45 pt-5 mb-n7">
                                      <a href={postHref(post)} dangerouslySetInnerHTML={{ __html: post.title }} />
                                    </h2>
                                    <div className="cms-item-content-excerpt empty-none pt-25">
                                      <div className="cms-post-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                                    </div>
                                    <div className="cms-btn-wraps cms-post-item-readmore mt-20 p-3">
                                      <a href={postHref(post)} className="cms-readmore btn btn-md btn-outline btn-grey4 text-primary btn-hover-fill btn-hover-primary text-hover-white">
                                        <span className="cms-btn-content">
                                          <span className="cms-btn-text">
                                            Read More
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
                            ))}

                            <div className="cms-grid-overlay"></div>
                          </div>
                          <div className="cms-post-pagination cms-grid-pagination empty-none mt-40" data-loadmore={loadmoreData} data-query={queryData}>
                            <nav className="navigation posts-pagination ajax">
                              {visiblePages.map((pageNumber) =>
                                pageNumber === currentPage ? (
                                  <span key={pageNumber} aria-current="page" className="page-numbers current">
                                    {pageNumber}
                                  </span>
                                ) : (
                                  <a key={pageNumber} className="page-numbers" href={pageHref(pageNumber)}>
                                    {pageNumber}
                                  </a>
                                ),
                              )}
                              {showLastPage ? (
                                <>
                                  <span className="page-numbers dots">
                                    ...
                                  </span>
                                  {currentPage === totalPages ? (
                                    <span aria-current="page" className="page-numbers current">
                                      {totalPages}
                                    </span>
                                  ) : (
                                    <a className="page-numbers" href={pageHref(totalPages)}>
                                      {totalPages}
                                    </a>
                                  )}
                                </>
                              ) : null}
                              {currentPage < totalPages ? (
                                <a className="next page-numbers" href={pageHref(nextPage)}>
                                  Next
                                </a>
                              ) : null}
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
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
          <input type="search" className="cms-search-field" placeholder="Type Words Then Enter" value="" name="s" />
          <button type="submit" className="cms-search-submit" value="Search"></button>
        </form>
      </div>
    </div>
    <link rel="stylesheet" id="elementor-post-232-css" href="#" media="all" />
    <link rel="stylesheet" id="e-animations-css" href="#" media="all" />
    </>
  )
}

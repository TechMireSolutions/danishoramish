import { useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

/**
 * DanishORamishHome
 * -------------------------------------------------------------------------
 * Direct React/JSX conversion of the static WordPress/Elementor markup for
 * https://danishoramish.com/ (the "Home" page).
 */

const EXTERNAL_STYLESHEETS = [
  "https://danishoramish.com/wp-content/plugins/click-to-chat-for-whatsapp/new/inc/assets/css/main.css?ver=4.37",
  "https://danishoramish.com/wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css?ver=2.8.3",
  "https://danishoramish.com/wp-content/plugins/jeg-elementor-kit/assets/css/elements/main.css?ver=3.0.3",
  "https://danishoramish.com/wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css?ver=2.8.3",
  "https://danishoramish.com/wp-content/uploads/elementor/css/custom-frontend.min.css?ver=1777164032",
  "https://danishoramish.com/wp-content/uploads/elementor/css/post-65.css?ver=1777164033",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.35.4",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.35.4",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=3.35.4",
  "https://danishoramish.com/wp-content/plugins/elementorpro3284n/assets/css/widget-nested-carousel.min.css?ver=3.28.4",
  "https://danishoramish.com/wp-content/uploads/elementor/css/post-39.css?ver=1777164722",
  "https://danishoramish.com/wp-content/themes/hello-elementor/style.min.css?ver=3.4.3",
  "https://danishoramish.com/wp-content/themes/hello-elementor/theme.min.css?ver=3.4.3",
  "https://danishoramish.com/wp-content/themes/hello-elementor/header-footer.min.css?ver=3.4.3",
  "https://danishoramish.com/wp-content/uploads/elementor/css/custom-pro-widget-nav-menu.min.css?ver=1777164032",
  "https://danishoramish.com/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css?ver=1777164032",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.35.4",
  "https://danishoramish.com/wp-content/uploads/elementor/css/custom-apple-webkit.min.css?ver=1777164032",
  "https://danishoramish.com/wp-content/uploads/elementor/css/post-58.css?ver=1777164033",
  "https://danishoramish.com/wp-content/uploads/elementor/css/post-115.css?ver=1777164033",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.34.0",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.24.3",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.24.0",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.css?ver=5.15.3",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.css?ver=5.15.3",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.css?ver=5.15.3",
  "https://danishoramish.com/wp-content/plugins/elementor-pro/assets/css/widget-blockquote.min.css?ver=3.25.0",
  "https://danishoramish.com/wp-content/plugins/elementor-pro/assets/css/widget-mega-menu.min.css?ver=3.26.2",
  "https://danishoramish.com/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css?ver=3.26.0",
  "https://danishoramish.com/wp-content/uploads/elementor/google-fonts/css/inter.css?ver=1748442329",
  "https://danishoramish.com/wp-content/uploads/elementor/google-fonts/css/poppins.css?ver=1748434296",
  "https://danishoramish.com/wp-content/uploads/elementor/google-fonts/css/lato.css?ver=1747371046",
  "https://danishoramish.com/wp-content/uploads/elementor/google-fonts/css/kaiseidecol.css?ver=1747371046",
  "https://danishoramish.com/wp-content/uploads/elementor/google-fonts/css/lora.css?ver=1747371048",
  "https://danishoramish.com/wp-content/plugins/jeg-elementor-kit/assets/fonts/jkiticon/jkiticon.css?ver=3.0.3",
];

const EXTERNAL_SCRIPTS = [
  "https://danishoramish.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1",
  "https://danishoramish.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.35.4",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.35.4",
  "https://danishoramish.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.35.4",
  "https://danishoramish.com/wp-content/plugins/elementor/assets/lib/swiper/v8/swiper.min.js?ver=8.4.5",
  "https://danishoramish.com/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js?ver=3.4.3",
  "https://danishoramish.com/wp-content/plugins/elementorpro3284n/assets/lib/smartmenus/jquery.smartmenus.min.js?ver=1.2.1",
  "https://danishoramish.com/wp-content/plugins/jeg-elementor-kit/assets/js/elements/nav-menu.js?ver=3.0.3",
  "https://danishoramish.com/wp-content/plugins/jeg-elementor-kit/assets/js/elements/mailchimp.js?ver=3.0.3",
  "https://danishoramish.com/wp-content/plugins/elementorpro3284n/assets/js/webpack-pro.runtime.min.js?ver=3.28.4",
  "https://danishoramish.com/wp-content/plugins/elementorpro3284n/assets/js/frontend.min.js?ver=3.28.4",
  "https://danishoramish.com/wp-content/plugins/elementorpro3284n/assets/js/elements-handlers.min.js?ver=3.28.4",
  "https://danishoramish.com/wp-content/plugins/click-to-chat-for-whatsapp/new/inc/assets/js/app.js?ver=4.37",
];

const IMG = {
  logo:
    "https://danishoramish.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-14-at-1.49.12-PM-1-removebg-preview-e1747630353232.png",
  slide1:
    "https://danishoramish.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-15-at-8.11.41-PM-5.jpeg",
  slide2:
    "https://danishoramish.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-15-at-8.11.41-PM-4-212x300.jpeg",
  slide3:
    "https://danishoramish.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-16-at-2.52.04-PM-212x300.jpeg",
  courseFarsi:
    "https://danishoramish.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-15-at-8.11.41-PM-2.jpeg",
  courseGeometric:
    "https://danishoramish.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-15-at-8.11.41-PM-1.jpeg",
  courseArabic:
    "https://danishoramish.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-15-at-8.11.41-PM-3.jpeg",
  courseCalligraphy:
    "https://danishoramish.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-15-at-8.11.40-PM.jpeg",
  glimpse1: "https://danishoramish.com/wp-content/uploads/2025/05/IMG_3886-scaled.jpg",
  glimpse2: "https://danishoramish.com/wp-content/uploads/2025/05/IMG_3891-scaled.jpg",
  glimpse3: "https://danishoramish.com/wp-content/uploads/2025/05/IMG_3892-scaled.jpg",
  glimpse4: "https://danishoramish.com/wp-content/uploads/2025/05/IMG_3884-1-scaled.jpg",
};

interface NavLinksProps {
  idPrefix: string;
  active?: boolean;
}

function NavLinks({ idPrefix, active = true }: NavLinksProps) {
  return (
    <ul id={`menu-${idPrefix}`} className="elementor-nav-menu">
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-39 current_page_item menu-item-146">
        <a
          href="https://danishoramish.com/"
          aria-current="page"
          className={active ? "elementor-item elementor-item-active" : "elementor-item"}
        >
          Home
        </a>
      </li>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-884">
        <a href="https://danishoramish.com/?page_id=791" className="elementor-item">
          Courses
        </a>
      </li>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-156">
        <a href="https://danishoramish.com/contact/" className="elementor-item">
          Contact
        </a>
      </li>
    </ul>
  );
}

function SiteLogo() {
  return (
    <a href="https://danishoramish.com">
      <img
        width={321}
        height={311}
        src={IMG.logo}
        className="attachment-full size-full wp-image-165"
        alt=""
        decoding="async"
        referrerPolicy="no-referrer"
        srcSet={`${IMG.logo} 321w, https://danishoramish.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-14-at-1.49.12-PM-1-removebg-preview-e1747630353232-300x291.png 300w`}
        sizes="(max-width: 321px) 100vw, 321px"
      />
    </a>
  );
}

function Header() {
  return (
    <div
      data-elementor-type="header"
      data-elementor-id="58"
      className="elementor elementor-58 elementor-location-header"
      wpc-filter-elementor-widget="1"
      data-elementor-post-type="elementor_library"
    >
      {/* Mobile-only bar */}
      <div
        className="elementor-element elementor-element-bd3f8dd elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet e-flex e-con-boxed e-con e-parent"
        data-id="bd3f8dd"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-20b0b77 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-bb76b2f elementor-widget elementor-widget-theme-site-logo elementor-widget-image">
              <div className="elementor-widget-container">
                <SiteLogo />
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-eb39eee e-con-full e-flex e-con e-child" />
          <div className="elementor-element elementor-element-6407c55 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-65d6ae5 elementor-hidden-desktop elementor-hidden-laptop elementor-widget elementor-widget-jkit_nav_menu">
              <div className="elementor-widget-container">
                <div className="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title jeg_module_39__6a44c2960f93f">
                  <button aria-label="open-menu" className="jkit-hamburger-menu">
                    <i aria-hidden="true" className="jki jki-burger-menu-light" />
                  </button>
                  <div className="jkit-menu-wrapper">
                    <div className="jkit-menu-container">
                      <ul id="menu-main-menu" className="jkit-menu jkit-menu-direction-flex jkit-submenu-position-top">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-39 current_page_item menu-item-146">
                          <a href="https://danishoramish.com/" aria-current="page">
                            Home
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-884">
                          <a href="https://danishoramish.com/?page_id=791">Courses</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-156">
                          <a href="https://danishoramish.com/contact/">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div className="jkit-nav-identity-panel">
                      <div className="jkit-nav-site-title">
                        <a href="https://danishoramish.com" className="jkit-nav-logo" aria-label="Home Link">
                          <img
                            width={321}
                            height={311}
                            src={IMG.logo}
                            className="attachment-full size-full"
                            alt=""
                            decoding="async"
                            referrerPolicy="no-referrer"
                          />
                        </a>
                      </div>
                      <button aria-label="close-menu" className="jkit-close-menu">
                        <i aria-hidden="true" className="jki jki-cancel-light" />
                      </button>
                    </div>
                  </div>
                  <div className="jkit-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop bar */}
      <div
        className="elementor-element elementor-element-c0f1534 elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
        data-id="c0f1534"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-c8b652e e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-d86373d elementor-widget elementor-widget-theme-site-logo elementor-widget-image">
              <div className="elementor-widget-container">
                <SiteLogo />
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-f74357f e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-2f02558 elementor-nav-menu__align-end elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu">
              <div className="elementor-widget-container">
                <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                  <NavLinks idPrefix="1-2f02558" />
                </nav>
                <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Menu Toggle" aria-expanded="false">
                  <svg aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" />
                  </svg>
                  <svg aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
                  </svg>
                </div>
                <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
                  <NavLinks idPrefix="2-2f02558" />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  const slides = [
    { src: IMG.slide1, w: 1131, h: 1600, wpImage: "wp-image-177", priority: true },
    { src: IMG.slide2, w: 212, h: 300, wpImage: "wp-image-176" },
    { src: IMG.slide3, w: 212, h: 300, wpImage: "wp-image-221" },
  ];
  return (
    <div className="e-n-carousel swiper" role="region" aria-roledescription="carousel" aria-label="Carousel" dir="ltr">
      <div className="swiper-wrapper" aria-live="off">
        {slides.map((s, i) => (
          <div className="swiper-slide" data-slide={i + 1} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`} key={s.src}>
            <div className="elementor-element e-flex e-con-boxed e-con e-child">
              <div className="e-con-inner">
                <div className="elementor-element elementor-widget__width-initial elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <img
                      {...(s.priority ? { fetchPriority: "high" } : {})}
                      decoding="async"
                      width={s.w}
                      height={s.h}
                      src={s.src}
                      className={`attachment-full size-full ${s.wpImage}`}
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0} aria-label="Previous">
        <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
        </svg>
      </div>
      <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0} aria-label="Next">
        <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
        </svg>
      </div>
      <div className="swiper-pagination" />
    </div>
  );
}

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  alt?: string;
  linkable?: boolean;
}

function CourseCard({ img, title, desc, alt = "", linkable = false }: CourseCardProps) {
  const body = (
    <div className="jkit-icon-box-wrapper hover-from-left">
      <div className="icon-box icon-box-header elementor-animation-">
        <div className="icon style-color">
          <img loading="lazy" decoding="async" width={1131} height={1600} src={img} className="attachment-full size-full" alt={alt} referrerPolicy="no-referrer" />
        </div>
      </div>
      <div className="icon-box icon-box-body">
        <h4 className="title">{title}</h4>
        <p className="icon-box-description">{desc}</p>
      </div>
    </div>
  );
  return (
    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation-">
      {linkable ? (
        <a href="" className="icon-box-link" aria-label="JOIN CLASS NOW">
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923313801071"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: 15,
        right: 15,
        zIndex: 99999999,
        width: 46,
        height: 46,
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        textDecoration: "none",
      }}
    >
      <svg height="20px" width="20px" viewBox="0 0 509 512" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#ffffff"
          d="M259.253137,0.00180389396 C121.502859,0.00180389396 9.83730687,111.662896 9.83730687,249.413175 C9.83730687,296.530232 22.9142299,340.597122 45.6254897,378.191325 L0.613226597,512.001804 L138.700183,467.787757 C174.430395,487.549184 215.522926,498.811168 259.253137,498.811168 C396.994498,498.811168 508.660049,387.154535 508.660049,249.415405 C508.662279,111.662896 396.996727,0.00180389396 259.253137,0.00180389396 Z M259.253137,459.089875 C216.65782,459.089875 176.998957,446.313956 143.886359,424.41206 L63.3044195,450.21808 L89.4939401,372.345171 C64.3924908,337.776609 49.5608297,295.299463 49.5608297,249.406486 C49.5608297,133.783298 143.627719,39.7186378 259.253137,39.7186378 C374.871867,39.7186378 468.940986,133.783298 468.940986,249.406486 C468.940986,365.025215 374.874096,459.089875 259.253137,459.089875 Z M200.755924,146.247066 C196.715791,136.510165 193.62103,136.180176 187.380228,135.883632 C185.239759,135.781068 182.918689,135.682963 180.379113,135.682963 C172.338979,135.682963 164.002301,138.050856 158.97889,143.19021 C152.865178,149.44439 137.578667,164.09322 137.578667,194.171258 C137.578667,224.253755 159.487251,253.321759 162.539648,257.402027 C165.600963,261.477835 205.268745,324.111057 266.985579,349.682963 C315.157262,369.636141 329.460495,367.859106 340.450462,365.455539 C356.441543,361.9639 376.521811,350.186865 381.616571,335.917077 C386.711331,321.63837 386.711331,309.399797 385.184018,306.857991 C383.654475,304.305037 379.578667,302.782183 373.464955,299.716408 C367.351242,296.659552 337.288812,281.870254 331.68569,279.83458 C326.080339,277.796676 320.898622,278.418749 316.5887,284.378615 C310.639982,292.612729 304.918689,301.074268 300.180674,306.09099 C296.46161,310.02856 290.477218,310.577055 285.331175,308.389764 C278.564174,305.506821 259.516237,298.869139 236.160607,278.048627 C217.988923,261.847958 205.716906,241.83458 202.149458,235.711949 C198.582011,229.598236 201.835077,225.948292 204.584241,222.621648 C207.719135,218.824546 210.610997,216.097679 213.667853,212.532462 C216.724709,208.960555 218.432625,207.05866 220.470529,202.973933 C222.508433,198.898125 221.137195,194.690767 219.607652,191.629452 C218.07588,188.568136 205.835077,158.494558 200.755924,146.247066 Z"
        />
      </svg>
    </a>
  );
}

export default function App() {
  useEffect(() => {
    // Attach original WordPress/Elementor stylesheets
    const linkEls = EXTERNAL_STYLESHEETS.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    // Attach original scripts, in order, respecting the jQuery dependency chain
    let cancelled = false;
    const scriptEls: HTMLScriptElement[] = [];
    (async () => {
      for (const src of EXTERNAL_SCRIPTS) {
        if (cancelled) return;
        await new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => resolve();
          script.onerror = () => resolve();
          document.body.appendChild(script);
          scriptEls.push(script);
        });
      }

      // Re-run the original inline jQuery behaviors (scroll-to-top + reading progress bar)
      const win = window as any;
      if (win.jQuery) {
        const $ = win.jQuery;
        $(function () {
          if ($(win).scrollTop() > 100) {
            $(".hfe-scroll-to-top-wrap").removeClass("hfe-scroll-to-top-hide");
          }
          $(win).scroll(function () {
  if ($(win).scrollTop() < 100) {
    $(".hfe-scroll-to-top-wrap").fadeOut(300);
  } else {
    $(".hfe-scroll-to-top-wrap").fadeIn(300);
  }
});
          $(".hfe-scroll-to-top-wrap").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, 300);
            return false;
          });

          const bar = $(".hfe-reading-progress-bar");
          if (bar.length) {
            $(win).on("scroll", function () {
              const s = $(win).scrollTop();
              const d = $(document).height() - $(win).height();
              const p = d ? (s / d) * 100 : 0;
              bar.css("width", p + "%");
            });
          }
        });
      }
    })();

    // Reproduce the Elementor lazy-background IntersectionObserver
    const lazyloadRunObserver = () => {
      const lazyloadBackgrounds = document.querySelectorAll(".e-con.e-parent:not(.e-lazyloaded)");
      const lazyloadBackgroundObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("e-lazyloaded");
              lazyloadBackgroundObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "200px 0px 200px 0px" }
      );
      lazyloadBackgrounds.forEach((el) => lazyloadBackgroundObserver.observe(el));
    };
    document.addEventListener("elementor/lazyload/observe", lazyloadRunObserver);
    lazyloadRunObserver();

    return () => {
      cancelled = true;
      linkEls.forEach((el) => el.remove());
      scriptEls.forEach((el) => el.remove());
      document.removeEventListener("elementor/lazyload/observe", lazyloadRunObserver);
    };
  }, []);

  return (
    <div
      className="home wp-singular page-template-default page page-id-39 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor ehf-template-hello-elementor ehf-stylesheet-hello-elementor jkit-color-scheme hello-elementor-default elementor-default elementor-kit-65 elementor-page elementor-page-39"
      style={{ maxWidth: "100%", overflowX: "hidden" }}
    >
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <Header />

      <main id="content" className="site-main post-39 page type-page status-publish hentry" style={{ width: "100%", maxWidth: "100%", padding: 0, margin: 0 }}>
        <div className="page-content" style={{ width: "100%", maxWidth: "100%" }}>
          <div data-elementor-type="wp-page" data-elementor-id="39" className="elementor elementor-39" style={{ width: "100%", maxWidth: "100%" }}>
            {/* Our Introduction */}
            <div
              className="elementor-element elementor-element-5bcba54 e-flex e-con-full e-con e-parent e-lazyloaded"
              style={{
                position: "relative",
                minHeight: 700,
                width: "100%",
                maxWidth: "100%", // 👈 Overrides standard Elementor e-con-boxed limit to stretch full-screen
                boxSizing: "border-box",
                overflow: "hidden",
                margin: 0,
                padding: 0,
              }}
            >
              {/* Background Image bypassing hotlink protection */}
              <img
                src={IMG.glimpse3}
                alt=""
                referrerPolicy="no-referrer"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              {/* dark overlay — was an ::before pseudo-element in the original CSS,
                  React inline styles can't target ::before, so it's a real div here */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              {/* Inner container boxed to center the text content */}
              <div 
                className="e-con-inner" 
                style={{ 
                  position: "relative", 
                  zIndex: 1, 
                  maxWidth: 1140, 
                  width: "100%", 
                  margin: "0 auto", 
                  padding: "0 20px",
                  boxSizing: "border-box"
                }}
              >
                <div className="elementor-element elementor-element-9f45538 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-d35cb3c elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Our Introduction</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-9666a0f elementor-widget-laptop__width-initial elementor-widget elementor-widget-text-editor">
                    <div className="elementor-widget-container">
                      <p>
                        Dānish-o-Rāmish (DoR) is a community space and institute united as a sanctuary, dedicated to
                        cultural revival and well-being within Karachiites. In a bustling city like Karachi, where
                        rapid urbanization and professional pressures often lead to cultural and spiritual
                        disconnection, and mental health challenges, DoR fills a critical gap. It provides a nurturing
                        haven for individuals to reconnect with their heritage, find emotional balance, and build
                        community, addressing the urgent need for spaces that blend tradition with healing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-837c808 e-con-full elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" />
              </div>
            </div>

            {/* Upcoming Session (mobile) */}
            <div className="elementor-element elementor-element-df361d5 e-con-full elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-parent">
              <div className="elementor-element elementor-element-237656d elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Upcoming Session</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-030e38b elementor-widget-mobile__width-initial elementor-pagination-type-bullets elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-n-carousel">
                <div className="elementor-widget-container">
                  <Carousel />
                </div>
              </div>
            </div>

            {/* Our specialist courses (mobile) */}
            <div className="elementor-element elementor-element-f71882b e-con-full elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-parent">
              <div className="elementor-element elementor-element-a2afbe8 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-1704ab6 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Our specialist courses</h2>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-cafe643 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-d7f1332 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-f4cbdb4 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box">
                    <div className="elementor-widget-container">
                      <CourseCard
                        img={IMG.courseFarsi}
                        alt="Farsi Through Urdu"
                        title="Farsi Through Urdu"
                        desc="This language program is a comprehensive study of the Farsi language in three levels; the first two levels cover grammar and vocabulary while the third is a classical texts reading exercise."
                        linkable
                      />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-983eb75 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-3e3f937 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box">
                    <div className="elementor-widget-container">
                      <CourseCard
                        img={IMG.courseGeometric}
                        alt="Geometric Design of the Islamic World"
                        title="Geometric Design of the Islamic World"
                        desc="This program is an introduction to the world of calligraphy through three traditional scripts, namely, khat e riqa, khat e naskh & khat e nastaliq Irani."
                        linkable
                      />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-44c3242 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-3768748 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box">
                    <div className="elementor-widget-container">
                      <CourseCard
                        img={IMG.courseArabic}
                        alt="Fusha Quranic Arabic"
                        title="Fusha Quranic Arabic"
                        desc="This language program is a comprehensive study of the Farsi language in three levels; the first two levels cover grammar and vocabulary while the third is a classical texts reading exercise."
                      />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5b61658 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-2ffcd54 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box">
                    <div className="elementor-widget-container">
                      <CourseCard
                        img={IMG.courseCalligraphy}
                        alt="Traditional Calligraphy"
                        title="Traditional Calligraphy"
                        desc="This program is an introduction to the world of calligraphy through three traditional scripts, namely, khat e riqa, khat e naskh & khat e nastaliq Irani."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* A Glimpse Into the Atmosphere (mobile heading) */}
            <div className="elementor-element elementor-element-22487ef elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet e-flex e-con-boxed e-con e-parent">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-1cd17fa elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">A Glimpse Into the Atmosphere</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Glimpse images (mobile) */}
            <div className="elementor-element elementor-element-3a423d81 elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet e-flex e-con-boxed e-con e-parent">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-3c05e7fa e-con-full e-flex e-con e-child">
                  {[IMG.glimpse1, IMG.glimpse2, IMG.glimpse3, IMG.glimpse4].map((src) => (
                    <div className="elementor-element elementor-widget__width-initial elementor-widget elementor-widget-image" key={src}>
                      <div className="elementor-widget-container">
                        <img loading="lazy" decoding="async" width={1920} height={2560} src={src} className="attachment-full size-full" alt="" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning at DoR */}
            <div className="elementor-element elementor-element-3d46c79 e-flex e-con-boxed e-con e-parent">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-88a807e e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-d6d06c6 elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Learning at DoR</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-020c215 elementor-widget elementor-widget-text-editor">
                    <div className="elementor-widget-container">
                      <p>
                        DoR offers a diverse range of courses and therapeutic experiences that reconnect individuals
                        with their heritage and inner selves. From learning <strong>Urdu and Persian poetry</strong>,{" "}
                        <strong>Islamic calligraphy</strong>, and <strong>geometric art</strong>, to hands-on
                        experiences like <strong>pottery making</strong>, <strong>Gamla gardening</strong>, and{" "}
                        <strong>scriptwriting</strong>, our offerings are designed to cultivate creativity,
                        mindfulness, and healing. Participants can also engage in <strong>vocal Riyaz</strong>,{" "}
                        <strong>yoga and meditation</strong>, <strong>art therapy</strong>, and reflective gatherings
                        like <strong>Healing Through Poetry</strong>, <strong>Rumi Readings</strong>, and{" "}
                        <strong>Wellness Wednesdays</strong>. Regular community events such as <strong>Open Mics</strong>,{" "}
                        <strong>Qissa Goyi</strong>, and <strong>Music Nights</strong> foster self-expression and
                        connection. Whether you're seeking artistic growth, emotional clarity, or a deeper sense of
                        purpose, DoR provides a sanctuary where tradition meets transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* A Glimpse Into the Atmosphere (desktop heading) */}
            <div className="elementor-element elementor-element-dd7f5a2 elementor-hidden-mobile e-flex e-con-boxed e-con e-parent">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-a9bb5fd elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">A Glimpse Into the Atmosphere</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop glimpse placeholder grid (empty in source markup) */}
            <div className="elementor-element elementor-element-85e52a1 elementor-hidden-mobile e-flex e-con-boxed e-con e-parent">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-0967846 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-b90704a e-con-full e-flex e-con e-child" />
                  <div className="elementor-element elementor-element-1bbc455 e-con-full e-flex e-con e-child" />
                </div>
                <div className="elementor-element elementor-element-fdce66c e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-8fc3879 e-con-full e-flex e-con e-child" />
                  <div className="elementor-element elementor-element-38818e9 e-con-full e-flex e-con e-child" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Footer() {
  return (
    <div
      data-elementor-type="footer"
      data-elementor-id="115"
      className="elementor elementor-115 elementor-location-footer"
      data-elementor-post-type="elementor_library"
    >
      <div className="elementor-element elementor-element-68fe6cc1 e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-322de5e2 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-20bd20d4 elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Get Your Self Registered Today</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-abb2d21 elementor-widget__width-initial elementor-widget elementor-widget-jkit_mailchimp">
              <div className="elementor-widget-container">
                <div className="jeg-elementor-kit jkit-mailchimp style-inline jeg_module_39_5_6a44c2964bb45">
                  <form
                    method="post"
                    className="jkit-mailchimp-form"
                    data-listed=""
                    data-success-message="Successfully listed this email"
                    data-error-message="Something went wrong"
                  >
                    <div className="jkit-mailchimp-message" />
                    <div className="jkit-form-wrapper email-form">
                      <div className="jkit-mailchimp-email jkit-input-wrapper input-container">
                        <div className="jkit-form-group">
                          <div className="jkit-input-element-container jkit-input-group">
                            <input type="email" name="email" className="jkit-email jkit-form-control" placeholder="Enter Your Email" required />
                          </div>
                        </div>
                      </div>
                      <div className="jkit-submit-input-holder jkit-input-wrapper">
                        <button type="submit" className="jkit-mailchimp-submit position-before" name="jkit-mailchimp">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="elementor-element elementor-element-72b4cff1 e-con-full e-flex e-con e-parent">
        <div className="elementor-element elementor-element-3d400009 e-grid e-con-boxed e-con e-child">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-6e49de6a jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box">
              <div className="elementor-widget-container">
                <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation-">
                  <a href="tel:923313801071" className="icon-box-link" aria-label="Learn More">
                    <div className="jkit-icon-box-wrapper hover-from-left">
                      <div className="icon-box icon-box-header elementor-animation-">
                        <div className="icon style-color">
                          <Phone aria-hidden="true" />
                        </div>
                      </div>
                      <div className="icon-box icon-box-body">
                        <h4 className="title">Call us on </h4>
                        <p className="icon-box-description">03313801071</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-16a63df4 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box">
              <div className="elementor-widget-container">
                <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation-">
                  <a
                    href="https://maps.app.goo.gl/QLq26CJT9a4g8LT17?g_st=com.google.maps.preview.copy"
                    className="icon-box-link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Learn More"
                  >
                    <div className="jkit-icon-box-wrapper hover-from-left">
                      <div className="icon-box icon-box-header elementor-animation-">
                        <div className="icon style-color">
                          <MapPin aria-hidden="true" />
                        </div>
                      </div>
                      <div className="icon-box icon-box-body">
                        <h4 className="title">Location</h4>
                        <p className="icon-box-description">DOR, Business Center, PECHS, Karachi</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-803013e jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box">
              <div className="elementor-widget-container">
                <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation-">
                  <a href="mailto:dorkarachi@gmail.com" className="icon-box-link" aria-label="Learn More">
                    <div className="jkit-icon-box-wrapper hover-from-left">
                      <div className="icon-box icon-box-header elementor-animation-">
                        <div className="icon style-color">
                          <Mail aria-hidden="true" />
                        </div>
                      </div>
                      <div className="icon-box icon-box-body">
                        <h4 className="title">Email us on </h4>
                        <p className="icon-box-description">dorkarachi@gmail.com</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-b9c27f2 elementor-hidden-mobile e-flex e-con-boxed e-con e-child">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-ec14fef e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-d523cd0 elementor-widget elementor-widget-theme-site-logo elementor-widget-image">
                <div className="elementor-widget-container">
                  <SiteLogo />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2732c1c5 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-51bb874f elementor-icon-list--layout-inline elementor-align-end elementor-mobile-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items elementor-inline-items">
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <a href="#">
                        <span className="elementor-icon-list-text">Home</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <a href="#">
                        <span className="elementor-icon-list-text">Courses</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="elementor-element elementor-element-e0e9131 e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-56244aa e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-0f95a5d e-grid-align-left e-grid-align-mobile-center elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons">
              <div className="elementor-widget-container">
                <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                  <span className="elementor-grid-item" role="listitem">
                    <a
                      className="elementor-icon elementor-social-icon elementor-social-icon-jki-facebook-f elementor-repeater-item-76a9e62"
                      href="https://www.facebook.com/share/1Bz8ESEAFk/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36 }}
                    >
                      <span className="elementor-screen-only">Facebook</span>
                      <svg viewBox="0 0 320 512" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </a>
                  </span>
                  <span className="elementor-grid-item" role="listitem">
                    <a
                      className="elementor-icon elementor-social-icon elementor-social-icon-jki-instagram-1-light elementor-repeater-item-302ff58"
                      href="https://www.instagram.com/danish_o_ramish?igsh=Y2RjcGlzNGRxaXZv"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36 }}
                    >
                      <span className="elementor-screen-only">Instagram</span>
                      <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                  </span>
                  <span className="elementor-grid-item" role="listitem">
                    <a
                      className="elementor-icon elementor-social-icon elementor-social-icon-jki-linkedin-light elementor-repeater-item-6126b9e"
                      href="https://www.linkedin.com/company/danish-o-ramish/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36 }}
                    >
                      <span className="elementor-screen-only">LinkedIn</span>
                      <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.09 107 0 82.85 0 53.19a53.19 53.19 0 0 1 106.38 0c0 29.66-24.1 53.81-53.68 53.81zM447.9 448h-92.68V302.4c0-34.7-.7-79.28-48.29-79.28-48.29 0-55.72 37.72-55.72 76.71V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.28 61.9 111.28 142.3z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-4ac381f e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-379e5c8 elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  <a href="https://danishoramish.com/">
                    © 2025 Dãnish-o-Rãmish. All rights reserved.
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ children, seoData, isNoIndex }) => {
  const [helloText, setHelloText] = useState("World");
  const handleTextBayu = () => {
    setHelloText("Kobar");
  };
  const handleTextHasan = () => {
    setHelloText("Arafat");
  };

  const { asPath: canonicalPath } = useRouter();
  const canonicalUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  console.log("canonicalPath", canonicalPath);

  return (
    <Fragment>
    <Head>
        {/* SEO Begin  */}
        <title>{`${seoData?.title}`}</title>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico"/>

        {isNoIndex && <meta name="robots" content="noindex" />}
        <meta name="description" content={seoData?.description} />
        <meta name="author" content={seoData?.author} />
        {/* SEO End */}

        {/* Open Graph Start  */}
        <meta property="og:type" content={seoData?.openGraph.type} />
        <meta property="og:locale" content={seoData?.openGraph.locale} />
        <meta property="og:url" content={seoData?.openGraph.url} />
        <meta property="og:title" content={seoData?.openGraph.title} />
        <meta
          property="og:description"
          content={seoData?.openGraph.description}
        />
        <meta property="og:image" content={seoData?.openGraph.image} />
        <meta property="og:site_name" content={seoData?.openGraph.site_name} />
        {/* Open Graph End */}

        {/* Twitter Card Info Start */}
        <meta name="twitter:card" content={seoData?.twitter.card} />
        <meta name="twitter:site" content={seoData?.twitter.site} />
        <meta name="twitter:title" content={seoData?.twitter.title} />
        <meta
          name="twitter:description"
          content={seoData?.twitter.description}
        />
        <meta name="twitter:image" content={seoData?.twitter.image} />
        {/* Twitter Card Info End */}

        {/* canical */}
        <link rel="canonical" href={`${canonicalUrl}${canonicalPath}`} />

        {/* css */}
        <link rel="stylesheet" href="/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/css/owl.carousel.min.css"/>
        <link rel="stylesheet" href="/css/slicknav.css"/>
        <link rel="stylesheet" href="/css/flaticon.css"/>
        <link rel="stylesheet" href="/css/progressbar_barfiller.css"/>
        <link rel="stylesheet" href="/css/gijgo.css"/>
        <link rel="stylesheet" href="/css/animate.min.css"/>
        <link rel="stylesheet" href="/css/animated-headline.css"/>
        <link rel="stylesheet" href="/css/magnific-popup.css"/>
        <link rel="stylesheet" href="/css/fontawesome-all.min.css"/>
        <link rel="stylesheet" href="/css/themify-icons.css"/>
        <link rel="stylesheet" href="/css/slick.css"/>
        <link rel="stylesheet" href="/css/nice-select.css"/>
        {/* CSS End */}

        <script src="/js/vendor/modernizr-3.5.0.min.js"></script>
    
        <script src="/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        
        <script src="/js/jquery.slicknav.min.js"></script>

        
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/slick.min.js"></script>
        
        <script src="/js/wow.min.js"></script>
        <script src="/js/animated.headline.js"></script>
        <script src="/js/jquery.magnific-popup.js"></script>

        
        <script src="/js/gijgo.min.js"></script>
        
        <script src="/js/jquery.nice-select.min.js"></script>
        <script src="/js/jquery.sticky.js"></script>
        
        <script src="/js/jquery.barfiller.js"></script>

        
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/jquery.countdown.min.js"></script>
        <script src="/js/hover-direction-snake.min.js"></script>

        
        <script src="/js/contact.js"></script>
        <script src="/js/jquery.form.js"></script>
        <script src="/js/jquery.validate.min.js"></script>
        <script src="/js/mail-script.js"></script>
        <script src="/js/jquery.ajaxchimp.min.js"></script>

            
        <script src="/js/plugins.js"></script>
        <script src="/js/main.js"></script>
    </Head>
    <header>
        <div className="header-area header-transparent">
            <div className="main-header ">
                <div className="header-bottom  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">

                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <h1 style={{color: 'azure'}}>Desa Rejo</h1>
                                    
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                    
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation" className="mt-10 mb-10">                                                                                          
                                                <Link href="/" passHref><li className="active" ><button className="genric-btn info-border circle">Home</button></li></Link>
                                                <Link href="/bumdes" passHref><li><button className="genric-btn info-border circle">BUMDes</button></li></Link>
                                                <Link href="/laporan" passHref><li><button className="genric-btn info-border circle">Laporan</button></li></Link>
                                                
                                                <Link href="/info" passHref><li><button className="genric-btn info-border circle">Info</button></li></Link>
                                                
                                                
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div> 
                            
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
    {children}
    <footer>
     <div className="footer-wrappper footer-bg">
        
        <div className="footer-area footer-padding">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="single-footer-caption mb-30">
                                
                                <div className="footer-logo mb-25">
                                    <h1 style={{color: 'azure'}}>Desa Rejo</h1>
                                    
                                </div>
                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <p>Jl. Rejo, Ambulu. Jember. Indonesia <br/>68172</p>
                                    </div>
                                </div>
                                
                                <div className="footer-social">
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="single-footer-caption mb-30">
                                
                                <div className="footer-logo mb-25">
                                    <h1 style={{color: 'azure'}}>Peta</h1>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </footer> 
    <div id="back-top" >
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
    </div>
    
    
    </Fragment>
  );
};

export default Nav;
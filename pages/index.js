import Head from 'next/head'
import Image from 'next/image'
import Layout from "../src/components/layout/navbar"
import { DEFAULT_SEO } from "../src/utils"
// import styles from '../styles/Style.module.css'

export default function Home({ tableData, SEO }) {
  return (
    <div>
    <Layout seoData={SEO}>
    <main>
        
        <section className="slider-area ">
            <div className="slider-active">
                
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-12">
                                <div className="hero__caption">
                                    <h2 style={{color: 'azure'}} data-animation="fadeInLeft" data-delay="0.4s">Selamat Datang di Portal Informasi</h2>
                                    <h1 data-animation="fadeInLeft" data-delay="0.2s">Desa Rejo</h1>
                                    <a href="#" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.7s">Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
        
        <div className="services-area">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <Image src="/img/icon/icon1.svg" alt="icon-1" width={250} height={250} />
                            </div>
                            <div className="features-caption">
                                <h3>Desa Berbasis Wisata</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in, ex porro quia culpa minus amet voluptatibus rerum sequi odit facere eligendi natus, temporibus tenetur earum illum consectetur, odio nihil!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <Image src="/img/icon/icon2.svg" alt="icon-2" width={250} height={250} />
                            </div>
                            <div className="features-caption">
                                <h3>Desa Berbasis Lingkungan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in quis doloribus ratione commodi illo optio hic vitae, ut reprehenderit fuga pariatur dolorem temporibus aut enim deleniti totam sed dicta.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <Image src="/img/icon/icon3.svg" alt="icon-3" width={250} height={250} />
                            </div>
                            <div className="features-caption">
                                <h3>Desa Berbasis Gotong Royong</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi animi aspernatur voluptas cupiditate accusantium dolores ipsum velit voluptates laborum officiis. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="courses-area section-padding40 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Statistik Desa</h2>
                        </div>
                    </div>
                </div>
                
                    <div className="services-area services-area2">
                        <div className="container">
                            <div className="row justify-content-sm-center">
                                {tableData?.map((data) => (
                                    <div key={data.id} className="col-lg-6 col-md-6 col-sm-8">
                                        <div className="single-services mb-30">
                                            <div className="features-icon">
                                                <Image src="/img/icon/icon1.svg" alt="icon-1" width={50} height={50} />
                                            </div>
                                            <div className="features-caption">
                                                <h3>{data.item}</h3>
                                                <p>{data.jumlah}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="col-lg-6 col-md-6 col-sm-8">
                                    <div className="single-services mb-30">
                                        <div className="features-icon">
                                            <img src="/img/icon/icon1.svg" alt=""/>
                                        </div>
                                        <div className="features-caption">
                                            <h3>Luas Wilayah</h3>
                                            <p>20.000 m2</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-8">
                                    <div className="single-services mb-30">
                                        <div className="features-icon">
                                            <img src="/img/icon/icon2.svg" alt=""/>
                                        </div>
                                        <div className="features-caption">
                                            <h3>Jumlah Penduduk</h3>
                                            <p>10000 Jiwa</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-8">
                                    <div className="single-services mb-30">
                                        <div className="features-icon">
                                            <img src="/img/icon/icon1.svg" alt=""/>
                                        </div>
                                        <div className="features-caption">
                                            <h3>Total Pendapatan Desa</h3>
                                            <p>5.5 Milyar</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-8">
                                    <div className="single-services mb-30">
                                        <div className="features-icon">
                                            <img src="/img/icon/icon1.svg" alt=""/>
                                        </div>
                                        <div className="features-caption">
                                            <h3>Total Pengeluaran Desa</h3>
                                            <p>5.45 Milyar</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    
                
            </div>
        </div>
        

        
        <div className="courses-area section-padding40 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Sambutan Kepala Desa</h2>
                        </div>
                    </div>
                </div>
                
                    <div className="services-area services-area2">
                        <div className="container">
                            <div className="row justify-content-sm-center">
                                <div className="col-lg-12 col-md-12 col-sm-8">
                                    <div className="single-services mb-30">
                                        
                                        <div className="cat-icon">
                                            <Image src="/img/gallery/team1.png" alt="team-1" width={300} height={300} />
                                        </div>
                                        <div className="features-caption">
                                            <h3 style={{color: 'midnightblue'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae, molestiae dolorem aperiam inventore quasi nemo doloribus. Voluptate ratione aperiam accusamus dolore dignissimos quo, saepe laboriosam? Quas maiores unde incidunt.</h3>
                                            <h4 style={{color: 'black'}}>-Kepala Desa Rejo-</h4>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                
            </div>
        </div>
        

    </main>
    
  </Layout>
  </div>
  )
}

export async function getStaticProps() {
  const getStatistiks = await fetch(
    `${process.env.BASE_URL}/statistiks`
  );
  const allStatistiks = await getStatistiks.json();
  const tableData = allStatistiks;

//   const title = allProductsByCategory.name;
  const title = "Desa Rejo";
  const author = "Fakhry";
  const SEO = {
    ...DEFAULT_SEO,
    title,
    author,
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: "https://web-desa-rejo.vercel.app",
      title,
      site_name: "desa-rejo",
    },
    twitter: {
      card: "summary_large_image",
      site: "@desa-rejo",
      title,
    },
  };
  return {
    props: {
      tableData,
      SEO,
    },
  };
}

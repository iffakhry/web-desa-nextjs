import Head from 'next/head'
import Image from 'next/image'
import Layout from "../src/components/layout/navbar"
import { DEFAULT_SEO } from "../src/utils"
// import styles from '../styles/Style.module.css'

export default function Home({ SEO }) {
  return (
    <div>
    <Layout seoData={SEO}>
    <main>
    <section className="slider-area slider-area2">
        <div className="slider-active">
            
            <div className="single-slider slider-height2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-11 col-md-12">
                            <div className="hero__caption hero__caption2">
                                <h1 data-animation="bounceIn" data-delay="0.2s">Info</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="contact-section">
        <div className="container">
            <div className="row flex-row">
                
                <div className="col-lg-3">
                    <ul className="nav nav-tabs flex-column" id="myTab" role="tablist" aria-orientation="vertical">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="sejarah-tab" data-toggle="tab" href="#sejarah" role="tab"
                                aria-controls="sejarah" aria-selected="true">
                                <p>Sejarah</p>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="wilayah-tab" data-toggle="tab" href="#wilayah" role="tab"
                                aria-controls="wilayah" aria-selected="false">
                                <p>Luas Wilayah</p>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="penduduk-tab" data-toggle="tab" href="#penduduk" role="tab"
                                aria-controls="penduduk" aria-selected="false">
                                <p>Jumlah Penduduk</p>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="struktur-tab" data-toggle="tab" href="#struktur" role="tab"
                                aria-controls="struktur" aria-selected="false">
                                <p>Struktur Desa</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-9">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="sejarah" role="tabpanel" aria-labelledby="sejarah-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere quas laborum excepturi perspiciatis, optio quae quidem a alias minus nulla unde dolorum suscipit et dignissimos numquam delectus sapiente debitis!
                        </div>
                        <div className="tab-pane fade" id="wilayah" role="tabpanel" aria-labelledby="wilayah-tab">Luas wilayah desa rejo sekitar 40.000 m2. dengan mayoritas penduduknya bekerja sebagai petani.
                        </div>
                        <div className="tab-pane" id="penduduk" role="tabpanel" aria-labelledby="penduduk-tab">Jumlah penduduk desa rejo sekitar 10.000 jiwa.</div>
                        <div className="tab-pane" id="struktur" role="tabpanel" aria-labelledby="struktur-tab">
                            Kepala Desa: H. Ahmad.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
    
  </Layout>
  </div>
  )
}

export async function getStaticProps() {
  const title = "Desa Rejo";
  const author = "Fakhry";
  const SEO = {
    ...DEFAULT_SEO,
    title,
    author,
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: "https://desa-rejo.com",
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
      SEO,
    },
  };
}

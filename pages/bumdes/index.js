import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from "../../src/components/layout/navbar"
import { DEFAULT_SEO } from "../../src/utils"
// import styles from '../styles/Style.module.css'

export default function Home({ tableData, SEO }) {
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
                                    <h1 data-animation="bounceIn" data-delay="0.2s">BUMDes</h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
        
        <div className="courses-area section-padding40 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Daftar Produk Unggulan Desa</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-xl-4 col-lg-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <p className="text-right">View: </p>
                            </div>
                            <div className="col-lg-8">
                                <div className="input-group-icon mb-10">
                                    {/* <div className="icon"><i className="fa fa-eye" aria-hidden="true"></i></div> */}
                                    <div className="form-select" id="default-select">
                                        <select>
                                            <option value="1">All</option>
                                            <option value="1">Tas</option>
                                            <option value="1">Diapers</option>
                                            <option value="1">Minyak</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="row">
                    {tableData?.map((data) => (
                        <div key={data.id} className="col-lg-4">
                            <div className="properties properties2 mb-30">
                                <div className="properties__card">
                                    <div className="properties__img overlay1">
                                        <a href="#"><img src={data.foto} alt=""/></a>
                                    </div>
                                    <div className="properties__caption">
                                        <p>{data.jenis}</p>
                                        <h3><a href="#">{data.nama}</a></h3>
                                        <p>{data.deskripsi}</p>
                                        <div className="properties__footer d-flex justify-content-between align-items-center">
                                            <div className="arrow">
                                                <a href="#">
                                                <span className="lnr text-white ti-arrow-left"></span>
                                                </a>
                                            </div>
                                            <div className="price" >
                                                <p style={{color: 'tomato'}}>Rp. <span style={{color: 'tomato'}}>{data.harga}</span></p>
                                            </div>
                                        </div>
                                        <Link href={`bumdes/${data.id}`} passHref><button className="border-btn border-btn2">Lihat Selengkapnya</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="/img/product/product-1.jpg" alt=""/></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Tas</p>
                                    <h3><a href="#">Tas Belanja</a></h3>
                                    <p>Tas Belanja serbaguna yang terbuat dari bahan daur ulang plastik, kuat dan awet.
                                        Hasil kerjasama BUMDes Desa Rejo dengan UMKM binaan Desa. 
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="arrow">
                                            <a href="#">
                                               <span className="lnr text-white ti-arrow-left"></span>
                                            </a>
                                        </div>
                                        <div className="price" >
                                            <p style={{color: 'tomato'}}>Rp. <span style={{color: 'tomato'}}>30.000,-</span></p>
                                        </div>
                                    </div>
                                    <a href="product_detail.html" className="border-btn border-btn2">Lihat Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="/img/product/product-1.jpg" alt=""/></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Tas</p>
                                    <h3><a href="#">Tas Belanja</a></h3>
                                    <p>Tas Belanja serbaguna yang terbuat dari bahan daur ulang plastik, kuat dan awet.
                                        Hasil kerjasama BUMDes Desa Rejo dengan UMKM binaan Desa. 
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="arrow">
                                            <a href="#">
                                               <span className="lnr text-white ti-arrow-left"></span>
                                            </a>
                                        </div>
                                        <div className="price" >
                                            <p style={{color: 'tomato'}}>Rp. <span style={{color: 'tomato'}}>30.000,-</span></p>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Lihat Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="/img/product/product-1.jpg" alt=""/></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Tas</p>
                                    <h3><a href="#">Tas Belanja</a></h3>
                                    <p>Tas Belanja serbaguna yang terbuat dari bahan daur ulang plastik, kuat dan awet.
                                        Hasil kerjasama BUMDes Desa Rejo dengan UMKM binaan Desa. 
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="arrow">
                                            <a href="#">
                                               <span className="lnr text-white ti-arrow-left"></span>
                                            </a>
                                        </div>
                                        <div className="price" >
                                            <p style={{color: 'tomato'}}>Rp. <span style={{color: 'tomato'}}>30.000,-</span></p>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Lihat Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="/img/product/product-1.jpg" alt=""/></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Tas</p>
                                    <h3><a href="#">Tas Belanja</a></h3>
                                    <p>Tas Belanja serbaguna yang terbuat dari bahan daur ulang plastik, kuat dan awet.
                                        Hasil kerjasama BUMDes Desa Rejo dengan UMKM binaan Desa. 
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="arrow">
                                            <a href="#">
                                               <span className="lnr text-white ti-arrow-left"></span>
                                            </a>
                                        </div>
                                        <div className="price" >
                                            <p style={{color: 'tomato'}}>Rp. <span style={{color: 'tomato'}}>30.000,-</span></p>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Lihat Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="/img/product/product-1.jpg" alt=""/></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Tas</p>
                                    <h3><a href="#">Tas Belanja</a></h3>
                                    <p>Tas Belanja serbaguna yang terbuat dari bahan daur ulang plastik, kuat dan awet.
                                        Hasil kerjasama BUMDes Desa Rejo dengan UMKM binaan Desa. 
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="arrow">
                                            <a href="#">
                                               <span className="lnr text-white ti-arrow-left"></span>
                                            </a>
                                        </div>
                                        <div className="price" >
                                            <p style={{color: 'tomato'}}>Rp. <span style={{color: 'tomato'}}>30.000,-</span></p>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Lihat Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="/img/product/product-1.jpg" alt=""/></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Tas</p>
                                    <h3><a href="#">Tas Belanja</a></h3>
                                    <p>Tas Belanja serbaguna yang terbuat dari bahan daur ulang plastik, kuat dan awet.
                                        Hasil kerjasama BUMDes Desa Rejo dengan UMKM binaan Desa. 
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="arrow">
                                            <a href="#">
                                               <span className="lnr text-white ti-arrow-left"></span>
                                            </a>
                                        </div>
                                        <div className="price" >
                                            <p style={{color: 'tomato'}}>Rp. <span style={{color: 'tomato'}}>30.000,-</span></p>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Lihat Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>  
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mt-40">
                            <a href="#" className="border-btn">Load More</a>
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
  const getProducts = await fetch(
    `${process.env.BASE_URL}/products`
  );
  const allProducts = await getProducts.json();
  const tableData = allProducts;
//   console.log("datanya",tableData);
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
      tableData,
      SEO,
    },
  };
}

import Head from 'next/head'
import Image from 'next/image'
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
        
        <section className="blog_area single-post-area section-padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 posts-list">
                  <div className="single-post">
                     <div className="row">
                        <div className="col-lg-6">
                           <div className="feature-img">
                              <Image className="img-fluid" src={tableData.foto} alt="product-photo" width={400} height={400} />
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <span className="badge badge-primary">{tableData.jenis}</span>
                           <a href="blog_details.html">
                              <h3 style={{color: '#2d2d2d'}}>{tableData.nama}</h3>
                           </a>
                           <p>{tableData.deskripsi}</p>
                        </div>
                     </div>
                  </div>
                  <div className="navigation-top">
                     <div className="d-sm-flex justify-content-between text-center">
                        <p className="like-info"><span className="align-middle"><i className="fa fa-heart"></i></span> 10 Orang telah membeli produk ini.</p>
                        
                        
                     </div>
                     <div className="navigation-area">
                        <div className="row">

                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="blog_right_sidebar">
                     <aside className="single_sidebar_widget popular_post_widget">
                        <h3 className="widget_title" style={{color: '#2d2d2d'}}>Rp. <span>{tableData.harga}</span></h3>
                        <a target="_blank" rel="noreferrer noopener" href={`https://api.whatsapp.com/send?phone=6285123931123&text=Halo%20Admin,%0AApakah%20barang%20${tableData.nama}%20masih%20ready%20stock%3F`} className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                           type="submit">Beli</a>
                     </aside>

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

export async function getStaticPaths() {
    const getProducts = await fetch(`${process.env.BASE_URL}/products`);
    const products = await getProducts.json();
    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));
    return {
      // paths: [
      //   { params: { category: "database", name:"gatsby" } },
      // ],
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }) {
  const getProducstById = await fetch(
    `${process.env.BASE_URL}/products/${params.id}`
  );
  console.log("param",params);
  const allProductsById = await getProducstById.json();
  const tableData = allProductsById;
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

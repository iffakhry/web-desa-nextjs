import Head from 'next/head'
import Image from 'next/image'
import Layout from "../src/components/layout/navbar"
import { DEFAULT_SEO } from "../src/utils"
import {Pie} from 'react-chartjs-2';
// import styles from '../styles/Style.module.css'

const data = {
	labels: ['Dana Desa', 'BUMDes', 'Pajak', 'Lain-lain'],
	datasets: [{
		label: 'Pemasukan Desa',
        data: [300000000, 100000000, 200000000, 50000000],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
        '#FFAE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
        '#FFAE56'
		]
	}]
};

export default function Home({ SEO }) {
  return (
    <div>
    <Layout seoData={SEO}>
    <main>
      
      <section class="slider-area slider-area2">
         <div class="slider-active">
            
            <div class="single-slider slider-height2">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-8 col-lg-11 col-md-12">
                        <div class="hero__caption hero__caption2">
                           <h1 data-animation="bounceIn" data-delay="0.2s">Laporan</h1>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      <section class="blog_area single-post-area section-padding">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="row mr-5">
                     <p>Data Pemasukan Desa</p>
                     <Pie
                        data={data}
                        width={400}
                        height={400}
                    />
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="row ml-5">
                     <p>Data Pengeluaran Desa</p>
                     <Pie
                        data={data}
                        width={400}
                        height={400}
                    />
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

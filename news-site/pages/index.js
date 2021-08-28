import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/index.module.css';
import Link from 'next/link' 





export default function Home() {
  return (
    <div className='pagecontainer'>
     

    
      <Head>
        <title>Create Next App</title>
       
      </Head>


      <Layout>

         <div className={styles.main}>
          
      
           <h1><u>HELLO!</u></h1>
          
           <h2><b>Welcome to News 24 </b></h2>
             <h5>Your favourite stop for all the latest trending news going all around the world! Click on the "Latest News" option to get started.</h5>
            <a Link="/feed/1"> <button type="submit" className="w-half rounded bg-green-500 hover:bg-red-600 text-black py-2 px-4">Latest News</button></a>
           <h3>Have a suggestion for us? </h3>
           <h4>Please write us at   <u>newsnoreply@gmail.com</u></h4>

           </div>
           </Layout>

           </div>
     
         
);}

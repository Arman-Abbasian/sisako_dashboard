import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';


export default function Part() {
    const [products,setProducts]=useState({data:null,errorr:"",loading:false});
//    useEffect(()=>{
//     setProducts({data:null,errorr:"",loading:true})
//     axios.get(`http://localhost:4000/die?customer=${customer}`)
//     .then((res)=>{
//         let uniqueProduct = [];
//         const products=res.data.map(item=>item.product);
//         products.forEach((element) => {
//             if (!uniqueProduct.includes(element)) {
//                 uniqueProduct.push(element);
//             }
//         });
//         setProducts({data:uniqueProduct,errorr:"",loading:false});
//     })
//     .catch(err=>{
//         setProducts({data:null,errorr:err.message,loading:false})
//         console.log(err.message)
//     })
//    },[]);
//    console.log(products)
  return (
    <div className='p-2'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='bg-sky-400 h-20 flex justify-start items-center rounded-sm drop-shadow-xl p-2 sticky top-2 bg-opacity-80 z-10'>
        <nav className='flex justify-start items-center gap-12'>
          <div>
            <Image src="/images/logo.webp" alt="sisako logo" width={60} height={60}/>
          </div>
          <div className='flex-1 flex justify-start items-center gap-9'>
            <Link legacyBehavior href="#"><a>پرس ها</a></Link>
            <Link legacyBehavior href="#"><a>قالب ها</a></Link>
            <Link legacyBehavior href="#"><a> پرسنل</a></Link>
          </div>
        </nav>
      </header>
    <main className='flex flex-col justify-center items-center gap-10 py-4'>
    {/* {products.data && 
        products.data.map((item,index)=>(
            <Link key={index} href={`/die/${customer}/${item}`} legacyBehavior><a className='w-full'>
      <div className='flex justify-center items-center gap-4  bg-slate-700 bg-opacity-30 shadow-lg drop-shadow-lg rounded-md w-full p-2'>
      <div className='rounded-md overflow-hidden'>
        <img src="/images/press/section/pneumatic.webp" alt="pneumatic" class="w-48 h-48 object-center object-cover" />
      </div>
        <div className='flex-1 flex justify-center items-center text-sky-400 text-2xl '>
          <h2>{item}</h2>
        </div>
      </div>
        </a></Link>
        ))
    } */}

    </main>
      
      <footer className='fixed bottom-0 right-0 left-2 bg-sky-400 h-20 w-full flex justify-center items-center'>
        <p>با بیش از بیست سال سابقه کار در صنعت خودرو</p>
      </footer>
    </div>
  )
}
export async function getServerSideProps({query}) {
    // Fetch data from external API
    console.log(query)
  
    // Pass data to the page via props
    return { props: {  } }
  }
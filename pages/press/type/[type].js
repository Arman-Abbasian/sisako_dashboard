import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';


export default function Type({kind}) {
  const [presses,setPresses]=useState({data:null,error:null,loading:false});
  console.log(kind);
  useEffect(()=>{
    setPresses({data:null,error:null,loading:true})
    axios.get(`http://localhost:4000/press?type=${kind}`)
    .then(res=>{
      setPresses({data:res.data,error:null,loading:false})
    })
    .catch(err=>{
      setPresses({data:null,error:err.message,loading:false})
    })
  },[])
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
            <Link href={'/'} legacyBehavior><a className='bg-red-500 w-full'><Image src="/images/logo.webp" alt="sisako logo" width={60} height={60}/></a></Link>
          </div>
          <div className='flex-1 flex justify-start items-center gap-9'>
            <Link legacyBehavior href="/press"><a className='py-3 px-3 rounded-md hover:bg-sky-600 transition-all duration-300'>پرس ها</a></Link>
            <Link legacyBehavior href="#"><a className='py-3 px-3 rounded-md hover:bg-sky-600 transition-all duration-300'>قالب ها</a></Link>
            <Link legacyBehavior href="#"><a className='py-3 px-3 rounded-md hover:bg-sky-600 transition-all duration-300'> پرسنل</a></Link>
          </div>
        </nav>
      </header>
      {presses.data &&  presses.data.length >0 && 
    <main className='flex flex-col justify-center items-center gap-10 py-4'>
      {presses.data.map(item=>{
        return <Link key={item.id} href={`/press/detail/${item.id}`} legacyBehavior><a className='w-full'>
        <div className='flex justify-start items-center gap-4  bg-slate-700 bg-opacity-30 shadow-lg drop-shadow-lg rounded-md w-full p-2'>
        <div className='rounded-md overflow-hidden'>
          <img src={`/images/press/press/${item.id}.jpg`} alt="press" class="w-48 h-48 object-center object-cover" />
        </div>
          <div className='flex-1 flex flex-col gap-16 justify-start items-start text-sky-400 text-lg '>
          <div className='flex items-center gap-2'>
            <h2>کد پرس :</h2>
            <p>{item.id}</p>
          </div>
          <div className='flex items-center gap-2'>
            <h2>مشخصات پرس :</h2>
            <p>{item.name}</p>
          </div>
          </div>
        </div>
          </a></Link>
      })}

    </main>
    }
      
      <footer className='fixed bottom-0 right-0 left-2 bg-sky-400 h-20 w-full flex justify-center items-center'>
        <p>با بیش از بیست سال سابقه کار در صنعت خودرو</p>
      </footer>
    </div>
  )
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: 'ضربه ای' } },
      { params: { type: 'هیدرولیک' } },
      { params: { type: 'پرس جوش' } },
      { params: { type: 'جوش co2' } },
      { params: { type: 'گان' } },
    ],
    fallback: false,
  }
};
export async function getStaticProps({params}) {
  const kind=params;
  console.log(params)
const {data}= await axios.get(`http://localhost:4000/press?type=${params.type}`);
  return {
    props: {
      kind:kind.type
    }, // will be passed to the page component as props
  }
}

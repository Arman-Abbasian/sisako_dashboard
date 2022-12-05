import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';


export default function PersonnelName({unit,type}) {
    console.log(type);
    const [personnel,setPersonnel]=useState({data:null,error:null,loading:false});
    useEffect(()=>{
        setPersonnel({data:null,error:null,loading:true});
        axios.get(`http://localhost:4000/personnel?unit=${unit}`)
        .then(res=>{
            setPersonnel({data:res.data,error:null,loading:false}); 
        })
        .catch(err=>{
            setPersonnel({data:null,error:err.message,loading:false}); 
        })
    },[]);
    console.log(personnel)
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
            <Link legacyBehavior href="/press"><a className='py-3 px-3 rounded-md hover:bg-sky-600 transition-all duration-300'>پرس ها</a></Link>
            <Link legacyBehavior href="#"><a className='py-3 px-3 rounded-md hover:bg-sky-600 transition-all duration-300'>قالب ها</a></Link>
            <Link legacyBehavior href="/personnel"><a className='py-3 px-3 rounded-md hover:bg-sky-600 transition-all duration-300'> پرسنل</a></Link>
          </div>
        </nav>
      </header>
    <main className='flex flex-col justify-center items-center gap-10 py-4'>
    {personnel.data && 
    personnel.data.map(item=>{
        return  <Link href={`personnel/type/${type}/${unit}/${item.id}`} legacyBehavior><a className='w-full'>
        <div className='flex justify-center items-center gap-4  bg-slate-700 bg-opacity-30 shadow-lg drop-shadow-lg rounded-md w-full p-2'>
        <div className='rounded-md overflow-hidden'>
          <img src="/images/sections/die.png" alt="press" class="w-48 h-48 object-center object-cover" />
        </div>
          <div className='flex-1 flex justify-center items-center text-sky-400 text-2xl '>
            <h2>{item.name} {item.lastName}</h2>
          </div>
        </div>
          </a></Link>
    })
        
    }
        
    </main>
      
      <footer className='fixed bottom-0 right-0 left-2 bg-sky-400 h-20 w-full flex justify-center items-center'>
        <p>با بیش از بیست سال سابقه کار در صنعت خودرو</p>
      </footer>
    </div>
  )
};
export async function getServerSideProps({query}) {
    const unit=query.unitSlug;
    const type=query.typeSlug
    return { props: 
      { 
        unit,
        type:type,
        unit:unit
       } 
      }
  }
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
        <meta name="description" content="sisako dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=' bg-primary-dark-green h-20 flex justify-start items-center rounded-sm drop-shadow-xl p-2 sticky top-2 bg-opacity-80 z-10'>
        <nav className='flex justify-start items-center gap-12'>
          <div>
            <Image src="/images/logo.webp" alt="sisako logo" width={60} height={60}/>
          </div>
          <div className='flex-1 flex justify-start items-center gap-9'>
            <Link legacyBehavior href="/press"><a className='py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300'>پرس ها</a></Link>
            <Link legacyBehavior href="/die"><a className='py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300'>قالب ها</a></Link>
            <Link legacyBehavior href="/personnel"><a className='py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300'> پرسنل</a></Link>
          </div>
        </nav>
      </header>
      <main className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-4  mt-10 mb-20 container mx-auto'>
    {personnel.data && 
    personnel.data.map(item=>{
        return  <div key={item.id} className='bg-primary-light-green drop-shadow-lg p-2 rounded-md'>
        <Link href={`/personnel/type/${type}/${unit}/${item.id}`} legacyBehavior><a className='w-full'>
            <div className='grid grid-cols-2  gap-4'>
              <div className='aspect-w-1 aspect-h-1 '><img src={item.image} alt='personnel' className='w-full h-full object-center object-contain' /></div>
              <div className='flex  justify-center items-center'>
              <h2>{item.name} {item.lastName}</h2>
              </div>
            </div>
          </a></Link>
    </div>
    })     
    }     
    </main>
      
    <footer className='fixed bottom-0 right-0 left-2 bg-primary-dark-green h-20 w-full flex justify-center items-center'>
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

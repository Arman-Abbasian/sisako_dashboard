import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
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
      <Link href="/press" legacyBehavior><a className='w-full'>
      <div className='flex justify-center items-center gap-4  bg-slate-700 bg-opacity-30 shadow-lg drop-shadow-lg rounded-md w-full p-2'>
      <div className='rounded-md overflow-hidden'>
        <img src="/images/sections/press.jpg" alt="press" class="w-48 h-48 object-center object-cover" />
      </div>
        <div className='flex-1 flex justify-center items-center text-sky-400 text-2xl '>
          <h2>پرس های سیساکو</h2>
        </div>
      </div>
        </a></Link>

        <Link href="/die" legacyBehavior><a className='w-full'>
      <div className='flex justify-center items-center gap-4  bg-slate-700 bg-opacity-30 shadow-lg drop-shadow-lg rounded-md w-full p-2'>
      <div className='rounded-md overflow-hidden'>
        <img src="/images/sections/die.png" alt="press" class="w-48 h-48 object-center object-cover" />
      </div>
        <div className='flex-1 flex justify-center items-center text-sky-400 text-2xl '>
          <h2> قالب های سیساکو</h2>
        </div>
      </div>
        </a></Link>
        <Link href="/personnel" legacyBehavior><a className='w-full'>
      <div className='flex justify-center items-center gap-4  bg-slate-700 bg-opacity-30 shadow-lg drop-shadow-lg rounded-md w-full p-2'>
      <div className='rounded-md overflow-hidden'>
        <img src="/images/sections/personnel.png" alt="press" class="w-48 h-48 object-center object-cover" />
      </div>
        <div className='flex-1 flex justify-center items-center text-sky-400 text-2xl '>
          <h2> پرسنل سیساکو</h2>
        </div>
      </div>
        </a></Link>
    </main>
      
      <footer className='fixed bottom-0 right-0 left-2 bg-sky-400 h-20 w-full flex justify-center items-center'>
        <p>با بیش از بیست سال سابقه کار در صنعت خودرو</p>
      </footer>
    </div>
  )
}

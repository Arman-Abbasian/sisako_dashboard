import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainAreaChart from '../src/components/MainAreaChart'
import MainBarChart from '../src/components/MainBarChart'
import MainLineChart from '../src/components/MainLineChart'
import MainPieChart from '../src/components/MainPieChart'


export default function Home() {
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
    <main className='grid grid-cols-2 md:grid-cols-4 gap-10 py-4  mt-10 mb-20'>
      {/* one cart */}
        <div className='col-span-1 bg-primary-light-green drop-shadow-lg p-2 rounded-md'>
          <div className='flex flex-col gap-4'>
            <div className='aspect-w-16 aspect-h-9 -mt-10'><img src='/images/main/personnel.png' alt='personnel' className='w-full h-full object-center object-contain' /></div>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <h1 className='font-bold'>پرسنل</h1>
              <p className='text-2xl font-bold'>150</p>
            </div>
          </div>
        </div>
        {/* one cart */}
        <div className='col-span-1 bg-primary-light-green drop-shadow-lg p-2 rounded-md'>
          <div className='flex flex-col gap-4'>
            <div className='aspect-w-16 aspect-h-9 -mt-10'><img src='/images/main/press.png' alt='personnel' className='w-full h-full object-center object-contain' /></div>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <h1 className='font-bold'>پرس ها</h1>
              <p className='text-2xl font-bold'>50</p>
            </div>
          </div>
        </div>
        {/* one cart */}
        <div className='col-span-1 bg-primary-light-green drop-shadow-lg p-2 rounded-md'>
          <div className='flex flex-col gap-4'>
            <div className='aspect-w-16 aspect-h-9 -mt-10'><img src='/images/main/die.png' alt='personnel' className='w-full h-full object-center object-contain' /></div>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <h1 className='font-bold'>قالب ها</h1>
              <p className='text-2xl font-bold'>200</p>
            </div>
          </div>
        </div>
        {/* one cart */}
        <div className='col-span-1 bg-primary-light-green drop-shadow-lg p-2 rounded-md'>
          <div className='flex flex-col gap-4'>
            <div className='aspect-w-16 aspect-h-9 -mt-10'><img src='/images/main/product.png' alt='personnel' className='w-full h-full object-center object-contain' /></div>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <h1 className='font-bold'>محصولات</h1>
              <p className='text-2xl font-bold'>70</p>
            </div>
          </div>
        </div>
        <div className='col-span-2 w-full overflow-auto bg-primary-light-green drop-shadow-lg p-8 rounded-md flex justify-center items-center'><MainLineChart /></div>
        <div className='col-span-2 w-full overflow-auto bg-primary-light-green drop-shadow-lg p-8 rounded-md flex justify-center items-center'><MainBarChart /></div> 
        <div className='col-span-2 w-full overflow-auto bg-primary-light-green drop-shadow-lg p-8 rounded-md flex justify-center items-center'><MainAreaChart /></div>
        <div className='col-span-2 w-full overflow-auto bg-primary-light-green drop-shadow-lg p-8 rounded-md flex justify-center items-center'><MainPieChart /></div>
    </main>
      
      <footer className='fixed bottom-0 right-0 left-2 bg-primary-dark-green h-20 w-full flex justify-center items-center'>
        <p>با بیش از بیست سال سابقه کار در صنعت خودرو</p>
      </footer>
    </div>
  )
}

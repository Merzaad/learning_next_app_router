import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import './_privateFolder/globals.css'

export const metadata: Metadata = {
  title: 'learning_app_router',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className='w-full h-full p-0 m-0'>
      <head>
        <link
          rel='icon'
          href='/favicon.ico?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body className='w-full h-full p-0 m-0 flex p-4 gap-4'>
        <Navbar />
        <div className='grow p-4 bg-neutral-950 rounded-lg overflow-y-auto'>{children}</div>
      </body>
    </html>
  )
}

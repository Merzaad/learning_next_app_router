import { Metadata } from 'next'
import Navbar from './Navbar'

export const metadata: Metadata = {
  title: 'learning_app_router',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

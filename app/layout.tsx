import HomeButton from './HomeButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <div>
          <div>
            <HomeButton />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}

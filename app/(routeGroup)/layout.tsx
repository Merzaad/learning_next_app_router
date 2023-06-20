export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex justify-center items-center p-2 border-1 '>Route Group Layout</div>
      <div>{children}</div>
    </>
  )
}

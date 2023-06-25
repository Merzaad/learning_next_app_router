export default function Layout({
  children,
  one,
  two,
}: {
  children: React.ReactNode
  one: React.ReactNode
  two: React.ReactNode
}) {
  return (
    <div className='flex flex-col h-full gap-4'>
      <div className='rounded-lg bg-neutral-900 p-4'>layout</div>
      <>
        {one}
        {two}
        {children}
      </>
    </div>
  )
}

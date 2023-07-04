export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex gap-4 flex-col h-full'>
      <div className='rounded-lg bg-neutral-900 p-4 h-min flex gap-4 justify-center'>
        ROOT GROUP LAYOUT
      </div>
      {children}
    </div>
  )
}

'use client'

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: React.MouseEventHandler
}) {
  return (
    <button onClick={onClick} className='p-2 border-teal-700 border-1 rounded '>
      {children}
    </button>
  )
}

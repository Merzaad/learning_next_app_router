'use client'

export default function Button({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 text-neutral-300 border-neutral-700 bg-neutral-900 hover:border-neutral-500 hover:bg-neutral-800 border-1 rounded-sm ${className}`}
    >
      {children}
    </button>
  )
}

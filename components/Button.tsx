'use client'

export default function Button({
  children,
  onClick,
  className = '',
  disabled = false,
}: {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  className?: string
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 text-neutral-300 border-neutral-700 bg-neutral-900 hover:border-neutral-500 hover:bg-neutral-800 border-1 rounded-lg disabled:opacity-25 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

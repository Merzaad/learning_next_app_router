'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <div className='flex justify-center items-center bg-neutral-900 rounded-lg h-full flex-col gap-4'>
      {error.message}
    </div>
  )
}

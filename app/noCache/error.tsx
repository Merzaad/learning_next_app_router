'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <div className='centeredFlex'>
      <div className='card'>{error.message}</div>
    </div>
  )
}

export default function Page({ params }: { params: { param: string } }) {
  if (params.param !== 'test') throw new Error(`param is "${params.param}", only "test" is allowed`)
  return <div className='rounded-lg bg-neutral-900 p-4 h-full'>params: {params.param}</div>
}

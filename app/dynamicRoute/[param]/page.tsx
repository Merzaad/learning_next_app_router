export default function Page({ params }: { params: { param: string } }) {
  if (params.param !== 'test') throw new Error(`param is "${params.param}", only "test" is allowed`)
  return <div>params: {params.param}</div>
}

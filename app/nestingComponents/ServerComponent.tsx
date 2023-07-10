import ClientComponent from './ClientComponent'

const getData = async () => {
  const promise = (): Promise<{ initialState: number }> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          initialState: 21,
        })
      }, 2000)
    })
  const { initialState } = await promise()
  return initialState
}
export default async function ServerComponent() {
  const initialState = await getData()
  return (
    <div className='flex justify-center items-center flex-1 rounded-lg p-4 '>
      <ClientComponent initialState={initialState} />
    </div>
  )
}

import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

export default function Page() {
  return (
    <div className='h-full rounded-lg bg-neutral-900 p-4'>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  )
}

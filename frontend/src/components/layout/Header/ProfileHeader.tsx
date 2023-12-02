import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Container from '../Container'
import HeaderAuthUnAuthView from './HeaderAuthUnAuthView'

const ProfileHeader = () => {
  return (
    <header  className='w-full sticky top-0 relative z-50 bg-light dark:bg-dark w-full     md:mx-auto  px-4 px-4 py-2 md:px-8 rounded-lg overflow-hidden items-center    relative  '>
      <Container>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center gap-4 shadow rounded-md h-10 px-2 w-1/2 max-w-xs  '>
            <MagnifyingGlassIcon className='w-5 h-5 text-gray-400'/>
            <input placeholder='Search ...' className='bg-transparent w-full text-sm  outline-none'/>
          </div>
          <HeaderAuthUnAuthView/>
        </div>
      </Container>
    </header>
  )
}

export default ProfileHeader

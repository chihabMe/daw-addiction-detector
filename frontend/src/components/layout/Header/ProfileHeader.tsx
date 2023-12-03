import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Container from '../Container'
import HeaderAuthUnAuthView from './HeaderAuthUnAuthView'

const ProfileHeader = () => {
  return (
    <header  className='w-full sticky top-0 relative z-50 bg-light dark:bg-dark w-full     md:mx-auto  px-4 px-4 py-2 md:px-8  overflow-hidden items-center    relative  '>
      <Container>
        <div className='w-full flex justify-end items-center'>
          <HeaderAuthUnAuthView/>
        </div>
      </Container>
    </header>
  )
}

export default ProfileHeader

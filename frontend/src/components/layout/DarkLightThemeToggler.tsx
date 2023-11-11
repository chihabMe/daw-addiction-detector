import { useUiContext } from '../../hooks/useUiContext'
import Button from '../ui/Button'
import { MoonIcon,SunIcon } from '@heroicons/react/24/solid'

const DarkLightThemeToggler = () => {
  const {theme,toggleThemeMode} = useUiContext()
  const isLight = theme=="light";
  return (
    <div onClick={toggleThemeMode}>
      {isLight&& <Button className="bg-transparent px-6 hover:ring-yellow-500 active:ring-yellow-500 rounded-lg  "><SunIcon className="w-5 h-5 text-yellow-500"/></Button>}
      {!isLight&& <Button className="bg-transparent px-6 hover:ring-gray-800 active:ring-gray-800 rounded-lg  "><MoonIcon className="w-5 h-5 text-gray-200"/></Button>}
    </div>
  )
}

export default DarkLightThemeToggler

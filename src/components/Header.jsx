import { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { MdOutlineArrowDropDown, MdSettings } from "react-icons/md"
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import Search from './Search'
import Sidebar from './Sidebar'


const Header = ({ search, handleSearch }) => {
  const [openSerachBox, setOpenSearchBox] = useState(false)
const [sidebar, setSidebar] = useState(false)
  const handleOpenSearchBox = () => setOpenSearchBox(!openSerachBox)

  const handleSidebar = () => setSidebar(!sidebar)
  return (
    <div className="sticky top-0 z-10 bg-white" >
      <div className='container mx-auto flex items-center justify-between gap-10 md:px-0 px-4'>
      {/* Tab */}
      <div className='md:hidden block'>
          {
            !openSerachBox ? <AiOutlineSearch size={24} className="cursor-pointer" onClick={handleOpenSearchBox} /> : (
              <div className={`transition-all duration-1000  ${setOpenSearchBox ? "translate-x-0" : "-translate-x-full" }`}>
          {
            openSerachBox ? <Search handleSearch={handleSearch} search={search} setOpenSearchBox={setOpenSearchBox} /> : null
          }
          </div>
            )
          }
          
        </div>

      {/* Left */}
      <div className='md:flex hidden items-center gap-8'>
        <Link to="#" className='cursor-pointer text-md'>Coins</Link>
        <Link to="#" className='cursor-pointer text-md'>Exchanges</Link>
        <Link to="#" className='cursor-pointer text-md'>Swap</Link>
      </div>

      {/* Center */}
      <div className='cursor-pointer mx-4'>
        <Link to="#">
          <img src="https://coincap.io/static/logos/black.svg" alt="logo" className='w-24 h-24 object-contain' />
        </Link>
      </div>

      <div className='md:hidden block'>
      

      {
        !sidebar ? <FaBars size={24} className="cursor-pointer" onClick={handleSidebar} /> : <AiOutlineClose size={24} className="cursor-pointer" onClick={() => setSidebar(false)} />
      }
      </div>
      {/* Right */}
      <div className='md:flex hidden items-center gap-4'>
        <div className='flex items-center gap-1 cursor-pointer'>
          <p>USD</p>
          <MdOutlineArrowDropDown />
        </div>
        <div className='flex items-center gap-1 cursor-pointer'>
          <p>English</p>
          <MdOutlineArrowDropDown />
        </div>
        <div >
          {
            !openSerachBox ? <AiOutlineSearch size={24} className="cursor-pointer" onClick={handleOpenSearchBox} /> : (
              <div className={`transition-all duration-1000  ${setOpenSearchBox ? "translate-x-0" : "-translate-x-full" }`}>
          {
            openSerachBox ? <Search handleSearch={handleSearch} search={search} setOpenSearchBox={setOpenSearchBox} /> : null
          }
          </div>
            )
          }
          
        </div>
        <div>
          <MdSettings size={24} className="cursor-pointer" />
        </div>
        <div>
          <button className='cursor-pointer bg-green-400 py-2 px-4 shadow-lg text-white rounded-full'>Connect Wallet</button>
        </div>
      </div>
    </div>

    <div>
      {
        sidebar ? <Sidebar /> : null
      }
    </div>
</div>
  )
}

export default Header
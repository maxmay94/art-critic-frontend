import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <div className='bg-gray-600/[.2] hover:bg-gray-600/[.4] text-slate-200 font-sans font-semibold  h-10'>
        {user ?
          <nav>
            <ul className='flex flex-row'>
              <li className='grow m-2'><Link className='bg-black/[.7] text-white/[.8] hover:text-amber-200/[.8] font-semibold p-2 rounded-sm' to='/'>{user.name.toLowerCase()}</Link></li>
              <li className='flex-end m-2'><Link className='hover:text-black/[.8] bg-amber-500/[.3] hover:bg-yellow-600/[.6] font-semibold p-2 rounded-sm' to="/reviews/new">write a review</Link></li>
              <li className='flex-end m-2'><Link className='hover:text-blue-800/[.8] bg-pink-700/[.3] hover:bg-pink-600/[.6] font-semibold p-2 rounded-sm' to="/reviews/index">reviews</Link></li>
              <li className='m-2'><Link className='hover:text-rose-900/[.8] bg-orange-600/[.3] hover:bg-orange-600/[.6] font-semibold p-2 rounded-sm' to="" onClick={handleLogout}>log out</Link></li>
            </ul>
          </nav>
        :
          <nav>
            <ul className='flex flex-row'>
              <li className='m-2 hover:text-black'><Link className='hover:text-black/[.8]  bg-gray-700/[.8] p-2 rounded-sm' to="/login">log in.</Link></li>
              <li className='m-2 hover:text-black'><Link className='hover:text-black/[.8]  bg-gray-700/[.8] p-2 rounded-sm' to="/signup">sign up.</Link></li>
            </ul>
          </nav>
        }
      </div>
    </>
  )
}

export default NavBar

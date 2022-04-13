import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <div className='bg-gray-600/[.7] hover:bg-gray-600/[.9] text-slate-200 font-sans font-semibold  h-10'>
        {user ?
          <nav>
            <ul className='flex flex-row'>
              <li className='grow m-2'><Link className='font-bold hover:text-orange-500' to='/'>{user.name.toLowerCase()}</Link></li>
              <li className='grow m-2'><Link className='hover:text-orange-500 bg-gray-700/[.8] p-2 rounded-sm' to="/reviews/new">write a review</Link></li>
              <li className='m-2'><Link className='hover:text-orange-500 bg-gray-700/[.8] p-2 rounded-sm' to="" onClick={handleLogout}>log out</Link></li>
            </ul>
          </nav>
        :
          <nav>
            <ul className='flex flex-row'>
              <li className='m-2 hover:text-black'><Link className='hover:text-orange-500 bg-gray-700/[.8] p-2 rounded-sm' to="/login">Log In</Link></li>
              <li className='m-2 hover:text-black'><Link className='hover:text-orange-500 bg-gray-700/[.8] p-2 rounded-sm' to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        }
      </div>
    </>
  )
}

export default NavBar

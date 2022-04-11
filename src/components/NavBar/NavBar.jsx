import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <div className='bg-gray-600/[.7] text-slate-200 font-sans font-extralight  h-10'>
        {user ?
          <nav>
            <ul className='flex flex-row'>
              <li className='grow m-2'><Link className='font-bold' to='/'>{user.name.toLowerCase()}</Link></li>
              <li className='grow m-2'><Link className='hover:text-black bg-gray-700/[.8]' to="/reviews/new">write a review</Link></li>
              <li className='m-2'><Link className='hover:text-black bg-gray-700/[.8]' to="" onClick={handleLogout}>LOG OUT</Link></li>
            </ul>
          </nav>
        :
          <nav>
            <ul className='flex flex-row'>
              <li className='m-2 hover:text-black'><Link to="/login">Log In</Link></li>
              <li className='m-2 hover:text-black'><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        }
      </div>
    </>
  )
}

export default NavBar

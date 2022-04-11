import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <div className='bg-gray-600/[.5] text-white h-10'>
        {user ?
          <nav>
            <ul className='flex flex-row'>
              <li className='grow m-2'>{user.name}</li>
              <li className='grow m-2'><Link to="/profiles">Profiles</Link></li>
              <li className='m-2'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            </ul>
          </nav>
        :
          <nav>
            <ul className='flex flex-row'>
              <li className='m-2'><Link to="/login">Log In</Link></li>
              <li className='m-2'><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        }
      </div>
    </>
  )
}

export default NavBar

import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className="flex-auto text-center min-h-screen">
      <div>

        <h1 className='m-5 mt-20 sm:m-10 sm:mt-20 md:m-10 md:mt-20 lg:m-20 
            font-semibold rounded-sm border-0 
            bg-amber-500/[.7] text-black/[.8] hover:text-white/[.8] 
            text-8xl md:text-9xl'
        >
          art critic.</h1>


        <h1 className='m-5 sm:m-10 md:m-10 lg:m-20 
            font-semibold rounded-sm border-0 
            bg-pink-600/[.45] hover:bg-pink-600/[.7] 
            text-white/[.8] hover:text-blue-800/[.8]  
            text-5xl sm:text-7xl'
        >
          {user && `hey, ${user.name}.`}</h1> 


        <Link to='/reviews/new' >
          <h1 className='m-5 sm:m-10 md:m-10 lg:m-20 
              font-semibold rounded-sm border-0 
              bg-orange-600/[.45] hover:bg-orange-600/[.7] 
              text-white/[.8] hover:text-rose-900/[.8] 
              text-3xl sm:text-5xl'
          >
          {user && 'let\'s look at some art.'}</h1>
        </Link>
      </div>
    </main>
  )
}

export default Landing
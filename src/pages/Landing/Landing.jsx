const Landing = ({ user }) => {
  return (
    <main className="flex-auto text-center text-amber-500  min-h-screen">
      <div>
        <h1 className='m-20 font-semibold rounded-sm border-0 bg-amber-500/[.45] hover:bg-amber-500/[.9] text-white/[.8] hover:text-black/[.8] text-9xl'>art critic.</h1>
        <h1 className='m-20 font-semibold rounded-sm border-0 bg-pink-600/[.45] hover:bg-pink-600/[.9] text-white/[.8] hover:text-blue-800/[.8]  text-7xl'>{user && `hey, ${user.name}.`}</h1> 
        <h1 className='m-20 font-semibold rounded-sm border-0 bg-orange-600/[.45] hover:bg-orange-600/[.9] text-white/[.8] hover:text-rose-900/[.8]  text-5xl'>{user && 'lets look at some art'}</h1>
      </div>
    </main>
  )
}

export default Landing

import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className="min-h-full flex-col justify-center">
              <h1 className='m-5 sm:mx-10 md:mx-10 lg:mx-20 
            font-semibold rounded-sm border-0 
            bg-amber-500/[.7] text-black/[.8] hover:text-white/[.8] 
            text-4xl md:text-6xl'
        >
          sign up.</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup

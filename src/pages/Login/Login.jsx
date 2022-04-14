import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className="min-h-screen flex-col justify-center">
      <h1 className='m-5 sm:mx-10 md:mx-10 lg:mx-20 
            font-semibold rounded-sm border-0 
            bg-amber-500/[.7] text-black/[.8] hover:text-white/[.8] 
            text-4xl md:text-6xl'
        >
          log in.</h1>
        <p>{message}</p>
        <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
        />
    </main>
  )
}

export default LoginPage

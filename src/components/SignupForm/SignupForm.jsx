import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <div className="min-h-screen">
      <div className='mx-5 sm:mx-10 lg:mx-20'>
        <div className='flex flex-col items-center w-full'>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className='rounded-sm font-semibold text-xl bg-cyan-700/[.6] hover:bg-emerald-800/[.6] text-amber-100 hover:text-yellow-400 w-full'
          >
            <div className='p-2 text-center'>
              <label htmlFor="name" className='min-w-100'>name</label>
              <br />
              <input
                type="text"
                autoComplete="off"
                id="name"
                value={name}
                name="name"
                onChange={handleChange}
                className='bg-black/[.5] border-gray-600 rounded-sm text-amber-500 w-full text-3xl'
              />
            </div>
            <div className='p-2 text-center'>
              <label htmlFor="email" className=''>email</label>
              <br />
              <input
                type="text"
                autoComplete="off"
                id="email"
                value={email}
                name="email"
                onChange={handleChange}
                className='bg-black/[.5] border-gray-600 rounded-sm text-amber-500 w-full text-3xl'
              />
            </div>
            <div className='p-2 text-center'>
              <label htmlFor="password" className=''>password</label>
              <br />
              <input
                type="password"
                autoComplete="off"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
                className='bg-black/[.5] border-gray-600 rounded-sm text-amber-500 w-full text-3xl'
              />
            </div>
            <div className='p-2 text-center'>
              <label htmlFor="confirm" className=''>
                confirm password
              </label>
              <br />
              <input
                type="password"
                autoComplete="off"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={handleChange}
                className='bg-black/[.5] border-gray-600 rounded-sm text-amber-500 w-full text-3xl'
              />
            </div>
            <div className='p-2 flex flex-col'>
              <button disabled={isFormInvalid()} className='bg-green-200/[.3] hover:bg-green-600/[.5] font-semibold rounded-sm'>
                sign up.
              </button>
              <Link to="/">
                <button className='bg-red-200/[.5] hover:bg-red-600/[.5] w-full font-semibold mt-2 rounded-sm'>cancel.</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupForm

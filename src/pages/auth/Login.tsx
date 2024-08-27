import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/button'

import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useAuth'
import { toast } from 'sonner'
import { useEcommerceStore } from '../../store/ecommerceStore'

import imgBackground from '../../images/login.jpg'
import { useAuthStore } from '../../store/authStore'

export default function Login() {
  const navigate = useNavigate()
  const { login, getUserAuth } = useLogin()
  const setUser = useEcommerceStore(state => state.setUser)
  const setToken = useAuthStore(state => state.setToken)

  const [fomrData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...fomrData,
      [e.target.name]: e.target.value,
    })
  }

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getUserAuth({
      email: fomrData.email,
      pass: fomrData.password,
    })
  }

  useEffect(() => {
    if (login?.statusCode === 400 || login?.statusCode === 401) {
      toast.error(`${login.error}: ${login.message}`, {
        duration: 5000,
      })
    } else if (login?.token) {
      setToken(login.token)
      localStorage.setItem('uuid', JSON.stringify(login.user?.uuid))
      /*   console.log(login.user) */
      localStorage.setItem('token', login.token)
      toast.success(login.message, {
        duration: 5000,
      })
      navigate('/')
    }
  }, [login, navigate, setUser])

  return (
    <div className='w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <p className='text-balance text-muted-foreground'>
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={submitForm}>
            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  name='email'
                  value={fomrData.email}
                  onChange={handleChange}
                  placeholder='m@example.com'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                  <Link
                    to='/forgot-password'
                    className='inline-block ml-auto text-sm underline'
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id='password'
                  type='password'
                  name='password'
                  value={fomrData.password}
                  onChange={handleChange}
                  placeholder='********'
                  required
                />
              </div>
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <Button variant='outline' className='w-full'>
                Login with Google
              </Button>
            </div>
          </form>

          <div className='mt-4 text-sm text-center'>
            Don&apos;t have an account?{' '}
            <Link to='#' className='underline'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden bg-muted lg:block'>
        <img
          src={imgBackground}
          alt='Image'
          width='1920'
          height='1080'
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  )
}

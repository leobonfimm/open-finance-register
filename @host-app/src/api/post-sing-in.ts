import { env } from '@/env'
import CryptoJs from 'crypto-js'
import Cookies from 'js-cookie'

interface SignInProps {
  user: string
  password: string
  isRemember: boolean
}

export function postSignIn({
  user,
  password,
  isRemember = false,
}: SignInProps) {
  const encryptPassword = CryptoJs.AES.encrypt(
    password,
    env.VITE_PASSWORD_SECRET_KEY,
  ).toString()

  if (isRemember) {
    Cookies.set('user', user)
    Cookies.set('password', encryptPassword)
  }
}

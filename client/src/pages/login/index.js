import GoogleLogin from '../../components/auth/GoogleLogin'
import GoogleLogout from '../../components/auth/GoogleLogout'
import { useAuth } from '../../state/AuthContext'

export default function LoginPage() {
  let { user } = useAuth()
  return user ? <GoogleLogout /> : <GoogleLogin />
}

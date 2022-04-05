import GoogleLogin from '../../components/auth/GoogleLogin'
import GoogleLogout from '../../components/auth/GoogleLogout'
import { useAuth } from '../../state/AuthContext'

export default function LoginPage() {
  let { authData } = useAuth()
  return authData ? <GoogleLogout /> : <GoogleLogin />
}

import Home from '@/pages/Home'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'

const routes = [
  { path: '/', component: Home, exact: true, private: true },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login }
]

export default routes

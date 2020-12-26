import Home from '@/pages/Home'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import Logout from '@/pages/Logout/Logout'

const routes = [
  { path: '/', component: Home, exact: true, private: true },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/logout', component: Logout }
]

export default routes

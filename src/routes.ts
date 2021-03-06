import Home from '@/pages/Home'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import Logout from '@/pages/Logout'
import AddCity from '@/pages/AddCity'
import Details from '@/pages/Details'

const routes = [
  { path: '/', component: Home, exact: true, private: true },
  { path: '/add-city', component: AddCity, private: true },
  { path: '/details/:city', component: Details, private: true },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/logout', component: Logout }
]

export default routes

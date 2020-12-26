import { useCallback } from 'react'
import { Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import routes from '@/routes'
import withPrivateRoute from '@/hocs/withPrivateRoute'
import withPublicRoute from '@/hocs/withPublicRoute'

import { selectIsAuthenticated } from '@/store/user'

function Routes() {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const renderRoutes = useCallback(
    function () {
      return routes.map(route => {
        const routeProps = {
          exact: route.exact,
          key: route.path,
          path: route.path
        }

        const withRoute = route.private ? withPrivateRoute : withPublicRoute
        const Component = withRoute(route.component)
        return <Component {...routeProps} authenticated={isAuthenticated} />
      })
    },
    [isAuthenticated]
  )

  return <Switch>{renderRoutes()}</Switch>
}

export default Routes

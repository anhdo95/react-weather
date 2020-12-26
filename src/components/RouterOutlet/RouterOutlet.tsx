import { useCallback } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import routes from '@/routes'
import withPrivateRoute from '@/hocs/withPrivateRoute'

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

        if (route.private) {
          const Component = withPrivateRoute(route.component)
          return <Component {...routeProps} authenticated={isAuthenticated} />
        }

        return <Route {...routeProps} component={route.component} />
      })
    },
    [isAuthenticated]
  )

  return <Switch>{renderRoutes()}</Switch>
}

export default Routes

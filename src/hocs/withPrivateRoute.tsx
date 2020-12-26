import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { getDisplayName } from '@/shared/utils/hoc'

export default function withPrivateRoute(
  WrappedComponent: React.FunctionComponent<RouteComponentProps>
) {
  function WithPrivateRoute({ authenticated, ...rest }: Props) {
    return (
      <Route
        {...rest}
        render={props => {
          return authenticated ? (
            <WrappedComponent {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      }
      />
    )
  }

  WithPrivateRoute.displayName = `WithPrivateRoute(${getDisplayName(
    WrappedComponent
  )})`

  return WithPrivateRoute
}

interface Props {
  authenticated: boolean,
}

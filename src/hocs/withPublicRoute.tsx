import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { getDisplayName } from '@/shared/utils/hoc'

export default function withPublicRoute(
  WrappedComponent: React.FunctionComponent<RouteComponentProps>
) {
  function WithPublicRoute({ authenticated, ...rest }: Props) {
    return (
      <Route
        {...rest}
        render={props =>
          authenticated ? <Redirect to="/" /> : <WrappedComponent {...props} />
        }
      />
    )
  }

  WithPublicRoute.displayName = `WithPublicRoute(${getDisplayName(
    WrappedComponent
  )})`

  return WithPublicRoute
}

interface Props {
  authenticated: boolean
}

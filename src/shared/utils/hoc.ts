export function getDisplayName(WrappedComponent: React.FunctionComponent<any>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

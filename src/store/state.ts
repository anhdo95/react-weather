import firebase from 'firebase'

export default interface State {
  user: {
    isAuthenticated: boolean
    currentUser: firebase.User
  }
  theme: {
    openSlideMenu: boolean
  }
  weather: {
    userCities: string[]
  }
}

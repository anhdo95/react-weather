import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { toggleSlideMenu } from '@/store/theme'
import { signOut } from '@/services/firebase'

function Logout() {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    signOut().then(() => {
      dispatch(toggleSlideMenu())
      history.push('/login')
    })
  }, [dispatch, history])

  return null
}

export default Logout

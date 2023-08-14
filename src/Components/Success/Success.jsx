import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../../middlewares/ProtectedRoutes'

const Success = () => {

    const token = useParams()
    const navigate = useNavigate()
    const session = useSession()
  

    useEffect(() => {
        if (token) {
            {localStorage.setItem('userLoggedIn', JSON.stringify(token.token))}
            navigate(`/success/${token}`)
            {setTimeout(() => {
                navigate('/')
            }, 2000)}
        }
    }, [])
    
  return (
    <div>Non preoccuperti stai per essere reindirizzato alla Homepage</div>
  )
}

export default Success
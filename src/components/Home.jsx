import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"

import {useAuth} from "../context/authContext"

export const Home = () => {
  
    // En vez de traer el objeto al que nombre "miAuthContext":
    // const miAuthContext = useAuth()
    // Extraigo el valor "user"
    // const {user} = useAuth()
    const {user, logout, loading} = useAuth()

    // console.log(miAuthContext)
    // console.log(user)

    const handleLogout = async () => {
      await logout()
      // Navigate("/login")
      // Al hacer el logout estamos borrando el usuario, y entonces
      // lo ideal sería que naveguemos hacia el login. Pero una vez que
      // implementemos la ruta protegida y como ya no hay user (tras el logout)
      // se va a redireccionar a /login automáticamente.
    }
  
    if(loading) return <h1>Loading...</h1>

    return (
    <div>
      {/*Si el usuario está en null y se quiere acceder a su email para 
      renderizarlo, saltará un error.*/}
      Estoy en Home. Bienvenido {user.email}.
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

import { useSelector } from "react-redux"
import { selectCurrentUser, selectCurrentToken } from "@features/auth/authSlice"
import { Link } from "react-router-dom"
import { logOut } from "@features/auth/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken) ||
        localStorage.getItem('token')

    const welcome = user ? `Welcome ${user}!` : 'Welcome!'
    const tokenAbbr = `${token}...`

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logOut())
        localStorage.removeItem('token')
        navigate('/login')
    }

    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p>Token: {tokenAbbr}</p>
            <p><Link to="/userslist">Go to the Users List</Link></p>
            <button onClick={handleLogout}>Exit</button> 
        </section>
    )

    return content
}
export default Welcome

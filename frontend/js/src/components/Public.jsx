import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section>
            <header>
                <h1>Welcome to FlashApp</h1>
            </header>
        <main>
            <p>Its a main page</p>
        </main>
        <footer>
            <Link to='/login'>Login here</Link>
        </footer>
        </section>
    )
    return content
}

export default Public

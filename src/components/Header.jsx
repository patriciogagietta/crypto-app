import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <h1>CryptoPrice</h1>
            </Link>
        </div>
    )
}

export default Header
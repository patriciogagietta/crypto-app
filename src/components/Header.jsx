import { Link } from "react-router-dom"

function Header({ criptoSearch, setCriptoSearch }) {

    const handleSearchChange = (e) => {
        const searchItem = e.target.value
        setCriptoSearch(searchItem)
    }

    const handleH1Click = () => {
        setCriptoSearch('')
    }

    return (
        <div className="container-header">
            <div className="header">
                <Link to='/' onClick={handleH1Click}>
                    <h1>CryptoPrice</h1>
                </Link>
                
                <input 
                    type="text"
                    value={criptoSearch}
                    onChange={handleSearchChange}
                    placeholder="Search"
                    className="search-input"
                    />
            </div>
        </div>
    )
}

export default Header
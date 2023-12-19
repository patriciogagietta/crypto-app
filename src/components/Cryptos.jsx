import { Link } from "react-router-dom"
import CryptoCard from "./CryptoCard"

function Cryptos({ cripto, criptoSearch, setCriptoSearch }) {

    const cryptoFiltered = cripto.filter((c) => {
        const search = criptoSearch.toLowerCase();
        return c.name.toLowerCase().includes(search) || c.symbol.toLowerCase().includes(search)
    })

    if (cripto.length === 0) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="container-home">
            <div className='columns'>
                <div>
                    <p>Name</p>
                </div>
                <p>Price</p>
                <p>24h</p>
                <p className="ocultar">Volume</p>
            </div>

            <div className="crypto-container">
                {cryptoFiltered.map((c, i) => (
                    <Link key={i} to={`/${c.nameid}/${c.id}`}>
                        <CryptoCard c={c} setCriptoSearch={setCriptoSearch}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Cryptos
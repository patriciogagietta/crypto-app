import { Link } from "react-router-dom"
import CryptoCard from "./CryptoCard"

function Cryptos({ cripto }) {

    return (
        <div className="container-home">

            <div className='columns'>
                <p>Name</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
            </div>

            <div className="crypto-container">
                {cripto.map((c, i) => (
                    <Link key={i} to={`/${c.id}`}>
                       <CryptoCard c={c}/>
                    </Link>
                ))}
            </div>


        </div>
    )
}

export default Cryptos
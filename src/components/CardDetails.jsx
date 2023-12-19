import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

function CardDetails () {

    const [crip, setCript] = useState(null)

    const { cardId } = useParams()

    useEffect(() => {
        const getDataId = async () => {
            const url = `https://api.coinlore.net/api/ticker/?id=${cardId}`
            try {
                const response = await axios.get(url)
                setCript(response.data[0])
            } catch (error) {
                throw new Error(`Error fetching data: ${error.message}`);
            }
        };
        getDataId()
    }, [cardId])

    if (!crip) {
        return <div className="loading">Loading...</div>;
    }

    const color24h = crip.percent_change_24h < 0 ? "volumeNegative" : 'volumePositive'

    const color1h = crip.percent_change_1h < 0 ? "volumeNegative" : 'volumePositive'

    const color7d = crip.percent_change_7d < 0 ? "volumeNegative" : 'volumePositive'

    return (
        <div className="container-all-card-detail">
            <div className="conteiner-h2-card">
                <h2>{crip.name}</h2>
            </div>
            <div className="container-img-symbol">
                <div className="img-symbol">
                    <img src={`https://c1.coinlore.com/img/${crip.nameid}.png`} alt={`${crip.name}`} />
                    <p>{crip.symbol}</p>
                </div>
                <div>
                    <p className="price-detail">${crip.price_usd}</p>
                </div>
            </div>
            <div className='container-table'>
                <table>
                    <thead>
                        <tr>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tr-row">
                            <td className={`${color1h}`}>
                                {crip.percent_change_1h > 0 ? `+${crip.percent_change_1h}%` : `${crip.percent_change_1h}%`}
                            </td>
                            <td className={`${color24h}`}>
                                {crip.percent_change_24h > 0 ? `+${crip.percent_change_24h}%` : `${crip.percent_change_24h}%`}
                            </td>
                            <td className={`${color7d}`}>
                                {crip.percent_change_7d > 0 ? `+${crip.percent_change_7d}%` : `${crip.percent_change_7d}%`}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container-info-secundaria">
                <div>
                    <div>
                        <p>supply</p>
                        <p>{crip.csupply}</p>
                    </div>
                    <div>
                        <p>Tsupply</p>
                        <p>{crip.tsupply}</p>
                    </div>
                    <div>
                        <p>Rank</p>
                        <p>#{crip.rank}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Market cap usd</p>
                        {crip.market_cap_usd}
                    </div>
                    <div>
                        <p>Volume 24a</p>
                        <p>{crip.volume24a}</p>
                    </div>
                    <div>
                        <p>Msupply</p>
                        <p>{crip.msupply}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardDetails
function CryptoCard({ c }) {

    const color24h = c.percent_change_24h < 0 ? "volumeNegative" : "volumePositive"

    return (
        <div className='crypto-card'>
            <div className='img-container'>
                <img src={`https://c1.coinlore.com/img/${c.nameid}.png`} alt={`${c.name}`} />
                <p>{c.symbol}</p>
            </div>
            <p>${c.price_usd}</p>
            <p className={`${color24h}`}>
                {c.percent_change_24h > 0 ? `+${c.percent_change_24h}%` : `${c.percent_change_24h}%`}
            </p>
            <p>${c.volume24}</p>
        </div>
    )
}

export default CryptoCard
function CryptoCard({ c, setCriptoSearch }) {

    const color24h = c.percent_change_24h < 0 ? "volumeNegative" : "volumePositive"

    const handleCryptoCard = () => {
        setCriptoSearch('')
    }

    return (
        <div className='crypto-card' onClick={handleCryptoCard}>
            <div className='img-container'>
                <img src={`https://c1.coinlore.com/img/${c.nameid}.png`} alt={`${c.name}`} />
                <p>{c.symbol}</p>
            </div>
            <p>${c.price_usd}</p>
            <p className={`${color24h}`}>
                {c.percent_change_24h > 0 ? `+${c.percent_change_24h}%` : `${c.percent_change_24h}%`}
            </p>
            <p className="ocultar">${c.volume24}</p>
        </div>
    )
}

export default CryptoCard
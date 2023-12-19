import axios from 'axios';

const getData = async (id) => {
    const apiUrl = id ? `https://api.coinlore.net/api/ticker/?id=${id}` : 'https://api.coinlore.net/api/tickers/';

    try {
        const response = await axios.get(apiUrl);
        return response.data.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

export default getData;
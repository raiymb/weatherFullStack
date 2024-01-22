const { fetchCityInfo } = require('../api/wikipediaAPI');

exports.getCityInfo = async (req, res) => {
    try {
        const cityName = req.params.city;
        const cityInfo = await fetchCityInfo(cityName);
        res.json(cityInfo);
    } catch (error) {
        console.error('Error fetching city information:', error);
        res.status(500).send('Internal Server Error');
    }
};
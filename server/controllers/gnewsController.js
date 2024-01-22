const { fetchNews } = require('../api/gnewsAPI'); 

exports.getNews = async (req, res) => {
    const query = req.params.query;
    if (!query) {
        return res.status(400).json({ message: "Query parameter is required" });
    }

    try {
        const newsData = await fetchNews(query);
        res.json(newsData);
    } catch (error) {
        console.error('Error fetching news data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
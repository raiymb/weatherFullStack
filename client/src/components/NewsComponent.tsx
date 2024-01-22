import React, { useState } from 'react';
import { NewsData, NewsArticle } from '../types/weatherTypes';

interface NewsComponentProps {
  news: NewsData;
}

const NewsComponent: React.FC<NewsComponentProps> = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 2;

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.articles.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(news.articles.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-3">Related News</h2>
      {currentNews.map((article: NewsArticle, index: number) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <h3 className="text-xl font-semibold">{article.title}</h3>
          </a>
          {article.image && <img src={article.image} alt={article.title} className="w-full h-auto mt-2 mb-2 rounded" />}
          <p>{article.description}</p>
        </div>
      ))}
      <div className="flex justify-center space-x-2">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 py-1 border rounded ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
            } hover:bg-blue-600 hover:text-white transition`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
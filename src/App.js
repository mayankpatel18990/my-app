import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:54827/api/custom-data')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Recent articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.created}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          {console.log(article)}
            <img src={article.image} alt='Test article' />
            <p>Published on {new Date(article.created * 1000).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;

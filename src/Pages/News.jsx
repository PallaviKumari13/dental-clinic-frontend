import React, { useState } from 'react';

export default function News() {
  const [news, setNews] = useState();

  function getNews() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8228c33da4ee431aac8365fbd4836f17")
      .then(response => response.json())
      .then(json => setNews(json));
  }

  return (
    <div style={{ backgroundImage: 'url("../src/assets/bgggg.jpg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <button className="bg-purple-600 text-white p-2 rounded-md" onClick={getNews}>Click me</button>
      <p className="bg-purple-300 text-black-800 p-2 rounded-md">
        {news ? (
          news.articles.map((item, index) => (
            <div key={index}>
              {item.title}
            </div>
          ))
        ) : (
          "Loading"
        )}
      </p>
    </div>
  );
}

import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog';

const App = () => (
  <div>
    <Header blogName={data.blogName} />
    <About blogImage={data.blogImage} aboutText={data.aboutText} />
    <ArticleList articles={data.articles} />
  </div>
);

export default App;


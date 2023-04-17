
import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './Articlelist';

console.log(blogData);

function App() {
  const blogName = 'Underreacted';
  const aboutText = 'Welcome to my blog!';

  const posts = [
    {
      id: 1,
      title: 'The WET Codebase',
      date: 'April 1, 2023',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      title: 'Goodbye, Clean Code',
      preview: 'Praesent faucibus metus sed nibh auctor, sit amet maximus purus feugiat.'
    },
    {
      id: 3,
      title: 'My Decade in Review',
      date: 'March 1, 2023',
      preview: 'Sed dignissim ipsum ac sapien laoreet, at malesuada sapien dignissim.'
    }
  ];

  return (
    <div>
      <Header blogName={blogName} />
      <About aboutText={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;

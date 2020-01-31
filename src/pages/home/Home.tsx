// 首页
import React from 'react';
import './home.less';

function Home() {
  return (
    <div className={"home-wrap"}>
      <div className={"slogan-wrap"}>
        <h1>Spirit Thought</h1>
        <p>
          This site includes the spirithoughter's notes, thoughts on programming technology,
          and some source code analysis.
          These articles have been important to us for a long time,
          and I'm sure they can help you as well.
        </p>
      </div>
      <div className={"home-img-wrap"}><img src="/assets/img/home-img.jpg" alt="" /></div>
    </div>
  )
}

export default Home;

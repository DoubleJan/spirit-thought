// 首页
import React from 'react';
import './home.less';

function Home() {
  return (
    <div className={"home-wrap"}>
      <div className={"slogan-wrap"}>
        <h1>Spirit Thought</h1>
        <p>
          We share our experiences and inspirations about programming techniques here.
          These “spirit thoughts” have been helping us for a long time and may help you as well.
        </p>
      </div>
      <div className={"home-img-wrap"}><img src="/assets/img/home-img.jpg" alt="" /></div>
    </div>
  )
}

export default Home;

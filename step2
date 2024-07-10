'use client'

import React from 'react';

export default function Page() {
  // javascript가 들어가는 부분
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    // html이 들어가는 부분
    <>
      <div className='title'>
        <h1>코딩 원데이 클레스</h1>
        <h4>학생: 나영운</h4>
      </div>
      <div>
        <h2>오늘은 리액트를 배웠어요</h2>
        <button onClick={handleClick}>클릭</button>
        <p>{count}</p>
      </div>
    </>
  );
}
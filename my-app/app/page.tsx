'use client'

import React from 'react';

export default function Page() {
  // javascript가 들어가는 부분
  const [todo, setTodo] = React.useState([])
  const [text, setText] = React.useState('')

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleButton = () => {
    setTodo([...todo, text])
  }

  return (
    // html이 들어가는 부분
    <>
      <div className='title'>
        <h1>코딩 원데이 클레스</h1>
        <h4>학생: 나영운</h4>
      </div>
      <div className='todo'>
        <h2>오늘 할 일</h2>
        {/* <ul>
          <li>React 공부하기</li>
          <li>컴포넌트 만들기</li>
          <li>props와 state 사용하기</li>
        </ul> */}
        <ul>
          {
            todo?.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
          
        </ul>
      </div>
      <input onChange={handleText} />
      <button onClick={handleButton}>추가하기</button>

    </>
  );
}
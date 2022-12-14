import './App.css';
import { useState } from 'react';
import { cloneDeep } from 'lodash';

function App() {
  let [title, titleChange] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])
  let [like, likeUp] = useState(0)
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 >ReactBlog</h4>
      </div>

      <button onClick={() => {
        let titleCopy = cloneDeep(title)
        titleCopy.sort()
        titleChange(titleCopy)
      }}>sort by abc</button>

      <button onClick={() => {
        let titleCopy = cloneDeep(title)
        titleCopy[0] = '여자코트 추천'
        titleChange(titleCopy)
      }}>글수정
      </button>

      <div className="list">
        <h4>{title[0]} <span onClick={() => { likeUp(like + 1) }}>❤️</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
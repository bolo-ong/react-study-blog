import './App.css';
import { useState } from 'react';
// import { cloneDeep } from 'lodash';

function App() {
  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])
  let [like, setLike] = useState([0, 0, 0])
  let [modal, setModal] = useState(false)
  let [modalTitle, setModalTitle] = useState(0)
  let addTitle

  return (
    <div className="App">
      <div className="black-nav">
        <h4 >ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...title]
        copy.sort()
        setTitle(copy)
      }}>sort by abc
      </button>

      <button onClick={() => {
        let copy = [...title]
        copy[0] = '여자코트 추천'
        setTitle(copy)
      }}>글수정
      </button>

      {/* <div className="list">
        <h4>{title[0]} <span onClick={() => { setLike(like + 1) }}>❤️</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map((data, i) => {
          return (
            <div className="list" key={i} onClick={(e) => {
              setModal(!modal)
              setModalTitle(i)
            }}>
              <h4>{data}<span onClick={(e) => {
                e.stopPropagation()
                let copy = [...like]
                copy[i] = copy[i] + 1
                setLike(copy)
              }}>❤️</span>{like[i]}
                <button onClick={(e) => {
                  e.stopPropagation()
                  let copy = [...title]
                  copy.splice(i, 1)
                  setTitle(copy)
                }}>x</button>
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      <input id="add-title" onChange={(e) => {
        addTitle = e.target.value
      }} />
      <button onClick={(e) => {
        let copy = [...title]
        copy.push(addTitle)
        setTitle(copy)
        document.querySelector('#add-title').value = ""
      }}>+</button>

      {
        modal === true ? <Modal modalTitle={modalTitle} setTitle={setTitle} title={title} /> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}


export default App;
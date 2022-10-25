import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '블로그 내용';
  let blog_name = 'black_id';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '재만 바보', '리액트 재밌다']);
  let [글날짜, setDatetime] = useState(['2022-10-22', '2022-10-23', '2022-10-24']);
  let [like_count, setLikecount] = useState(0);
  let [modal, setModal] = useState(false);

  // function like_click() {
  //   like_count += 1
  // }

  let [a, c] = [1, 2];
  // let num = [1,2]
  // let a = num[0]
  // let c = num[1]

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={blog_name}>Jaeman blog</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={() => { setLikecount(like_count + 1) }}>좋아요</span> {like_count} </h4>

        <button onClick={() => {
          let copy글제목 = [...글제목]
          copy글제목.sort()
          글제목변경(copy글제목)
        }
        }>정렬</button>

        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy)
        }}>바뀜 버튼</button>
        <p>{글날짜[0]}</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{글날짜[1]}</p>
      </div>

      <div className='list'>
        <h4 onClick={() => { modal == false ? setModal(true) : setModal(false) }}>{글제목[2]}</h4>
        <p>{글날짜[2]}</p>
      </div>


      {
        modal == true ? <Modal></Modal> : null
      }

    </div >


  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}




export default App;

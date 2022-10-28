import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '블로그 내용';
  let blog_name = 'black_id';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '재만 바보', '리액트 재밌다']);
  let [글날짜, setDatetime] = useState(['2022-10-22', '2022-10-23', '2022-10-24']);
  let [like_count, setLikecount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modal글제목, setModal글제목] = useState(0)
  console.log(like_count[0])

  // function like_click() {
  //   like_count += 1
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={blog_name}>Jaeman blog</h4>
      </div>
      {/* <div className='list'>
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
      </div> */}



      {
        글제목.map(function (a, i) {
          return (
            <div className='list'>
              <h4 onClick={() => { modal == false ? setModal(true) : setModal(false); setModal글제목(i) }}>{글제목[i]}</h4>
              <p>{글날짜[i]}</p>
              <span onClick={() => {
                let copy_likecount = [...like_count];
                copy_likecount[i] = copy_likecount[i] + 1;
                setLikecount(copy_likecount)
              }}>👍
                <span>{like_count[i]}</span></span>
            </div>
          )
        })
      }
      {
        modal == true ? <Modal modal글제목={modal글제목} 글제목변경={글제목변경} 글제목={글제목} 글날짜={글날짜}></Modal> : null
      }

    </div >


  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.modal글제목]}</h4>
      <p>{props.글날짜[props.modal글제목]}</p>
      <p>상세내용</p>
      <button onClick={() => { props.글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬독학']) }}>글수정</button>
    </div>
  )
}




export default App;

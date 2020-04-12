import React from 'react';
import './App.css';
import api from './api';
import PostView from './Components/PostView';

class App extends React.Component { 

  constructor(props) {
    super(props)
    this.state = {
      title:'',
      content:'',
      allPost:[]
    }
  }

  componentDidMount() {
    this.getPosts()
  }
  
  async getPosts() {
    const allPost = await api.getAllPosts()
    console.log(allPost)
    this.setState({allPost: allPost.data})
    console.log(allPost.data)
    
  }
  // getPosts() {
  //   const allPost = api.getAllPosts()
  //   console.log(allPost)
  //   this.setState({allPost: allPost.data})
    
  // }
  // 여기도!!!!!!! 비동기 처리를 안해주면 pending상태이기 때문에 allPost는 undefined로 나타날 것임!
  // 자세히 설명하자만 await을 안해주면(안기다려주면) 요청하는데 걸리는 시간을 기다리지 않고 다음 줄로 넘어가기 때문에 await을 넣어줘야하는 것!


  // handlingChange = (event) => {
  //   this.setState({title:event.target.value})
  // }

  // handlingChange = (name) => (event) => {
  //   this.setState({[name]:event.target.value})
  // }
  // 이렇게 구분도 가능 , 밑에 onChange에 this.handlingChange('name') 추가

  handlingChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }
  // 이런식으로 target name을 가져올 수 있음


  handlingSubmit = async (event) => {
    event.preventDefault()
    let result = await api.createPost({title:this.state.title, content:this.state.content})
    //해당 이벤트의 고유 기능을 막아줌, 여기서는 submit의 새로고침
    console.log("성공", result.data)
    // 모델에 있는 title, content에 json형식으로 전달
    // await이 없으면 pending, await을 넣기 위해 함수의 시작에 async필요

    //글을 등록하고 다시 불러온다
    this.setState({title:'',content:''}) // 요놈은 인풋창 초기화~
    this.getPosts()
  }

  render(){
    return(
      <div className="App">
        <h2>대애나아무우</h2>
        <form onSubmit={this.handlingSubmit}>
          <input 
            name = "title"
            value = {this.state.title}
            onChange = {this.handlingChange}
          />
          <br />
          <textarea 
            name = "content"
            value = {this.state.content}
            onChange = {this.handlingChange}
          />
          <br />
          <button type="submit">제출하기</button>
        </form>
        {
          this.state.allPost.map((post)=>
          <PostView key={post.id} id={post.id} title={post.title} content={post.content}/>
          )
        }
        
      </div>
    )
  }
}

export default App;
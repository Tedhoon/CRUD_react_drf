import React from 'react';
import './App.css';
import api from './api';
// import PostView from './Components/PostView';

class App extends React.Component { 

  constructor(props) {
    super(props)
    this.state = {
      title:'',
      content:'',
      results:[]
    }
  }

  // componentDidMount() {
  //   this.getPosts()
  // }
  // getPosts() {
  //   const _results = "hello" // getApi 함수 실행
  //   this.setState({results: _results})
  // }

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
    console.log("성공", result)
    // 모델에 있는 title, content에 json형식으로 전달
    // await이 없으면 pending, await을 넣기 위해 함수의 시작에 async필요
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
      </div>
    )
  }
}

export default App;
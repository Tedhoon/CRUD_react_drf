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
      results: []
    }
  }

  componentDidMount() {
    this.getPosts()
  }
  getPosts() {
    const _results = "hello" // getApi 함수 실행
    this.setState({results: _results})
  }

  render(){
    return(
      <div>
        <PostView />
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';

const dummy_prop = {
    //임시 프롭스
    title : '테스트용 타이틀',
    content : '테스트용 글입니당'
}

class PostView extends Component {
    render() {
        const {title, content} = dummy_prop //비구조화 할당
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default PostView;




// 오브젝트의 비구조화 할당법!!

// const animals = {
//     cat: "CAT",
//     dog: "DOG",
//     tiger: "TIGER"
//   };
//   const cat = animals.cat;
//   const dog = animals.dog;
//   const tiger = animals.tiger;
//   console.log(cat); // CAT
//   console.log(dog); // DOG
//   console.log(tiger); // TIGER

//   //또는
//   // 밑에처럼 작성해도 비구조화 할당을 수행하며,
//   // 변수의 이름과 같은 key에 있는 value가 담깁니당
//   const { cat, dog, tiger } = {
//     cat: "CAT",
//     dog: "DOG",
//     tiger: "TIGER"
//   };
//   console.log(cat); // CAT
//   console.log(dog); // DOG
//   console.log(tiger); // TIGER
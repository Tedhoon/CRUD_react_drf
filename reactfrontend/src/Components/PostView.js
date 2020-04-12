import React, { Component } from 'react';

const dummy_prop = {
    //임시 프롭스
    title : '테스트용 타이틀',
    content : '테스트용 글입니당'
}

class PostView extends Component {
    render() {
        const {title, content} = dummy_prop
        return (
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        );
    }
}

export default PostView;
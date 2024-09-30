import React, { Component, useState } from 'react';

// class EventPractice extends Component {
//     state = {
//         username: '',
//         message: '',
//     };

// constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
// }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     };

//     handleClick = () => {
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             username: '',
//             message: '',
//         });
//     };

//     handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             this.handleClick();
//         }
//     };

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="입력하세요"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyDown={this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };

    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = (e) => setUsername(e.target.value);
    // const onChangeMessage = (e) => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ': ' + message);
        // setUsername('');
        // setMessage('');
        setForm({
            username: '',
            message: '',
        });
    };
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="메시지 입력"
                value={message}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;

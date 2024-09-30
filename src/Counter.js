import { Component } from 'react';

class Counter extends Component {
    // 생성자를 이용한 state설정
    // constructor(props) {
    //     super(props);
    //     // state 초깃값 설정
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0,
    //     };
    // }

    // 생성자 이용 x
    state = {
        number: 0,
        fixedNumber: 0,
    };

    render() {
        const { number, fixedNumber } = this.state; // state 조회

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        // state에 새로운 값 넣기
                        this.setState({ number: number + 1 }, () => {
                            console.log('방금 setState가 호출되었습니다.');
                            console.log(this.state);
                        });
                        // this.setState({ number: this.state.number + 1 }); // 숫자는 그대로 1씩 증가
                        // // 2씩 증가
                        // this.setState((prevState) => {
                        //     return {
                        //         number: prevState.number + 1,
                        //     };
                        // });
                        // // 2씩 증가하는 것과 같은 기능
                        // this.setState((prevState) => ({
                        //     number: prevState.number + 1,
                        // }));
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;

import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    // nextProps: 부모에서 받은 color / prevState: 이전 color => 부모에서 받은 color로 state 바꾸는 과정
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        if(nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }
        return null;
    }
    
    componentDidMount() {
        console.log("componentDidMount");
    }
    
    // 마지막 자리가 4 이면 리렌더링을 취소
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);

        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // DOM 변화가 일어나기 직전의 색상 속성을 snapshot값으로 반환 -> componentDidUpdate에서 조회 가능
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate", prevProps, prevState);
        if(snapshot) {
            console.log("업데이트 직전 색상: " + snapshot);
        }
    }

    render() {
        console.log("render");

        const style = {
            color: this.props.color
        }

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef=ref}>{this.state.number}</h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;
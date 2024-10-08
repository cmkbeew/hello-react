import { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}
//             입니다.
//             <br />
//             제일 좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//     );
// };

class MyComponent extends Component {
    // class 내부에 지정된 defaultProps, propTypes
    static defaultProps = {
        name: '기본이름2',
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };

    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당

        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제일 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

// MyComponent.defaultProps = {
//     name: '기본이름',
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;

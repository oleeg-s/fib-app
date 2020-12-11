const isValid = (value) => {
    return (arr) => {
        return arr.includes(value)
    }
}

export default isValid;



// function iterabl (funcArr, number) {
//     const res = funcArr.reduce( (acc, curr) => {
//         return curr(acc)
//     }, number)
// }
// каждый аргумент новой функции - это результат выполнения предыдущей

// function a (a) {
//     return function b (b) {
//         return a + b
//     }
// }

// validation = () => {
//     const {value1, value2, value3} = this.state.values;
//     const {showFib} = this.props;

//     if (showFib.includes(value1) && showFib.includes(value2) && showFib.includes(value3)) {
//         this.setState({
//             errorMessage: ''
//         })
//         return true
//     } else {
//         this.setState({
//             errorMessage: 'wrong number'
//         })
//         return false
//     }
// }
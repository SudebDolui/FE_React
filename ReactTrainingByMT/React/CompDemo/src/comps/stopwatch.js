import { Component } from 'react';
import { ReactDOM } from 'react';

export class Content extends Component {
    constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
    counter: 0,
    currentTime: (new Date()).toLocaleString()
    }
    }
    launchClock() {
    setInterval(()=>{
    this.setState({
    counter: ++this.state.counter,
    currentTime: (new Date()).toLocaleString()
    })
    }, 2000)
    }
    render() {
    if (this.state.counter > 2) return
    return <Logger time={this.state.currentTime}></Logger>
    }
    } 

    export class Logger extends Component {
        constructor(props) {
        super(props)
        console.log('constructor')
        }
        componentWillMount() {
        console.log('componentWillMount is triggered')
        }
        componentDidMount(e) {
        console.log('componentDidMount is triggered')
        console.log('DOM node: ')
        }
        componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps is triggered')
        console.log('new props: ', newProps)
        }
        shouldComponentUpdate(newProps, newState) {
            console.log('shouldComponentUpdate is triggered')
console.log('new props: ', newProps)
console.log('new state: ', newState)
return true
}
componentWillUpdate(newProps, newState) {
console.log('componentWillUpdate is triggered')
console.log('new props: ', newProps)
console.log('new state: ', newState)
}
componentDidUpdate(oldProps, oldState) {
console.log('componentDidUpdate is triggered')
console.log('new props: ', oldProps)
console.log('old props: ', oldState)
}
componentWillUnmount() {
console.log('componentWillUnmount')
}
render() {
//console.log('rendering... Display')
return (
<div>{this.props.time} </div>
)
}
}
import React from 'react'
import Clicker from './Clicker'



class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            show: true
        };
        this.increaseCounter = this.increaseCounter.bind(this)
    }

    componentDidMount() {
        this.setState()
        console.log("DidMount");

    }
    increaseCounter(val) {
        this.setState({counter: val})
    }

    render() {
        console.log("render");
        return (
            <div>
                <button onClick={() => this.setState({show: !this.state.show})}>Скрыть</button>
                { this.state.show && 
                    <Clicker handleIncrease={this.increaseCounter} />
                }
                
            </div>
        )
    }
}

export default Page
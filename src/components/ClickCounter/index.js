// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="bg-container">
        <h1>
          The Button has been clicked
          <span className="countvalue"> {count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

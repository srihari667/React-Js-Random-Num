// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateNumber = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: random})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

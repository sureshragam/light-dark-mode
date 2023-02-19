// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  modeClick = () => {
    this.setState(prevState => {
      if (prevState.isDarkMode) {
        return {isDarkMode: false}
      }
      return {isDarkMode: true}
    })
  }

  render() {
    const {isDarkMode} = this.state
    return (
      <div className="container">
        <div className={isDarkMode ? 'black-card' : 'white-card'}>
          <h1>Click To Change Mode</h1>
          {isDarkMode ? (
            <button className="button" type="button" onClick={this.modeClick}>
              Light Mode
            </button>
          ) : (
            <button className="button" type="button" onClick={this.modeClick}>
              Dark Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode

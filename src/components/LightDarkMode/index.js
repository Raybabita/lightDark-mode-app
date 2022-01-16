// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickChangeMode = () => {
    this.setState(preState => ({isDarkMode: !preState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode'
    const onTextButton = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`content-container ${modeClass} `}>
          <h1>Click To Change Mode</h1>
          <div className="button-container">
            <button
              className="btn"
              type="button"
              onClick={this.onClickChangeMode}
            >
              {onTextButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

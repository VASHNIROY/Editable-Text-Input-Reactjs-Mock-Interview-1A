import {Component} from 'react'
import './index.css'

class HomePage extends Component {
  state = {check: true, text: ''}

  onSearchInput = event => {
    this.setState({text: event.target.value})
  }

  renderSaveContainer = () => {
    const {text} = this.state

    const clickedSave = () => {
      this.setState(prevState => ({
        check: !prevState.check,
      }))
    }

    return (
      <div className="inputContainer">
        <input
          id="save"
          onChange={this.onSearchInput}
          type="text"
          value={text}
          className="input-element"
        />
        <button onClick={clickedSave} className="button" type="button">
          <label htmlFor="save">Save</label>
        </button>
      </div>
    )
  }

  renderEditContainer = () => {
    const {text} = this.state

    const clickedSave = () => {
      this.setState(prevState => ({
        check: !prevState.check,
      }))
    }
    return (
      <div className="inputContainer">
        <p className="name">{text}</p>
        <button onClick={clickedSave} className="button" type="button">
          <label htmlFor="Edit">Edit</label>
        </button>
      </div>
    )
  }

  render() {
    const {check} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1>Editable Text Input</h1>
          {check ? this.renderSaveContainer() : this.renderEditContainer()}
        </div>
      </div>
    )
  }
}

export default HomePage

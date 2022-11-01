import {Component} from 'react'
import Header from '../Header'
import RenderUser from '../RenderUser'
import './index.css'

class FormApplication extends Component {
  state = {
    searchInputVal: '',
    name: '',
    email: '',
    number: '',
    city: '',
    userInfo: [],
  }

  // name,email,number city

  onSubmit = event => {
    event.preventDefault()
    const {name, email, number, city} = this.state
    const addNewUserDetails = {
      name,
      email,
      number,
      city,
    }
    this.setState(prevState => ({
      userInfo: [...prevState.userInfo, addNewUserDetails],
      name: '',
      email: '',
      number: '',
      city: '',
    }))
    console.log(addNewUserDetails)
  }

  onEnteringName = event => {
    this.setState({name: event.target.value})
  }

  onEnteringNumber = event => {
    this.setState({number: event.target.value})
  }

  onEnteringEmail = event => {
    this.setState({email: event.target.value})
  }

  onEnteringCity = event => {
    this.setState({city: event.target.value})
  }

  onEnterSearchUser = event => {
    this.setState({searchInputVal: event.target.value})
  }

  render() {
    const {name, email, number, city, userInfo, searchInputVal} = this.state
    const result = userInfo.sort((a, b) => a.name.localeCompare(b.name))

    const currentItems = userInfo.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInputVal.toLowerCase()),
    )

    return (
      <div className="main-bg-container">
        <Header />

        <div className="form-app-container">
          <h1 className="form-heading">Form Application Details</h1>
          <form className="form-container" onSubmit={this.onSubmit}>
            <div className="input-item-container">
              <label htmlFor="name" className="field-title">
                NAME:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={this.onEnteringName}
                placeholder="Enter Name"
              />
            </div>

            <div className="input-item-container">
              <label htmlFor="number" className="field-title">
                NUMBER:
              </label>
              <input
                type="text"
                id="number"
                value={number}
                onChange={this.onEnteringNumber}
                placeholder="Enter Number"
              />
            </div>

            <div className="input-item-container">
              <label htmlFor="email" className="field-title">
                EMAIL:
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={this.onEnteringEmail}
                placeholder="Enter Email"
              />
            </div>

            <div className="input-item-container">
              <label htmlFor="city" className="field-title">
                CITY:
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={this.onEnteringCity}
                placeholder="Enter City"
              />
            </div>

            <button type="submit" className="button">
              Submit
            </button>
          </form>
          <hr className="horizontal-line" />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search"
              className="input-text-pwd"
              value={searchInputVal}
              onChange={this.onEnterSearchUser}
            />
          </div>
          <ul className="user-list-container">
            {currentItems.map(eachUser => (
              <RenderUser key={eachUser.number} userDetails={eachUser} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default FormApplication

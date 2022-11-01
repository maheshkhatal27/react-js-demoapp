import {Component} from 'react'
import ButtonElement from '../ButtonElement'
import Header from '../Header'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = count => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = count => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="count-app-container">
        <Header />
        <div className="app-container">
          <h1 className="count">Count {count}</h1>
          <ButtonElement
            count={count}
            onDecrement={this.onDecrement}
            onIncrement={this.onIncrement}
          />
        </div>
      </div>
    )
  }
}

export default Counter

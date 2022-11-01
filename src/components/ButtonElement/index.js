import './index.css'

const ButtonElement = props => {
  const {count, onIncrement, onDecrement} = props
  const increaseBtn = () => {
    onIncrement(count)
  }
  const decreaseBtn = () => {
    onDecrement(count)
  }
  // using frags
  return (
    <>
      <button className="button" onClick={increaseBtn} type="button">
        Increase
      </button>
      <button className="button" onClick={decreaseBtn} type="button">
        Decrease
      </button>
    </>
  )
}

export default ButtonElement

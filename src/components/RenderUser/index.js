import './index.css'

const RenderUser = props => {
  const {userDetails} = props
  const {name, city, number, email} = userDetails

  return (
    <li className="each-user-item">
      <p className="each-field">Name: {name}</p>
      <p className="each-field">City: {city}</p>
      <p className="each-field">E-mail: {email}</p>
      <p className="each-field">Number: {number}</p>
    </li>
  )
}

export default RenderUser

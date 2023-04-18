import React from "react"

export default function Login(props) {
  const users = [
    { id: 1, name: "Goku" },
    { id: 2, name: "Vegeta" },
    { id: 3, name: "Gohan" },
    { id: 4, name: "Piccolo" },
    { id: 5, name: "Kuririn" },
  ]

  return (
    <div className="col-md-3 container opacity-0 py-3 rounded-top rounded-bottom align-self-center">
      <div className="row justify-content-center font-weight-bold">
        <mark>Who are you?</mark>
      </div>
      <ul className="login-ul list-group text-center mt-3">
        {users.map((user) => (
          <li
            className="list-group-item"
            key={user.id}
            onClick={() => props.doLogin({ ...user })}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

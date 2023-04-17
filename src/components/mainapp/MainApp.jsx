import React from "react"
import { UserContext } from "../../context/UserContext"

export default function MainApp() {
  const userContext = React.useContext(UserContext)
  return (
    <div>
      Welcome {JSON.stringify(userContext.loggedUser)}
      <div className="row">
        <button type="button" onClick={() => userContext.logout()}>
          Logout
        </button>
      </div>
    </div>
  )
}

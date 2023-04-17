import React from "react"
import "./App.css"
import Loader from "./components/loader/Loader"
import Login from "./components/login/Login"
import MainApp from "./components/mainapp/MainApp"
import { LoaderContext } from "./context/LoaderContext"
import { UserContext } from "./context/UserContext"

function App() {
  const [showLoader, setShowLoader] = React.useState(true)
  const loaderContextValue = {
    doShowLoader: () => setShowLoader(true),
    doHideLoader: () => setShowLoader(false),
  }

  const [loggedUser, setLoggedUser] = React.useState(null)
  const logUserActions = {
    doLogin: (user) => setLoggedUser(user),
    doLogout: () => setLoggedUser({}),
  }

  React.useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
      setLoggedUser({})
    }, 2000)
  }, [])

  return (
    <>
      {loggedUser !== null && (
        <LoaderContext.Provider value={loaderContextValue}>
          {!loggedUser.name ? (
            <Login doLogin={logUserActions.doLogin} />
          ) : (
            <UserContext.Provider
              value={{ loggedUser, logout: logUserActions.doLogout }}
            >
              <MainApp />
            </UserContext.Provider>
          )}
        </LoaderContext.Provider>
      )}
      {showLoader && <Loader />}
    </>
  )
}

export default App

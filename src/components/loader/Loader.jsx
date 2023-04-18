import React from "react"

export default function Loader(props) {
  return (
    <div className="min-vh-100 min-vw-100 d-flex justify-content-center">
      <div className="spinner-border align-self-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

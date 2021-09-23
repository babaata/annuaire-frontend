import React from 'react'

export default function NotAuth() {
  return (
    <div className="position-relative" style={{minHeight: 'calc(100vh - 50px)'}}>
    <h2 className="position-absolute text-danger" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      Veuillez vous connectez ou vous enregistrez
    </h2>
  </div>
  )
}

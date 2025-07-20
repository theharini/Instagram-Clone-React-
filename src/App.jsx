import React from 'react'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="d-flex vh-100">
      <div className="w-20"><Sidebar/></div>
      <div className="w-50 bg-info">feed</div>
      <div className="w-30">suggestions</div>
    </div>
  )
}
// w-25 w-50 2-75 w-100
export default App
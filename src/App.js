import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar/navber'
import Search from './components/search/search'

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar/>
        <Search/>
      </div>
    </MuiThemeProvider>
  )
}

export default App

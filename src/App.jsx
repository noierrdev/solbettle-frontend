import { useState } from 'react'
import { AppBar, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import HeaderBar from './components/layouts/HeaderBar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  const [count, setCount] = useState(0)
  const theme=createTheme({
    palette:{
      mode:"dark"
    }
  })
  return (
    <Provider store={store} >
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      {/* <HeaderBar/> */}
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
    </Provider>
  )
}

export default App

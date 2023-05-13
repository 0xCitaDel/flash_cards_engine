import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Header from '@components/Header'
import routesConfig from '@routes/routesConfig'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component/>}
              />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

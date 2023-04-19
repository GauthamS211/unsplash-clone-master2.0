import './css/App.css'
import "./css/ImageGrid.css"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/s/:searchTerm">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { useAppContext } from './context/app'

const Home = lazy(() => import('./pages/Home'))
const Offers = lazy(() => import('./pages/Offers'))

function App() {
  const { userData } = useAppContext()
  return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ofertas" exact component={Offers}>
              {userData.name ? <Offers /> : <Redirect to="/" />}
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </Router>
  )
}

export default App

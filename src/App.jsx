import Router from './Router'
import './assets/style/style.css'
import './assets/style/reset.css'
import { useSelector } from 'react-redux'

const App = ()=> {
  return (
    <main className="c-main">
      <Router />
    </main>
  );
}

export default App;

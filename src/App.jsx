import Router from './Router'
import './assets/style/style.css'
import './assets/style/reset.css'
import { useSelector } from 'react-redux'

const App = ()=> {
  return (
    <section className="c-section">
      <div className="c-box">
      <Router />
      </div>
    </section>
  );
}

export default App;

// import Router from './router/routes.tsx';
import Router from './router';
// import Router from './router/createBrowserRouter.tsx';
import './App.css'

function App() {
  console.log('import.meta.env', import.meta.env);
  console.log('process.env', process.env);
  return (
    <div className="app">
      <Router/>
    </div>
  )
}

export default App

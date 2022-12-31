import Spline from '@splinetool/react-spline'
import '../Pages/App.css';
import Nav from '../Navigation/Nav'

function App() {

  return (
    <div className="App">
      <Spline scene="https://prod.spline.design/SmPf8eobVcIKS97G/scene.splinecode" height={window.innerHeight}/>
      <h1 className='text'>Explore the wonders of our home planet with us</h1>
      <Nav/>
    </div>
  )
} 

export default App

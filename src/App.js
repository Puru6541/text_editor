
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
<Navbar title = "TextUtils" about = "About Textutils"/>
<div className="container my-5">
<Textform heading = " Analyze Your Text"/>
</div>
   </>
  );
}

export default App;

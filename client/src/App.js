
import {Routes,Route} from 'react-router-dom'
import About from './components/pages/About.jsx';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import Policy from './components/pages/Policy.jsx';
import PageNotfound from  './components/pages/pageNotfound.jsx';
import { Register } from './components/pages/Auth/Register.jsx';
import Login from './components/pages/Auth/Login.jsx';

function App() {
  return (
    <>
   <Routes>
<Route path='/aboutpage' element ={<About/>}/>
<Route path='/' element ={<Home/>}/>
<Route path='/register' element ={<Register/>}/>
<Route path='/login' element ={<Login/>}/>
<Route path='/contactpage' element ={<Contact/>}/>
<Route path='/policypage' element ={<Policy/>}/>
<Route path='/*' element ={<PageNotfound/>}/>
</Routes>
  
    </>
  );
}

export default App;

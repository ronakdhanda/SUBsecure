import './App.css';
import Bank from './components/Bank/Bank';
import Banner from './components/banner/Banner';
import Card from './components/Card/Card';
import Initiative from './components/Initiative/Initiative';
import Navbar from './components/Navbar/Navbar';
import Process from './components/Process/Process';
import Ques from './components/Ques/Ques';

function App() {
  return (
    <div className='body'>
      <Navbar />
      <Banner/>
      <Card/>
      <Process/>
      <Initiative/>
      <Bank/>
      <Ques/>
    </div>
  )
}

export default App;

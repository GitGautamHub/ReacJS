// import logo from './logo.svg';
import Card from './Card.jsx'
import './App.css';

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <br />
      <Card username="gautam" btntext="clik me" />
      <Card username="manya"  />
    </>
  );
}

export default App;

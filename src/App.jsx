import './App.css';
import Divider from "./img/pattern-divider-desktop.svg"
import Dice from "./img/icon-dice.svg"

function App() {
  return (
    <div className="App flex h-screen">
      <div id='advice-card' className='relative bg-neutral-2 m-auto flex flex-col justify-center items-center p-10 max-w-md rounded-lg'>
        <div id="text" className='mb-5 flex flex-col gap-5 '>
          <h1 className='text-primary-2 text-[10px] tracking-[3px]'>ADVICE #117</h1>
          <p className='text-primary-1 font-bold text-quote'>
            "
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            "
          </p>
          <img 
            src={Divider} 
            alt="Divider Pattern" 
          />
        </div>
        <button className="absolute -bottom-6 bg-primary-2 text-neutral-3 p-4 rounded-full hover:shadow-primary-2 hover:shadow-dice transition-all duration-300">
          <img 
            src={Dice} 
            alt="Dice Logo" 
          />
        </button>
      </div>
    </div>
  );
}

export default App;

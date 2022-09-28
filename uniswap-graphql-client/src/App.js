import './App.css';
import ETHPrice from './containers/EthPrice'
import { getETHPrice } from './shared/services'
// require('dotenv').config()

const response = getETHPrice().then(result => {
  console.log(result)
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ETHPrice></ETHPrice>
      </header>
    </div>
  );
}

export default App;

import './style/style.css';

import ZoneList from './components/ZonesList'
import CreateZone from './components/CreateZone'
import NewZone from './components/NewZone'

function App() {
  return (
    <div className="App">


      <CreateZone />
      
      {/* <NewZone /> */}
      <div className="bozz-c-Section bozz-u-txt-center">
        <h2 className="bozz-u-txt-center bozz-c-Heading-h2">Mes zones enregistrées</h2>
        <ZoneList />
      </div>

    </div>
  );
}

export default App;

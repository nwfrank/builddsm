import React, { useState } from 'react';
import data from './data.json';
import './App.css';
import ListItem from './components/listItems';

function App() {

  
  const [medName, setMedName] = useState('');
  const [list, setList] = useState([]);
  const [lookupNum, setLookupNum] = useState('');

  const medSearch = () => {
    const result = data.filter((o) => o.applicationNumber.toLowerCase().includes(lookupNum.toLowerCase()));
    if (result.length > 0 && lookupNum.length == 7){
      setList(result);
    }
    else{
      const result2 = data.filter((o) => o.proprietaryName.toLowerCase().includes(medName.toLowerCase()));
      setList(result2);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Farm-aceutical Fix</h1>
        <p>The expert on everything veterinary pharmacy.</p>

        <table>
            <tr>
              <td>
                <label htmlFor="search">Lookup Number </label>
              </td>
              <td>
                <input type="text" id="search" autoFocus name="search"/>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="search">Medication Name </label>
              </td>
              <td>
                <input type="text" id="search" name="search" onChange={event => setMedName(event.target.value)}/>            
              </td>
              <td>
                <button class="formButton" onClick={medSearch} type="submit">Search</button>
              </td>
            </tr>
          </table>

        {list.map(item => 
          <ListItem className='medication' 
            commonNames={item.proprietaryName} 
            activeIng={item.ingredients} 
            indicators={item.indications} 
            pdf={item.bblabelId}
            applicationNumber={item.applicationNumber}
            animalClass={item.animalclass}
            status={item.status}
            labelType={item.labelType}
            />
        )}  
      </header>
    </div>
  );
}

export default App;

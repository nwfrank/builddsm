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

            <label htmlFor="search">Lookup Number </label>
            <input onChange={event => setLookupNum(event.target.value)} type="text" id="search" autoFocus name="search"/>


            <label htmlFor="search">Medication Name </label>
            <input type="text" id="search" name="search" onChange={event => setMedName(event.target.value)}/>
            <button onClick={medSearch} type="submit">Search</button>

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

import React, { useState } from 'react';
import data from './data.json';
import './App.css';
import ListItem from './components/listItems';
import './components/splitScreen.css';

function App() {

  const [medName, setMedName] = useState('');
  const [list, setList] = useState([]);
  const [lookupNum, setLookupNum] = useState('');
  const [leftScreen, setLeftScreen] = useState('100vw');
  const [rightScreen, setRightScreen] = useState('none');

  const medSearch = () => {
    // eslint-disable-next-line
    const result = data.filter((o) => o.bblabelId == lookupNum);
    // eslint-disable-next-line
    if (result.length > 0 && (lookupNum.length == 3 || lookupNum.length == 4)){
      setList(result);
    }
    else if (medName.length > 0){
      const result2 = data.filter((o) => o.proprietaryName.toLowerCase().includes(medName.toLowerCase()));
      setList(result2);
    }
    else {
      setList([]);
    }
  }

  const open = () => {
    // eslint-disable-next-line
    if(rightScreen == 'none'){
      setLeftScreen('33%');
      setRightScreen('block');
    }
    else {
      setLeftScreen('100%');
      setRightScreen('none');
    }
  }

  return (
    <div>
      <div className="split-screen">
        <div style={{width: leftScreen}} className="split-left">
            <button className='but' onClick={open}>Farm Fix</button>
        </div>
        <div  style={{display: rightScreen}} className="split-right">
          <div className="right-content">
            <div className='spilt'>
              <table className="dataEntry">
                <h1>Farm-aceutical Fix</h1>
                  <p>The expert on everything veterinary pharmacy.</p>
                  <tr>
                    <td>
                      <label htmlFor="search">Lookup Number </label>
                    </td>
                    <td>
                      <input type="text" id="search" autoFocus name="search" onChange={event => setLookupNum(event.target.value)}/>
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
              <div className='help'>
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
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
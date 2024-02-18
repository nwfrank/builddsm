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
    const result = data.filter((o) => o.bblabelId == lookupNum);
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
         </div>
            </div>
        </div>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <div className='ghgh'>
    //     <div className='spilt'>text</div>
    //     <div className='spilt'>
    //     <h1>Farm-aceutical Fix</h1>
    //     <p>The expert on everything veterinary pharmacy.</p>

    //         <label htmlFor="search">Lookup Number </label>
    //         <input onChange={event => setLookupNum(event.target.value)} type="text" id="search" autoFocus name="search"/>


    //         <label htmlFor="search">Medication Name </label>
    //         <input type="text" id="search" name="search" onChange={event => setMedName(event.target.value)}/>
    //         <button onClick={medSearch} type="submit">Search</button>

    //     {list.map(item => 
    //       <ListItem className='medication' 
    //         commonNames={item.proprietaryName} 
    //         activeIng={item.ingredients} 
    //         indicators={item.indications} 
    //         pdf={item.bblabelId}
    //         applicationNumber={item.applicationNumber}
    //         animalClass={item.animalclass}
    //         status={item.status}
    //         labelType={item.labelType}
    //         />
    //     )}  
    //     </div>
    //     </div>
    //   </header>
    // </div>
  );
}

export default App;

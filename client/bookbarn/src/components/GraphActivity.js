// install first =  npm install react-minimal-pie-chart
//https://www.npmjs.com/package/react-minimal-pie-chart

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { PieChart } from 'react-minimal-pie-chart';

function App() {

  const [account, setAccount] = useState({checking: 0, saving: 0, brokerage: 0})

  const handleTextBoxChange = (e) => {
    setAccount({
      ...account, // ... is called spread operator 
      [e.target.name]: parseInt(e.target.value) 
    })
  }

  return (

    <div>
      <input type="text" onChange={handleTextBoxChange} name="checking" placeholder="checking account" />
      <input type="text" onChange={handleTextBoxChange} name="saving" placeholder="savings account" />
      <input type="text" onChange={handleTextBoxChange} name="brokerage" placeholder="brokerage account" />


      <PieChart radius={30} label={({ dataEntry }) => dataEntry.value}
        data={[
          { title: 'Checking', value: account.checking, color: '#E38627' },
          { title: 'Saving', value: account.saving, color: '#C13C37' },
          { title: 'Brokerage', value: account.brokerage, color: '#6A2135' },
        ]}
      />

    </div>


  )
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.scss'
import Button from './components/button'
import {
  InputText,
  InputPassword,
  DropdownSelect,
  InputToggle,
  InputSelect,
  InputEmail,
  InputCheckbox,
} from "./components/forms";

import Header from './components/header'

function App() {
  const [isButtonXl, setIsButtonXl] = useState(false);
  const toggleButtonXl = () => {
    setIsButtonXl(!isButtonXl);
  };
  const [inputTextValue, setInputTextValue]= useState();
  const [InputPasswordValue, setInputPasswordValue]= useState()
  const [inputDropdownValue, setInpuDropdownValue] = useState();
  const [inputSelectValue, setInputSelectValue] = useState();
  const [inputEmailValue, setInputEmailValue] = useState();

  const options = {
    name: "products",
    id: "products",
    options: [
      {
        id: 1,
        label: "Basket",
        value: "basket",
      },
      {
        id: 2,
        label: "Soccer",
        value: "soccer",
      },
      {
        id: 3,
        label: "Run",
        value: "run",
      },
    ],
  };

  return (
    <>
{/* <div className='Container'>
  <div className='Element'>center</div>
  <div className='ElevationTest'>box shadow</div>
<ul>
          <li>prezzo 1</li>
          <li>prezzo 2</li>
        </ul>
        <ul>
        <li>prezzo 1</li>
        <li>prezzo 2</li>
      </ul>
</div>
<div className="wrapper">Sono un elemento in max width</div> */}
{/* <div className='Container'>
  <div className='row'>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
    <div className='col-1'>col 1</div>
  </div>
  <div className='row'>
  <div className='col-2'>col 2</div>
  <div className='col-2'>col 2</div>
  <div className='col-2'>col 2</div>
  <div className='col-2'>col 2</div>
  <div className='col-2'>col 2</div>
  <div className='col-2'>col 2</div>
  </div>
  <div className='row'>
  <div className='col-3'>col 3</div>
  <div className='col-3'>col 3</div>
  <div className='col-3'>col 3</div>
  <div className='col-3'>col 3</div>
  </div>
  <div className='row'>
  <div className='col-4'>col 4</div>
  <div className='col-4'>col 4</div>
  </div>
  
</div> */}
    {/* <section className="grid-test">
      <div className="row">
        <div className="col-1-of-2">
          Col 1 of 2
        </div>
        <div className="col-1-of-2">
          Col 1 of 2
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
        <div className="col-2-of-3">
          Col 2 of 3
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-2-of-4">
          Col 2 of 4
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-3-of-4">
          Col 3 of 4
      </div>
      </div>
      <div className="row">
      <div className="col-1-of-12">
       12
      </div>
      <div className="col-1-of-12">
       12
      </div>
      <div className="col-1-of-12">
        12
      </div>
      <div className="col-1-of-12">
        12
      </div>
      <div className="col-1-of-12">
       12
      </div>
      <div className="col-1-of-12">
       12
      </div>
      <div className="col-1-of-12">
       12
      </div>
      <div className="col-1-of-12">
        12
      </div>
      <div className="col-1-of-12">
       12
      </div>
      <div className="col-1-of-12">
        12
      </div>
      <div className="col-1-of-12">
        12
      </div>
      <div className="col-1-of-12">
       12 
      </div>
      </div>
      <h1> Questo è l' H1</h1> */}
    {/* </section> */}
    {/* <div onClick={() => toggleButtonXl()}>
        <Button label="go to" icon iconLeft size="sm" square />
      </div>
      <div>
        <Button label="go to" icon outline size="md" />
      </div>
      {isButtonXl && (
        <div>
          <Button label="go to" outline size="xl" />
        </div>
      )}
      <div>
          <Button label="disabled" disabled />
      </div>

      <InputToggle /> */}
        {/* <InputText
        id={"name"}
        name="name"
        placeholder="Your name"
        label={"name"}
        // error
        // errorMessage={"Inserisci il tuo nome"}
        handleChange={setInputTextValue}
      />
       <InputPassword
        id={"password"}
        name="password"
        placeholder="Your password"
        label={"password"}
        error
        errorMessage={"Password errata"}
        handleChange={setInputPasswordValue}
      />
       <DropdownSelect options={options} handleChange={setInpuDropdownValue} />
       <InputSelect
        options={options}
        defaultValue={options?.options[0]?.value}
        handleChange={setInputSelectValue}
      />
      <InputEmail
      id={"email"}
      name="email"
      placeholder="your Email"
      label={"Email"}
      error
      errorMessage={"Email errata"}
      />
      <InputCheckbox  /> */}
      <Header/>
    </>
  )
}

export default App

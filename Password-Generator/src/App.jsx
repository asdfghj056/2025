import { useState, useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charsAllowed) str += "$%^&*()-_=+[]{}"
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*100);
      pass += str.charAt(char)
    }
    setPassword(pass)
  } ,[length,numberAllowed,charsAllowed ])

  const passwordclipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charsAllowed,passwordGenerator])
 
  return (
    <>
    <div className='w-full text-xl max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-xl overflow-hidden mb-5 '> 
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 overflow-hidden' 
        placeholder='Password'
        ref={passwordRef}
        readOnly
        />
        <button onClick={passwordclipboard} className='outline-none bg-blue-700 text-xl text-white px-3 py-0.5 shrink-0'>Copy</button>
         </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
            type="range" 
            min={8 }
            max={50}
            value={length}
            className='cursor-pointer gap-x-1' 
            onChange={(e) =>{setLength(e.target.value)}}
            />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {numberAllowed}
            id='number input'
            onChange={(prev) =>{
              setNumberAllowed((prev) => !prev)
            }} />
            <label className='text-white'>Numbers: {numberAllowed}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {charsAllowed}
            id='number input'
            onChange={(prev) =>{
              setCharsAllowed((prev) => !prev)
            }} />
            <label className='text-white'>Characters: {charsAllowed}</label>
          </div>
          </div>
         </div>

    </>
  )
}

export default App

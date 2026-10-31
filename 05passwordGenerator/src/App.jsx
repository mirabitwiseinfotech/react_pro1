
import { useState, useCallback,useRef, useEffect} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [alphabeatsAllow, setAlphabeatsAllowed] = useState(false);
  const [password, setPassword] = useState("");
 
  
//useRef hook
  const passwordRef= useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    

    if (alphabeatsAllow) {
     str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*_-+=[]{}~`<>?";
    }
    
   // only for checkbox
    if(!numberAllowed && !charAllowed){
      str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } 

   

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed,alphabeatsAllow, setPassword]);
  
  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setselectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 ">
      <h1 className="text-white text-center text-xl py-3">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-black"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <button
          onClick={() => navigator.clipboard.writeText(password)}
          className="bg-blue-500 text-white px-3 py-1"
        >
          Copy
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="range"
          min="4"
          max="50"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />

        <label>Length: {length}</label>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <input
          type="checkbox"
           checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label>Include Numbers</label>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
         
        />
        <label>Include Special Characters</label>
      </div>

       <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked = {numberAllowed && charAllowed && alphabeatsAllow}
          onChange={(e) => {
             setNumberAllowed(e.target.checked);
            setCharAllowed(e.target.checked);
            setAlphabeatsAllowed(e.target.checked);}}
         
        />
        <label>Include Special Characters & Numbers & Alphabeats</label>
      </div>

      
      
      
      <button
        onClick={passwordGenerator}
        className="w-full bg-orange-500 text-white py-2 rounded-lg mb-4"
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;

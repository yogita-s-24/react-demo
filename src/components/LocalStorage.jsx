import {useState, useEffect} from 'react'

const LocalStorage = () => {
    const [names, setName] = useState( () => localStorage.getItem("name") || "");


    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(names));
    }, [names]);


    const handleChange = (e) =>{
        setName(e.target.value);
    }

    const handleClear = () => setName("");
   
  return (
    <div>
      <h1>
        Your name : {names}
      </h1> 

      <input placeholder="Enter your name" type="text" onChange={handleChange}/>
      <button type="button" onClick={handleClear}> Clear Name</button>
      
    </div>
  )
}

export default LocalStorage

import {useState} from 'react'

const CopyButton = () => {
    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = () =>{
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
            alert("text copied successfully")
        })
    }

    const handleChange = (event) =>{
        setInputValue(event.target.value);
    }

    console.log(copied)

  return (
    <div>
        <input type="text" value={inputValue} placeholder="Enter the your name" style={{width: "400px"}} onChange={handleChange}/>
        <button onClick={handleCopy}>Copy</button>
      
    </div>
  )
}

export default CopyButton

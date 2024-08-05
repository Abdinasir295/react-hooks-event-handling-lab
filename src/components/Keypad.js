// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        console.log('Entering password...')
    }
    return (
        <div>
           <input onChange={handleChange} type="password" name='passowrd' placeholder="Enter Password"></input>
        </div>
    )
}

export default Keypad;
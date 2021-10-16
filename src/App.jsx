import React, { useState } from 'react';
const App = () => {
    const [username, setUsername] = useState("");
    const [usermsg, setUsermsg] = useState("");
    const [list, setList] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, usermsg);
        const date ={username, usermsg};
        if (username && usermsg) {
            setList((ls) => [...ls, date])
            setUsername(" ")
            setUsermsg(" ")
        }
    }

    return (
       <div className = "App">
           <h1>Chirp Your Favorite Quote</h1>
           <form onSubmit = {handleSubmit}>
               <input type="text"  placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
               <input type="text"  placeholder="usermsg" value={usermsg} onChange={(e) => setUsermsg(e.target.value)} />
               <button>Chirp It!</button>
           </form>
           {
            list.map((a) => <div>
            <li>{a.username}</li>
            <li>{a.usermsg}</li> 
            </div>
    )
           }
           
            
       </div>
    
    )
    
    }
    
export default App;

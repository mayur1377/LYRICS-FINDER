import Axios from 'axios';
import './App.css'
import { useState } from 'react';
let x;

function App()
{
  const [artist , setartist]=useState("");
  const [song , setsong]=useState("");
  const[lyrics , setlyrics]=useState("");
  //const icon=document.querySelector('img');
 
  

  function searchlyrics()
  {
	if(artist=="" || song=="")
	{
    if(artist=="" && song=="") alert("ENTER THE SONG AND ARTIST NAME");
		else if(artist=="") alert("ENTER THE ARTIST NAME");
    else if(song=="") alert("ENTER THE SONG NAME");
	}
  
  Axios.get(
    `https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
                console.log(res.data.lyrics);
                setlyrics(res.data.lyrics);
            })
          }
  

  return (
     <div className="app">
      <h1>LYRICS FINDER</h1>

      <input className="inputartist" type="text" placeholder='ARTIST NAME'
      onChange={(e)=>{setartist(e.target.value)}}/>
	  <br></br>
      <input className="inputsong" type="text" placeholder='SONG NAME'
      onChange={(e)=>{setsong(e.target.value)}}/>
	  <br></br>
	  <div>
	  </div>
      <button className="button" onClick={()=>searchlyrics()}>SEARCH</button>
    <div className="lyrics"> 
    <pre >{lyrics}</pre></div>

     </div>
  );
  }
  export default App;
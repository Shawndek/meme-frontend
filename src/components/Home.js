import React, { useState, useEffect  } from "react";
import axios from "axios";
import Posts from "./Posts";
import DropMenu from "./Dropdown";

const Home = () => {
  const [memes, setMemes] = useState([]);
  const [value,setValue]=useState('All');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }

  useEffect(() => {
    const getMeme = `http://localhost:3001/memes/`;
    axios
      .get(getMeme)
      .then((res) => {
        console.log(res);
        setMemes(res.data);
        })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(memes);
    return (

<div className="d-flex row">
    <DropMenu DropMenu ={ DropMenu } value = {value} handleSelect = {handleSelect} />
  <div className="d-flex row">
  <div className="p-2">
  <div className="d-flex flex-row">
  {memes.length>0 &&<Posts memes={memes} value = {value}/>}
   </div>
</div>
</div>
</div>
    );
  }

export default Home;
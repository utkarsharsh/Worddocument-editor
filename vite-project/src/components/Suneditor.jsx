import React, { useState } from 'react'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const Suneditor = () => {
    const [value,setvalue]=useState("<p>The editor's default value</p>");
  return (<>
    <SunEditor setContents={value}    onChange={(e)=>{
setvalue(e);
console.log(e);
    }}/>

    <p style={{color:"white"}}>{value}</p>
</>
  )
}

export default Suneditor
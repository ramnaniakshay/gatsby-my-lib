import * as React from "react"
import {Link} from 'gatsby'


export default function Home() {
  return <div>
    <h1>Welcome to Sample Lib app</h1>
    <br/>
    <br/>
    <Link style={{fontSize:'50px', textDecoration:'none', backgroundColor:'purple', color:'white', padding: '15px', borderRadius:'10px'}} to="/BookForm/">Create A book</Link>
    <br/>
    <br/>
    <br/>
    <Link style={{fontSize:'50px', textDecoration:'none', backgroundColor:'purple', color:'white', padding: '15px', borderRadius:'10px'}} to="/BookTable/">View Books </Link>
    
  </div>
}

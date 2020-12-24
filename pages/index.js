import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login Screen With P5js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <iframe style={{position: 'absolute', zIndex: '-1', top: '0px', borderWidth: "0px"}}width="100%" height="100%" src="https://editor.p5js.org/willianxz/embed/NgdmAg30l"></iframe>
        
        <center>
          <div style={{backgroundColor: "white", width: "500px", height: "350px", marginTop: "10%", userSelect: "none", boxShadow: "3px 3px 3px black"}}>
            <br/>
            <h1 style={{color: "#f0205e"}}>Login Screen With <Link href="https://p5js.org">P5js</Link></h1>
            <br/>
            <span style={{fontSize: "20px"}}>Username: </span>
            <input style={{padding: "5px", fontSize: "16px"}} type="text" placeholder="click here to fill your username"/>
            <br/><br/>
            <span style={{fontSize: "20px"}}>Password: </span>
            <input style={{padding: "5px", fontSize: "16px"}} type="password" placeholder="click here to fill your password"/>
            <br/><br/>
            <Link href="#"><button style={{padding: "10px", margin: "5px", color: "#f02065", cursor: "pointer"}}>CREATE ACCOUNT</button></Link>
            <Link href="#"><button style={{padding: "10px", margin: "5px", color: "#f02065", cursor: "pointer"}}>LOGIN</button></Link>
          </div>
        </center>
      </main>
      
    </div>
  )
}

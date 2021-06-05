import React, {useEffect,useState} from 'react'
const  Covid=()=>{

const [data, setData] = useState([]);

  const getCovidDate= async()=>{
  
    try {
      const res= await fetch('https://api.covid19india.org/data.json');
     const actualData=await res.json();
     setData(actualData.statewise[0]);
    }
    catch(err){
     console.log(err); 
    }
  
  }
  useEffect(() => {
    getCovidDate();
    
  }, []);

  return(
   
    <>
    <section >
    <h1 >🔴 LIVE</h1>
    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    <ul >
      <li className="card">
        <div className="card_main">
          <div className="card_inner">
            <p className="card_back">Our <span>Country</span></p>
            <p className="card_total"><span>INDIA</span></p>
            </div>
        </div>
      </li>
    </ul>
    <ul >
      <li className="card">
        <div className="card_main">
          <div className="card_inner">
            <p className="card_back">Total <span>RECOVERD</span></p>
            <p className="card_total">{data.recovered}</p>
            </div>
        </div>
      </li>
    </ul>
    <ul >
      <li className="card">
        <div className="card_main">
          <div className="card_inner">
            <p className="card_back"> <span>CONFIRMED</span></p>
            <p className="card_total">{data.confirmed}</p>
            </div>
        </div>
      </li>
    </ul>
    <ul >
      <li className="card">
        <div className="card_main">
          <div className="card_inner">
            <p className="card_back">Total <span>DEATH</span></p>
            <p className="card_total">{data.deaths}</p>
            </div>
        </div>
      </li>
    </ul>
    <ul >
      <li className="card">
        <div className="card_main">
          <div className="card_inner">
            <p className="card_back">Total <span>ACTIVE</span></p>
            <p className="card_total">{data.active}</p>
            </div>
        </div>
      </li>
    </ul>
    <ul >
      <li className="card">
        <div className="card_main">
          <div className="card_inner">
            <p className="card_back">Last <span>UPDATED</span></p>
            <p className="card_total">{data.lastupdatedtime}</p>
            </div>
        </div>
      </li>
    </ul>
     
    </section>
    <div className="footer">
        <p>By ShivaniVerma</p>
      </div>
    </>
  )
}
export default Covid;
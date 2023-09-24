import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X2GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
const Home  = () => {
  return (
    <main className='main-container'>
        <div className="main-title">
            
            
                <a href='/dashboard' style={{color:"#ffff", textDecoration:'none', fontSize:20}}>
                   DASHBOARD  
                    </a>
                
              
            
        </div>

        {/* cards */}
        <div className="main-cards">
            <div className="card">
            <div className="card-inner">
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className='card_icon' />
            </div>
            <h1>300</h1>
        </div>
        <div className="card">
            <div className="card-inner">
                <h3>CATEGORIES</h3>
                <BsFillGrid3X2GapFill className='card_icon' />
            </div>
            <h1>12</h1>
        </div>

         
        <div className="card">
            <div className="card-inner">
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className='card_icon' />
            </div>
            <h1>33</h1>
        </div>
         


        <div className="card">
            <div className="card-inner">
                <h3>ALERTS</h3>
                <BsFillBellFill className='card_icon' />
            </div>
            <h1>42</h1>
        </div>
        </div>


        {/* charts */}
        <div className="charts">
            
        </div>
    </main>
  )
}

export default Home 
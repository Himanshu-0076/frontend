import React,{useState} from 'react'
import logo from '../assets/img/img2.jpg'
import arrow from '../assets/img/img5.jpg'
import {useLocation,useNavigate} from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChangePass, setIsChangePass]= useState(false);
  const [inputs, setInputs] = useState({});
  
        const handleChange = (event)=>{
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values =>({...values,[name]:value}))
        }

  const doLogout = ()=>{
    navigate('/')
  }

  const closeModal = () => {
    setIsChangePass(false); 
  };

  console.log('msg',location.pathname)

  return (
    <div className='header'>
      <div style={{display:'flex',width:'90%',alignItems:'center'}}>
      <img src={logo}/>
      <h2>Expence Tracker</h2>
      </div>
      {
        location.pathname === '/dashboard' ?
          <div style={{ width: '10%', display: 'flex', alignItems: 'center' }}>
            <p className="dropbtn">User Name</p>
            <div className="dropdown">
              <img style={{ width: '10px', height: '10px', marginLeft: '10px' }} src={arrow} />
              <div className="dropdown-content">
                <p onClick={()=>setIsChangePass(true)}>Change Password</p>
                <p onClick={doLogout}>Logout</p>
                </div>
            </div>
            {/* <p>User Name</p>
            <img style={{ width: '10px', height: '10px', marginLeft: '10px' }} src={arrow} /> */}
          </div>
          :
          null
      }
      {isChangePass &&(
        <div className="myModal" id="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div>
                  <label>Password: <input type='password' placeholder="Enter Your Password" name="pass" value={inputs.pass||''} onChange={handleChange}/> </label>          
                </div>

                <div>
                  <label>Confirm Password: <input type='password' placeholder="Enter Confirm Password" name="conpass" value={inputs.conpass||''} onChange={handleChange} /></label>
                </div>
         
        </div>
      </div>
      )
      }
    </div>
  )
}

export default Header

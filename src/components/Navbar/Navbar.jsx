import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
const Navbar = () => {

  const [icon,setIcon] = useState(true)
  const [change,changeIcon] = useState(true)
  const [windowsize,setwindowSize] = useState({
    width : undefined,
    height : undefined
  })

  useEffect(()=>{
      function handleResize(){
        setwindowSize({
          width : window.innerWidth,
          height : window.innerHeight
        })

        if(windowsize.width<=1400){
          setIcon(true)
        }else{
          setIcon(false)
        }


      }

      window.addEventListener('resize',handleResize)

  },[windowsize.width,windowsize.height])
  
  const changeHandler = () => {
    changeIcon(!change)
  }
 
  console.log(icon)

  return (
    <div className='navbar'>
      <div className={change ? "sub":"sub shift"}>
        <div><Link className='link' to="/"><HomeIcon/></Link></div>
        <div><Link className='link' to="/about">About</Link></div>
        <div><Link className='link' to="/scholarships">Scholarships</Link></div>
        <div><Link className='link' to="/schemesandpolicies">Schemes and Policies</Link></div>
        <div><Link className='link'  to="/contact">Contact</Link></div>
      </div>

      <div className={change ? 'authenticate':'authenticate shift'}>
        <div className='loginnavbar'><Link className='link' to="/login">Login</Link></div>
        <div className="signupnavbar"><Link className='link' to="/signup">SignUp</Link></div>
      </div>
      {icon&&<i className="fa-solid fa-bars" onClick={changeHandler}/>}
    </div>
  )
}

export default Navbar




































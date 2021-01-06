import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './CSS/GuideItem.css'
import {FaStar} from 'react-icons/fa'



// import Azerbaijan from '../assets/az.png'
// import photo from '../assets/profile.jpg'


export default function GuideItem(props) {
  const price=props.price
  const rating=props.rating
  const less=5-rating
    return (
        <div className="guideitem">
           <div className="itemheader"> 
           <img alt="Profile" src={props.photo} />
         </div>
        <div className="username"> <h3 >{props.username}</h3> </div>
         <div className="languages">
             <label>Languages : </label>
             <img  src={props.flag1} />
             <img  src={props.flag2} />
             <img  src={props.flag3} />
           </div>
          <div className="Rating">
            {[...Array(rating)].map(star =>{
              return  <FaStar size={30} color="#ffc107"/>
            })
            
            }
            {[...Array(less)].map(star =>{
              return  <FaStar size ={30} color="#808080"/>
            })
            }

            <h2 id="price">{price+" €/hr"}</h2>
           
          </div> 
           
            
        </div>
    )
}

import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './CSS/GuideItem.css'
import {FaStar} from 'react-icons/fa'
import photo from '../assets/profile.jpg';



// import Azerbaijan from '../assets/az.png'
// import photo from '../assets/profile.jpg'


export default function   GuideItem(props) {
  const price=props.price
  const rating=props.rating
  const less=5-rating
    return (
        <div className="guideitem">
           {/* <div >  */}
              <img className="itemheader" alt="Profile" src={props.photo ? props.photo : photo} />
            {/* </div> */}
          <h3 className="username">{props.username}</h3>
          {/* <span className="languages"> */}
              <label className="languages-label">Languages : </label>
              <img className="languages" src={props.flag1} />
              <img className="languages" src={props.flag2} />
              <img className="languages" src={props.flag3} />
            {/* </span> */}
          <div className="Rating">
            {[...Array(rating)].map((star, i) =>{
              return  <FaStar size={20} color="#ffc107" key={i}/>
            })
            
            }
            {[...Array(less)].map((star, i) =>{
              return  <FaStar size ={20} color="#808080" key={i}/>
            })
            }

            <h2 id="price">{price+" €/hr"}</h2>
           
          </div> 
           
            
        </div>
    )
}

import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './CSS/GuideItem.css'

export default function GuideItem() {
    return (
        <div className="guideitem">
           <h3>Here the guide item will shown</h3> 
           <div className="itemheader"> 
         <Avatar
           className="post__avatar"
           alt='AtabeyHeydarli'
           fontSize="large"
        /> 
           
           <h3>Username</h3>
         </div>
           
            
        </div>
    )
}

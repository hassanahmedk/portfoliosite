import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';

function Logo() {
  return (
    <div id="logo">
        Hassan
        <CircleIcon 
            className='logo-period'
            sx={{
                fontSize:"0.9rem",
                color:"#52C39D",
            }}
        />

        {/* <div className="period"></div> */}
    </div>
  )
}

export default Logo
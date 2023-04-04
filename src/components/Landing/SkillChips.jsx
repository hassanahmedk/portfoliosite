import React from 'react'

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";


function SkillChips() {
  return (
    <div className="about-skills">
        <p className='about-tagline'>
          <span className='about-tagline-first'>  Imagine.  </span>
          <span className='about-tagline-second'>  Design.  </span>
          <span className='about-tagline-third'>  Develop. </span>
        </p>
          <h2 className="about-skills-heading">Skills</h2>
          <Stack className="about-skills-container" direction="row">
            <Chip
              label="React"
              sx={{ backgroundColor: "#DDF1FF", color: "#054DA7" }}
            />
            <Chip
              label="Node js"
              
              sx={{ backgroundColor: "#FFF8C5", color: "#4D2D00" }}
            />
            <Chip
              label="MongoDB"
              sx={{ backgroundColor: "#D7F5DD", color: "#0F5D26" }}
            />
            <Chip
              label="SQL"
              sx={{ backgroundColor: "#FFE9E8", color: "#A10E25" }}
              color="success"
            />
            <Chip
              label="Javascript"
              sx={{ backgroundColor: "#F4EAFF", color: "#5F35AE" }}
              color="success"
            />
            <Chip
              label="Typescript"
              sx={{ backgroundColor: "#DDF1FF", color: "#054DA7" }}
              color="success"
            />
            <Chip
              label="AWS"
              sx={{ backgroundColor: "#D7F5DD", color: "#0F5D26" }}
              color="success"
            />
            <Chip
              label="Java"
              sx={{ backgroundColor: "#FFF8C5", color: "#4D2D00" }}
              color="success"
            />
            <Chip
              label="Redux"
              sx={{ backgroundColor: "#FFE9E8", color: "#A10E25" }}
              color="success"
            />
            <Chip
              label="Figma"
              sx={{ backgroundColor: "#F4EAFF", color: "#5F35AE" }}
              color="success"
            />
            <Chip
              label="Bootstrap"
              sx={{ backgroundColor: "#DDF1FF", color: "#054DA7" }}
            />
            <Chip
              label="Tailwind"
              sx={{ backgroundColor: "#D7F5DD", color: "#0F5D26" }}
              color="success"
            />
          </Stack>

          
        </div>
  )
}

export default SkillChips;
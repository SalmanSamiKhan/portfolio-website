import React from 'react'
import { SiGithub, SiReact, SiBootstrap, SiHtml5, SiCss3, SiJava, SiNodedotjs, SiExpress, SiJquery, SiMongodb, SiJavascript, SiPython, SiVisualstudio, SiGit, SiGnubash, SiPostman, SiHeroku } from "react-icons/si"
import {DiNpm} from 'react-icons/di'
import {AiFillApi} from 'react-icons/ai'

const Skills = () => {
  return (
    <div>
              <div className="skills mt-5">
        <h1> My Skills</h1>
        <ul className="list">
          <li >
            <h2 className="item my-5"> Front-End</h2>
            <span>
              <SiReact/> <SiBootstrap/> <SiHtml5/> <SiCss3/>
            </span>
          </li>
          <li >
            <h2 className="item my-5">Back-End</h2>
            <span>
            <SiNodedotjs/> <SiExpress/> <SiJquery/> <DiNpm/> <SiMongodb/> <AiFillApi/> 
            </span>
          </li>
          <li >
            <h2 className="item my-5">Languages</h2>
            <span>
              <SiJavascript/> <SiJava/> <SiPython/>
            </span>
          </li>
          <li >
            <h2 className="item my-5">Tools</h2>
            <span>
            <SiVisualstudio/> <SiGit/> <SiGithub/> <SiGnubash/> <SiPostman/> <SiHeroku/>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
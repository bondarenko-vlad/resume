import React from 'react'
import style from './projects.module.css'
import clock from './../img/clock.png'
import hhp from './../img/hhp.png'
import socialNetwork from './../img/socialNetwork.png'
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

class Projects extends React.Component {

  render(){
    return (
      <div id='projects'>
        <h2> Projects</h2>
        <hr />
          <div className={style.wrapper} >
              <Pulse><h3> Clock </h3></Pulse>
          <div className={style.content}>
            <div className={style.image}>

              <img src={clock} />
            </div>
            <div className={style.description}>
                <p>This is a clock. Background color depends from time</p>
                <p><b>Github</b> Resource:</p>
                <a href='https://github.com/bondarenko-vlad/clock'>Click</a>
            </div>
          </div>
          </div>
        <div className={style.wrapper}>
      <Pulse>  <h3> Bootstrap site</h3></Pulse>
        <div className={style.content}>
          <div className={style.image}>
            <img src={hhp} />
          </div>
          <div className={style.description}>
              <p>Site with bootstrap 4 library</p>
              <p><b>Github</b> Resource:</p>
              <a href='https://github.com/bondarenko-vlad/bootstrap-website'>Click</a>
          </div>
        </div>
        </div>
        <div className={style.wrapper}>
      <Pulse>  <h3>Social Network</h3></Pulse>
        <div className={style.content}>
          <div className={style.image}>
            <img src={socialNetwork} />
          </div>
          <div className={style.description}>
              <p>Main trainee project. I performed 73/100 videos from the 'react' course</p>
              <p><b>Github</b> Resource:</p>
              <a href='https://github.com/bondarenko-vlad/react-redux2.0'>Click</a>
          </div>

        </div>
        </div>
      </div>
    )
  }

}

export default Projects

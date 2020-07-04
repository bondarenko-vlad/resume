import React from 'react'
import photo from '../img/me.jpg'
import style from './cv.module.css'
import cv from '../_CV(english).pdf'

const Cv = (props) => {

  return (
    <div className={style.wrapper}>
    <div id='cv'>
      <h2>Curriculum Vitae</h2>
      <hr />
      <div className={style.flexArea}>
        <div className={style.mainInfo}>
        <h3>Vladislav Bondarenko</h3>
        <div className={style.skills}>
          <p>HTML</p>
          <div className={style.progressHtml}>90%</div>
          <p>CSS (flex, grid)</p>
          <div className={style.progressCss}>70%</div>
          <p>Javascript</p>
          <div className={style.progressJs}>45%</div>
          <p>React</p>
          <div className={style.progressReact}>40%</div>
          <p>Git</p>
          <div className={style.progressReact}>60%</div>
          <p>English</p>
          <div className={style.progressEnglish}>B1</div>
        </div>
        </div>
        <img src={photo} alt='my photo' />
      </div>
      <br/>
      <div className={style.flexArea}>
      <div className={style.education, style.skip}>
        <h3>Education</h3>
        <p><b>Donetsk Technical School of Industrial Automation</b> (2013-2017)</p>
        <p><b>Donetsk National Tachnical University</b> (2017-2020)</p>
      </div>
      <div className={style.workExp, style.skip}>
      <h3>Work Experience</h3>
      <p><b>IT school 'Hello world'</b>(may 2020 - present)</p>
      <p><b>Guitarist in project 'Not drum school'</b> (april 2019 - may 2020)</p>
      <p><b>English teacher for children</b> (november 2018 - august 2019)</p>
      <p><b>Junior network enginner in telecommunications company</b> (december 2017 - april 2018)</p>
      </div>
      </div>
      </div>
      <a className={style.dload} href={cv} download>Download CV.pdf</a>

    </div>
  )
}

export default Cv

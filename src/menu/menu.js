import React from 'react'
import style from './menu.module.css'
import { Link, animateScroll as scroll } from "react-scroll"
import ModalCon from '../contacts/modal'




class Menu extends React.Component {
  scrollToTop = (props) => {
      scroll.scrollToTop();
    };

  render() {
    return (
      <nav>
      <ul>
        <li className={style.item} onClick={this.scrollToTop}>About me</li>
        <li className={style.item}><Link to="projects" smooth={true} offset={-100}
                duration={500} activeClassName={style.active}>Projects</Link></li>
        <li className={style.item}><Link to="cv" smooth={true}  offset={-100}
                duration={500} activeClassName={style.active}>CV</Link></li>
        <li className={style.item}><ModalCon /></li>
      </ul>
      </nav>

    )
  }

}

export default Menu



//activeClass — класс, который применяется при достижении элемента

//to-target — цель прокрутки

//spy — делает Link выбранной, когда прокрутка находится в целевой позиции

//smooth — анимирует прокрутку

//offset — дополнительные пиксели прокрутки (например, отступы)

//duration — время анимации прокрутки, может быть числом или функцией

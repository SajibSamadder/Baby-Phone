import React from 'react'
import betary from '../../img/header/betary.png'
import cartonFace from '../../img/header/cartonFace.png'
import color from '../../img/header/color.png'
import game from '../../img/header/game.png'
import network from '../../img/header/network.png'
import setting from '../../img/header/setting.png'
import './Header.css'
function Header() {
    return (
        <header>
            <nav>
                <div className="nav-icon">
                    <a href="#"><img src={setting} alt="" /></a>
                </div>
                <div className="nav-icon">
                    <a href="#"><img src={color} alt="" /></a>
                </div>
                <div className="nav-icon">
                    <a href="#"><img src={cartonFace} alt="" /></a>
                </div>
                <div className="nav-icon">
                    <a href="#"><img src={cartonFace} alt="" /></a>
                </div>
                <div className="nav-icon">
                    <a href="#"><img src={game} alt="" /></a>
                </div>
                <div className="nav-icon">
                    <a href="#"><img src={network} alt="" /></a>
                </div>
                <div className="nav-icon">
                    <a href="#"><img src={betary} alt="" /></a>
                </div>
            </nav>
            <div className="border-bottom"></div>
        </header>
    )
}

export default Header
import React from 'react'
import './NumberPad.css'
import onePng from '../../img/numberPad/1.png'
import towPng from '../../img/numberPad/2.png'
import therePng from '../../img/numberPad/3.png'
import fourPng from '../../img/numberPad/4.png'
import fivePng from '../../img/numberPad/5.png'
import sixPng from '../../img/numberPad/6.png'
import sevenPng from '../../img/numberPad/7.png'
import eightPng from '../../img/numberPad/8.png'
import ninePng from '../../img/numberPad/9.png'
import connectPng from '../../img/numberPad/connect.png'
import callPng from '../../img/numberPad/call.png'
import email from '../../img/numberPad/email.png'

import Number from './number/Number'
import one from '../../audio/1.mp3'
import tow from '../../audio/2.mp3'
import there from '../../audio/3.mp3'
import four from '../../audio/4.mp3'
import five from '../../audio/5.mp3'
import six from '../../audio/6.mp3'
import seven from '../../audio/7.mp3'
import eight from '../../audio/8.mp3'
import nine from '../../audio/9.mp3'

function NumberPad({ passNumber }) {
    const numbers = [
        {
            img: onePng,
            id: 1,
            sound: one
        },
        {
            img: towPng,
            id: 2,
            sound: tow
        },
        {
            img: therePng,
            id: 3,
            sound: there
        },
        {
            img: fourPng,
            id: 4,
            sound: four
        },
        {
            img: fivePng,
            id: 5,
            sound: five
        },
        {
            img: sixPng,
            id: 6,
            sound: six

        },
        {
            img: sevenPng,
            id: 7,
            sound: seven
        },
        {
            img: eightPng,
            id: 8,
            sound: eight
        },
        {
            img: ninePng,
            id: 9,
            sound: nine
        },
        {
            img: connectPng,
            id: 'connect',
            sound: nine
        },
        {

            img: callPng,
            id: 'call',
            sound: nine
        },
        {

            img: email,
            id: 'email',
            sound: nine
        }

    ]

    return (
        <div className='number-wrapper'>
            <div className="number-pad">
                {
                    numbers.map(number => {
                        return (
                            <Number key={number.id} number={number} passNumber={passNumber}></Number>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NumberPad
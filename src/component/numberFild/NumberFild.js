import React from 'react'
import { clickedNumber } from '../../utilize/utilize'

import './numberFild.css'


function NumberFild({ number }) {
    const clicked = number.slice(number.length - 1, number.length)

    let clickedAudio = document.querySelectorAll('.audioWrapper audio')[clicked - 1]
    switch (clicked[0]) {
        case 1:
            clickedAudio.play()
            break;
        case 2:
            clickedAudio.play()
            break;
        case 3:
            clickedAudio.play()
            break;
        case 4:
            clickedAudio.play()
            break;
        case 5:
            clickedAudio.play()
            break;
        case 6:
            clickedAudio.play()
            break;
        case 7:
            clickedAudio.play()
            break;
        case 8:
            clickedAudio.play()
            break;
        case 9:
            clickedAudio.play()
            break;
        case 10:
            clickedAudio.play()
            break;
        case 11:
            clickedAudio.play()
            break;
        case 12:
            clickedAudio.play()
            break;

        default:
            break;
    }
    let updateNumber;
    if (number.length > 5) {
        updateNumber = number.slice(number.length - 5, number.length)
    } else {
        updateNumber = number
    }
    return (
        <div className='number-fild-wrapper'>
            <div className="number-fild">
                <h1>{updateNumber}</h1>
            </div>
            <div className="border-bottom"></div>
        </div>
    )
}

export default NumberFild
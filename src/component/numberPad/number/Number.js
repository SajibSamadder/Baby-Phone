import React from 'react'

function Number({ number, passNumber }) {
    const { img, sound } = number

    return (
        <div className='number'>
            <a href="#">
                <img onClick={() => passNumber(number)} src={img} alt="" />
            </a>
            <div className='audioWrapper'>
                {/* <audio src={sound}></audio> */}
                <audio src={sound} controls></audio>
            </div>
        </div>
    )
}

export default Number
import React from 'react'
import './Trate.scss'
import trade from '../../img/IMAGE.png'
import trade1 from '../../img/Frame1.png'

function Trate() {
    return (
        <div className='trade'>
            Trade
            <div className="trade__main">
                <div className="left">
                    <h2>Buy, sell and trade crypto with confidence</h2>
                    <ul>
                        <li>
                            <img src={trade1} alt="" />
                            <b>Simple buy & sell options</b>
                            <p>Buy and sell cryptocurrency quickly and easily.</p>
                        </li>
                        <li>
                            <img src={trade1} alt="" />
                            <b>Simple buy & sell options</b>
                            <p>Buy and sell cryptocurrency quickly and easily.</p>
                        </li>
                        <li>
                            <img src={trade1} alt="" />
                            <b>Simple buy & sell options</b>
                            <p>Buy and sell cryptocurrency quickly and easily.</p>
                        </li>
                        <li>
                            <img src={trade1} alt="" />
                            <b>Simple buy & sell options</b>
                            <p>Buy and sell cryptocurrency quickly and easily.</p>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <img src={trade} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Trate
import React from 'react'
import './Trate.scss'
import trade from '../../img/IMAGE.png'
import trade1 from '../../img/Frame1.png'
import trade2 from '../../img/IMAGE .png'

function Trate() {
    return (
        <div className='trade'>
            <div className="TRADE">
            TRADE
            </div>
            <div className="trade__main">
                <div className="left">
                    <h2>Buy, sell and trade crypto with confidence</h2>
                    <ul>
                        <li>
                            <img src={trade1} alt=""/>
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
            <div className="wallet">
            WALLET
            </div>
            <ul className='trade__button'>
                <li className='left'><img src={trade2} alt="" /></li>
                <li className='right'>
                    <h2>Simple and secure wallet services</h2>
                    <ul>
                        <li>
                            <img src={trade1} alt="" />
                            <b>Simple buy & sell options</b>
                            <p>We use multi-signature technology to securely store your assets.</p>
                        </li>
                        <li>
                            <img src={trade1} alt="" />
                            <b>Simple buy & sell options</b>
                            <p>We use multi-signature technology to securely store your assets.</p>
                        </li>
                        <li>
                            <img src={trade1} alt="" />
                            <b>Simple buy & sell options</b>
                            <p>We use multi-signature technology to securely store your assets.</p>
                        </li>
                        <li>
                            <img src={trade1} alt="" />
                            <b>Simple buy & sell options</b>
                            <p>We use multi-signature technology to securely store your assets.</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Trate
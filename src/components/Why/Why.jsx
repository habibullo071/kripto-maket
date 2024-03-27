import React from 'react'
import './Why.scss'
import why from '../../img/Frame.png'

function Why() {
    return (
        <div className='Why'> 
            <h2>Why BTC Markets?</h2>
            <ul>
                <li>
                    <img src={why} alt="" />
                    <b>Security</b>
                    <p>Multiple layers of account security, 2FA, address whitelisting, Biometrics.</p>
                </li>
                <li>
                    <img src={why} alt="" />
                    <b>Security</b>
                    <p>Multiple layers of account security, 2FA, address whitelisting, Biometrics.</p>
                </li>
                <li>
                    <img src={why} alt="" />
                    <b>Security</b>
                    <p>Multiple layers of account security, 2FA, address whitelisting, Biometrics.</p>
                </li>
            </ul>
        </div>
    )
}

export default Why
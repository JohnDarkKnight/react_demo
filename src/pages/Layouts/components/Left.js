import React from 'react'
import logo from '../assets/logo.png'
import SideMenu from '../../../components/SideMenu'

const Left = () => {
    return (
        <div className='left'>
            <div className='logo'>
                <img src={logo} alt='react-mobX'/>
            </div>
            <SideMenu/>
        </div>
    )
};

export default Left
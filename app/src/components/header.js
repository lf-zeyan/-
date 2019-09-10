import React, { Component } from 'react';
import { Route,NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className='nav'>
            <div className='touxiang'></div>
            <p>130****1234</p>
                <Route>
                 <nav>
                    <NavLink to='/home'>骑行权益</NavLink>
                    <NavLink to='/history'>行程记录</NavLink>
                 </nav> 
                </Route>
            </div>
        );
    }
}

export default Header;

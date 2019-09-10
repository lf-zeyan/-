import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super()
        this.state = {
           home:[
               {name:'免密支付'},
               {name:'红包'},
               {name:'模范分'},
               {name:'消费明细'},
           ]
        }
    }
    render() {
        return (
            <div className='qi'>
                {
                    this.state.home.map((item,index)=>{
                        return <p key={index}>{item.name}</p>
                    })
                }
            </div>
        );
    }
}

export default Home;

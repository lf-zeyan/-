import React, { Component } from 'react';

class History extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                { title: '单车1', km: 36, kg: 37.2, 'xiaohao': 155555 },
                { title: '单车2', km: 66, kg: 33.2, 'xiaohao': 155 },
                { title: '单车3', km: 38666, kg: 31.2, 'xiaohao': 100555 },
                { title: '单车4', km: 366, kg: 366.2, 'xiaohao': 1550 },
                { title: '单车5', km: 3066, kg: 355.2, 'xiaohao': 1000 },
                { title: '单车6', km: 36660, kg: 399.2, 'xiaohao': 15500 },
                { title: '单车7', km: 366644, kg: 34.2, 'xiaohao': 5 },
                { title: '单车8', km: 366633, kg: 366.2, 'xiaohao': 1255 }
            ]
        }
    }
    isxiangqing = (item) => {
        this.props.history.push('/xiangqing', item)
    }
    render() {
        return (
            <div className='his'>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <ul key={index} className='ul' onClick={() => { this.isxiangqing(item) }}>
                                <p>{item.title}</p>
                                <p>2019-08-09</p>
                            </ul>
                        )
                    })
                }
            </div>
        );
    }
}

export default History;

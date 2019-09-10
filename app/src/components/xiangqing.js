import React, { Component } from 'react';

class Xiangqing extends Component {
    render() {
        var data = this.props.history.location.state
        return (
            <div>
                {
                    <div className='xiang'>
                        <div className='head'>行程结束</div>
                        <div className='img'>
                            <img src="捕获.PNG" alt="" />
                        </div>
                        <div>
                            <p>{data.title}</p>
                            <p>里程：{data.km}</p>
                            <p>减肥：{data.kg}</p>
                            <p>消耗：{data.xiaohao}</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Xiangqing;


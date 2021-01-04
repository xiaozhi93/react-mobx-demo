import React, { Component } from "react";
import { inject,observer } from 'mobx-react'
import AppleItem from './AppleItem'

@inject('apple')
@observer
class AppleBasket extends Component {
  getAppleItem() {
    const { apples, eatApple } = this.props.apple
    let data = [];
    apples.forEach(apple => {
        if (!apple.isEaten) {
            data.push( <AppleItem apple={apple} eatApple={eatApple} key={apple.id}/> )
        }
    });

    if(!data.length) data.push(<div className="empty-tip" key="empty">苹果篮子空空如也</div>);

    return data;
  }
  render() {
    let { appleNow, appleEaten, isPicking, pickApple  } = this.props.apple;
    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
            <div className="section">
                <div className="head">当前</div>
                <div className="content">{appleNow.quantity }个苹果，{appleNow.weight}克
                </div>
            </div>
            <div className="section">
                <div className="head">已吃掉</div>
                <div className="content">{appleEaten.quantity}个苹果，{appleEaten.weight}克</div>
            </div>
        </div>

        <div className="appleList">
            { this.getAppleItem() }
        </div>

        <div className="btn-div">
            <button  className={isPicking ? 'disabled' : ''}  onClick={() => pickApple() } >{ isPicking ? '正在采摘...': '摘苹果'}</button>
        </div>
    </div>
    )
  }
}

export default AppleBasket
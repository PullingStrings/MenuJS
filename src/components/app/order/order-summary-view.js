import React, { Component } from "react"

export default class OrderSummaryView extends Component {

  render() {
    return (
      <div className="order-summary-view">

        <h2 className="title">{this.props.courseTitle}</h2>
        <div>
          {this.props.courseItems.map(item => (
            <h3 key={item.id}>  Meal: {item.title}
            { <br/> }
            Price: {item.price}
            </h3>
          ))}
        </div>
      </div>
    )
  }
}

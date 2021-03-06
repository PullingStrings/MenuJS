import React, { Component } from "react"
import OrderItem from "./order-item"
import Grid from "@material-ui/core/Grid"
import getItemIndex from "../../../utils/itemIndex"

export default class OrderView extends Component {
  handleClick = (id, itemTitle, itemPrice) => {
    this.props.itemHandler(id, itemTitle, itemPrice)
  }

  render() {
    return this.props.courseItems.map(res => (
      <Grid item xs={4} key={res.id}>
        <OrderItem
          id={res.id}
          itemTitle={res.title}
          itemPrice={res.price}
          itemHandler={this.handleClick}
          className="order-item"
          selected={
            getItemIndex(this.props.selectedItems[this.props.course], res.id, res.price) >= 0
          }
        />
      </Grid>
    ))
  }
}

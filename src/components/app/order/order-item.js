import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

export default class OrderItem extends Component {
  handleClick = () => {
    this.props.itemHandler(this.props.id, this.props.itemTitle, this.props.itemPrice)
  }

  render() {
    return (
      <Card
        className={`${this.props.className} ${
          this.props.selected ? "-selected" : ""
        }`}
      >
        <CardActionArea onClick={this.handleClick}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className="item-title"
            >
              {this.props.itemTitle}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="item-info"
            >
              Price:{this.props.itemPrice}

            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="item-desc"
            >
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

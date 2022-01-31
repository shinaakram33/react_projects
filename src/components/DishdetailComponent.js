import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';

class Dishdetail extends Component{

  constructor(props){
    super(props);
  }

  renderComments(comments){
    if(comments != null){
      const commentsJsx = comments.map((com) => {
          return (
            <li key={com.id}>
                  <p>{com.comment}</p>
                  <p>--{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</p>
            </li>
          );
      });
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul class="list-unstyled">
            {commentsJsx}
          </ul>
        </div>
      );
    }else{
      return (
        <div></div>
      );
    }
  }

  renderDish(dish){
    return (
      <div className="row">
        <div className="col-12 col-md-5">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        {this.renderComments(dish.comments)}
      </div>
    );
  }

  render(){
    if(this.props.dish != null){
      return (
          this.renderDish(this.props.dish)
        );
      }else{
        return (
          <div></div>
        );
      }
    }
}
export default Dishdetail;

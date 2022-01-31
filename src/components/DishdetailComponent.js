import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';

function RenderComments({comments}){
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

function RenderDish({dish}){
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
        <RenderComments comments={dish.comments} />
      </div>
    );
  }

const Dishdetail = (props)=>{
    if(props.dish != null){
      return (
          <RenderDish dish={props.dish} />
        );
      }else{
        return (
          <div></div>
        );
      }
    }

export default Dishdetail;

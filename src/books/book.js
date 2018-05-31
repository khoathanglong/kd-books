import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {fetchRemoveBook} from '../action/removeBook.js'

export default (props) => {
  const removeBook =(id)=>{
    props.dispatch(fetchRemoveBook(id))
  }
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.img} alt={props.name} />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.owner?`Owner: ${props.owner}`:''}</CardSubtitle><br/>
          {props.owner?
            <Button color="primary">Request</Button>:
            <Button color="danger" onClick={()=>removeBook(props.id)}>Remove</Button>
      
          }
        </CardBody>
      </Card>
    </div>
  )
}
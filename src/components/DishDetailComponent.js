import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link } from 'react-router-dom'

function RenderCommentItem (props){
    const commentItem  = props.commentItem;

    return (
        <div key={commentItem.id}>
            <p >{commentItem.comment}</p>
            <br></br>
            <p > -- {commentItem.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentItem.date)))}</p>
        </div>
    );
}

function RenderDish (props){
    
    let selectedDish = props.selectedDish;
    return(
        <Card className="col-12 col-md-5 ">
            <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
            <CardBody>
                <CardTitle >{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
            
            </CardBody>

        </Card>
    );
}

function RenderComments(props){
    
    let commentsList = props.comments;

    const comments=commentsList.map((commentItem)=> {
        return (
            <div>
                <RenderCommentItem commentItem = {commentItem} />
            </div>
        );
    });

    return(
        <div className=" col-12 col-md-5 ml-5">
            <h3> Comments </h3>
            {comments}
        </div>  
    );
}

function DishDetail(props) {
    console.log("DishDetail components render is invoked");
    if(props.dish){

        let selectedDish = props.dish;
        return(
            <div className="container">
                <div className="row">
                    
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>
                            {props.dish.name}
                        </h3>
                        <hr/>
                    </div>
                </div>
                
                <div className='row'>
                    <RenderDish selectedDish = {selectedDish}/>
                    <RenderComments comments = {props.comments} />
                </div>

            </div>
            )
         
    }
    return (
        <div></div>
    )
}

export default DishDetail;
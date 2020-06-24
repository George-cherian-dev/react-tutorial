import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';


class DishDetail extends Component{
    

    render(){ 
        if(this.props.selectedDish){

            let selectedDish = this.props.selectedDish;

            const comments=this.props.selectedDish.comments.map((commentItem)=> {
                return (
                    <div key={commentItem.id}>
                        <p >{commentItem.comment}</p>
                        <br></br>
                        <p > -- {commentItem.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentItem.date)))}</p>
                    </div>
                );
            });

            return(
                <div className='row'>

                    <Card className="col-12 col-md-5 ">
                        <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
                        <CardBody>
                            <CardTitle >{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        
                        </CardBody>

                    </Card>
                    <div className=" col-12 col-md-5 ml-5">
                        <h3> Comments </h3>
                        {comments}
                    </div>
                </div>
            )
         
        }
        return (
            <div></div>
        )
    }
}
export default DishDetail;
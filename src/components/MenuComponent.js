import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';

function RenderMenuItem({dish,onClick}){
    return(
        <Card onClick={()=> onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>

            <CardImgOverlay  className="ml-5">
                <CardTitle >{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );

}

const Menu = (props) =>{
    const menu= props.dishes.map((dish)=> {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
               <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    });

    return(
        <div className="row">
            {menu}
        </div>
    );
}

class MenuComponent extends Component{
    

    constructor(props){
        super(props);
        console.log("menu components constructor is invoked");
    }

    componentDidMount(){
        console.log("menu components componentDidMount is invoked");
    }

    render(){

        console.log("menu components render is invoked");
        const menu=this.props.dishes.map((dish)=> {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                   <RenderMenuItem />
                </div>
            );
        });

        return(
            <div className="row">
                {menu}
            </div>
        );
    }
}

export default Menu;
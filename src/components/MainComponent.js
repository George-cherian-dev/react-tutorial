
import DishDetail from './DishDetailComponent';
import React, { Component } from 'react';
import  Menu  from './MenuComponent';
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from '../shared/dishes';

class MainComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish:null
        }
    }

    onDishSelect(dishId){
        this.setState({
            selectedDish:this.state.dishes.filter((dish) => dishId === dish.id )[0]
        });
    }

    render(){
        
          return (
            <div>
              <Navbar dark color='primary'>
                <div className="container">
                    <NavbarBrand href="/">
                      Ristorante Con Fusion
                    </NavbarBrand>
                </div>
              </Navbar>

              
                <div className="container">
                    
                    <Menu dishes={this.state.dishes}  onClick={(dishId)=> this.onDishSelect(dishId)}/>
                    <DishDetail selectedDish={this.state.selectedDish}/>
                    
                </div>
            </div>
          );
    };
}

export default MainComponent;

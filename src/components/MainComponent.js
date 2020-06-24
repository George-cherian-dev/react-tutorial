
import DishDetail from './DishDetailComponent';
import React, { Component } from 'react';
import  Menu  from './MenuComponent';
import  Home  from './HomeComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch,Route,Redirect } from 'react-router-dom'

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
        const HomePage = () => {
            return(
                <Home/>
            );
        }
          return (
            <div>

                <Header />
                <Switch>
                    <Route path='/home' component = {HomePage} />
                    <Route exact path='/menu' component = {(dishes) =>   <Menu dishes={this.state.dishes}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
          );
    };
}

export default MainComponent;

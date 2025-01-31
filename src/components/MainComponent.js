
import DishDetail from './DishDetailComponent';
import React, { Component } from 'react';
import  Menu  from './MenuComponent';
import  Home  from './HomeComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch,Route,Redirect } from 'react-router-dom'
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class MainComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish:null,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders: LEADERS
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
                <Home  
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
            );
        }
        const DishWithId = ({match}) => {
            return(
                <DishDetail 
                dish={this.state.dishes
                    .filter(
                    (dish) => dish.id===parseInt(match.params.dishId,10)
                    )[0]
                }
                
                comments = {this.state.comments
                    .filter(
                    (comment) => comment.dishId===parseInt(match.params.dishId,10)
                    )
                }
                />
            );
        }
          return (
            <div>

                <Header />
                <Switch>
                    <Route path='/home' component = {HomePage} />
                    <Route exact path='/contactus' component = {Contact} />
                    <Route exact path='/menu' component = {(dishes) =>   <Menu dishes={this.state.dishes}/>} />
                    <Route path='/menu/:dishId' component = {DishWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
          );
    };
}

export default MainComponent;

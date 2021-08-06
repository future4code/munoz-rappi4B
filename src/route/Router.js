import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { Address, Cart, Home, Profile, RegisterAccount, Restaurant, Search} from "../Pages";

import Login from "../Pages/Login/Login"
import Home from "../Pages/Home/Home"
import Address from "../Pages/Address"
import Cart from "../Pages/Cart"
import Profile from "../Pages/Profile"
import RegisterAccount from "../Pages/RegisterAccount"
import Restaurant from "../Pages/Restaurant"
import Search from "../Pages/Search"

export const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/login"}>
           <Login/>
          </Route>
          <Route exact path={"/"}>
            <Home/>
          </Route>
          <Route exact path={"/sign-up"}>            
            <RegisterAccount/>
          </Route>
          <Route exact path={"/profile"}>            
            <Profile/>
          </Route>
          <Route exact path={"/addres"}>            
            <Address/>
          </Route>
          <Route exact path={"/cart"}>            
            <Cart/>
          </Route>
          <Route exact path={"/search/:input"}>            
            <Search/>
          </Route>
          <Route exact path={"/:restaurant"}>            
            <Restaurant/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
};
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Address, Cart, Home, Login, Profile, RegisterAccount, Restaurant, Search} from "../Pages";


export const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>
  
          <Route exact path={"/login"}>
            <Login/>
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
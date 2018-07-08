import React from 'react'
import { Route, Switch } from 'react-router-dom'
import List from './Products'
import New from './AddProducts'

const ProductIndex = () => (
    <Switch>
        <Route exact path='/product' component={List}/>
        <Route exact path='/product/new' component={New}/>
    </Switch>
);

export default ProductIndex
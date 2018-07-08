import React, {Component} from 'react'
import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Button from 'grommet/components/Button'
import CloseIcon from 'grommet/components/icons/base/Close'
import Dashboard from 'grommet/components/icons/base/Dashboard'
import Car from 'grommet/components/icons/base/Car'
import ProductIcon from 'grommet/components/icons/base/Configure'
import Split from 'grommet/components/Split'
import {Switch, Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {navActive} from "../actions"

import Product from './product'

class Navigation extends Component {

    render() {
        const {nav,navActive} = this.props;
        return (
            <Split priority={nav ? 'left' : 'right'} flex='right' separator={true}>
                {
                    nav &&
                    <Sidebar colorIndex='light-2'>
                        <Header pad='medium' justify='between'>
                            <Title>
                                Kidos Motors
                            </Title>
                            <Button onClick={() => navActive(false)} icon={<CloseIcon/>} />
                        </Header>
                        <Box flex='grow' justify='start'>
                            <Menu primary={true}>
                                <Anchor icon={<Dashboard/>} label='Dashboard' path='/dashboard'/>
                                <Anchor icon={<ProductIcon/>} label='Product' path='/product'/>
                                <Anchor icon={<Car/>} label='Car' path='/car'/>
                            </Menu>
                        </Box>
                    </Sidebar>
                }
                <Switch>
                    <Route path='/product' component={Product}/>
                </Switch>
            </Split>
        )
    }
}

function mapStateToProps({nav}) {
    return {nav};
}

export default withRouter(connect(mapStateToProps,{navActive})(Navigation));
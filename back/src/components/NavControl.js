import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from 'grommet/components/Button'
import MenuIcon from 'grommet/components/icons/base/Menu'
import {navActive} from "../actions";

class NavControl extends Component {

    render() {
        if (!this.props.nav) {
            return (
                <Button icon={<MenuIcon/>} onClick={() => this.props.navActive(true)}/>
            )
        }
        return null
    }
}

function mapStateToProps({nav}) {
    return {nav};
}

export default connect(mapStateToProps, {navActive})(NavControl);

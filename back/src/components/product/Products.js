import React, {Component} from 'react';
import Anchor from 'grommet/components/Anchor'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Search from 'grommet/components/Search'
import AddIcon from 'grommet/components/icons/base/Add'
import NavControl from '../NavControl'

class Products extends Component {
    state = {
        searchText: ''
    };

    handleSearch = (e) => {
        this.setState({
            searchText: e.target.value
        })
    };

    render() {
        return (
            <Article full={true}>
                <Header pad={{horizontal: 'medium'}} size='large' fixed={true}>
                    <NavControl/>
                    <Title>List of all products</Title>
                    <Search inline={true} fill={true} size='medium' placeHolder='Rechercher'
                            value={this.state.searchText}
                            onDOMChange={this.handleSearch}/>
                    <Anchor icon={<AddIcon/>} path='/product/new'/>
                </Header>
            </Article>);
    }
}

export default Products;
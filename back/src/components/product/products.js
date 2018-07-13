import React, {Component} from 'react';
import Anchor from 'grommet/components/Anchor'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Search from 'grommet/components/Search'
import AddIcon from 'grommet/components/icons/base/Add'
import Card from 'grommet/components/Card'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Layer from 'grommet/components/Layer'
import {connect} from 'react-redux'
import NavControl from '../NavControl'
import ProductDetail from './productDetail'
import {fetchProduct} from "../../actions";

class Products extends Component {
    state = {
        searchText: '',
        productAvailable: [],
        showProductDetail: false,
        productSelected: {}
    };

    handleSearch = (e) => {
        this.setState({
            searchText: e.target.value
        })
    };
    handleProductDetail = (product) => {
        this.setState({
            productSelected: product
        });
        this.toggleProductDetail();
    };
    toggleProductDetail = () => {
        this.setState({
            showProductDetail: !this.state.showProductDetail
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.products !== this.props.products) {
            this.setState({productAvailable: nextProps.products});
        }
    }

    componentDidMount() {
        this.props.fetchProduct();
    }

    renderProduct() {
        return this.state.productAvailable.map((Product) =>
            <Tile key={Product._id}>
                <Card thumbnail='/img/1.jpg'
                      label={Product.briefDescription}
                      heading={Product.title}
                      description={Product.price + ' $'}
                      link={<Anchor onClick={() => this.handleProductDetail(Product)} primary={true}
                                    label='Learn more'/>}
                      contentPad='medium'
                      separator='all'
                      margin='small'
                />
            </Tile>
        );
    }

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
                <Tiles fill={true}>
                    {this.renderProduct()}
                </Tiles>
                {
                    this.state.showProductDetail &&
                    <Layer align='right' closer={true} overlayClose={true} onClose={this.toggleProductDetail}>
                        <ProductDetail product={this.state.productSelected} history={this.props.history}
                                       toggleLayer={() => this.toggleProductDetail()}/>
                    </Layer>
                }
            </Article>);
    }
}

function mapStateToProps({products}) {
    return {products};
}

export default connect(mapStateToProps, {fetchProduct})(Products);

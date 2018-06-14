import React from 'react';

import {range} from 'lodash';
import ProductsList from './ProductsList';

class ProductsContainer extends React.Component{
    constructor(props){
      super(props);
      this.state={
        activePage:1,
        pageSize:6,
        displayType:'cards'
      }
    }
    setActivePage(activePage){
        this.setState({activePage:activePage});  
    }    
    setPageSize(size){
      this.setState({activePage:1,pageSize:size});
    }
    setDisplayType(displayType){
      this.setState({displayType});
    }
    render(){
        const table = range(1, Math.ceil(this.props.productsList.length / this.state.pageSize)+1 ,1);
        table.map((i)=>{ 
          return(<li key={i} className={this.state.activePage === i ? 'active' : ''} onClick={()=>this.setActivePage(i)}><a>{i}</a></li>);
        })
        return <div className="col-sm-8 col-md-9 col-lg-9">
            <div className="product product-grid">
              <div className="heading heading-2 m-b-lg-0">
                <h3 className="p-l-lg-20">{this.props.productsCategory}</h3>
              </div>
              <div className="product-filter p-t-xs-20 p-l-xs-20">
                <div className="m-b-xs-10 pull-left">
                  <a onClick={()=>this.setDisplayType('cards')} className={this.state.displayType === 'cards' ? 'active' :''}>
                    <i className="fa fa-th" />
                  </a>
                  <a onClick={()=>this.setDisplayType('list')} className={this.state.displayType === 'list'  ? 'active' : ''}>
                    <i className="fa fa-th-list" />
                  </a>
                </div>
                <div className="pull-right">
                 
                  <div className="pull-left">
                    <div className="select-wrapper">
                      <label>
                        <i className="fa fa-sort-alpha-asc" />Show :{" "}
                      </label>
                      <div className="dropdown pull-left">
                        <button className="dropdown-toggle form-item w-80" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          {this.state.pageSize}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                          <li>
                            <a onClick={() => this.setPageSize(4)}>4</a>
                          </li>
                          <li>
                            <a onClick={() => this.setPageSize(6)}>6</a>
                          </li>
                          <li>
                            <a
                              onClick={() =>
                                this.setPageSize(
                                  this.props.productsList.length
                                )}
                            >
                              All
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="row">
                <ProductsList displayType={this.state.displayType} productslist={this.props.productsList.slice((this.state.activePage - 1) * this.state.pageSize, (this.state.activePage - 1) * this.state.pageSize + this.state.pageSize)} />
              </div>
              <nav aria-label="Page navigation">
                <ul className="pagination ht-pagination">
                  <li>
                    <a aria-label="Previous" style={this.state.activePage === 1 ? {display:'none'} : {display:'block'}}>
                      <span aria-hidden="true" onClick={()=>{this.setActivePage(this.state.activePage-1)}} >
                        <i className="fa fa-chevron-left"  />
                      </span>
                    </a>
                  </li>
                  {table.map(i => {
                    return <li key={i} className={this.state.activePage === i ? "active" : ""}>
                        <a onClick={() => {this.setActivePage(i)}}>{i}</a>
                      </li>;
                  })}
                  <li>
                    <a aria-label="Next"  style={this.state.activePage === Math.ceil(this.props.productsList.length / this.state.pageSize) ? {display:'none'} : {display:'block'}}>
                      <span aria-hidden="true" onClick={()=>{this.setActivePage(this.state.activePage+1)}}>
                        <i className="fa fa-chevron-right"   />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>;
    }
};
export default ProductsContainer ;


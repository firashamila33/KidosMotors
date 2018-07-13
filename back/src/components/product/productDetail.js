import React, {Component} from 'react';
import Article from 'grommet/components/Article'
import Paragraph from 'grommet/components/Paragraph'
import Label from 'grommet/components/Label'
import Heading from 'grommet/components/Heading'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import DeleteIcon from 'grommet/components/icons/base/Trash'
import EditIcon from 'grommet/components/icons/base/Edit'
import {connect} from 'react-redux'
import {deleteProduct} from "../../actions"

class ProductDetail extends Component {
    handleDelete = async (e) => {
        e.preventDefault();
        await this.props.deleteProduct(this.props.product._id);
        this.props.toggleLayer();
    };

    handleEdit = () => {
       this.props.history.push('/product/new');
    };

    render() {
        const {product} = this.props;
        return (
            <Article style={{maxWidth: '900px'}} pad='small'>
                <Box direction='row'
                     justify='center'
                     align='center' colorIndex='light-2'>
                    <Box basis='1/2'
                         align='start'
                         pad='small'>
                        <Image src='/img/1.jpg'/>
                    </Box>
                    <Box basis='1/2'
                         align='start'
                         pad='small'>
                        <Heading tag='h2' margin='none'>{product.title}</Heading>
                        <Label margin='none'>{product.rating ? product.rating : ''}</Label>
                        <Paragraph size='medium' margin='none'>{product.price} $</Paragraph>
                        <Paragraph size='medium' margin='none'><strike>{product.oldPrice} $</strike></Paragraph>
                        <Paragraph size='large' margin='none'>{product.briefDescription}</Paragraph>
                        <hr/>
                        <Paragraph size='medium' margin='none'>Brand: {product.brand}</Paragraph>
                        <Paragraph size='medium' margin='none'>Code: {product.code}</Paragraph>
                        <Paragraph size='medium' margin='none'>Manufactor: {product.manufactor}</Paragraph>
                        <Paragraph size='medium' margin='none'>Color: {product.color}</Paragraph>
                        <Paragraph size='medium' margin='none'>Quantity: {product.quantity}</Paragraph>
                    </Box>
                </Box>
                <br/>
                <Box direction='column'
                     justify='center'
                     align='center' colorIndex='light-2'>
                    <Heading tag='h2' margin='none'>Description</Heading>
                    <br/>
                    <Paragraph size='medium' margin='none'>{product.description}</Paragraph>
                </Box>
                <br/>
                <Box direction='row'
                     justify='center'
                     align='center'>
                    <Box basis='1/2'
                         align='end'
                         pad='small'>
                        <Button icon={<DeleteIcon/>} label='Delete' critical={true} onClick={this.handleDelete}/>
                    </Box>
                    <Box basis='1/2'
                         align='start'
                         pad='small'>
                        <Button icon={<EditIcon/>} label='Edit' primary={true} onClick={this.handleEdit}/>
                    </Box>
                </Box>
            </Article>
        );
    }
}

export default connect(null, {deleteProduct})(ProductDetail);

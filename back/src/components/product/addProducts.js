import React, {Component} from 'react'
import Header from 'grommet/components/Header'
import Anchor from 'grommet/components/Anchor'
import Form from 'grommet/components/Form'
import Article from 'grommet/components/Article'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import NumberInput from 'grommet/components/NumberInput'
import Button from 'grommet/components/Button'
import FormFields from 'grommet/components/FormFields'
import Heading from 'grommet/components/Heading'
import Footer from 'grommet/components/Footer'
import CloseIcon from 'grommet/components/icons/base/Close'
import NavControl from '../NavControl'
import {connect} from 'react-redux'
import {submitProduct} from '../../actions'

class AddProduct extends Component {
    handleRequestClose = () => {
        this.props.history.goBack()
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const product = {
            title: this.state.title,
            price: this.state.price,
            oldPrice: this.state.oldPrice,
            briefDescription: this.state.briefDescription,
            brand: this.state.brand,
            code: this.state.code,
            manufactor: this.state.manufactor,
            color: this.state.color,
            availability: this.state.availability,
            description: this.state.description,
            photosPath: this.state.photosPath,
        };

        const category = {
            name: this.state.category
        };

        const values = {
            product,
            category
        };
        await this.props.submitProduct(values);
        this.props.history.push('/product');
    };

    handleInputChange = (field) => (e) => {
        this.setState({
            [field]: e.target.value
        });
    };

    handleSuggestions = (e) => {
        const {suggestions} = this.state;
        if (e.target.value === '') {
            this.setState({suggestionsShow: suggestions, category: e.target.value});
        }
        this.setState({
            suggestionsShow: suggestions.filter(suggestion => suggestion.includes(e.target.value)),
            category: e.target.value
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: 0,
            oldPrice: 0,
            briefDescription: '',
            brand: '',
            code: '',
            manufactor: '',
            color: '',
            availability: false,
            quantity: 1,
            description: '',
            photosPath: [],
            category: '',
            suggestions: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
            suggestionsShow: []
        }
    }

    render() {
        return (
            <Article align="center" pad={{horizontal: 'medium'}} primary={true}>
                <Form id="editMissionSuggestion" onSubmit={this.handleSubmit}>
                    <Header size='large' justify='between' pad='none'>
                        <NavControl/>
                        <Heading tag='h2' margin='none' strong={true}>Add product</Heading>
                        <Anchor onClick={this.handleRequestClose} icon={<CloseIcon/>}/>
                    </Header>
                    <FormFields>
                        <FormField label='Title'>
                            <TextInput value={this.props.title ? this.props.title : this.state.title} onDOMChange={this.handleInputChange('title')}/>
                        </FormField>
                        <FormField label='Price'>
                            <NumberInput value={this.state.price} min={0}
                                         onChange={this.handleInputChange('price')}/>
                        </FormField>
                        <FormField label='Old price'>
                            <NumberInput value={this.state.oldPrice} min={0}
                                         onChange={this.handleInputChange('oldPrice')}/>
                        </FormField>
                        <FormField label='Brief description'>
                            <TextInput value={this.state.briefDescription}
                                       onDOMChange={this.handleInputChange('briefDescription')}/>
                        </FormField>
                        <FormField label='Brand'>
                            <TextInput value={this.state.brand} onDOMChange={this.handleInputChange('brand')}/>
                        </FormField>
                        <FormField label='Code'>
                            <TextInput value={this.state.code}
                                       onDOMChange={this.handleInputChange('code')}/>
                        </FormField>
                        <FormField label='Manufactor'>
                            <TextInput value={this.state.manufactor}
                                       onDOMChange={this.handleInputChange('manufactor')}/>
                        </FormField>
                        <FormField label='Category'>
                            <TextInput onDOMChange={this.handleSuggestions} value={this.state.category}
                                       suggestions={this.state.suggestionsShow}/>
                        </FormField>
                    </FormFields>
                    <Footer pad={{vertical: 'medium'}} align='center' direction='row' justify='between'>
                        <Button type='submit' primary={true} label='Save'/>
                    </Footer>
                </Form>
            </Article>
        );
    }
}

export default connect(null, {submitProduct})(AddProduct);

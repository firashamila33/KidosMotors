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

class AddProduct extends Component {
    handleRequestClose = () => {
        this.props.history.goBack()
    };

    handleSubmit = async (e) => {
        console.log(this.state);
        this.props.history.push('/product');
    };

    handleInputChange = (field) => (e) => {
        this.setState({
            [field]: e.target.value
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
            manufactor: ''
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
                            <TextInput value={this.state.title} onDOMChange={this.handleInputChange('title')}/>
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
                    </FormFields>
                    <Footer pad={{vertical: 'medium'}} align='center' direction='row' justify='between'>
                        <Button type='submit' primary={true} label='Save'/>
                    </Footer>
                </Form>
            </Article>
        );
    }
}

export default AddProduct;
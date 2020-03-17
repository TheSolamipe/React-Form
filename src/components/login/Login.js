import React from 'react'
import { Form, Input, DatePicker,InputNumber, Button, message,} from 'antd';

//import { DB_config } from './../Firebase/Fire';
//import firebase from 'firebase/app';
//import 'firebase/database';


//const { Option } = Select;
//const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  constructor(props){
    super(props);
  //  this.app = !firebase.apps.length ? firebase.initializeApp(DB_config) : firebase.app();
  //  this.db = this.app.database().ref().child('users');
    this.state = {
        confirmDirty: false,
        autoCompleteResult: [],
        values: {}
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
  }


  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      const values = {
            ...fieldsValue,
          //  'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD')
          };
      if (!err) {
        message.loading('You are submitting a form....', 2.5)
        .then(() =>{
            message.success('Form submitted successfully...', 1.0);
            console.log('Received values of form:', values);
        })
      //  .catch(error => {
      //    this.setState({error});
      //  });
      }


    });
  };




  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
//    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const config = {
     rules: [{ type: 'object', required: true, message: 'Please select time!' }],
   };
  //<FirebaseContext.Consumer>
  //   {firebase => {
    return (
      <article className="mw6 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>

              <Form.Item {...formItemLayout} label="First Name">
                  {getFieldDecorator('Firstname', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your First name',
                      },
                    ],
                  })(<Input placeholder="Please input your Firstname" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Last Name">
                  {getFieldDecorator('Lastname', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Lastname',
                      },
                    ],
                  })(<Input placeholder="Please input your Lastname" />)}
                </Form.Item>
                <Form.Item label="Birthday">
                  {getFieldDecorator('Birthday', config)(<DatePicker />)}
                </Form.Item>
                <Form.Item label="Age">
                  {getFieldDecorator('Age', { initialValue: 1 })(<InputNumber min={1} max={100} />)}
                  <span className="ant-form-text"> Years</span>
                </Form.Item>
                <Form.Item {...formItemLayout} label="Hobby">
                  {getFieldDecorator('Hobby', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Hobby',
                      },
                    ],
                  })(<Input placeholder="Please input your Hobby" required />)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
          </Form>
      </article>
    );
    }}




const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
//const Login = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm; //Login

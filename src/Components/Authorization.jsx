import * as React from 'react';
import {Route} from 'react-router-dom';
import ReactSpinner from 'react-bootstrap-spinner'
import { withRouter } from "react-router";
   class Authorization extends React.Component {
    constructor(props) {
      super(props);
      this.state = { signedIn: false }
    }
    componentDidMount() {
      var email=localStorage.getItem('user_email_id')
      var password=localStorage.getItem('user_password')
      if(email && password){
        this.setState({ signedIn: true })
        this.props.history.push('/login');
      }
      else{
        this.props.history.push('/home');
      }
    }
    render() {
      const { component: Component, ...rest } = this.props;
      const { signedIn } = this.state;
      return (
        <React.Fragment>
          <div>{
            !signedIn ?
              <div>
               <ReactSpinner animation="border" />
              </div> :
              <Route
              {...rest}
              render={props => (<Component {...props} />)}
          />
          }
          </div>
        </React.Fragment>
      )
    }
  }
export default withRouter(Authorization)

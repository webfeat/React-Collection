import React, { Component } from 'react';
import './App.css';
import { NavBar, Card ,WhiteSpace} from 'antd-mobile';
import FormComponent from './components/FormComponents';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
          ]}>
          信息统计
        </NavBar>
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header title="信息表单"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg" />
          <Card.Body>
            <FormComponent />
          </Card.Body>
        </Card>
      </div>
    );
  }
}



export default App;

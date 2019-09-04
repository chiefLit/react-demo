import React, { Component } from 'react';
import { Input, List } from 'antd';

class TodeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render() {
    return (
      <div>
        <Input 
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }

  handleInputChange(e) {
    console.log(e)
  }
}

export default TodeList;

import React, { Component } from 'react';
import { Input, List, Button } from 'antd';
import store from '../redux/store'

class TodeList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState())
    this.state = store.getState()
  }
  render() {
    return (
      <div style={{ padding: 15 }}>
        <div style={{ display: 'flex' }}>
          <Input
            style={{ marginRight: 10 }}
            value={this.state.inputValue}
            placeholder='请输入'
            onChange={this.handleInputChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <Button onClick={this.addItem.bind(this)}>添加</Button>
        </div>
        <List
          style={{ marginTop: 10 }}
          bordered={null}
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item
              style={{ display: 'flex' }}
            >
              <div style={{ flex: 1 }}>{item}</div>
              <Button style={{ height: 21 }} type="link" onClick={this.deleteItem.bind(this, index)}>删除</Button>
            </List.Item>
          )}
        />
      </div>
    );
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.addItem()
    }
  }

  addItem() {
    if (this.state.inputValue && this.state.inputValue.length > 0) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }

  deleteItem(index) {
    this.state.list.splice(index, 1)
    this.setState({
      list: this.state.list,
    })
  }
}

export default TodeList;

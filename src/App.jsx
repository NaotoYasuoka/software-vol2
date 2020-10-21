import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Input } from 'react-onsenui';
import Item from './Item.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: "", // 入力テキスト
      items: [] // Itemの要素を記憶しておくための配列
    };
    this.addItem = this.addItem.bind(this);
  }

  getDate(){
    var now = new Date();
    var target = document.getElementById("DateTimeDisp");
    var Year = now.getFullYear();
    var Month = now.getMonth()+1;
    var Date = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();
    return  Year + "/" + Month + "/" + Date + "/" + Hour + ":" + Min + ":" + Sec;
  }

  addItem() {
    // {items:[{text:"テキスト", time:"DATE"}, {text:"テキスト2", time:"DATE2"}]}
    var newitems = this.state.items;
    var now = new Date();
	  var year = now.getFullYear();
	  var mon = now.getMonth()+1; //１を足すこと
	  var day = now.getDate();
	  var hour = now.getHours();
	  var min = now.getMinutes();
	  var sec = now.getSeconds();
	  var s = year+"/"+mon+"/"+day+" "+hour+":"+min+":"+sec; 

    var item = {text: this.state.inputText, time: s};
    newitems.push(item);
    this.setState({ inputText: "", items: newitems}); // this.stateを更新
  }

  render() {
    return (
      <Page>
        <Input value={this.state.inputText} //値が入っている→テキスト欄に表示される
          onChange={(event) => { this.setState({ inputText: event.target.value, items: this.state.items }) }}
          modifier="material" />

        <Button onClick={this.addItem}>追加</Button>

        {this.state.items.map(item => {
          return <Item text={item.text} time={item.time}></Item>
        })}
      </Page>
    );
  }
}
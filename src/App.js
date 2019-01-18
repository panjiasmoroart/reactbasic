import React, { Component } from 'react';
import Child from './Child'
import Props from './Props'
import './App.css';


class App extends Component {

  constructor() {
    // parent constructor
    super()
    // array kosong
    this.state = {texts: [], color: ''}

    // kita perlu mendefinisikan this di constructor agar tidak error
    this.changeColor = this.changeColor.bind(this)
  }


  // 
  componentDidMount() {
    // ubah array yang sebelumnya kosong menjadi isi dengan setState
    this.setState({texts: ['JavaScript ReactJS', 'JavaScript VueJS', 'JavaScript AngularJS'], color: 'orange'})
  }

  // event 
  changeColor() {
    // jika warnanya orange kita rubah menjadi merah 
    if (this.state.color === 'orange') {
      this.setState({color: 'red'})
    }
    else{
      this.setState({color: 'orange'})
    }
  }

  render() {
    

    let datatext = this.state.texts.map(function(text) {
      return(
        <Props key={text} text={text} />
      )
    })

    let style = {color: this.state.color}

    return (
      <div className="App" style={style} onClick={this.changeColor}>
        <div>
          Hallo Dunia JS 
        </div><br />        

        <div>
          ReactJS is cool
        </div>

        {/* dari child component*/}
        <br />
        <Child />
        <br />
        <Child />
        <br />
        <Child />

        {/* props text */}
        <br />
        <Props text="ReactJS" />
        <br />
        <Props text="VueJS" />
        <br />
        <Props text="AngularJS" />
        <br />

        {/* panggil state */}
        {datatext}

      </div>
    );
  }
}

export default App;

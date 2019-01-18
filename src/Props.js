import React from 'react'

class Props extends React.Component{

  render() {
    return(
      // props ini mirip properti di html di reactjs digunakan untuk 
      // melakukan pertukaran data antar component
      <div>{this.props.text}</div>
    );
  }

}

export default Props;


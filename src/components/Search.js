
import React from 'react';


class Search extends React.Component {
  constructor(props){
    console.log(props);
    super(props);
    this.state={test:"default"};
  }




  render() {
    return (
        <div>
        {this.props.title}
        <input type="text" name={this.props.name} value={this.props.value} />
      
        </div>
    );
  }
}


export default Search;

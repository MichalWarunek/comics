
import React from 'react';
import ComicsContainer from './ComicsContainer';
import Search from './Search';

class AppComponent extends React.Component {
  constructor(){
    super();
    
  }

//   componentDidMount() {
//     this.ajax()
// }



  render() {
    return (
      <div className="main">
       <ComicsContainer comics={[1,2,3,4,5]} />
       <Search title="FirstName" name="FirstName" value="Mickey" /><br />
       <Search title="LastName" name="LastName" value="Mouse" />
      </div>
    );
  }
}


export default AppComponent;

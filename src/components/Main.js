
import React from 'react';
import ComicsContainer from './ComicsContainer';
import Search from './Search';
import Menu from './Menu';
import Pages from './Pages'


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
      <Menu/>
      <div className="container">
      <Search />
      
       {/* <ComicsContainer comics={[1,2,3,4,5]} />
       <Search title="FirstName" name="FirstName" value="Mickey" /><br />
       <Search title="LastName" name="LastName" value="Mouse" />
        */}
        <ComicsContainer />
        <Pages />
        </div>
      </div>
    );
  }
}


export default AppComponent;

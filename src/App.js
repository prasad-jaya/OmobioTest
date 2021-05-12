import React from 'react';
import APIs from './APIs';


class App extends React.Component{
  state={term:'', term2:'' }

  onInputChange = (event) =>{

    if(event.target.name ==='pass'){
      
      this.setState({term2:event.target.value});
      console.log(this.state.term2);

    }else{this.setState({term:event.target.value});}
    console.log(this.state.term);
  }

  onFormSubmit = async (event) =>{
    event.preventDefault();

    //console.log(this.state.term);
    const response = await APIs.post('/search',{
      params:{
        q:this.state.term,
        q2:this.state.term2
      }
    })
    
    //console.log(response.data.data[2].password);
    console.log(response.data);
    
  }

  
  render(){

    return(
      <div className="container">

          <form onSubmit={this.onFormSubmit}>
            <div  className="col-md-6" >
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input onChange={this.onInputChange} value={this.state.term} type="text" className="form-control" name="email" />
            </div>

            <div  className="col-md-6" >
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input onChange={this.onInputChange} value={this.state.term2} type="text" className="form-control" name="pass" />
            </div>

            <div><button type="submit" className="btn btn-primary">Submit</button></div>
          </form>
         
      </div>
    )
  }

}

export default App;
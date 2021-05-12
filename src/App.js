import React from 'react';
import APIs from './APIs/APIs';
import ListView from './component/listView'


class App extends React.Component{
  state={term:'', term2:'',  name:'', username:'', email:''}

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
    const response = await APIs.get('/search',{
      params:{
        q:this.state.term,
        q2:this.state.term2
      }
    });


    if(response.data.message === 'NoData'){
      alert("Invalid credentials.");
    }else{
    
    console.log(response.data);
    this.setState({name:response.data.data[0].name, username:response.data.data[0].username, email:response.data.data[0].email});
    console.log(this.state.email);
    }
    
  }

  
  render(){

    return(
      <div className="container">

          <form onSubmit={this.onFormSubmit}>
            <div  className="col-md-6" >
              <label htmlFor="exampleInputEmail1">Email address</label>
              {/* <input onChange={this.onInputChange} value={this.state.term} type="text" className="form-control" name="email" /> */}
              <input onChange={(e) => this.setState({term: e.target.value})} value={this.state.term} type="text" className="form-control" name="email" />
            </div>

            <div  className="col-md-6" >
              <label htmlFor="exampleInputEmail1">Password</label>
              <input onChange={this.onInputChange} value={this.state.term2} type="text" className="form-control" name="pass" />
            </div>
          <br/>
            <div><button type="submit" className="btn btn-primary">Submit</button></div>
          </form>

          <ListView userName={this.state.name}
                    userEmail={this.state.email}
                    username={this.state.username}
                    />
         
      </div>
    )
  }

}

export default App;
import React from 'react';

class ListView extends React.Component{

    
    render(){

        return(
            <div className="container">
                <div  className="col-md-6" >
                    <label >Name : {this.props.userName} </label>
                </div>
                <div  className="col-md-6" >
                    <label >User Email : {this.props.userEmail} </label>
                </div>
                <div  className="col-md-6" >
                    <label >User Name: {this.props.username} </label>
                </div>
            
            <div></div>
            <div></div>
            </div>
        )
    }



};

export default ListView;
import React from 'react';

class ListView extends React.Component{

    
    render(){

        return(
            <div>
            <div>{this.props.userName}</div>
            <div>{this.props.userEmail}</div>
            <div>{this.props.username}</div>
            </div>
        )
    }



};

export default ListView;
import React from 'react';

class Video extends React.Component{

    render(){
        const videoSrc = `https://www.youtube.com/embed/${this.props.video}`;

        return(
            <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc}/>
            </div>
            
            
        </div>
        )
    }


}
export default Video;



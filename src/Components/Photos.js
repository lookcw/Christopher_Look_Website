import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';


class Photos extends Component {

    render() { 
       let photos = {};
        if(this.props.data){
        console.log(this.props.data)
        photos = this.props.data.photos.map(function(photo){ return {src:photo.src, width: photo.width, height: photo.height} });   
        }
        return (<section id="photos"><h1>A record of my adventures</h1> <Gallery photos={photos} /></section>);       
    }

}

export default Photos;

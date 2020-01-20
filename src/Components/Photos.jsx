import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

function photoMap(photo) {
    return {  src: photo.src, width: photo.width, height: photo.height }
}


class Photos extends Component {

    constructor(props) {
        super(props);
      }




    render() {
        let photos = [];
        if (this.props.data) {
            console.log(this.props.data)
            photos = 
            {
                    japan :this.props.data.japanPhotos.map(photoMap),
                    korea :this.props.data.koreaPhotos.map(photoMap),
                    chicago :this.props.data.chicagoPhotos.map(photoMap),
                    sanFrancisco :this.props.data.sanFranciscoPhotos.map(photoMap),
                    seattle :this.props.data.seattlePhotos.map(photoMap),
                    newYork :this.props.data.newYorkPhotos.map(photoMap),
            
                }
        }
        return (
            <section id="photos" >
                <h1> Checkout where I've been </h1>
                <h2> Japan </h2>
                <Gallery photos={photos.japan} />
                <h2> Korea </h2>
                <Gallery photos={photos.korea} />
                <h2> Chicago </h2>
                <Gallery photos={photos.chicago} />
                <h2> San Francisco </h2>
                <Gallery photos={photos.sanFrancisco} />
                <h2> Seattle </h2>
                <Gallery photos={photos.seattle} />
                <h2> New York </h2>
                <Gallery photos={photos.newYork} />
            </section>);
    }

}

export default Photos;
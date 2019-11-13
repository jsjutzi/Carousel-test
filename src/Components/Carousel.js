import React, {useState} from 'react';
import {fetchMasterPosts, fetchDetailPosts} from '../Services/reddit'

const Carousel = ({posts}) => {
    const [isOpen, updateIsOpen] = useState(false);
    const [currentImageIndex, updateCurrentImageIndex] = useState(0); 

    return (
        //TODO: Build Carousel and onClick event with modal
        <div className="carousel">

        </div>
    )



}

export default Carousel
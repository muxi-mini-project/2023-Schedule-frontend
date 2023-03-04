import React,{useState} from 'react'
import './Photowall.css'
import image1 from '../imgs/pt1.webp'
import image2 from '../imgs/pt2.jpg'
import image3 from '../imgs/pt3.webp'
import image4 from '../imgs/pt4.webp'


export default function Photowall() {

  const [photos,setPhotos] = useState([image1,image2,image3,image4])
  

    return (
      <div className='body2'>
        <div className='pb0' style={{backgroundImage: `url(${photos[0]})`}}></div>
        <div className="pb1" style={{backgroundImage: `url(${photos[1]})`}} ></div>
        <div className="pb2" style={{backgroundImage: `url(${photos[2]})`}}></div>
        <div className="pb3" style={{backgroundImage: `url(${photos[3]})`}}></div>
      </div>
    )
}

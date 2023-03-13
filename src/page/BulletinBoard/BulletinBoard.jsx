import React,{useState} from 'react'
import './BulletinBoard.css'
import image1 from '../../img/BulletinBoard/pt1.webp'
import image2 from '../../img/BulletinBoard/pt2.jpg'
import image3 from '../../img/BulletinBoard/pt3.webp'
import image4 from '../../img/BulletinBoard/pt4.webp'
import { postData, getJSON, putData } from "../../api/fetch";


export default function BulletinBoard() {

  const [firstPhoto,setFirstPhoto]=useState(image1)
  const [secondPhoto,setSecondPhoto]=useState(image2)
  const [thirdPhoto,setthirdPhoto]=useState(image3)
  const [fourthPhoto,setfourthPhoto]=useState(image4)
  
  const selectedFileHandler1 = (event) =>{

    const url = URL.createObjectURL(event.target.files[0])
    setFirstPhoto(url)
    console.log(url)
    postData('calendar/addphoto',event.target.files[0]).then(data => console.log(data))
.catch(error => console.error('Error',error))
  }

  const selectedFileHandler2 = (event) =>{
    const url = URL.createObjectURL(event.target.files[0])
    setSecondPhoto(url)
    console.log(url)
  }

  const selectedFileHandler3 = (event) =>{
    const url = URL.createObjectURL(event.target.files[0])
    setthirdPhoto(url)
    console.log(url)
  }
  
  const selectedFileHandler4 = (event) =>{
    const url = URL.createObjectURL(event.target.files[0])
    setfourthPhoto(url)
    console.log(url)
  }

  if(window.innerWidth > window.innerHeight){
    return(
        <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
    );
}
else{
    let bodyStyle = document.body.style;
    bodyStyle.zoom = '';}

    return (
      <div className='body2'>
        <label htmlFor="uploadPhoto1"><div className='pb0' style={{backgroundImage: `url(${firstPhoto})`}} ><input id='uploadPhoto1' type="file" accept='image/gif,image/jepg,image/jpg,image/png' multiple onChange={selectedFileHandler1}></input></div></label>
        <label htmlFor="uploadPhoto2"><div className="pb1" style={{backgroundImage: `url(${secondPhoto})`}} ><input id='uploadPhoto2' type="file" accept='image/gif,image/jepg,image/jpg,image/png' multiple onChange={selectedFileHandler2}></input></div></label>
        <label htmlFor="uploadPhoto3"><div className="pb2" style={{backgroundImage: `url(${thirdPhoto})`}}><input id='uploadPhoto3' type="file" accept='image/gif,image/jepg,image/jpg,image/png' multiple onChange={selectedFileHandler3}></input></div></label>
        <label htmlFor="uploadPhoto4"><div className="pb3" style={{backgroundImage: `url(${fourthPhoto})`}}><input id='uploadPhoto4' type="file" accept='image/gif,image/jepg,image/jpg,image/png' multiple onChange={selectedFileHandler4}></input></div></label>
      </div>
    )
}

import React,{useEffect, useState} from 'react'
import './BulletinBoard.css'
import {getPhoto, getJSON, postPhoto } from "../../api/fetch";
import { useSearchParams } from 'react-router-dom';


export default function BulletinBoard() {

  const[searchParams]= useSearchParams()
  const year = searchParams.get("year")
  const month = searchParams.get("month")
  const day = searchParams.get("day")
  const time ={
    year:year,
    month:month,
    day:day
  }

  const [firstPhoto,setFirstPhoto]=useState('')
  const [secondPhoto,setSecondPhoto]=useState('')
  const [thirdPhoto,setthirdPhoto]=useState('')
  const [fourthPhoto,setfourthPhoto]=useState('')

  useEffect( () =>{
    getPhoto('board/photo',time)
    .then(data => {
      if(data.photo.length>0)
      { const url = "'"+'http://'+ data.photo[0].PhotoUrl +"'"
       setFirstPhoto(url);}
      else setFirstPhoto('https://s2.loli.net/2023/03/16/VCI2uMpgTZhqSjk.webp')})
    .catch(error => console.error('Error',error))
    getPhoto('board/photo2',time)
    .then(data => {
      if(data.photo.length>0)
      { const url = "'"+'http://'+ data.photo[0].PhotoUrl +"'"
       setSecondPhoto(url);}
      else setSecondPhoto('https://s2.loli.net/2023/03/16/ki8FaeqPmH937tD.jpg')})
    .catch(error => console.error('Error',error))
    getPhoto('board/photo3',time)
    .then(data => {
      if(data.photo.length>0)
      { const url = "'"+'http://'+ data.photo[0].PhotoUrl +"'"
       setthirdPhoto(url);}
      else setthirdPhoto('https://s2.loli.net/2023/03/16/mHrVcCtyuEWhRAS.webp')})
    .catch(error => console.error('Error',error))
    getPhoto('board/photo4',time)
    .then(data => {
      if(data.photo.length>0)
      { const url = "'"+'http://'+ data.photo[0].PhotoUrl +"'"
       setfourthPhoto(url);}
      else setfourthPhoto('https://s2.loli.net/2023/03/16/FqoRJbdKEnADULf.webp')})
    .catch(error => console.error('Error',error))
    
  },[]);
  
  const selectedFileHandler1 = (event) =>{

    const url = URL.createObjectURL(event.target.files[0])
    setFirstPhoto(url)
    postPhoto('board/addPhoto',event.target.files[0],time)
    .catch(error => console.error('Error',error))
    
  }
  const selectedFileHandler2 = (event) =>{
    const url = URL.createObjectURL(event.target.files[0])
    setSecondPhoto(url)
    postPhoto('board/addPhoto2',event.target.files[0],time)
    .catch(error => console.error('Error',error))
  }

  const selectedFileHandler3 = (event) =>{
    const url = URL.createObjectURL(event.target.files[0])
    setthirdPhoto(url)
    postPhoto('board/addPhoto3',event.target.files[0],time)
    .catch(error => console.error('Error',error))
  }
  
  const selectedFileHandler4 = (event) =>{
    const url = URL.createObjectURL(event.target.files[0])
    setfourthPhoto(url)
    postPhoto('board/addPhoto4',event.target.files[0],time)
    .catch(error => console.error('Error',error))
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
        <label htmlFor="uploadPhoto1"><div className="pb0" style={{backgroundImage: `url(${firstPhoto})`}}><input id='uploadPhoto1' type="file" accept='image/gif,image/jepg,image/jpg,image/png' multiple onChange={selectedFileHandler1}></input></div></label>
        <label htmlFor="uploadPhoto2"><div className="pb1" style={{backgroundImage: `url(${secondPhoto})`}} ><input id='uploadPhoto2' type="file" accept='image/gif,image/jepg,image/jpg,image/png' multiple onChange={selectedFileHandler2}></input></div></label>
        <label htmlFor="uploadPhoto3"><div className="pb2" style={{backgroundImage: `url(${thirdPhoto})`}}><input id='uploadPhoto3' type="file" accept='image/gif,image/jepg,image/jpg,image/png' multiple onChange={selectedFileHandler3}></input></div></label>
        <label htmlFor="uploadPhoto4"><div className="pb3" style={{backgroundImage: `url(${fourthPhoto})`}}><input id='uploadPhoto4' type="file" accept='image/gif,image/jepg,image/jpg,image/png' multiple onChange={selectedFileHandler4}></input></div></label>
      </div>
    )
}

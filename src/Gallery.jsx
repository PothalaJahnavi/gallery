import React from 'react'
import styled from 'styled-components';
export default function Gallery({data}) {
  return (
    <Section>
    <div className="row for-images">
    {data.map((image) =><div key={image.id}  className="mb-4 ind-img">
    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
     height="200" width="250" alt={image.title}/>
     <div className="description">
        <h4>{image.title}</h4>
        <a href={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} className="btn btn-success" download style={{marginBottom:"5%"}}>Download Image</a>
     </div>
    </div>)}
    </div>
    </Section>
  )
}
const Section=styled.section`
 
.for-images{
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
    grid-gap: 15px;
}
.ind-img{
    position: relative;
    width: 280px;
    height:210px;
    border-radius: 10%;
    background:radial-gradient(#111 50%,#000 100%);
    /* overflow: hidden; */

}
.description{
    position: absolute;
    left:0;
    bottom:0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 18px;
}
.description h4{
    opacity:0;
}
.description a{
    opacity:0;
}
.ind-img:hover .description h4{
    opacity: 1;
} 
.ind-img:hover .description a{
    opacity: 1;
} 
.ind-img img{
    width: 250px;
    height:200px;
    border-radius: 10%;
    transform: scale(1.1);
    transition: all 0.3s ease-out;
}
.ind-img:hover img{
    opacity: 0.3;
}
`
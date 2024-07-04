import React from 'react'

function Course({courseData}) {
    // console.log(courseData);
    const {id,title,description,price,link,image} = courseData;
  return (
    <div className='course'>
        <div>
            <div className='course'>
                <img src={image} width={250} height={150}/>
                <h4>{title}</h4>
                <h5>{description}</h5>
                <h3>{price}</h3>
                <a href={link}>{link}</a>
            </div>
        </div>
    </div>
  )
}

export default Course
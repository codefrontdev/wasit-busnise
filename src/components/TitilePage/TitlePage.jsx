import React from 'react';
import Title from '../Title/Title';
import './title-page.css'





const TitlePage = ({data}) => {
  return (
    <>
    <div className="about-title py-5">
      <div className="container">
        <Title
          h2={data?.h2}
          span={data?.span}
          prgh={data?.prgh}
          path={data?.path}
        />
        {/* TODO: Add content here */}
      </div>
    </div>
      
    </>
  )
}

export default TitlePage

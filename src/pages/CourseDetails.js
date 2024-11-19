import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import { CourseState } from "../courseState";


const CourseDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [courses,setCourses] = useState(CourseState);
    const [course, setCourse] = useState(null);
    //useEffect

    useEffect (() => {
        const currentCourse = courses.filter((stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse[0]);
    },[courses,url]);


    return (
        <>
        {course && (
  <Details>
  <Header>
  <h2>{course.title}</h2>
  <img src={course.mainImg}  alt="laptop"/>
  <h2>{course.price}</h2>
  </Header>
  <Awards>
    {course.awards.map((award)=>(
        <Award title={award.title} 
        description={award.description}  
        key={award.title} />
    ))}
  </Awards>
  <ImageDisplay>
<img src={course.secondaryImg} alt="developer" />

</ImageDisplay>
</Details>


        )}
      
        </>
    );
};
const Details = styled.div`
color: #fff;

`;
const Header = styled.div`
min-height: 90vh;
padding-top: 20vh;
position: relative;
h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}

img{
    width: 100%;
    height: 70vh;
    object-fit: cover;

}
`;
const Awards = styled.div`
min-height: 80vh;
display: flex;
align-items: center;
justify-content: space-around;
margin: 5rem 10rem;


`;

const StyledAward = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        height: 0.5rem;
        background: #30bee1;
        margin: 1rem 0rem;
    }
`;

const ImageDisplay = styled.div`
img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

`;




//Award Component

const Award = ({title,description}) => {
    return <div>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
    </div>
}


export default CourseDetail;

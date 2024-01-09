import React from 'react'
import Card from './Card';
import { useState } from 'react';
function Cards(props) {
    let courses= props.courses;
    let category = props.category;
  
    const [likedCourses,setLikedCourses]=useState([]);

    //getcourses returns a list of all the courses recieved from the api response
    const getCourses = ()=>{
        // console.log("Printing courses");
        // console.log(courses);  
        if(category==="All")
        {  let allCourses=[];
            Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course)
            })
         })
         return allCourses;}
         else{
            //sirf specific category ka array pass krenge
            //return (courses[`${category.toLowerCase()}s`] || [] );
            return courses[category];
         }
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'> 
        {
        !courses ? ( 
            <div>
                <p>No data found</p>
            </div>
        ): (
            getCourses().map((course)=> {
                return ( <Card key={course.id} course={course}
                
                likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>)
               })
        )
        }
    
    </div>
  )
}
export default Cards; 

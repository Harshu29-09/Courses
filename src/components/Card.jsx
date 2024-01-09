import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';
export default function Card(props) {

  let likedCourses =props.likedCourses;
  let setLikedCourses=props.setLikedCourses;

  let course=props.course;
  function clickHandler(){
    //logic
    if(likedCourses.includes(course.id))
    {
      //pehle se like ha h
      setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id)));
      toast.warning('Like removed');
    }
    else{
      //pehle se liked nai h
      //insert karna h yeh course lked me 

      if(likedCourses.length ===0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev)=>[...prev,course.id]);
      }
      toast.success('Liked Successfully');
    }

  }
  return (
    <div className='w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden '>
      <div className='relative '>
        <img src={course.image.url} alt="" />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
            <button onClick={clickHandler}>
              {likedCourses.includes(course.id)?<FcLike fontSize="1.65rem"/>:<FcLikePlaceholder fontSize="1.65rem"/>
             }
             
            </button>
      </div>
      </div>
       

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{course.description}
        {
          course.description.length > 100 ? 
          (course.description.substr(0,60))+'...' : (course.description)
        }
        </p>
      </div>
    </div>
  )
}

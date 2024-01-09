import {filterData , apiurl} from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {
  
  const [courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title)

  const fetchData = async ()=>{

    setLoading(true);
    try{
          const res = await fetch(apiurl);
          const output = await res.json();
          //save data into a variable
          setCourses(output.data);
          console.log("courses updated");
          console.log(courses);

    }
    catch(error){
         toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(()=>{
   
    fetchData();
  },[])
  //const [data,]
  return (
    <div className="flex min-h-screen flex-col bg-blue-900" >
      <div>
      <Navbar />
      </div>
      
      <div className='bg-blue-900'>
      <div>
      <Filter 
      filterData = {filterData} category={category} setCategory={setCategory}/>
      </div>

      <div className='w-11/12 max-w=[1200px] max-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
     {
      loading ? (<Spinner/>) : ( <Cards courses={courses}
      category={category}/>)
     }
      </div>  
      </div>

      
    </div>
  ); 
}

export default App;

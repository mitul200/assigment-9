import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { addToDb } from "./utils/fakeDB";

const JobsCards = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);


const handelCkick =(id)=>{
  // console.log(id);
  addToDb(id)
  

}




  return (
    <div>
        <div className=" space-y-3">
        <h1 className=" text-4xl font-semibold text-center">Featured Jobs</h1>
        <p className=" text-center text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 p-10 mx-20 justify-items-center">
        {items.map((item) => (
          <JobCard handelCkick={handelCkick} item={item} key={item.id}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default JobsCards;

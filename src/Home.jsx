import { Link, NavLink } from "react-router-dom";
import JobList from "./JobList";
import JobsCards from "./JobsCards";
import userPhoto from "./assets/images/user.png";
import { useEffect, useState } from "react";
import {XMarkIcon,Bars3Icon } from '@heroicons/react/24/solid'

// eslint-disable-next-line react/prop-types
const Home = () => {
  const [open , setOpen] = useState(false)
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, []);
  return (
    <div className="">
      
      <div className="flex justify-around mt-10 items-center">
        <Link to="/">
          {" "}
          <h1 className=" text-2xl font-bold">Office Hub</h1>
        </Link>
        <div className="md:flex md:space-x-2 justify-center items-center">
          <div onClick={()=>setOpen(!open)} className="md:hidden">
          <span>
            {
              open === true?<XMarkIcon className="h-8 w-8 text-blue-500" />:<Bars3Icon className="h-8 w-8 text-blue-500" />  
            } 
          </span>
         </div>
         {/* mobile device */}
              <nav className={` md:space-x-2 justify-center items-center absolute md:hidden ${open ?' top-20':'-top-48'}`}>
                <NavLink to="/statictics" title="Statistics" className={({isActive}) =>(isActive?'active':'default')}>
                  <h3>Statistics</h3>
                </NavLink>
                <NavLink title="Applied Jobs" to='/appliedJobs' className={({isActive}) =>(isActive?'active':'default')}>
                    <h3>Applied Jobs</h3>
                </NavLink>
                <NavLink title="Blog" to="/blog" className={({isActive}) =>(isActive?'active':'default')}>
                  <h3>Blog</h3>
                </NavLink>
              </nav>
              {/* big device */}
              <nav className="min-[320px]:hidden max-[600px]:hidden md:flex md:space-x-4 justify-center items-center">
              <NavLink to="/statictics" title="Statistics" className={({isActive}) =>(isActive?'active':'default')}>
                  <h3>Statistics</h3>
                </NavLink>
                <NavLink title="Applied Jobs" to='/appliedJobs' className={({isActive}) =>(isActive?'active':'default')}>
                    <h3>Applied Jobs</h3>
                </NavLink>
                <NavLink title="Blog" to="/blog" className={({isActive}) =>(isActive?'active':'default')}>
                  <h3>Blog</h3>
                </NavLink>
              </nav>
              </div>
        <button className="my-btn bg-[#8B82FF]">Star Applying</button>
      </div>

      {/* banner */}
      <div className=" flex flex-col-reverse md:flex-row items-center m-10 mr-4 gap-6 ml-16 pl-12">
        <div className=" w-[570px] space-y-5">
          <h1 className=" text-7xl font-bold">
            One Step
            <br /> Closer To Your <br />
            <span className="text-[#8B82FF]"> Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className=" my-btn bg-[#8B82FF]">Get Started</button>
        </div>
        <div>
          <img className=" w-[700px] h-[600px]" src={userPhoto} alt="" />
        </div>
      </div>
      {/* categoris items  */}
      <div className=" space-y-3 mb-10">
        <h1 className="text-center font-bold text-3xl">Job Category List</h1>
        <p className="text-center text-gray-400">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className=" grid grid-cols-1 lg:grid-cols-4 sm:mx-auto mx-16 gap-x-4 gap-y-4 p-5">
          {data.map((pd) => (
            <JobList pd={pd} key={pd.id}></JobList>
          ))}
        </div>
      </div>
      <JobsCards />
    </div>
  );
};

export default Home;

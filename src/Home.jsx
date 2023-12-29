import { Link } from "react-router-dom";
import JobList from "./JobList";
import JobsCards from "./JobsCards";
import userPhoto from "./assets/images/user.png";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Home = () => {
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
        <div className="flex space-x-6 items-center">
          <Link to="/statictics">
            <h3>Statistics</h3>
          </Link>
          <Link to="/appliedJobs">
            <h3>Applied Jobs</h3>
          </Link>
          <h3>Blog</h3>
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

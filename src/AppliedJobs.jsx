import { Link, useLoaderData } from "react-router-dom";
import img1 from "./assets/images/bg2.png";
import img2 from "./assets/images/bg2.png";
const AppliedJobs = () => {
  const { cartArray} = useLoaderData();
  console.log(cartArray);
  return (
    <div>
      <div className=" min-h-screen">
        {/* nav-br */}
        <div className=" relative mt-10 items-center pt-3 pb-28 bg-gray-100">
        <div className="flex justify-around ">
        <Link to='/'> <h1 className=" text-2xl font-bold">Office Hub</h1></Link>
          <div className="flex space-x-6 items-center">
            <Link to="/statictics">
              <h3>Statistics</h3>
            </Link>
            <h3>Applied Jobs</h3>
            <h3>Blog</h3>
          </div>
          <button className="my-btn bg-[#8B82FF]">Star Applying</button>
        </div>
        <h2 className=" text-center mt-24 text-2xl font-bold">
        Applied Jobs
        </h2>
        <img className=" absolute top-0 right-2" src={img1} alt="" />
        <img className=" absolute bottom-0 rotate-[180deg]" src={img2} alt="" />
      </div>
        {
            
        }
      </div>
    </div>
  );
};

export default AppliedJobs;

import { Link, NavLink } from "react-router-dom";
import img1 from "./assets/images/bg2.png";
import img2 from "./assets/images/bg2.png";
import {
  CurrencyDollarIcon,
  MapPinIcon,
  PresentationChartLineIcon,
  PhoneIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/solid";
const ViewDetails = () => {
  return (
    <div>
      <div className=" relative mt-10 items-center pt-3 pb-28 bg-gray-100">
        <div className="flex justify-around ">
        <Link to='/'> <h1 className=" text-2xl font-bold">Office Hub</h1></Link>
        <div className="flex space-x-6 items-center">
                <NavLink title="Home" to="/" className={({isActive}) =>(isActive?'active':'default')}>
                  <h3>Home</h3>
                </NavLink>
                <NavLink to="/statictics" title="Statistics" className={({isActive}) =>(isActive?'active':'default')}>
                  <h3>Statistics</h3>
                </NavLink>
                <NavLink title="Blog" to="/blog" className={({isActive}) =>(isActive?'active':'default')}>
                  <h3>Blog</h3>
                </NavLink>
              </div>
          <button className="my-btn bg-[#8B82FF]">Star Applying</button>
        </div>
        <h2 className=" text-center mt-24 text-2xl font-semibold">
          Job Details
        </h2>
        <img className=" absolute top-0 right-2" src={img1} alt="" />
        <img className=" absolute bottom-0 rotate-[180deg]" src={img2} alt="" />
      </div>
      {/* card & section  */}

      <div className="flex justify-center items-center gap-10 mt-20">
        <div className="w-[50%] space-y-4">
          <h1>
            <span className="font-semibold">Job Description:</span> A UI/UX
            (User Interface/User Experience) designer is responsible for
            designing and creating engaging and effective interfaces for
            software and web applications. This includes designing the layout,
            visual design, and interactivity of the user interface.
          </h1>
          <h1>
            <span className=" font-semibold">Job Responsibility:</span>{" "}
            Collaborating with cross-functional teams: UI/UX designers often
            work closely with other teams, including product management,
            engineering, and marketing, to ensure that the user interface is
            aligned with business and technical requirements. You will need to
            be able to effectively communicate your design ideas and gather
            feedback from other team members.
          </h1>
          <h2 className="font-bold">Educational Requirements:</h2>
          <p>Bachelor degree to complete any reputational university.</p>
          <p className="font-bold">Experiences:</p>
          <p>2-3 Years in this field.</p>
        </div>
        {/* card  */}
        <div className="card w-[424px] bg-purple-200 rounded-xl p-8 space-y-4 ">
          <div className="">
            <h1 className=" font-semibold text-xl">Job Details</h1>
            <hr className="w-[80%] h-1  my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>
          </div>
          <div className=" flex space-x-1">
            <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
            <h1 className="">Salary : 100K - 150K (Per Month)</h1>
          </div>
          <div className=" flex space-x-1">
            <PresentationChartLineIcon className="h-6 w-6 text-gray-500" />
            <h1 className="">Job Title : Product Designer</h1>
          </div>
          <div className="">
            <h1 className=" font-semibold text-xl">Contact Information</h1>
            <hr className="w-[80%] h-1  my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>
          </div>
          <div className=" flex space-x-1">
            <PhoneIcon className="h-6 w-6 text-gray-500" />
            <h1 className="">Phone : 01750-00 00 00</h1>
          </div>
          <div className="  flex space-x-1">
            <MapPinIcon className="h-6 w-6 text-gray-500" />
            <h1 className="">Address : Dhanmondi 32, Sukrabad</h1>
          </div>
          <div className=" flex space-x-1">
            <EnvelopeOpenIcon className="h-6 w-6 text-gray-500" />
            <h1 className="">Email : info@gmail.com</h1>
          </div>
          <button
            className="w-full text-white rounded-xl bg-[#8B82FF]
             duration-200 font-semibold py-3 hover:bg-[#4e4a8a]"
          >   
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

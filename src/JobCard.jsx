import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const JobCard = ({ item, handelCkick }) => {
  // console.log(item);
  // eslint-disable-next-line react/prop-types
  const {
    logo,
    company_name,
    remote_or_onsite,
    salary,
    job_type,
    job_title,
    location,
    id,
  } = item;
  return (
    <div>
      <div className="p-4 card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className=" h-40 w-full rounded-2xl" src={logo} alt="Shoes" />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title font-semibold text-xl">{job_title}</h2>
          <p className=" text-gray-700">{company_name}</p>
          <div className="flex">
            {/* job site btn  */}
            <button className=" text-slate-700 border border-gray-700 rounded-md px-3 font-semibold duration-300 hover:bg-slate-300">
              {job_type}
            </button>
            <button className=" text-slate-700 border border-gray-700 rounded-md px-3 ms-2 font-semibold duration-300 hover:bg-slate-300">
              {remote_or_onsite}
            </button>
          </div>
          {/* location */}
          <div className="flex items-center space-x-3">
            <div className="flex">
              <MapPinIcon className="h-6 w-6 text-gray-500" />
              <p>{location}</p>
            </div>
            <div className="flex items-center ">
              <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
              <p>salary: {salary}</p>
            </div>
          </div>
          <div className=" flex justify-between">
            <button className="my-btn">
              <Link to="/viewdetails">
                <span>View Details</span>
              </Link>
            </button>
              <button onClick={() => handelCkick(id)} className="my-btn">
              <Link to="/appliedJobs">
                Applied Job
                </Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

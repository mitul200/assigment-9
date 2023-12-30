import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

// eslint-disable-next-line react/prop-types
const AppliedJobCart = ({ jobCart }) => {
  // eslint-disable-next-line react/prop-types
  const {
    logo,
    company_name,
    remote_or_onsite,
    salary,
    job_type,
    job_title,
    location,
  } = jobCart;
  return (
    <div>
        <hr className="w-[80%] h-1  my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700 mx-auto"></hr>
      <div className=" relative p-8 flex card card-side bg-base-100 shadow-xl mx-32 mt-20 space-y-3">
        <figure>
          <img className="h-40 w-60 rounded-2xl" src={logo} />
        </figure>
        <div className="card-body ms-10 space-y-3">
          <h2 className="card-title font-semibold text-xl">{job_title}</h2>
          <p className=" text-gray-500 font-semibold">{company_name}</p>
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
        </div>
      <div className=" absolute right-10 bottom-1/3">
      <button className="my-btn ">View Details</button>
      </div>
      </div>
    </div>
  );
};

export default AppliedJobCart;

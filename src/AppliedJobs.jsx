import { useLoaderData } from "react-router-dom";
const AppliedJobs = () => {
  const { cartArray, jobInfo } = useLoaderData();
  console.log(cartArray);
  return (
    <div>
      <div className=" min-h-screen">
        
        <h3 className="text-2xl font-semibold mt-20">this is applied jobs</h3>
      </div>
    </div>
  );
};

export default AppliedJobs;

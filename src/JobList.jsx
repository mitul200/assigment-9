

// eslint-disable-next-line react/prop-types
const JobList = ({ pd }) => {
  console.log(pd);
  // eslint-disable-next-line react/prop-types
  const {category_name,id,logo,availability} = pd 
  return (
    <div>
      <div className="card mx-auto rounded-xl p-5 w-64 border space-y-4 bg-gray-200  bg-base-100 ">
        <figure>
          <img className=' h-12'
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className=" font-semibold text-lg card-title">
            {category_name}
          </h2>
          <p className=' text-sm text-slate-600'>{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default JobList;

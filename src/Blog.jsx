import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1 className="mt-10 font-semibold text-center text-4xl">
        Ans to Qustion 📜{" "}
      </h1>
      <div className="flex justify-center mx-auto mt-5">
        <Link to="/" className="">
          <button className="my-btn">Back Home</button>
        </Link>
      </div>
      <div className=" min-h-screen  mx-40  mt-20 space-y-20">
        <div>
          <p className="text-xl font-semibold"> 1/what is contaxt api?</p>
          <h1>
            The Context API in React is a way to pass data through the component
            tree without having to pass props down manually at every level. It's
            used for sharing values like themes, user information, etc., across
            many components efficiently.
          </h1>
        </div>
        <div>
          <p className="text-xl font-semibold"> 2/what is castomHook?</p>
          <h1>
            A custom hook in React is a JavaScript function that starts with use
            and lets you use state and other React features in functional
            components. Its a way to reuse stateful logic across different
            components without repeating code.
          </h1>
        </div>
        <div>
          <p className="text-xl font-semibold">3/what is use ref?</p>
          <h1>
            useRef is a hook in React that returns a mutable ref object. This
            object can persist for the full lifetime of the component. It's
            commonly used for accessing a DOM element directly, but can also be
            used to store any mutable value that doesn't cause a re-render when
            changed.
          </h1>
        </div>
        <div>
          <p className="text-xl font-semibold">4/what is use memo?</p>
          <h1>
            useMemo is a React hook that memoizes a computed value. It
            recalculates the value only when one of its dependencies changes,
            improving performance by avoiding expensive calculations on every
            render.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;

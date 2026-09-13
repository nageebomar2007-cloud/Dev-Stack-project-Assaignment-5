const banner = () => {
  return (
    <div className="flex justify-between container  mx-auto my-20 px">
      <div>
        <p className="text-6xl font-bold">Build Your Ideal</p>
        <br />
        <p className="text-6xl font-bold bg-linear-to-r from-orange-500 to-purple-700 bg-clip-text text-transparent">
          Development Stack
        </p>
        <p className="my-8 px">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-5 px">
          <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-2xl p-3 cursor-pointer">
            Explore Technologies
          </button>
          <button className="rounded-2xl p-3 cursor-pointer border px px-10">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src="/public/banner-stack.png" alt="" />
      </div>
    </div>
  );
};

export default banner;

import Review from "./Review";

const Reviews = () => {
  return (
    <div>
      <div className="text-left">
        <h1 className="text-[28px] font-medium ">4 Reviews</h1>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <Review key={index} />
        ))}
      </div>

      <div className="mt-7">
        <button className="bg-white px-8 text-black font-medium border-black border-2 rounded-full text-[17px] font-medium]">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Reviews;

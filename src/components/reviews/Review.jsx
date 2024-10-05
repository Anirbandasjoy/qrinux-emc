/* eslint-disable @next/next/no-img-element */
import StarRatings from "react-star-ratings";
const Review = () => {
  return (
    <div className="text-left">
      {/* review */}
      <div className="">
        <div className="flex gap-7">
          <div className="sm:w-[72px] w-[52px] h-[52px] sm:h-[72px] ">
            <img
              src="https://i.ibb.co.com/NZHqNKd/Whats-App-Image-2024-09-02-at-7-01-29-PM.jpg"
              className="w-full h-full rounded-full "
              alt="profileImage"
            />
          </div>
          <div className="sm:max-w-3xl w-full ">
            <h1 className="text-[22px] font-medium">Anirban das joy</h1>
            <div className="mb-4">
              <StarRatings
                rating={5}
                starRatedColor="purple"
                numberOfStars={5}
                starDimension="24px"
                starSpacing="2px"
                name="rating"
              />
            </div>

            <p className="text-[16px] text-[#353945] leading-6 text-justify">
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mt-7  w-11/12 mx-auto h-[1px]"></div>
    </div>
  );
};

export default Review;

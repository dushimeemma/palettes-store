export default function HomePage() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-[url('/home-bg.png')] bg-cover sm:bg-contain bg-center bg-no-repeat">
      <div className="bg-info sm:w-[643px] sm:h-[443px] min-w-[300px] min-h-[200px] self-center sm:self-end mx-12 rounded-lg flex flex-col items-start justify-center p-12 gap-12">
        <span className="text-dark capitalize text-lg">New Arrival</span>
        <span className="text-primary text-4xl font-bold capitalize">
          Discover Our <br /> New Collection
        </span>
        <span className="text-dark capitalize text-sm">
          Explore our latest arrivals, designed with style and innovation in
          mind. Shop now and find the perfect addition to your wardrobe! ✨
        </span>
        <button className="bg-primary text-white px-6 py-4">BUY NOW</button>
      </div>
    </div>
  );
}

const AddFood = () => {
  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div
        style={{ backgroundImage: `url(${allFoods})` }}
        className="bg-center bg-cover object-cover text-center mb-8 h-32 rounded-lg"
      >
        <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-20">
          <h2 className="text-4xl font-bold text-white">All Foods</h2>
          <div className="w-24 h-1 mx-auto bg-green-500 mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;

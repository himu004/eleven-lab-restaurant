const LoadingSpinner = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-[calc(100vh-305px)]'>
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="w-24 h-24 border-8 border-gray-200 rounded-full"></div>
        <div className="w-24 h-24 border-8 border-indigo-600 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
      </div>
      <span className='mt-4 text-2xl font-semibold text-indigo-600'>Loading<span className="animate-pulse">...</span></span>
    </div>
  )
}

export default LoadingSpinner

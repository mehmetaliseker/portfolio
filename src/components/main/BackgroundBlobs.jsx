function BackgroundBlobs () {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      <div className="absolute w-72 h-72 bg-graphite-accent rounded-3xl top-10 left-10 opacity-20 blur-3xl animate-pulse delay-3000"></div>
      <div className="absolute w-96 h-96 bg-graphite-accent rounded-full bottom-20 right-20 opacity-20 blur-2xl animate-pulse delay-4000"></div>
      <div className="absolute w-64 h-64 bg-graphite-accent rounded-full top-1/2 left-1/4 opacity-20 blur-2xl animate-pulse delay-2500"></div>
    </div>
  );
};

export default BackgroundBlobs;
const ProgressBar = () => {
  return (
    <div className="fixed bottom-0 right-8">
      <div className="flex flex-row">
        <div className="text-right flex flex-col justify-between pb-16 mr-[26px]">
          <p className="text-alternate">About</p>
          <p>Experience</p>
          <p>Work</p>
          <p>Contact</p>
        </div>
        <div className="pt-1">
          <div className="relative bg-black w-1 h-96 rounded-t-lg">
            <div className="absolute top-0 bg-alternate w-6 h-6 rounded-xl -left-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

const RightDashboard = () => {

  //  const play = document.querySelector("#play-pause");
  //  play.addEventListener("mouseover",(event)=>{
  //      play.innerHTML=<p>Play Now</p>
  //  })


  return (
    <div className="space-y-8">
      <h2 className="text-2xl text-black font-bold">Access Class Recordings</h2>
      <div className="bg-white py-6 px-6 rounded-2xl shadow-md">
        
        {/* Search Bar */}
        <div className="mb-6 flex items-center rounded-lg bg-[#4749B30D]">
          <img src="./search-normal.png" alt="Search" className="h-5 w-5 ml-2" />
          <input
            type="text"
            placeholder="Search for class recordings"
            className="w-full p-2 border-none rounded-e-lg focus:outline-none bg-[#4749B30D]"
          />
        </div>

        {/* Filter Section */}
        <div className="flex justify-between items-center mb-6 text-[#979797]">
          <p className="text-[#979797]">Filter by:</p>
          <div className="flex space-x-4">
            <select className="p-2 rounded-lg">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
            <select className="p-2 rounded-lg">
              <option>All Subjects</option>
              <option>Subject 1</option>
            </select>
          </div>
        </div>

        {/* Recording Cards */}
        <div className="space-y-4">
          {[
            { title: 'Class 7 Math', subheading: 'Algebraic Equations', textColor: '#4749B3', image: './Mask group.png' },
            { title: 'Class 7 Math', subheading: 'Inert Gases', textColor: '#FFFFFF', image: './Mask group.png' },
            { title: 'Class 7 Science', subheading: 'Fundamentals of Organic Chemistry', textColor: '#4749B3', image: './Mask-group2.png' },
            { title: 'Class 7 Math', subheading: 'Trigonometry 101', textColor: '#E66DFF', image: './Mask group.png' },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 rounded-lg shadow-sm bg-white">
              
              {/* Card Text */}
              <div>
                <h3 className="text-sm font-medium" style={{ color: item.textColor }}>
                  {item.title}
                </h3>
                <p className="text-lg font-bold text-black">{item.subheading}</p>
                <p className="text-xs font-normal text-[#727272]">24th October, 2024</p>
              </div>
              
              {/* Image with Play Icon Overlay */}
              <div className="relative">
                <img src={item.image} alt="Recording" className="h-12 w-20 rounded-lg" />
                
                {/* Play/Pause Icon Overlay */}
                <img
                  src="./video-circle.png"
                  id="play-pause"  // Replace with your play/pause icon path
                  alt="Play/Pause Icon"
                  className="absolute inset-0 m-auto h-6 w-6 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightDashboard;

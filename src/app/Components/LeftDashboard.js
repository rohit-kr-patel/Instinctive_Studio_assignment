import React from "react";

const LeftDashboard = () => {
  return (
    <div className="space-y-12">
      {/* Announcements Section */}
      <div>
        {/* Section header for announcements */}
        <h2 className="text-2xl text-black font-bold mb-6">Announcements</h2>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div className="space-y-4">
            {/* Array of announcements with corresponding icons */}
            {[
              { text: "On account of Independence Day, August 15th will be a holiday.", logo: "./sun.png" },
              { text: "Reminder to finish your assignments and submit them by Monday.", logo: "./clipboard-text.png" },
            ].map((announcement, idx) => (
              // Individual announcement item
              <div
                key={idx}
                className={`flex items-center bg-[#F8F8F8] px-6 py-2 rounded-lg ${idx > 0 ? 'hidden sm:flex' : ''}`}
              >
                {/* Announcement icon */}
                <img src={announcement.logo} alt="Announcement Icon" className="h-8 w-8 mr-4" />
                {/* Announcement text */}
                <p className="text-sm text-[#4749B3]">{announcement.text}</p>
              </div>
            ))}
          </div>
          
          {/* Dots Navigation for announcements */}
          <div className="flex sm:hidden justify-center mt-4">
            {[0, 1].map((dotIdx) => (
              <div
                key={dotIdx}
                className={`h-2 w-2 rounded-full mx-1 ${dotIdx === 0 ? 'bg-[#4749B3]' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Class Schedule Section */}
      <div>
        {/* Section header for class schedule */}
        <h2 className="text-2xl text-black font-bold mb-4">Your Class Schedule</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="space-y-2">
            {/* Array of class schedule items with titles, subheadings, and colors */}
            {[
              { title: 'Class 7, Science | Live Class', subheading: 'Tuesday, 5:00 - 5:50 PM', rightSubheading: 'Yesterday', bgColor: '#F2F2FF', textColor: '#9899DF' }, 
              { title: 'Class 7, Science | Live Class', subheading: 'Tuesday, 6:30 - 7:15 PM', rightSubheading: 'Today', bgColor: '#E66DFF', textColor: '#FFFFFF' }, 
              { title: 'Class 7, Science | Live Class', subheading: 'Tuesday, 5:00 - 5:50 PM', rightSubheading: 'Tomorrow', bgColor: '#F2F2FF', textColor: '#4749B3' }, 
              { title: 'Class 7, Science | Live Class', subheading: 'Tuesday, 5:00 - 5:50 PM', rightSubheading: '23rd Sept. 2024', bgColor: '#FDF5FF', textColor: '#E66DFF' }, 
            ].map((classInfo, idx) => (
             
              <div
                key={idx}
                className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
                  (idx === 1 || idx === 2) ? 'hidden lg:flex' : ''
                }`} // Here implemented Hiding the the 2nd and 3rd divs on mobile screens
                style={{ backgroundColor: classInfo.bgColor }} // Background color for the item
              >
                {/* Class title and subheading section */}
                <div className="flex items-center">
                  <img src="./VideoLogo.png" alt="Schedule" className="h-8 w-8 mr-4" />
                  <div>
                    {/* Displaying the title of the class */}
                    <h3 className="text-xs font-semibold" style={{ color: classInfo.textColor }}>{classInfo.title}</h3>
                    {/* Displaying the time of the class */}
                    <p className="text-xs" style={{ color: classInfo.textColor }}>{classInfo.subheading}</p>
                  </div>
                </div>
                {/* Displaying the right subheading (date or label) */}
                <p className="text-xs" style={{ color: classInfo.textColor }}>{classInfo.rightSubheading}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftDashboard; 

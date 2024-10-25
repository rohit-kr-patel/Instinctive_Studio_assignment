import React, { useState } from "react";

// The CenterDashboard component displays a series of cards with quick links.
const CenterDashboard = () => {
  // Created an array of card objects containing logo, title, subtitle, and background color for each card.
  const cards = [
    {
      logo: './BookLogo.png',
      title: 'Canvas LMS',
      subtitle: 'Click here to access your LMS portal for assignments, class recordings, and notes.',
      bgColor: '#4749B3'
    },
    {
      logo: './LiveLogo.png',
      title: 'Join Live Class',
      subtitle: 'Class 7 Math is starting in 1 hour, 35 minutes.',
      bgColor: '#E66DFF'
    },
    {
      logo: './Whatsapp.png',
      title: 'Contact Teacher',
      subtitle: 'Click here to contact your teacher for any doubts or concerns.',
      bgColor: '#6669FE'
    },
  ];

  // This is a State to track which card is currently hovered over by the user
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col">
      {/* Header for the quick links section */}
      <h2 className="text-2xl font-bold mb-6 text-black text-left">Quick Links</h2>
      <div className="flex flex-col space-y-4">
        {/* Mapping through the cards array to generate individual card components */}
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`flex flex-row sm:flex-col items-center lg:px-6 xl:px-16 lg:py-10 shadow-md rounded-2xl transition duration-300 ease-in-out ${
              hoveredIndex === idx ? 'bg-white text-' + card.bgColor.slice(1) : ''
            }`}
            onMouseEnter={() => setHoveredIndex(idx)} // Set the hovered index when mouse enters
            onMouseLeave={() => setHoveredIndex(null)} // Reset the hovered index when mouse leaves
            style={{
              backgroundColor: hoveredIndex === idx ? 'white' : card.bgColor, // Change background color on hover
              color: hoveredIndex === idx ? card.bgColor : "white", // Change text color on hover
              cursor: "pointer" // Change cursor to pointer to indicate Hoverable cards
            }}
          >
            {/* Logo section */}
            <div className="bg-white bg-opacity-40 py-4 px-4 lg:py-0 xl:py-0 lg:bg-inherit lg:bg-opacity-100 h-full mr-12 lg:mr-0">
              <img src={card.logo} alt={card.title} className="h-10 w-10 sm:h-8 sm:w-8 mb-4" />
            </div>
            {/* Title and subtitle section */}
            <div className="">
              <h3 className="lg:text-2xl text-xl font-bold text-center transition duration-300 ease-in-out">
                {card.title} {/* Displaying the title of the card */}
              </h3>
              <p className="text-sm hidden sm:flex text-center font-normal transition duration-300 ease-in-out">
                {card.subtitle} {/* Displaying the subtitle of the card */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterDashboard; 

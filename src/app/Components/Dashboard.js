"use client"
import React, { useState } from "react";
import CenterDashboard from "./CenterDashboard";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";

const Dashboard = () => {
  const [isNoClassesModalOpen, setNoClassesModalOpen] = useState(false);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const closeModal = () => {
    setNoClassesModalOpen(false);
    setInfoModalOpen(false);
  };

  return (
    <React.Fragment>
      <div className="container mx-auto py-12 px-6 sm:px-8 lg:px-16 flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-12 justify-between font-outfit">
        {/* LeftDashboard (Announcements and Class Schedule) */}
        <div className="flex-1 flex flex-col order-1 lg:order-1">
          <LeftDashboard />
        </div>

        {/* CenterDashboard (Quick Links) */}
        <div className="flex-1 flex flex-col order-2 lg:order-2">
          <CenterDashboard />
        </div>

        {/* RightDashboard (Access Class Recordings) */}
        <div className="flex-1 flex flex-col order-4 lg:order-3">
          <RightDashboard />
        </div>
      </div>

      {/* Buttons to Show Modals */}
      <div className="flex flex-row sm:flex-row justify-center space-x-4 mt-6 px-6 gap-4">
        <button
          onClick={() => setNoClassesModalOpen(true)}
          className="px-4 py-2 bg-[#6669FE] text-white rounded-xl"
        >
          Show No Classes Modal
        </button>
        <button
          onClick={() => setInfoModalOpen(true)}
          className="px-4 py-2 bg-[#6669FE] text-white rounded-xl"
        >
          Show Early Live Class Modal
        </button>
      </div>

      {/* No Classes Scheduled Modal */}
      {isNoClassesModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-100">
          <div className="bg-black bg-opacity-80 rounded-2xl p-8 shadow-md flex flex-col items-center">
            <img src="./LiveLogo.png" className="h-8 w-8 mb-2"/>
            <h2 className="text-2xl font-bold">No Live Classes</h2>
            <p className="">You have no live classes scheduled for today.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-white text-black rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Early Live Class Modal */}
      {isInfoModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="flex flex-col items-center gap-4">
          <div className="bg-white rounded-2xl py-2 px-6 shadow-md flex flex-col gap-4">
            {/* Top Div with Bell Icon */}
            <div className="flex items-center">
              <img src="./Bell.png" alt="Bell Icon" className="h-4 w-4 mr-2" />
              <span className="text-sm font-bold text-[#E66DFF]">Class 7 Math is starting in 1 hour, 34 minutes.</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl py-2 px-6 shadow-md flex flex-col gap-4">
               {/* Bottom Div with Okay Button */}
            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-[#6669FE] text-center text-lg font-bold">You can join the live class<br/> 5 minutes before it <br/> starts.Please wait.</p>
              <button
                onClick={closeModal}
                className="px-8 py-2 bg-[#6669FE] text-white rounded-full mt-4"
              >
                Okay
              </button>
            </div>
              </div>
              </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Dashboard;

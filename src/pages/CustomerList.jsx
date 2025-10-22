import React, { useState } from "react";
// Assuming FormButton is correctly imported and functional
import FormButton from "../components/common/FormButton"; 
import { Link, useNavigate } from "react-router-dom";

// Note: I've updated the data structure to match the visual style (Renewal Date/Pending Amount)
// and made the names/images match the provided screenshot as closely as possible for demonstration.
const customersData = [
  {
    name: "Sophia Carter",
    subInfo: "Renewal: Jul 22, 2024", // Combines status and date/value
    subInfoColor: "text-gray-600",
    img: "https://i.ibb.co/TmgT32q/sophia-carter.png",
    category: "Upcoming Renewals",
  },
  {
    name: "Ethan Bennett",
    subInfo: "Pending: $50.00",
    subInfoColor: "text-red-500 font-medium",
    img: "https://i.ibb.co/308z19q/ethan-bennett.png",
    category: "Pending Payments",
  },
  {
    name: "Olivia Hayes",
    subInfo: "Renewal: Jul 25, 2024",
    subInfoColor: "text-gray-600",
    img: "https://i.ibb.co/7j2QJ4V/olivia-hayes.png",
    category: "Upcoming Renewals",
  },
  {
    name: "Noah Parker",
    subInfo: "Pending: $75.00",
    subInfoColor: "text-red-500 font-medium",
    img: "https://i.ibb.co/D8G3w5R/noah-parker.png",
    category: "Pending Payments",
  },
  {
    name: "Ava Thompson",
    subInfo: "Renewal: Jul 28, 2024",
    subInfoColor: "text-gray-600",
    img: "https://i.ibb.co/b3F04yV/ava-thompson.png",
    category: "Upcoming Renewals",
  },
  // Duplicates for scroll content
  { name: "Benjamin Lee", subInfo: "Pending: $100.00", subInfoColor: "text-red-500 font-medium", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4l0ipaCdi2MQr0P9MeyO7UWFbfBxzOLr1ldeBjTchUGcBrxPsf7yaCXqO8oJTq8YsfcJHelJODBZzFarUvNbtesyIlojdzywOXXUXtQrZqaFosZlWYEn6XGHy8Ov5luGHl9vstfNehL8iMPDXlmKYAhTtShmIi1iSHpxYzP6ygxDI9kLHJl74i7hHuEhkBYDocuUGW0MDzWJ_VPDUXxq_7VcpecVCKx7Uo0gDwjBkOGNas8dJMdl7GWjxKBQpPGC5uTy07Ck2Fw", category: "Pending Payments", },
  { name: "Emily Carter", subInfo: "Renewal: Aug 01, 2024", subInfoColor: "text-gray-600", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLXfc2C1zNkj-rijm3D90nk1ie9vruspdraBgxonvOwYV_CtgaB_qx951ByUAqXwniCTQyIrdhrWWmPYTW75aRmPx09fzbz2__O06egBBIwoyLzZNQ_VvUFlMG6ihGRfGVQ59joQqn9pe5I0fMU9AjWgSlztQclv62wpK7VI9R1YHW_FkySR39jIP5BTgiaP_45Q4xtxZb_P4WtJs6nql7ENznEZE7RyB03sRRJnsvDJpC-xwwFyqDxLKtsD2mBuYXuKGlB47j_g", category: "Upcoming Renewals", },
];

const CustomerList = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filteredCustomers = customersData.filter((c) => {
    // Note: The filter logic needs adjustment if you rely only on subInfo. 
    // I'm using a simplified `category` for filtering consistency.
    const matchesFilter = filter === "All" ? true : c.category === filter;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    // Removed specific h-[85vh] and max-w-3xl for better mobile responsiveness, 
    // letting content flow naturally on the screen.
    <main className="bg-white mx-auto px-4 py-6 space-y-4 max-w-4xl md:max-w-3xl">
      {/* 🔍 Search Input */}
      <div className="relative">
        <input
          type="search"
          placeholder="Search customers"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-12 pl-10 pr-4 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
        />
        <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400">
          search
        </span>
      </div>

      {/* 🏷️ Filter Buttons */}
      <div className="flex gap-2 lg:w-full md:w-full w-[310px] overflow-x-auto pb-2">
        {["All", "Pending Payments", "Upcoming Renewals"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition border ${
              filter === item
                ? "bg-primary text-white border-primary"
                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      
      {/* Horizontal Divider for Separation (Like in the image) */}
      <hr className="border-t border-gray-200" />


      {/* 🧾 Customer List (Fixed height scrolling section) */}
      {/* Added pr-1 to prevent scrollbar from hiding content */}
      <div className="max-h-[50vh] overflow-y-auto space-y-0 pr-1"> 
        {filteredCustomers.map((customer, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
          >
            {/* Left Section: Image and Text */}
            <Link to={'/clientprofile'} className="flex items-center space-x-4">
              <img
                src={customer.img}
                alt={customer.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">
                  {customer.name}
                </h3>
                {/* Status Line: Matches the image style */}
                <p className={`text-sm ${customer.subInfoColor}`}>
                  {customer.subInfo}
                </p>
              </div>
            </Link>

            {/* Right Section: Icons (Bell and Arrow) */}
            <div className="flex items-center space-x-3 text-gray-500">
              <button 
                aria-label="Notification"
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <span className="material-symbols-outlined text-xl">
                  notifications
                </span>
              </button>
              <Link 
              to={'/payment'}
                aria-label="Go to details"
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <span className="material-symbols-outlined text-xl">
                 account_balance_wallet
                </span>
              </Link>
            </div>
          </div>
        ))}

        {filteredCustomers.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No customers found.</p>
        )}
      </div>

      {/* 📌 Bottom Button — Fixed to the bottom for mobile */}
      {/* Adjusted positioning to be truly sticky/fixed */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:relative md:p-0 md:shadow-none md:border-t-0 md:mt-6">
        <div className="max-w-lg md:max-w-xl mx-auto px-4 md:px-0">
          <FormButton onClick={() => navigate('/customers')} className="w-full" text="Add Customer" />
        </div>
      </div>
    </main>
  );
};

export default CustomerList;
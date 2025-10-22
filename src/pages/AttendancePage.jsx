import React, { useState } from "react";

const AttendancePage = () => {
  const [search, setSearch] = useState("");
  const [attendance, setAttendance] = useState([
    {
      id: "C001",
      name: "Sophia Carter",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoQgzONGcS7PFKSC13n3ko7p2FX8HeXIXNhDy0lZcXm5r9cpIT4BZJfFdqPpT15gWJRvQvsatXF2jlBtPoUFoYvp79RnaR8SM-R-7GosrQkn5wW2qTTaFOxLtWfGucL4Wwj5Rl2EAoJS8W24eIktoH-1csHvSvOr6m2wvc377RYy-yDCjvXJnqGVxWhRpN_r4Lc0rj_ru8AL4k0SZJ5siwGIX062hPaqyX6ZDQUN_1XP8YJA7zyzUGpCcTqmVCJ1iqMWAPP7CcZA",
      present: false,
    },
    {
      id: "C002",
      name: "Ethan Bennett",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3aCiqiToCF_2pd9-EU_mAVi374yiaLAfJnbZ2W187dHexF98GIwPKJ4pAtp3i4YqasDx8KESgLEYBQD5DlzQg7byH7XuX2svrAEop1VEpWO-LaXKiDnro2FavSLtMJhe5nbzEKYgiIK2q-_0hQzCWnZJlGwoYRwLrsRzfVDUQJ_kQHXgPTk6_r99d486wAMOrww-YGE52NGwilBNUhHaqBttXZIiAu-c5uPEleaPmx_1co0_9HaVMLcI4aSOaYyGdyjII_YGmdA",
      present: true,
    },
    {
      id: "C003",
      name: "Olivia Hayes",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD1jXfstay7KYQDcTxjdDrSwHF7ULaHKQ3QBWcJMJ0X6_DXZ0951OeQhoyGweLAcNoerpbsk9imn-fETshoaOI8GVyV6cU8sr2nwoKoYk7JjLdtgrjFvkNuaMkS9JzIl56ZlXmr8ezV55dt7txwIXsmNU6Si1dZznTrW4hgg70AdW035HU_ZxZiSp_HYK9L2chzO0daXrMi4jK5Sv7XyFzAmCnZk6_5Mmj-exPr_6zZN8RsaYIrUiZ3Qwoic-XSpROndUbR2UJaA",
      present: true,
    },
    {
      id: "C004",
      name: "Noah Parker",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEOr8jWFsr7-Os520-Y2sFvDAuUQecyHeIVBu-tP9wv8nC-4d6eN2J-VAphB0I7Gu1RX8p5yxFehnTuljxQU1tN-6byy6QdmUfjl_7hDrjytsh62AQRkvLj4HTERPsotjySRocuTYL4h6wrrJScih_uNW9D62A162uwBBnftmSju4TTRW8t4QSQePIEp9uij5kp7Kug3Vi7FEjwv5oYggwTguZQqUL1v6oJ5CYDr1N3r2jxaelPNH8rdeW0awHDKnWLNf2eX92kg",
      present: false,
    },
    {
      id: "C005",
      name: "Ava Mitchell",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP6Xd-OYvlYZpOtEyz5i5a76Gu7gpxV64X9DzKbhGqQTZnDSdqXjxo-xSIwKYSDtBKw686ujyqgJ8xUz6pAdUwp8ATpWGFZieGFglqeF3UpEmmi3D8KAgbRWDRzbAmpVLAPFN0weIzM593X5f2VMv4bQdy2tvhc348HTutFafYAbNXpGO9PpumTFXIafF__Oz7EPTOgcpyXAloKmtRZIzuVrHDp25XJGZPOxnbHMAbUzMQQszgjjCZCsWulhkw7XGSbLqo0RhQSA",
      present: false,
    },
  ]);

  const handleToggle = (id) => {
    setAttendance((prev) =>
      prev.map((p) => (p.id === id ? { ...p, present: !p.present } : p))
    );
  };

  const filteredList = attendance.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" bg-white dark:bg-background-dark p-4 space-y-6 font-display max-w-4xl md:max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Today's Attendance
        </h2>
        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
          June 25, 2024
        </div>
      </div>

      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-3 pl-10 pr-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="text-gray-400"
            fill="currentColor"
            height="20"
            width="20"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
          </svg>
        </div>
      </div>

      {/* Attendance list */}
      <ul className="space-y-3 pt-2">
        {filteredList.map((person) => (
          <li
            key={person.id}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm"
          >
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
              style={{ backgroundImage: `url(${person.img})` }}
            ></div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 dark:text-white">
                {person.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ID: {person.id}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={person.present}
                onChange={() => handleToggle(person.id)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold py-3 px-4 rounded-lg shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
        <svg
          fill="currentColor"
          height="20"
          width="20"
          viewBox="0 0 256 256"
        >
          <path d="M221.3,44.29A15.83,15.83,0,0,0,208,40H48a15.83,15.83,0,0,0-13.3,7.71,16,16,0,0,0,0,16.58L91.89,128,34.7,191.71a16,16,0,0,0,0,16.58A15.83,15.83,0,0,0,48,216H208a15.83,15.83,0,0,0,13.3,7.71,16,16,0,0,0,0-16.58L164.11,128,221.3,60.87A16,16,0,0,0,221.3,44.29ZM208,200H48a.22.22,0,0,1-.13,0L105,133.42a15.91,15.91,0,0,0,0-10.84L47.87,56H208.13L151,122.58a15.91,15.91,0,0,0,0,10.84L208.1,200A.22.22,0,0,1,208,200Z" />
        </svg>
        View Report
      </button>
    </div>
  );
};

export default AttendancePage;

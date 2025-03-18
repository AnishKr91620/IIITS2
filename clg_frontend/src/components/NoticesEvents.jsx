// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaCalendarAlt, FaBullhorn } from "react-icons/fa";

// const notices = [
//   "📢 Mid-Semester Exams start from April 10th, 2025.",
//   "🚀 Workshop on AI & ML - Register by March 20th!",
//   "🏆 Hackathon registrations open - Prize pool ₹1,00,000!",
//   "📜 Convocation 2024 details announced. Check the official site!",
//   "📅 Academic Calendar for 2025 released.",
//   "🔬 Research grant applications open until March 31st.",
//   "🎉 Annual Fest - Get ready for exciting events!",
//   "💼 Internship & Placement drive starts in April.",
// ];

// const events = [
//   { title: "Role of e-library in Globalization", date: "22-10-2024" },
//   { title: "Swacchata Hi Seva", date: "17-09-2024 - 02-10-2024" },
//   { title: "National Space Day", date: "23-08-2024" },
//   { title: "Partition Horrors Remembrance Day", date: "14-08-2024" },
//   { title: "Startup Summit 3.0", date: "08-08-2024" },
//   { title: "5-day Faculty Development Programme", date: "07-08-2024 - 11-08-2024" },
// ];

// const NoticesEventsSection = () => {
//   const [noticeList, setNoticeList] = useState(notices);
//   const [eventList, setEventList] = useState(events);

//   useEffect(() => {
//     const noticeInterval = setInterval(() => {
//       setNoticeList((prev) => [...prev.slice(1), prev[0]]);
//     }, 3000); // Moves every 3 seconds

//     const eventInterval = setInterval(() => {
//       setEventList((prev) => [...prev.slice(1), prev[0]]);
//     }, 3000);

//     return () => {
//       clearInterval(noticeInterval);
//       clearInterval(eventInterval);
//     };
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center gap-8 p-10 bg-gray-100 w-full">
//       {/* Notices Section */}
//       <div className="bg-gray-900 shadow-lg rounded-lg p-6 w-[45%] min-w-[300px] overflow-hidden">
//         <h2 className="text-2xl font-bold text-center mb-4 text-white flex items-center justify-center gap-2">
//           <FaBullhorn className="text-red-500" /> Latest Notices
//         </h2>
//         <div className="h-[180px] relative overflow-hidden">
//           <motion.div
//             animate={{ y: "-100%" }}
//             transition={{
//               repeat: Infinity,
//               duration: 30, // Adjust speed (lower = faster)
//               ease: "linear",
//             }}
//             className="flex flex-col space-y-4"
//           >
//             {[...noticeList, ...noticeList].map((notice, index) => (
//               <div key={index} className="bg-gray-50 p-3 rounded-md shadow-md">
//                 <p className="text-md font-semibold text-gray-600">{notice}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Events Section */}
//       <div className="bg-gray-900 shadow-lg rounded-lg p-6 w-[45%] min-w-[300px] overflow-hidden">
//         <h2 className="text-2xl font-bold text-center mb-4 text-white flex items-center justify-center gap-2">
//           <FaCalendarAlt className="text-blue-500" /> Upcoming Events
//         </h2>
//         <div className="h-[180px] relative overflow-hidden">
//           <motion.div
//             animate={{ y: "-100%" }}
//             transition={{
//               repeat: Infinity,
//               duration: 30, // Adjust speed (lower = faster)
//               ease: "linear",
//             }}
//             className="flex flex-col space-y-4"
//           >
//             {[...eventList, ...eventList].map((event, index) => (
//               <div key={index} className="bg-gray-50 p-3 rounded-md shadow-md">
//                 <p className="text-md font-semibold text-gray-600">{event.title}</p>
//                 <p className="text-sm text-gray-500">{event.date}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoticesEventsSection;
import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { FaCalendarAlt, FaBullhorn } from "react-icons/fa";

const notices = [
  "📢 Mid-Semester Exams start from April 10th, 2025.",
  "🚀 Workshop on AI & ML - Register by March 20th!",
  "🏆 Hackathon registrations open - Prize pool ₹1,00,000!",
  "📜 Convocation 2024 details announced. Check the official site!",
  "📅 Academic Calendar for 2025 released.",
  "🔬 Research grant applications open until March 31st.",
  "🎉 Annual Fest - Get ready for exciting events!",
  "💼 Internship & Placement drive starts in April.",
];

const events = [
  { title: "Role of e-library in Globalization", date: "22-10-2024" },
  { title: "Swacchata Hi Seva", date: "17-09-2024 - 02-10-2024" },
  { title: "National Space Day", date: "23-08-2024" },
  { title: "Partition Horrors Remembrance Day", date: "14-08-2024" },
  { title: "Startup Summit 3.0", date: "08-08-2024" },
  { title: "5-day Faculty Development Programme", date: "07-08-2024 - 11-08-2024" },
];

const NoticesEventsSection = () => {
  const [noticeList, setNoticeList] = useState(notices);
  const [eventList, setEventList] = useState(events);
  const noticeRef = useRef(null);
  const eventRef = useRef(null);

  useEffect(() => {
    const noticeInterval = setInterval(() => {
      setNoticeList((prev) => [...prev.slice(1), prev[0]]);
    }, 3000);

    const eventInterval = setInterval(() => {
      setEventList((prev) => [...prev.slice(1), prev[0]]);
    }, 3000);

    return () => {
      clearInterval(noticeInterval);
      clearInterval(eventInterval);
    };
  }, []);

  const scrollVariants = {
    hidden: { y: 0 },
    visible: {
      y: "-100%",
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 p-8 md:p-16 bg-gradient-to-br from-gray-50 to-gray-100 w-full">
      {/* Notices Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full md:w-[45%] overflow-hidden relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaBullhorn className="text-red-500" /> Notices
          </h2>
          <div className="text-sm text-gray-500">Latest Updates</div>
        </div>
        <div className="h-[200px] relative overflow-hidden">
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-4"
          >
            {[...noticeList, ...noticeList].map((notice, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-md font-medium text-gray-700">{notice}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full md:w-[45%] overflow-hidden relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" /> Events
          </h2>
          <div className="text-sm text-gray-500">Upcoming</div>
        </div>
        <div className="h-[200px] relative overflow-hidden">
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-4"
          >
            {[...eventList, ...eventList].map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-md font-medium text-gray-700">{event.title}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NoticesEventsSection;

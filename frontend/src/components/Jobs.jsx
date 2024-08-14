import { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCards from "./FilterCards";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJob, setFilterJob] = useState(allJobs);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchedQuery) {
      const filterdJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJob(filterdJobs);
    } else {
      setFilterJob(allJobs);
    }
  }, [allJobs, searchedQuery]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto mt-5">
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="w-20%">
            <FilterCards />
          </div>
          {filterJob?.length <= 0 ? (
            <span>Jobs not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {filterJob?.map((job) => (
                  <motion.div
                    key={job?._id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;

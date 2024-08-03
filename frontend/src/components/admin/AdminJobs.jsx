import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchJobByText } from "@/redux/jobSlice";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import AdminJobTable from "./AdminJobTable";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const [input, setinput] = useState("");
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setinput(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto my-10">
        <div className="flex items-center justify-between my-5 lg:px-0 px-4">
          <Input
            className="w-fit"
            placeholder="Filter by name, role"
            value={input}
            onChange={changeEventHandler}
          />
          <Button onClick={() => navigate("/admin/job/create")}>
            New Jobs
          </Button>
        </div>
        <AdminJobTable />
      </div>
    </div>
  );
};

export default AdminJobs;

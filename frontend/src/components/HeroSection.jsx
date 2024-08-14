import  { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="bg-gray-200 rounded-full px-4 py-2 text-[#F83002] font-medium mx-auto">
          No. 1 Job Hunt Website
        </span>
        <h1 className="lg:text-5xl font-bold text-3xl">
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officiis quia molestias praesentium consequatur!
        </p>
        <div className="flex lg:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto w-[85vw]">
          <input
            type="text"
            placeholder="Find your dream job."
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full" onClick={searchJobHandler}>
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

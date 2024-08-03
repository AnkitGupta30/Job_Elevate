import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "../utils/constant";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setComapanyName] = useState();
  const dispatch = useDispatch();
  const registerNameCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto lg:px-0 px-7">
        <div className="my-8">
          <h1 className="font-bold text-2xl">Your Comapany Name</h1>
          <p className="text-gray-500">
            What would you like to give your comapny name? you can change later.
          </p>
        </div>
        <Label>Company Name</Label>
        <Input
          className="my-2"
          type="text"
          placeholder="JobElevate, Google etc."
          value={companyName}
          onChange={(e) => setComapanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-8">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onClick={registerNameCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;

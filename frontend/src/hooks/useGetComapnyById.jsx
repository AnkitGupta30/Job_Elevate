import { COMPANY_API_END_POINT } from "@/components/utils/constant";
import { setSingleCompany } from "@/redux/companySlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetComapnyById = (companyId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleComapny = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_END_POINT}/get/${companyId}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleComapny();
  }, [companyId, dispatch]);
};

export default useGetComapnyById;

import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    companies: [],
    searchCompnayByText: "",
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSearchCompnayByText: (state, action) => {
      state.searchCompnayByText = action.payload;
    },
  },
});

export const { setSingleCompany, setCompanies, setSearchCompnayByText } =
  companySlice.actions;
export default companySlice.reducer;

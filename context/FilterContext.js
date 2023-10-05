"use client";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedOccasions, setSelectedOccasions] = useState([]);
  const [selectedRecipients, setSelectedRecipients] = useState([]);

  const toggleOccasions = (occasion) => {
    if (selectedOccasions.includes(occasion)) {
      setSelectedOccasions(selectedOccasions.filter((c) => c !== occasion));
    } else {
      setSelectedOccasions([...selectedOccasions, occasion]);
    }
  };

  const toggleRecipients = (recipient) => {
    if (selectedRecipients.includes(recipient)) {
      setSelectedRecipients(selectedRecipients.filter((c) => c !== recipient));
    } else {
      setSelectedRecipients([...selectedRecipients, recipient]);
    }
  };

  const clearFilters = () => {
    setSelectedOccasions([]);
    setSelectedRecipients([]);
  };

  return (
    <FilterContext.Provider
      value={{
        mobileFiltersOpen,
        setMobileFiltersOpen,
        selectedOccasions,
        setSelectedOccasions,
        toggleOccasions,
        selectedRecipients,
        setSelectedRecipients,
        toggleRecipients,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilterContext must be used within a MobileFilterContextProvider"
    );
  }

  return context;
}

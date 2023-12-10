"use client";
import { useFilterContext } from "@/context/FilterContext";

//components
import Filter from "./Filter";

export default function AllFilters({ occasions, recipients, children }) {
  const {
    selectedOccasions,
    setSelectedOccasions,
    toggleOccasions,
    selectedRecipients,
    setSelectedRecipients,
    toggleRecipients,
    clearFilters,
  } = useFilterContext();

  return (
    <div>
      <Filter
        data={occasions}
        state={selectedOccasions}
        setState={setSelectedOccasions}
        toggleState={toggleOccasions}
        title="Filter by Occasion"
      />

      <Filter
        data={recipients}
        state={selectedRecipients}
        setState={setSelectedRecipients}
        toggleState={toggleRecipients}
        title="Filter by Recipients"
      />
      <div>{children}</div>
    </div>
  );
}

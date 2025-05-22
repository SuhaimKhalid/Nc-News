import { useEffect, useState } from "react";

const useFormattedDate = (dateString) => {
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    if (!dateString) return;

    const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    setFormatted(formattedDate);
  }, [dateString]);

  return formatted;
};

export default useFormattedDate;

import React from "react";
import { InlineIcon } from "@iconify/react";

function SectionTitle({ handelOpen, title, open }) {
  return (
    <div className={`section-title`} onClick={() => handelOpen(title)}>
      <h2>{title}</h2>
      <InlineIcon
        className={`right-arrow ${open?.includes(title) ? "active-arrow" : ""}`}
        icon="ep:arrow-right"
      />
    </div>
  );
}

export default SectionTitle;

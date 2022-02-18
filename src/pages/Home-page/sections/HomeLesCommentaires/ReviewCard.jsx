import React from "react";
import { InlineIcon } from "@iconify/react";
import { useState } from "react";

{
  /* <InlineIcon icon={"akar-icons:star"} className="star-icon"/> */
}

{
  /* <InlineIcon
                  icon={"ant-design:star-filled"}
                  className="star-icon"
                /> */
}

function ReviewCard({ name, desc, img, review }) {
  return (
    <div className="flex flex-col bg-oneCard-lightGray space-y-5 px-8 py-8 rounded-2xl">
      {(() => {
        if (review === 1) {
          return (
            <div className="flex space-x-1 text-yellow-400 text-base">
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
            </div>
          );
        } else if (review === 2) {
          return (
            <div className="flex space-x-1 text-yellow-400 text-base">
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
            </div>
          );
        } else if (review === 3) {
          return (
            <div className="flex space-x-1 text-yellow-400 text-base">
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
            </div>
          );
        } else if (review === 4) {
          return (
            <div className="flex space-x-1 text-yellow-400 text-base">
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
            </div>
          );
        } else if (review === 5) {
          return (
            <div className="flex space-x-1 text-yellow-400 text-base">
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
              <InlineIcon
                icon={"ant-design:star-filled"}
                className="star-icon"
              />
            </div>
          );
        }
      })()}

      <h3 className="text-oneCard-darkBlue line-clamp-6">{desc}</h3>
      <div className="flex items-center space-x-4">
        <img src={img} className="w-10" alt="one card pro" />
        <h3 className="text-oneCard-darkBlue font-bold">{name}</h3>
      </div>
    </div>
  );
}

export default ReviewCard;

import React from "react";
import { InlineIcon } from "@iconify/react";
import { useState } from "react";

{
  /* <InlineIcon icon={"akar-icons:star"} className="star-icon"/> */
}

function ReviewCard({ data }) {
  const { name, review, imgSrc, text } = data;
  return (
    <div className="reviewcard">
      <div className="star-icon-wrapper">
        {(() => {
          if (review === 1) {
            return (
              <>
                <InlineIcon
                  icon={"ant-design:star-filled"}
                  className="star-icon"
                />
              </>
            );
          } else if (review === 2) {
            return (
              <>
                <InlineIcon
                  icon={"ant-design:star-filled"}
                  className="star-icon"
                />
                <InlineIcon
                  icon={"ant-design:star-filled"}
                  className="star-icon"
                />
              </>
            );
          } else if (review === 3) {
            return (
              <>
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
              </>
            );
          } else if (review === 4) {
            return (
              <>
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
              </>
            );
          } else if (review === 5) {
            return (
              <>
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
              </>
            );
          }
        })()}
      </div>
      <p className="des">{text}</p>
      <div className="avatar-area">
        <div className="avatar-wrapper">
          <img src={imgSrc} alt={name} />
        </div>
        <p className="name">{name}</p>
      </div>
    </div>
  );
}

export default ReviewCard;

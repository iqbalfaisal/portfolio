import React, {createRef} from "react";
import "./RecommendCard.scss";

export default function RecommendCard({recommend, isDark}) {
  const imgRef = createRef();

  return (
    <a
      className={
        isDark
          ? "dark-mode recommend-card recommend-card-shadow"
          : "recommend-card"
      }
      href="#recommend"
    >
      <img
        crossOrigin={"anonymous"}
        ref={imgRef}
        className="recommend-roundedimg"
        src={recommend.image}
        alt={recommend.company}
      />
      <h5
        className={
          isDark ? "recommend-text-role dark-mode-text" : "recommend-text-role"
        }
      >
        {recommend.name}
      </h5>
      <h5
        className={
          isDark ? "recommend-text-date dark-mode-text" : "recommend-text-date"
        }
      >
        {recommend.role}
      </h5>

      <p
        className={
          isDark
            ? "subTitle recommend-text-desc dark-mode-text"
            : "subTitle recommend-text-desc"
        }
      >
        {recommend.text}
      </p>
      <div className="recommend-go-corner">
        <div className="recommend-go-arrow">→</div>
      </div>
    </a>
  );
}

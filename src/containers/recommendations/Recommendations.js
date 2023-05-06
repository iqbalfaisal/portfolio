import React, {useContext} from "react";
import "./Recommendations.scss";
import RecommendCard from "../../components/recommendCard/RecommendCard";
import {recommendationSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Recommendations() {
  const {isDark} = useContext(StyleContext);

  if (!recommendationSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="recommends">
        <div className="recommend-header">
          <h1 className="recommend-header-text">
            {recommendationSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode recommend-subtitle"
                : "subTitle recommend-subtitle"
            }
          >
            {recommendationSection.subtitle}
          </p>
        </div>
        <div className="recommend-main-div">
          <div className="recommend-text-div">
            {recommendationSection.recommendations.map((recommend, i) => {
              return (
                <RecommendCard key={i} isDark={isDark} recommend={recommend} />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

import React from "react";
import "../body/Body.scss";

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div>
            <h2 className="text_shadows">What Q-Quiz do?</h2>
            <div className="line">
              <p className="lineUp ">
                A place where you can make the most of your knowledge through
                quiz questions, plus a scoring section to see how wide your
                knowledge is. And of course the questions are always customized
                randomly. but without any level. let's get started!
              </p>
            </div>
          </div>
          <div>
            <h1 className="text_shadows">Contribute?</h1>
            <div className="line">
              <p className="lineUp">
                Well as the title says , contribute where you can contribute to
                the question pool .Where you can share your knowledge with all
                the players in a way that couldn't be more fun !.Try Get into
                the top 5 of the Top-score and you'll have the honor of adding
                your own questions to the game's knowledge base.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text_shadows">Top-score</h1>
            <div className="line">
              <p className="lineUp">
                Ah the leader board, which honors the players with the highest
                score, the top 5 players. Try to get into the top 5 to
                contribute questions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;

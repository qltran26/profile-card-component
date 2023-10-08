import React from "react";
import "./styles/card.css";

function Card() {
  return (
    <main>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-avatar"></div>
        <div className="card-info">
          <div className="card-info__default">
            <section>
              <h3>Victor Crest</h3>
              <p>26</p>
            </section>
            <span>
              <p>London</p>
            </span>
          </div>
          <div className="line-break"></div>
          <div className="card-info__expand">
            <div>
              <p className="number">80K</p>
              <p>Followers</p>
            </div>
            <div>
              <p className="number">803K</p>
              <p>Likes</p>
            </div>
            <div>
              <p className="number">1.4K</p>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>

      <div class="attribution">
        <span>
          {" "}
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
        </span>
        <span>
          Coded by <a href="#">qltran</a>.
        </span>
      </div>
    </main>
  );
}

export default Card;

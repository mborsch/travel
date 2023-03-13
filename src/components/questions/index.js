import React from "react";
import "./index.css";

const QuestionForm = () => {
  return (
    <div>
      <div className="left-side">
        <div className="text-zone">Choose the most appealing option:</div>
        <form>
          <div className="activity-options">
            <label className="activity">
              <input type="radio" value="A" />
              Biking Tour
            </label>

            <label className="activity">
              <input type="radio" value="B" />
              Local Workshop
            </label>

            <label className="activity">
              <input type="radio" value="C" />
              Hiking
            </label>
            {/*  <button type="button" class="btn btn-primary btn-sm">
            Save
          </button>
          */}
          </div>
        </form>

        <div className="text-zone">
          Which of the following is the most important to you:
        </div>
        <form>
          <div className="activity-options">
            <label className="activity">
              <input type="radio" value="A" />
              Saving the Rainforests
            </label>

            <label className="activity">
              <input type="radio" value="B" />
              Fixing the Ozone
            </label>

            <label className="activity">
              <input type="radio" value="C" />
              Removing garbage from our oceans
            </label>
            {/*  <button type="button" class="btn btn-primary btn-sm">
            Save
          </button>
          */}
          </div>
        </form>

        <div className="text-zone">What's the best part of vacation:</div>
        <form>
          <div className="activity-options">
            <label className="activity">
              <input type="radio" value="A" />
              Exploring
            </label>

            <label className="activity">
              <input type="radio" value="B" />
              Relaxing
            </label>

            <label className="activity">
              <input type="radio" value="C" />
              Photo ops
            </label>
            {/*  <button type="button" class="btn btn-primary btn-sm">
            Save
          </button>
          */}
          </div>
        </form>
      </div>
      <div className="right-side">
        <p>hello</p>
      </div>
    </div>
  );
};

export default QuestionForm;

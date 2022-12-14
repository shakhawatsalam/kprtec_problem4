import React from "react";
import "./December.css";
import Addimg from "../../Assets/bg-insider-callout.jpg";

const December = () => {
  return (
    <>
      <div className='content_container'>
        <div className='container'>
          <div className='h1'>
            <h1 className='text'>DECEMBER 14 : NEW RELEASE</h1>
          </div>
          <div className='add'>
            <div className='imgAdd'>
              <img src={Addimg} alt='' />
            </div>
            <div className='earn_content'>
              <p>
                Earn 500 points for making a purchase on the Marvel Comics app!
              </p>
            </div>
            <div className='join'>
              <h4>Join Now</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default December;

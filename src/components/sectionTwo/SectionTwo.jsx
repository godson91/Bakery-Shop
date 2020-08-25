import React from "react";
import {Link} from 'react-router-dom';
import "./sectionTwo.styles.scss";
import CustomBtn from '../custom-button/custom-button.component'

function SectionTwo() {
  return (
    <div className="sectionTwo">
      <div className="centeredText">
        <p>
          These delicious desserts can be delivered to yur home via Contactless
          Delivery in the Kansas City area.
        </p>
        <Link to="/shop"><CustomBtn className='shopBtn'>Order Online</CustomBtn>
        </Link>
        <p>
          Live outside of Kansas City? No Problem! We can ship this goodness to
          your door!
        </p>
      </div>
    </div>
  );
}

export default SectionTwo;

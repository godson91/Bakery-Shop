import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import content from './slides';
import CustomButton from '../custom-button/custom-button.component';
import './landingpagehero.styles.scss';

function LandingPageHero() {
  return (
    <div>
      <Slider>
        {content.map((item, index) => (
          <div
            key={index}
            className="slideBG"
            style={{
              background: `url('${item.image}') no-repeat center center`,
              backgroundSize: `cover`,
              outline: '200px solid rgba(0, 0, 0, 0.4)',
              outlineOffset: '-200px',
              overflow: 'hidden',
            }}
          >
            <div className="center">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Link to="/shop">
                <CustomButton>Order Now</CustomButton>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LandingPageHero;

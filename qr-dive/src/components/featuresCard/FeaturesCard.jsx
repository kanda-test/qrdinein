import { PiSpeakerLowBold } from 'react-icons/pi';
import { PiDeviceMobileThin } from 'react-icons/pi';
import { IoNotificationsOutline } from 'react-icons/io5';
import './featuresCard.css';
function FeatureCard() {
  return (
    <div className='feature-main-div'>
      <div className='feature-card-div'>
        <div className='custom-card-div'>
          <div className='icon-div-1'>
            <PiDeviceMobileThin />
          </div>
          <div className='box-div'>
            <div className='heading-div-1'>Promote your restaurant</div>
            <div className='text-div-1'>
              Create a profile of your restaurant in our database and start
              promoting it through the mobile application.
            </div>
          </div>
        </div>
        <div className='custom-card-div'>
          <div className='icon-div-2'>
            <PiSpeakerLowBold />
          </div>
          <div className='box-div'>
            <div className='heading-div-2'>Gain new customers</div>
            <div className='text-div-1'>
              Thanks to the mobile application, you can reach more potential
              customers of your gastronomic point.
            </div>
          </div>
        </div>
        <div className='custom-card-div'>
          <div className='icon-div-3'>
            <IoNotificationsOutline />
          </div>
          <div className='box-div'>
            <div className='heading-div-2'>Turn on notifications</div>
            <div className='text-div-1'>
              Allow sharing of notifications related to news and promotions in
              the restaurant, they like and are waiting for it!
            </div>
          </div>
        </div>
        <div className='line-div'></div>
      </div>
    </div>
  );
}

export default FeatureCard;

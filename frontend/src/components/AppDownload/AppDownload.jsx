import React from 'react';
import './AppDownload.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Importing assets from the assets folder

// AppDownload component
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      {/* Heading for app download */}
      <p>For Better Experience Download <br />Turbo App</p>
      {/* Container for app download platforms */}
      <div className="app-download-platforms">
        {/* Image for Google Play Store */}
        <img src={assets.play_store} alt="" />
        {/* Image for Apple App Store */}
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload; // Exporting the component

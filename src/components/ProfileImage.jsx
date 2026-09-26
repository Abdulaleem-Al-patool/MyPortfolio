import React, { useState } from 'react';
import { profileData } from '../data/profile.js';
import './ProfileImage.css';

export default function ProfileImage({ className = '' }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={`profile-image-container ${className}`}>
      <div className="profile-image-inner">
        {!imageFailed ? (
          <img
            src={profileData.assets.photo}
            alt={profileData.name}
            width={360}
            height={360}
            loading="eager"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="profile-image-img"
          />
        ) : (
          <div className="profile-image-fallback">
            <span className="profile-image-fallback-initials">AM</span>
            <span className="profile-image-fallback-name">
              Ahmed Mufeed
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

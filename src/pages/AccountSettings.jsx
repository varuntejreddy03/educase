import React, { useState, useRef, useEffect } from 'react';

/**
 * Account Settings Page
 * User profile display with photo upload
 */
function AccountSettings({ user }) {
  const fileInputRef = useRef(null);

  // Fallback values if no user data
  const name = user?.fullName || 'Marry Doe';
  const email = user?.email || 'Marry@Gmail.Com';

  // Profile photo state - load from localStorage
  const [profilePhoto, setProfilePhoto] = useState(() => {
    return localStorage.getItem('popx_profile_photo') || null;
  });

  // Handle photo upload
  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size should be less than 2MB');
        return;
      }

      // Convert to base64 and store
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setProfilePhoto(base64);
        localStorage.setItem('popx_profile_photo', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="account-page">
        {/* Page Header */}
        <header className="account-page__header">
          Account Settings
        </header>

        {/* Page Content */}
        <main className="account-page__content">
          <div className="profile-card">
            {/* Profile Row - Avatar + Info */}
            <div className="profile-card__row">
              {/* Avatar with Camera Badge */}
              <div className="avatar-wrapper" onClick={handlePhotoClick}>
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="avatar avatar--image"
                  />
                ) : (
                  <div className="avatar" />
                )}
                <div className="avatar-badge" title="Change photo">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  style={{ display: 'none' }}
                />
              </div>

              {/* User Info */}
              <div className="profile-info">
                <h2 className="profile-info__name">{name}</h2>
                <p className="profile-info__email">{email}</p>
              </div>
            </div>

            {/* Bio Section */}
            <p className="profile-card__bio">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>

            {/* Divider */}
            <hr className="profile-card__divider" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AccountSettings;

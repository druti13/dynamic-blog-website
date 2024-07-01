import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ShareButtons = () => {
  const shareUrl = window.location.href;

  const handleShare = (platform) => {
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="share-buttons">
      <button onClick={() => handleShare('facebook')} className="social-button facebook">
        <FaFacebook />
        <span className="button-label">Share on Facebook</span>
      </button>
      <button onClick={() => handleShare('twitter')} className="social-button twitter">
        <FaTwitter />
        <span className="button-label">Share on Twitter</span>
      </button>
      <button onClick={() => handleShare('linkedin')} className="social-button linkedin">
        <FaLinkedin />
        <span className="button-label">Share on LinkedIn</span>
      </button>
    </div>
  );
};

export default ShareButtons;

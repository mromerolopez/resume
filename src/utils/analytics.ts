// Google Analytics configuration
export const GA_TRACKING_ID = 'G-RVXZB8SSBM';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track resume downloads
export const trackResumeDownload = () => {
  event({
    action: 'download',
    category: 'resume',
    label: 'resume_pdf',
  });
};

// Track contact form submissions
export const trackContactSubmission = () => {
  event({
    action: 'submit',
    category: 'contact',
    label: 'contact_form',
  });
};

// Track theme toggle
export const trackThemeToggle = (theme: 'light' | 'dark') => {
  event({
    action: 'toggle',
    category: 'theme',
    label: theme,
  });
};

// Declare gtag on window object
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
} 
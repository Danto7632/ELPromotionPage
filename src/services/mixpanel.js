import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.REACT_APP_MIXPANEL_TOKEN;
const ENVIRONMENT = process.env.REACT_APP_ENV;

if (!MIXPANEL_TOKEN) {
  console.error('Mixpanel token is missing. Ensure REACT_APP_MIXPANEL_TOKEN is set.');
} else {
  try {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: ENVIRONMENT !== 'production',
    });
  } catch (error) {
    console.error('Error initializing Mixpanel:', error);
  }
}

const defaultOptions = {
  environment: ENVIRONMENT,
};

export const sendViewPageEvent = (eventName, options = {}) => {
  if (!eventName) {
    console.error('Event name is required.');
    return;
  }
  
  try {
    mixpanel.track(eventName, {
      type: 'ViewPageEvent',
      ...defaultOptions,
      ...options,
    });
  } catch (error) {
    console.error('Error sending view page event:', error);
  }
};

export const sendClickEvent = (eventName, options = {}) => {
  if (!eventName) {
    console.error('Event name is required.');
    return;
  }
  
  try {
    mixpanel.track(eventName, {
      type: 'ClickEvent',
      ...defaultOptions,
      ...options,
    });
  } catch (error) {
    console.error('Error sending click event:', error);
  }
};

export const SITE_URL = 'https://basically.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'basically';
export const BRAND_NAME = 'Basically Trusted';
export const SITE_NAME_MULTILINE = ['Basically', 'Trusted'];
export const SITE_NAME = 'Basically Trusted';
export const META_DESCRIPTION = 
    'Basically witnessing the world with new eyes. Trusted Source, Never Failed, News Media.';
    export const SITE_DESCRIPTION =
    'Basically witnessing the world with new eyes.';
  export const DATE = '01 January 2022';
  export const SHORT_DATE = 'Jan 1 - 9:00am PST';
  export const FULL_DATE = 'Jan 1st 9am Pacific Time (GMT-7)';
  export const TWEET_TEXT = META_DESCRIPTION;
  export const COOKIE = 'user-id';
  
  // Remove process.env.NEXT_PUBLIC_... below and replace them with
  // strings containing your own privacy policy URL and copyright holder name
  export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
  export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;
  
  export const CODE_OF_CONDUCT =
    'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
  export const REPO = 'https://github.com/BuchananDevOps/basically.git';
  export const SAMPLE_TICKET_NUMBER = 1234;
  export const NAVIGATION = [
    {
      name: 'News',
      route: '/service/news'
    },
  ];
  
  
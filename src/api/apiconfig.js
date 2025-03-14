import Amplify, { API } from 'aws-amplify';

Amplify.configure({
  // Other configurations (Auth, Storage, etc.) might go here as well.
  API: {
    endpoints: [
      {
        name: "PaymentAPI",
        endpoint: "https://<api-id>.execute-api.<region>.amazonaws.com/<stage>",
        region: "ap=southeast-2",
        stage: "dev",
      },
    ],
  },
});

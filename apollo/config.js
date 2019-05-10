// if (process.env.NODE_ENV !== "production") {
//   // eslint-disable-next-line global-require
//   require("dotenv").config();
// }

export default function() {
  return {
    httpEndpoint: "https://graphql.datocms.com",
    getAuth: () => "55524c93dac61709c12e1514c04412" // Bearer added by default
    // getAuth: () => "PROCESS.ENV.DATO_API_TOKEN" // Bearer added by default
  };
}

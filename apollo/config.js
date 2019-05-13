// if (process.env.NODE_ENV !== "production") {
//   // eslint-disable-next-line global-require
//   require("dotenv").config();
// }

// const mongoUri = process.env.MONGO_URI || `mongodb://localhost/${pkg.name}`;

// require("dotenv").config();

// import dotenv from "dotenv";

// const config = dotenv.config();

// if (config.error) {
//   console.log("Could not load env file", config.error);
// }

export default function() {
  return {
    httpEndpoint: "https://graphql.datocms.com",
    // Bearer added by default
    // getAuth: () => "process.env.DATO_API_TOKEN" // Bearer added by default
    getAuth: () => "55524c93dac61709c12e1514c04412"
    // console.log(process.dotenv)
  };
}

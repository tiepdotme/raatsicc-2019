export default function() {
  return {
    httpEndpoint: "https://graphql.datocms.com",
    // getAuth: () => "process.env.DATO_API_TOKEN" // Bearer added by default
    getAuth: () => "55524c93dac61709c12e1514c04412" // Bearer added by default
  };
}

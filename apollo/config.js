export default function() {
  return {
    httpEndpoint: "https://graphql.datocms.com",
    // Bearer added by default
    getAuth: () => process.env.DATO_API_TOKEN
  };
}

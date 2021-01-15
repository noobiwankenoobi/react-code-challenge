export const tokenConfig = () => {
  // Access Token - Read Only - from v4 Auth
  const v4accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDI2NTIzNWFlN2NlM2M1NTljZmRhMjViMGZlYzAyMSIsInN1YiI6IjVmZGE5NTQzNzk4ZTA2MDAzZTMxNTY2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.71wwZj4CRqwfvE7nrXNY7vXN0Wf06sZO8bJu0u0uDMs";
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${v4accessToken}`,
    },
  };
  return config;
};

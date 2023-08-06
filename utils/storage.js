//to do:
//create an util function which login to digi storage and return token and mountId
export const connectToStorage = async () => {
  const GET = async () => {
    const authUrl = `${process.env.API_BASE}/token`;
    const authHeaders = {
      "X-Koofr-Email": process.env.AUTH_USER,
      "X-Koofr-Password": process.env.AUTH_PASS,
    };

    try {
      const authResponse = await fetch(authUrl, { headers: authHeaders });
      const token = authResponse.headers.get("x-koofr-token");

      const mountsUrl = `${process.env.API_BASE}/api/v2/mounts`;

      try {
        const mountsResponse = await fetch(mountsUrl, {
          headers: { Authorization: `Token ${token}` },
        });

        const mounts = await mountsResponse.json();
        const digiCloudMount = mounts.mounts.find(
          (mount) => mount.name === "Digi Cloud"
        );

        if (!digiCloudMount) {
          console.log("Digi Cloud mount not found.");
          return new Response("Digi Cloud mount not found", {
            status: 500,
          });
        }

        const mountId = digiCloudMount.id;
        return new Response(JSON.stringify({ token, mountId }), {
          status: 200,
        });
      } catch (error) {
        console.error("Error fetching mounts:", error);
        return new Response("Error fetching mounts", {
          status: 500,
        });
      }
    } catch (error) {
      console.error("Error fetching authentication token:", error);
      return new Response("Error fetching authentication token", {
        status: 500,
      });
    }
  };
};

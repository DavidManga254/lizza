import { OAuth2Client } from "google-auth-library";
import { type TokenPayload } from "google-auth-library";
import { axiosApiInstance } from "~/functions/api/axios";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const authCredential = body.authCredential;

  try {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken: authCredential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload: TokenPayload | undefined = ticket.getPayload();

    if (payload !== undefined) {
      const userId = payload.sub;
      const userEmail = payload.email;
      const userName = payload.name;
      const userGivenName = payload.given_name;
      const userFamilyName = payload.family_name;
      const userProfilePicture = payload.picture;
      const userSessionExpiry = payload.exp;

      //save user info in db
      const formData = new FormData();

      formData.append("firstName", `${userGivenName} ${userFamilyName}`);
      formData.append("address", process.env.DEFAULT_ADDRESS as string);

      const response = await axiosApiInstance("/users", {
        method: "post",
        data: formData,
      });

      const userDatabaseID = response.data.id;

      // Use the user information as needed
      const userInfo = {
        userId,
        userEmail,
        userName,
        userGivenName,
        userFamilyName,
        userProfilePicture,
        userSessionExpiry,
        userDatabaseID,
      };

      return { userInfo };
    }

    // Extract user information from the payload
  } catch (err) {
    console.error("error verifying user token", err);
  }
});

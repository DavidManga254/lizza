import { OAuth2Client } from "google-auth-library";
import { type TokenPayload } from "google-auth-library";

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

      console.log("here is user profile picture", userProfilePicture);

      // Use the user information as needed
      const userInfo = {
        userId,
        userEmail,
        userName,
        userGivenName,
        userFamilyName,
        userProfilePicture,
        userSessionExpiry,
      };

      return { userInfo };
    }

    // Extract user information from the payload
  } catch (err) {
    console.error("error verifying user token", err);
  }
});

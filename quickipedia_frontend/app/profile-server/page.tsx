import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const session = await getSession();

  let token;
  if (session) {
    token = session.idToken;
  }

  return (
    <main>
        <div>{token}</div>
    </main>
  );
}

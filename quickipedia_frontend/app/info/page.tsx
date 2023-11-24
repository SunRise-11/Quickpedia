import { getAccessToken } from "@auth0/nextjs-auth0";

export default async function Info() {
  getToken().then((res) => console.log(res));
  return (
    <main className="flex min-h-screen mt-10 flex-col items-center justify-between p-24">
      <div>Info Page</div>
    </main>
  );
}

async function getToken() {
  const { accessToken } = await getAccessToken();
  return { props: { token: accessToken } };
}

'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

const Page = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return <div>User not authenticated.</div>;
  }

  return (
    user &&
    <div>
      <img src={user.picture ?? ""} alt={user.name ?? ""} width={24} height={24}/> {/* if the left thing is null use the right thing */}
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <h2>Oi BURROS</h2>
    </div>
  );
}

export default Page;
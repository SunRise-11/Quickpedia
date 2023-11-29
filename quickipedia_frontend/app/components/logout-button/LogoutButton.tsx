import React from 'react'

export const LogoutButton = () => {
  return (
    <>
      <button className=" text-secondaryB border border-secondaryB rounded-xl hover:underline hover:bg-secondaryB hover:text-primaryB mx-auto px-3 py-1">
        <a href="/api/auth/logout">LOGOUT</a>
      </button>
    </>
  )
}

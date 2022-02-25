import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getUserId, getUsername } from '../lib/userAuth'

const Layout = ({ children }) => {
  const [ username, setUsername ] = useState('')
  const [ userId, setUserId ] = useState(-1)
  useEffect(() => {
    setUsername(getUsername())
    setUserId(getUserId())
  }, [])

  return (
    <>
      <header className="flex flex-row w-full px-10 py-2 shadow">
        <span className="h-8 items-center space-x-6">
          <Link href="/"><a><span className="text-2xl">Golfr 🏌️</span></a></Link>
          <Link href="/"><a><span className="text-xl">Home</span></a></Link>
        </span>
        <span className="h-8 items-center t ext-xl ml-auto">
          <Link href={`/golfers/${userId}`}>
            <a>
              {username}
            </a>
          </Link>
          <span className="text-sm">
            {' ('}
            <Link href={'/logout'}>
              <a className="underline text-blue-700">logout</a>
            </Link>
            {')'}
          </span>
        </span>
      </header>
      <div className="px-10 py-2">
        {children}
      </div>
    </>
  )
}

export default Layout

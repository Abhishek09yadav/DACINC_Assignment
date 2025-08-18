"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useReducer } from 'react'


const GoHome = () => {
  const router = useRouter()
  const pathname = usePathname()

  if(pathname ==='/') return null
  return (
    <div className='fixed top-5 left-5'>
      <button onClick={() => router.push('/')} className='btn btn-primary'>Go Home </button>
    </div>
  )
}

export default GoHome

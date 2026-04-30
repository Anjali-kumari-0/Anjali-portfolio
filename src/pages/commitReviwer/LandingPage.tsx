import { Input } from '@/components/ui/input'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='item-center justify-content-center'>
        <h1>Welcome to the Commit Reviewer</h1>
        <Input placeholder='Enter your commit message here...' className='w-full max-w-md mt-4' />
    </div>
  )
}

export default LandingPage
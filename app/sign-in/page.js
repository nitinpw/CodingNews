import SignBtns from '@/components/SignBtns'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

const page = async() => {

  const session = await getServerSession(authOptions);

  if(session){
    redirect("/dashboard");
  }

  return (
    <div>
     <SignBtns/>
    </div>
  )
}

export default page

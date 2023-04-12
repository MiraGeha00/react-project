import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import TodosList from './(users)/todos/TodosList'
import React, { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Suspense fallback={<p>Loading the todos...</p>}>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <div className="flex space-x-2">
    {/*  @ts-ignore */}
       <TodosList/>
  </div>
  </Suspense>

  <Suspense fallback={<p>Loading the shopping trolley...</p>}>
  <h1>Loading Shopping Trolley</h1>
  <div className="flex space-x-2">
     {/*  @ts-ignore */}
      <TodosList/>
  </div>
  </Suspense>
  
  </>
  )
}

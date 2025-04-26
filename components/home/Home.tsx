/* eslint-disable prettier/prettier */
import React from 'react'
import About from './About'
import Projects from './Projects'
import RecentPosts from './RecentPosts'
import TechStack from './TechStack'
import Contact from './Contact'

function Home({ posts }) {
  return (
    <>
      <About />
      <Projects />
      <RecentPosts posts={posts} />
      <TechStack />
      <Contact />
    </>
  )
}

export default Home

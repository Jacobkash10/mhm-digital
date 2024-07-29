import About from '@/components/Pages_components/Home/About'
import Banner from '@/components/Pages_components/Home/Banner'
import Blog from '@/components/Pages_components/Home/Blog'
import Case from '@/components/Pages_components/Home/Case'
import Contact from '@/components/Pages_components/Home/Contact'
import Process from '@/components/Pages_components/Home/Process'
import Services from '@/components/Pages_components/Home/Services'
import Testimonial from '@/components/Pages_components/Home/Testimonial'
import Why from '@/components/Pages_components/Home/Why'
import React from 'react'

function page() {
  return (
    <div>
      <Banner />
      <Services />
      <Why />
      <About />
      <Process />
      <Case />
      <Testimonial />
      <Blog />
      <Contact />
    </div>
  )
}

export default page

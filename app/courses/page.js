import CourseBenefits from '@/components/courses/CourseBenefits'
import CourseCategories from '@/components/courses/CourseCategories'
import CourseCTA from '@/components/courses/CourseCTA'
import CourseGrid from '@/components/courses/CourseGrid'
import CourseHero from '@/components/courses/CourseHero'
import LearningPath from '@/components/courses/LearningPath'
import React from 'react'

const Courses  = () => {
  return (
    <>
       <div className="courses-page">
      <CourseHero />
      <CourseCategories />
      <CourseGrid />
      <LearningPath />
      <CourseBenefits />
      <CourseCTA />
    </div>
    </>
  )
}

export default Courses 

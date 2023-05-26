import React from 'react'
import styled from 'styled-components';
import Head from 'next/head'
import styles from '../../styles/Course.module.css'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top:6rem;
  margin:0 1rem 3rem 1rem;
`;


const Course = () => {
  return (
    <Wrapper>
      <Head>
        <title>My Python Course</title>
      </Head>
      <div className={styles.container}>
      <div className={styles.courseHeader}>
        <img src="" alt="Course Image" className={styles.courseImage} />
        <div className={styles.courseInfo}>
          <h1>Course Title</h1>
          <p>Course Description</p>
          <div className={styles.priceContainer}>
            <h2>Course Price: $99.99</h2>
            <button className={styles.enrollButton}>Enroll Now</button>
          </div>
        </div>
      </div>
      <div c>
        <div className={styles.courseLessons}>
          <h2>Course Lessons</h2>
          <ul className={styles.ul}>
            <li className={styles.li}>Lesson 1: Introduction</li>
            <li className={styles.li}>Lesson 2: Getting Started</li>
            <li className={styles.li}>Lesson 3: Advanced Techniques</li>
            <li className={styles.li}>Lesson 4: Final Project</li>
          </ul>
        </div>
        <div className={styles.lessonDetails}>
          <h2>Lesson Details</h2>
          <p>Click on a lesson to view its details</p>
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

export default Course;

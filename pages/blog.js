import React from 'react'
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import blogStyles from "../styles/Blog.module.css"

const Blog = () => {
  return (
    <div className={styles.container}><div className={styles.main}>


        <Link href={'/blog/how-to-learn-javascript-in-2022'}>
            <div className={blogStyles.blogItem}>
            <h2>How to learn javascript in 2022 ?</h2>
            <p>Ut officia nulla magna ut qui velit dolor laborum cupidatat consequat mollit aliqua voluptate. Est ea quis id mollit dolor. Adipisicing ea duis exercitation consectetur nostrud dolore officia et esse enim qui magna enim. Sunt labore consequat aute aliqua magna cupidatat in esse. Excepteur ad incididunt velit qui duis. Consequat occaecat ullamco non et tempor aliqua velit.</p>
            </div>
        </Link>
   
        </div></div>
  )
}

export default Blog
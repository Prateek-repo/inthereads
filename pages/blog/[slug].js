import React from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/Home.module.css";

const Slug = () => {
    const router = useRouter()
  const { slug } = router.query

  return (
    <div className={styles.container}><div className={styles.main}>
    <h2>{slug} ?</h2>
    <p> Magna excepteur non veniam nisi cupidatat ex dolor enim enim duis minim ullamco. Ut dolor proident adipisicing adipisicing quis. Fugiat cillum et amet veniam. Labore excepteur quis ea incididunt ea quis sit incididunt pariatur commodo cupidatat adipisicing minim deserunt. Excepteur labore velit mollit ut duis irure velit. Tempor eiusmod esse fugiat ullamco sunt duis nulla reprehenderit consectetur Lorem. </p>
    </div>
    </div>
  )
}

export default Slug
import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts | NewsLetter</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor tempore nihil.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adi autem nobis obcaecati placeat non, id sint natus, accusantium corrupti.</p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor tempore nihil.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adi autem nobis obcaecati placeat non, id sint natus, accusantium corrupti.</p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor tempore nihil.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adi autem nobis obcaecati placeat non, id sint natus, accusantium corrupti.</p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor tempore nihil.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adi autem nobis obcaecati placeat non, id sint natus, accusantium corrupti.</p>
          </a>
        </div>
      </main>
    </>
  );
}
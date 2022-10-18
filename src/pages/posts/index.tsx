import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { client } from '../../services/prismic';

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = client;

  const response = await prismic.predicates('product'
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.description'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}
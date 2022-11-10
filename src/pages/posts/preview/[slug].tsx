import * as prismicH from '@prismicio/helpers';
import { GetStaticProps } from "next";
import Head from "next/head";

import { createClient } from "../../../services/prismic";

import styles from '../post.module.scss';

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  return(
    <>
      <Head>
        <title>{post.title} | Newsletter</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div 
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params, previewData } ) => {
  const { slug } = params;

  const client = createClient({ previewData });

  const response = await client.getByUID('post', String(slug), {})
  
  const post = {
    slug,
    title: response.data.title,
    content: prismicH.asHTML(response.data.slices[0].items[0].description),
    updatedAt: new Date(response.last_publication_date)
    .toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post,
    }
  }
}
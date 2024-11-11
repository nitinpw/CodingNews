export async function getStaticProps() {
    const res = await fetch('https://coding-news-web.vercel.app/api/posts/');
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  }
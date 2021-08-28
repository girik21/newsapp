
import { useRouter } from 'next/router';
import styles from '../../styles/feed.module.css';
import { GiAsianLantern } from "react-icons/gi";
import Link from "next/link";


export const Feed = ({pageNumber, articles}) => {

    const router = useRouter();
console.log(articles, pageNumber); 


return (
            
       <div className='page-container'>
          <div>
      <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
    <Link href="/">
      <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
        <GiAsianLantern className="inline text-4xl mr-4" /> News24
      </a>
    </Link>
    

    
</div>
<div className="px-2 md:px-24 bg-white flex border-b border-black">
    <Link href="/">
        <a className="mr-10 text-xl mt-2 px-5 border-b-2 border-transparent hover:border-black">Home</a>
    </Link>

    <Link href="feed/1">
        <a className="mr-10 text-xl mt-2 px-5 border-b-2 border-transparent hover:border-black">Feed</a>
    </Link>

    <Link href="/aboutus">
        <a className="mr-10 text-xl mt-2 px-5 border-b-2 border-transparent hover:border-black">About US</a>
    </Link>
    </div>
    </div>
            <div className={styles.main}>
           {articles.map((article, index) => (
                 <div key={index} className={styles.post}>
                    <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                     <i><p>{article.description} </p> </i>
                     {!!article.urlToImage && <img src={article.urlToImage} />}

                        </div>
                          ))}
            </div>      
                
                <div className={styles.paginator}>
                <div
            className={pageNumber === 1 ? styles.disabled : styles.active}
            onClick={() => {
              if (pageNumber > 1) {
                router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
            }
          }}
        >
            Previous Page
          </div>

<div>#{pageNumber}</div>
<div
           
            onClick={() => {
              if (pageNumber < 5) {
                router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
            }
          }}
        
             className={pageNumber === 5 ? styles.disabled : styles.active}>
           Next Page
          </div>






                </div>
       </div>
    );
};


export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;
  
    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
      return {
        props: {
          articles: [],
          pageNumber: 1,
        },
      };
    }
  
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        },
      ).then(res => res.json());
    
      const { articles } = apiResponse;
    
      return {
        props: {
          articles: articles,
          pageNumber: Number.parseInt(pageNumber),
        },
      };
    };
    
    export default Feed;

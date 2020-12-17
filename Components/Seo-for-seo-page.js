import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Head from "next/head";



const GET_SEO = gql`
  query getSeo {
    page(id: "2", idType: DATABASE_ID) {
      seo {
        canonical
        cornerstone
        focuskw
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphSiteName
        opengraphPublisher
        opengraphTitle
        opengraphType
        opengraphUrl
        twitterDescription
        title
        twitterTitle
        schema {
          articleType
          pageType
        }
      }
    }
  }
`;

function SeoForSeoPage() {
  const { data } = useQuery(GET_SEO);

  console.log(data.page);

  const seo = data.page.seo;

  
  return (
    <div>
      <Head>
        <title>{seo.title}</title>
        {seo.metaDesc ? (
          <meta name="description" content={seo.metaDesc} />
        ) : null}
        {seo.opengraphTitle ? (
          <meta property="og:title" content={seo.opengraphTitle} />
        ) : null}
        {seo.opengraphType ? (
          <meta property="og:type" content={seo.opengraphType} />
        ) : null}
        {seo.opengraphPublisher ? (
          <meta property="og:publisher" content={seo.opengraphPublisher} />
        ) : null}
        {seo.opengraphSiteName ? (
          <meta property="og:site_name" content={seo.opengraphSiteName} />
        ) : null}

        {seo.opengraphAuthor ? (
          <meta property="og:author" content={seo.opengraphAuthor} />
        ) : null}
        {seo.opengraphDescription ? (
          <meta property="og:description" content={seo.opengraphDescription} />
        ) : null}
        {seo.opengraphModifiedTime ? (
          <meta
            property="og:modified_time"
            content={seo.opengraphModifiedTime}
          />
        ) : null}
        {seo.opengraphPublishedTime ? (
          <meta
            property="og:published_time"
            content={seo.opengraphPublishedTime}
          />
        ) : null}
        {seo.opengraphUrl ? (
          <meta property="og:url" content={seo.opengraphUrl} />
        ) : null}
      </Head>
      <div>
        Here is the seo content for this page, <pre>{JSON.stringify(data)}</pre>
        <Link href="/test">test</Link>
      </div>
    </div>
  );
}


export default SeoForSeoPage;
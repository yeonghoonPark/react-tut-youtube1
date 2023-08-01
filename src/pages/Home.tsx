import React from "react";
import { useQuery } from "react-query";
import { Video } from "../model/video";

const getMostPopularVideos = async (): Promise<Video[]> => {
  console.log("[getMostPopularVideos]");
  const data = await fetch(`data/most_popular_videos.json`)
    .then((res) => res.json())
    .then((data) => data.items);

  return data;
};

export default function Home() {
  const {
    data: mostPopularVides,
    isLoading,
    error,
  } = useQuery(
    "mostPopularVideos", // key
    getMostPopularVideos, // fetch
    {
      staleTime: 1000 * 60 * 5, // options
    },
  );

  console.log(mostPopularVides, "@@");

  if (isLoading) return <span>Loading...</span>;

  if (error) return <>Something Wrong...{error}</>;

  return (
    <section>
      <h2>Hot Trends</h2>
      <ul>
        {mostPopularVides &&
          mostPopularVides.map(({ id, snippet }: Video) => (
            <li key={id}>
              <img
                src={snippet.thumbnails.standard.url}
                alt={`${snippet.title} img`}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* <iframe
title={id}
id='ytplayer'
itemType='html/text'
width='720'
height='405'
src={`https://www.youtube-nocookie.com/embed/${id}`}
frameBorder='0'
allowFullScreen={true}
/> */
}

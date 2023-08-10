import React from "react";
import { Video } from "../model/video";
import { useQuery } from "react-query";
import VideoCard from "../components/VideoCard";
import VideoGrid from "../components/VideoGrid";
import { useRecoilValue } from "recoil";
import { videoNavQueryState } from "../recoil/video/atom";
import { v4 as uuid } from "uuid";

const getUrlForVideos = (query: string): string => {
  return query === "trendy"
    ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=28&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
};

const getVideos = async (query: string): Promise<Video[]> => {
  console.log("[##$$getVideos]");

  const url = getUrlForVideos(query);

  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data.items);

  return data;
};

export default function HomePage() {
  const videoNavQuery = useRecoilValue(videoNavQueryState);
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery(
    ["videos", videoNavQuery], // key
    () => getVideos(videoNavQuery), // fetch
    {
      staleTime: 1000 * 60 * 5, // options
    },
  );

  if (isLoading) return <span>Loading...</span>;

  if (error) return <>Something Wrong...{error}</>;

  console.log(videos, "##$$videos");

  return (
    <section>
      <VideoGrid>
        {videos &&
          videos.map((video: Video) => (
            <li key={uuid()}>
              <VideoCard video={video} />
            </li>
          ))}
      </VideoGrid>
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

import React from "react";
import { useParams } from "react-router-dom";
import { Video } from "../model/video";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";
import VideoGrid from "../components/VideoGrid";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";

const getSearchedVideos = async (
  search: string | undefined,
): Promise<Video[]> => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data.items);

  return data;
};

export default function SearchedPage() {
  const { search } = useParams();
  const {
    data: searchedVideos,
    isLoading,
    error,
  } = useQuery(
    ["searchedVideos", search], // key
    () => getSearchedVideos(search), // fetch
    {
      staleTime: 1000 * 60 * 5, // options
    },
  );

  if (isLoading) return <Loading />;

  if (error) return <>Something Wrong...{error}</>;

  return (
    <section>
      <VideoGrid>
        {searchedVideos &&
          searchedVideos.map((video: Video) => (
            <li key={uuid()}>
              <VideoCard
                video={video}
                flexDirectionType={"column"}
                alignItemsType={"flex-start"}
              />
            </li>
          ))}
      </VideoGrid>
    </section>
  );
}

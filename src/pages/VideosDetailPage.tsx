import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { selectedVideoState } from "../recoil/video/atom";
import { Channel } from "../model/channel";
import { Video } from "../model/video";
import VideoCard from "../components/VideoCard";
import VideoDetailCard from "../components/VideoDetailCard";
import RelatedVideoGrid from "../components/RelatedVideoGrid";
import { v4 as uuid } from "uuid";

const getChannelInfo = async (
  channelId: string | undefined,
): Promise<Channel> => {
  console.log("[##$$getChannelInfo]");

  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data?.items[0]);

  return data;
};

const getRelatedVideo = async (
  videoTitle: string | undefined,
): Promise<Video[]> => {
  console.log("[##$$getRelatedVideo]");

  const url = ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${videoTitle}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data?.items);

  return data;
};

export default function VideosDetailPage() {
  const selectedVideo = useRecoilValue(selectedVideoState);
  const channelId = selectedVideo?.snippet?.channelId;

  const {
    data: channelInfo,
    isLoading: isChannelInfoLoading,
    error: channelInfoError,
  } = useQuery(
    ["channelInfo", selectedVideo],
    () => getChannelInfo(channelId),
    {
      staleTime: 1000 * 60 * 5,
    },
  );

  const {
    data: relatedVideos,
    isLoading: isRelatedVideosLoading,
    error: relatedVideosError,
  } = useQuery(
    ["relatedVideos", selectedVideo],
    () => getRelatedVideo(selectedVideo?.snippet.title),
    {
      staleTime: 1000 * 60 * 5,
    },
  );

  console.log(relatedVideos, "##$$relatedVideos");

  // console.log(selectedVideo, "##$$selectedVideo");

  console.log(channelInfo, "##$$channelInfo");

  if (isChannelInfoLoading && isRelatedVideosLoading)
    return <span>Loading...</span>;

  if (channelInfoError || relatedVideosError)
    return <>Something Wrong...{channelInfoError}</>;

  return (
    <SVideoDetailPageContainer>
      {channelInfo && selectedVideo && (
        <section>
          <VideoDetailCard
            video={selectedVideo}
            channelThumbnail={channelInfo.snippet.thumbnails.default}
          />
        </section>
      )}

      <section>
        <RelatedVideoGrid>
          {relatedVideos &&
            relatedVideos.map((video: Video) => (
              <li key={uuid()}>
                <VideoCard
                  video={video}
                  flexDirectionType={"row"}
                  alignItemsType={"center"}
                />
              </li>
            ))}
        </RelatedVideoGrid>
      </section>
    </SVideoDetailPageContainer>
  );
}

const SVideoDetailPageContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  section:nth-child(1) {
    width: 68%;
  }

  section:nth-child(2) {
    width: 32%;
  }
`;

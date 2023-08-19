import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { selectedVideoState } from "../recoil/video/atom";
import { Channel } from "../model/channel";
import VideoDetailCard from "../components/VideoDetailCard";
import styled from "styled-components";
import { Video, VideoId } from "../model/video";

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
    isLoading,
    error,
  } = useQuery(
    ["channelInfo", selectedVideo],
    () => getChannelInfo(channelId),
    {
      staleTime: 1000 * 60 * 5,
    },
  );

  const { data: relatedVideos } = useQuery(
    ["relatedVideos", selectedVideo],
    () => getRelatedVideo(selectedVideo?.snippet.title),
    {
      staleTime: 1000 * 60 * 5,
    },
  );

  console.log(relatedVideos, "##$$relatedVideos");

  // console.log(selectedVideo, "##$$selectedVideo");

  // console.log(channelInfo, "##$$channelInfo");

  if (isLoading) return <span>Loading...</span>;

  if (error) return <>Something Wrong...{error}</>;
  return (
    <SVideoDetailPageContainer>
      {channelInfo && selectedVideo && (
        <VideoDetailCard
          video={selectedVideo}
          channelThumbnail={channelInfo.snippet.thumbnails.default}
        />
      )}
      <div>test</div>
    </SVideoDetailPageContainer>
  );
}

const SVideoDetailPageContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .video-detail-card {
    width: 68%;
  }

  div {
    /* width: 30%; */
  }
`;

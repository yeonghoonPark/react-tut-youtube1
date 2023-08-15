import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { selectedVideoState } from "../recoil/video/atom";
import { Channel } from "../model/channel";
import VideoDetailCard from "../components/VideoDetailCard";

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

  console.log(selectedVideo, "##$$selectedVideo");

  console.log(channelInfo, "##$$channelInfo");

  if (isLoading) return <span>Loading...</span>;

  if (error) return <>Something Wrong...{error}</>;
  return (
    <>
      {channelInfo && selectedVideo && (
        <VideoDetailCard
          video={selectedVideo}
          channelThumbnail={channelInfo.snippet.thumbnails.default}
        />
      )}
    </>
  );
}

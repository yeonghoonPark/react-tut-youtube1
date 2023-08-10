import React from "react";
import { useParams } from "react-router-dom";

export default function VideosDetailPage() {
  const { id } = useParams();

  return (
    <>
      <iframe
        title={id}
        id='ytplayer'
        itemType='html/text'
        width='720'
        height='405'
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        frameBorder='0'
        allowFullScreen={true}
      />
    </>
  );
}

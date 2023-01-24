import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export default function ReactPlayerPage() {
  const VideoWrap = styled.div`
    width: 800px;
    height: 600px;
  `;

  return (
    <VideoWrap>
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/ZHmVA1yqbAU"
        muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
        playing={true}
        // light={true}
        controls={true}
      />
    </VideoWrap>
  );
}

import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import YoutubeEmbed from "./YouTubeEmbed";

const EpisodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;

  /* flex-wrap: wrap; */
`;
const EpisodeContainer = styled.div`
  margin: 5px;
  padding: 8px;
  border: 1px solid teal;
  width: 250px;
`;

const NameWrapper = styled.div`
  padding: 10px;
  font-size: large;
  color: #383535;
  display: flex;
  justify-content: center;
`;

const DateWrapper = styled.div`
  padding: 10px;
  font-size: large;
  color: #383535;
  display: flex;
  justify-content: center;
`;

const DescWrapper = styled.div`
  border: 1px solid grey;
  padding: 10px;
  font-size: small;
  color: #383535;
  display: flex;
  justify-content: center;
`;

const VideoWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 225px;
`;

const Video = () => {
  const [episodeData, setEpisodeData] = useState([]);

  const fetchData = () => {
    return axios
      .get(`https://api.sampleapis.com/futurama/episodes`)
      .then(function ({ data }) {
        return data;
      })
      .catch(function (error) {
        return error;
      });
  };

  useEffect(() => {
    fetchData().then((results) => {
      setEpisodeData(results);
    });
  }, []);

  return (
    <div>
      <EpisodeWrapper>
        {episodeData.map((episode, id) => (
          <EpisodeContainer key={id}>
            <VideoWrapper>
              <YoutubeEmbed></YoutubeEmbed>
            </VideoWrapper>
            <NameWrapper>{episode.title}</NameWrapper>
            <DateWrapper>Air Date: {episode.originalAirDate} </DateWrapper>
            <DescWrapper>{episode.desc}</DescWrapper>
          </EpisodeContainer>
        ))}
      </EpisodeWrapper>
    </div>
  );
};

export default Video;

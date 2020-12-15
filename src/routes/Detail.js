import React from 'react'
import {useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default function Detail() {
  const { id } = useParams();
  const {loading, data} = useQuery(GET_MOVIE, {
    variables: {id}
  });
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading && data && data.movie && <h1>{data.movie.title}</h1>}
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useQuery } from '@apollo/client';
import { GET_SHIPS } from '@api/ship/queries/getShips';
import { ShipsList, Ship } from '@api/ship/types';
import { ShipCard } from '@containers/ship/ShipCard';

export const getStaticProps = () => {
  return {
    props: {
      title: "SpaceX Ships",
      description: "SpaceX Ship List",
      url: "https://localhost:3000",
    },
  };
};

const LIMIT = 10;

export const HomePage = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data, loading, error, fetchMore} = useQuery<ShipsList>(GET_SHIPS, {
    variables: {
      offset,
      limit: LIMIT
    },
  });

  useEffect(() => {
    fetchMore({
      variables: {
        offset: offset * LIMIT,
      }
    })
  }, [offset])

  useEffect(() => {
    window.addEventListener('scroll', loadMoreData);
  })

  // By throwing an error we can gratefully handle it through React Error Boundary
  if(error) throw error;
  if(loading) return <div>Loading...</div>;

  const loadMoreData = (event: Event) => {
    const { target }  = event as EventTarget | any;
    const { scrollHeight, scrollTop } = target.documentElement;
    const currentHeight = Math.ceil(scrollTop + window.innerHeight);
    if (currentHeight + 1 >= scrollHeight) return setOffset(offset + 1);
  }

  return (
    <>
      <Box component={Typography} mt={2} mb={4} align="center" variant="h2">
        Ships
      </Box>
      { data?.ships.map((ship: Ship) => <ShipCard key={ship.id} ship={ship} loading={loading}/>) }
    </>
  );
};

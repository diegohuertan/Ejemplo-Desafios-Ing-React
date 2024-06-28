import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageContainer from '../../components/container/PageContainer';
import RecipeReviewCard from './cardsuperheroes';
import { Grid, Pagination, Stack } from '@mui/material';

function Heroes() {
  const [superheroes, setSuperheroes] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12; // Ajusta según necesites

  useEffect(() => {
    axios.get(`https://akabab.github.io/superhero-api/api/all.json`)
      .then((response) => {
        setSuperheroes(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = superheroes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PageContainer title="superheroes" description="lista superheroes">
      <Grid container spacing={1}>
        {currentItems.map((superheros) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={superheros.id}>
            <RecipeReviewCard superheros={superheros} />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} alignItems="center" marginTop={2}>
        <Pagination
          count={Math.ceil(superheroes.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </PageContainer>
  );
}

export default Heroes;
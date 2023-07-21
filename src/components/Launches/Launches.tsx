import React, { useEffect, useState } from 'react';
import { LaunchType } from '../../types/launches';
import { api } from '../../api';
import { Grid } from '@mui/material';

const Launches = () => {
  const [launches, setLaunches] = useState<LaunchType[]>([]);

  useEffect(() => {
    const fetchLaunchesAndSet = async () => {
      const fetchedLaunches = await api.fetchAllLaunches();
      setLaunches(fetchedLaunches);
    };

    fetchLaunchesAndSet();
  }, []);

  console.log('launches:', launches);

  return (
    <div>
      <Grid container spacing={2}></Grid>
    </div>
  );
};

export default Launches;

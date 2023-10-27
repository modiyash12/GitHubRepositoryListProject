import React, { useEffect, useState } from 'react';
import { Box } from '../components/Box';
import { fetchApiData } from '../services/RepositoryService';
import Loader from '../components/Loader';

export const Repository = () => {
  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);


  const fetchData = (page) => {
    fetchApiData(page).then(response => {
      setRepoList((prevRepoList) => [...prevRepoList, ...response.items]);
      setLoading(false);
    })
      .catch(error => {
        console.error(error);
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);


  const renderBoxes = () => {
    return repoList.map((item) => (
      <Box key={item.id} item={item} />
    ));
  };

  const isNearBottom = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    return scrollY + windowHeight >= documentHeight - 200;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isNearBottom() && !loading) {
        setCurrentPage((prevPage) => prevPage + 1);
        setLoading(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div>
      {renderBoxes()}
      {loading && <Loader />}
    </div>
  );
};

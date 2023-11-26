import React, { useState, useEffect } from 'react';
import APIRequest from './API';
import Button from './Button';
import ImageGallery from './ImageGallery/';
import { SearchBar } from './SearchBar';
import Loader from './Loader';
import Modal from './Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyled } from './App.styled';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      if (query === '') {
        return;
      }

      setLoading(true);
      try {
        const { totalHits: fetchedTotalHits, hits: fetchedHits } =
          await APIRequest(query, page);
        setTotalHits(fetchedTotalHits);
        setHits(prevHits => [...prevHits, ...fetchedHits]);
      } catch (error) {
        console.error('Error fetching images:', error.message);
        toast.error('Error fetching images', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const updateQuery = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setHits([]);
  };

  const updatePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const maxPage = Math.ceil(totalHits / 12);

  const openModal = (largeImage, imgTags) => {
    setLargeImageUrl(largeImage);
    setTags(imgTags);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AppStyled>
      <SearchBar updateQuery={updateQuery} />
      <ImageGallery images={hits} openModal={openModal} />
      {page < maxPage && <Button title="Load more" onClick={updatePage} />}
      {loading && <Loader />}
      {showModal && (
        <Modal src={largeImageUrl} alt={tags} closeModal={closeModal} />
      )}
    </AppStyled>
  );
};

export default App;

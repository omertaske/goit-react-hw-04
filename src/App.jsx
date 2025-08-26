import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";

const App = () => {
  const ACCESS_KEY = "Ywcmr785sQPn4DZXkoKzOdW_H5lU9UiFHXnynrhoqX0";

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${nextPage}&query=${query}&client_id=${ACCESS_KEY}&per_page=12`
      );
      const data = await response.json();
      setImages((prev) => [...prev, ...data.results]);
      setPage(nextPage);
    } catch (err) {
      setError("Daha fazla resim yüklenemedi!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=${ACCESS_KEY}&per_page=12`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (err) {
      setError("Resimler yüklenemedi!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <div>
          <ImageGallery images={images} onImageClick={openModal} />
          <LoadMoreBtn onClick={handleLoadMore} />
        </div>
      )}
      <ImageModal isOpen={isModalOpen} image={modalImage} onClose={closeModal} />
    </div>
  );
};

export default App;

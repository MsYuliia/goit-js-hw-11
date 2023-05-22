import axios from 'axios';

export async function fetchImg(searchQuery, page) {
  const key = '36587845-1230cc489a729768340ecd21b';
  const response = await axios.get(
    `https://pixabay.com/api/?key=${key}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );
  return response.data;
};

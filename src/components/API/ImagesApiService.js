import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const OPTIONS = 'key=27490013-9148c53e2810ac9eb458ae5f0&image_type=photo&orientation=horizontal&per_page=12';
 
async function fetchImages(query, page) {
    
    try {
        const {data} = await axios.get(`${URL}?q=${query}&page=${page}&${OPTIONS}`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default fetchImages;
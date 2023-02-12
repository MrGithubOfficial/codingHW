import axios from "axios";

const searchImages = async (term) => {
  const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID NfHUFs_4-Q2ETW5lmBwcov9-KwP-jqpBiB5bfnRywHE'
        },
        params: {
            query: term,
        },
    });



    return response.data.results
    ;
};

export default searchImages;
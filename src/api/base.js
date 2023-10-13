import axios from 'axios'

const  URI = 'https://postgresql-testchatbot.alwaysdata.net:5432';

const get = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url);
    } catch(err) {
        console.log(err);
    }
}
const post = async (endpoint, request) => {
    try{
        const url = URI.concat(endpoint);
        return await axios.post(url, request);
    } catch(err) {
        console.log(err);
        return null
    }

}

const put = async (endpoint,request) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.put(url,request);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const remove = async (endpoint) => {

    try {
        const url = URI.concat(endpoint);

        return await axios.delete(url);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const Base = { get, put, post, remove }

export default Base;
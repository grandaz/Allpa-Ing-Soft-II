import axios from 'axios'

class Base {

    static URI: string = 'https://postgresql-testchatbot.alwaysdata.net:5432';

    static async get(endpoint: string): Promise<any> {
        try {
            const url = Base.URI.concat(endpoint);
            return await axios.get(url);
        } catch(err) {
            console.log(err);
            //throw err;
        }
    }
    
    static async post(endpoint: string, request: string): Promise<any> {
        try{
            const url = Base.URI.concat(endpoint);
            return await axios.post(url, request);
        } catch(err) {
            console.log(err);
            return null
            //throw err;
        }
    }

    static async remove (endpoint: string): Promise<any> {
        try {
            const url = Base.URI.concat(endpoint);
            return await axios.delete(url);
        } catch(err) {
            console.error(err);
            return null;
        }
    }

}

export default Base;
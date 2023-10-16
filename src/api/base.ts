import axios from "axios";

class Base {
    static URI: string = 'http://localhost:3001';

    static async get(endpoint: string): Promise<any> {
        try {
            const url = Base.URI.concat(endpoint);
            return await axios.get(url);
        } catch (err) {
            console.error('GET Error:', err);
            // throw err;
        }
    }

    static async post(endpoint: string, request: any): Promise<any> {
        try {
            const url = Base.URI.concat(endpoint);
            return await axios.post(url, request);
        } catch (err) {
            console.error('POST Error:', err);
            return null;
            // throw err;
        }
    }

    static async remove(endpoint: string): Promise<any> {
        try {
            const url = Base.URI.concat(endpoint);
            return await axios.delete(url);
        } catch (err) {
            console.error('DELETE Error:', err);
            return null;
        }
    }
}

export default Base;
import axios, {AxiosResponse} from 'axios';

const getRandomUsers = (result: number = 20): Promise<AxiosResponse<any>> => {
    return axios.get(`https://randomuser.me/api?results=${result}`);
}

export {getRandomUsers};

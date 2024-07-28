import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/cards'

export const getAll = () => request.get(BASE_URL);


export const getOne = (cardId) => request.get(`${BASE_URL}/${cardId}`);

export const create = (cardData) => request.post(`${BASE_URL}`, cardData);

const cardsApi = {
    getAll,
    getOne,
    create,
}

export default cardsApi

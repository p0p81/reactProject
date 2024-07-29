import cardsApi from "../api/cards-api";

export function useCreateCard() {
    const cardCreateHandler = (cardData) => cardsApi.create(cardData)
    
    return cardCreateHandler
}
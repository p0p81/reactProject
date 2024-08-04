import { useEffect, useState } from "react";
import cardsApi from "../api/cards-api";

export function useCreateCard() {
    const cardCreateHandler = (cardData) => cardsApi.create(cardData)
    
    return cardCreateHandler
}

export function useGetOneCard(cardId) {
    const [cardData, setCardData] = useState({
        fullName: '',
        email: '',
        experience: '',
        profession: '',
        phone: '',
        photo: '',
    })

    useEffect(() => {
        (async () => {
            try {
                const result = await cardsApi.getOne(cardId);
                setCardData(result);
            } catch (error) {
                console.error('Error fetching class data:', error)
            }
        })();
    }, [cardId]);

    return[cardData, setCardData]
}
import axios from 'axios';

export const getCityUfFromPostalCodeService = async (postalCode: string) => {
    const response = await axios(`https://viacep.com.br/ws/${postalCode}/json/`);
    const { data } = response;

    return {
        city: data.localidade,
        uf: data.uf,
    };
}
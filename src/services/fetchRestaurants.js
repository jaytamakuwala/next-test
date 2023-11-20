import axios from "axios";

export const fetchRestaurants = async () => {
    let response = []
    let options = {
        method: 'GET',
        url: `https://nextjs-orpin-omega-98.vercel.app/api/restaurants`,
    };
    await axios(options)
        .then(res => {
            response = res?.data
        })
        .catch(err => {
            console.log('API ERROR---', err)
        })

    return response
}

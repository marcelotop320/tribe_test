import axios from 'axios';

export const getData = async () => await axios.get("https://www.floatrates.com/daily/usd.json")
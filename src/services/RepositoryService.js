import axios from "axios";
import { getOneMonthBack } from "../components/utils";

const BASE_URL = 'https://api.github.com/search/repositories';

export const fetchApiData = async (currentPage) => {
  const dateMonthAgo = getOneMonthBack();
  try {
    const response = await axios.get(`${BASE_URL}?q=created:>${dateMonthAgo}&sort=stars&order=desc&page=${currentPage}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

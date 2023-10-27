import axios from "axios";
import { getOneMonthBack } from "../components/utils";

const BASE_URL = 'https://api.github.com/search/repositories';

export const fetchApiData = async (currentPage) => {
  const date30DaysAgoStr=getOneMonthBack();
  try {
    const response = await axios.get(
      `${BASE_URL}?q=created:>${date30DaysAgoStr}&sort=stars&order=desc&page=${currentPage}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


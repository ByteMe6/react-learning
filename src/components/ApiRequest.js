import axios from 'axios';

export async function AR(URL) {
  try {
    const response = await axios.get(URL)
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
  }
}
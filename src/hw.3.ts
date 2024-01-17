import axios from "axios";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Comment {
  id: number | string;
  email: string;
  [key: string]: any;
}

const getData = async (url: string): Promise<Comment[]> => {
  const response = await axios.get<Comment[]>(url);
  if (response.status !== 200) return [];

  return response.data;
};

getData(COMMENTS_URL).then((data): void => {
  data
    .map(({ id, email }) => `ID: ${id}, Email: ${email}`)
    .forEach(console.log);
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */

import Home from "../components/screens/Home";
import { BASE_API_URL } from "../constants";

export async function getServerSideProps() {
  try {
    const response = await fetch(`${BASE_API_URL}trending/animes`);
    const responseJson = await response.json();
    return {
      props: {
        trending: responseJson?.data?.data || null,
      },
    };
  } catch (error) {
    return {
      props: {
        trending: null,
      },
    };
  }
}

export default Home;

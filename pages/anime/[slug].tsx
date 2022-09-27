import Anime from "../../components/screens/Anime";
import { BASE_API_URL } from "../../constants";

export async function getServerSideProps(context: any) {
  try {
    const { slug } = context.query;
    const id = slug.split("-").pop();
    const response = await fetch(`${BASE_API_URL}anime/${id}`);
    const responseJson = await response.json();

    if (!responseJson?.data) {
      throw new Error("Anime not found");
    }

    return {
      props: {
        anime: responseJson?.data || null,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      props: {},
    };
  }
}

export default Anime;

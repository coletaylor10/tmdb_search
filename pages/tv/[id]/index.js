import Tvinfo from "../../../components/TvInfo";
import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

const Tv = () => {
  const [fullData, setFullData] = useState();
  let startUrl = "https://api.themoviedb.org/3/";
  let apiKey = "1e14fdee0ea09ca708c0b3a27257ede2";

  useEffect((startUrl, apiKey) => {
    async function dataRequest() {
      let url = "".concat(startUrl, "tv/popular?api_key=", apiKey);
      const response = await fetch(url);

      setFullData(await response.json());
    }

    dataRequest();
  }, []);

  return (
    <div>
      <Navbar data={fullData} />
      <Tvinfo />
    </div>
  );
};

export default Tv;

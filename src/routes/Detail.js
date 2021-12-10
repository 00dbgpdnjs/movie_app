import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
  };
  
  useEffect(() => {
    getMovie();
  }, []);
  
  return (
    <div>
      <h2>{detail.title}</h2>
      <div>
        <img src={detail.medium_cover_image} alt={detail.title} />
        <div>
          <h3>{detail.year}</h3>
          <h3>{detail.rating}</h3>
          <p>{detail.description_full}</p>
        </div>
      </div>
    </div>);
}
export default Detail;
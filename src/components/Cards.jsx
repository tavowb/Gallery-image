import Card from "./Card";
import FormImg from "./FormImg";
import Loading from "./Loading";
import { useFetchImages } from "../hooks/useFetchImages";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImages();

  return (
    <>
      <FormImg handleSubmit={handleSubmit} />

      {loading && <Loading />}
      <div className="row">
        {images.map((img) => {
          return (
            <div className="col" key={img.id}>
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;

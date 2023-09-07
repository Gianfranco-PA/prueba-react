import Link from "next/link";
import "@/commom/background.css"

//Se realiza la peticion a la API
const fecthMovieDetailsData = async (id) => {
  const res = await fetch(`https://swapi.dev/api/films/${id}`);
  const data = await res.json();
  return data;
};

const fecthCharactersData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.name;
};

export default async function page({ params }) {
  const details = await fecthMovieDetailsData(params.id);
  const characters = await details.characters.map((e) =>
    fecthCharactersData(e)
  );
  return (
    <div className="container">
      <div className="row justify-content-center backcard">
        <div className="col-10">
        <Link className="btn btn-warning my-3 ms-1" href={"/"}>Regresar</Link>
          <h1 className="text-center">{details.title}</h1>
          <div className="row">
            <div className="col">
              <p className="fs-4">
                <bold className="fw-bold">Director:</bold> {details.director}
              </p>
            </div>
            <div className="col">
              <p className="fs-4">
                <bold className="fw-bold">Productor:</bold> {details.producer}
              </p>
            </div>
          </div>
          <p className="fs-4"><bold className="fw-bold">Fecha de lanzamiento:</bold> {details.release_date}</p>
          <p className="fs-4 fw-bold">Introducción:</p>
          <p className="fs-6" style={{textAlign: "justify"}}>{details.opening_crawl}</p>
          <p className="fs-4 fw-bold">Personajes:</p>
          <ul className="row row-cols-2 row-cols-lg-4">
            {characters.map((c, i) => {
              return (
                <li key={i} className="fs-6">
                  {c}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

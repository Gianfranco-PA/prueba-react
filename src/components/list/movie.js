import Link from "next/link";

export default function Movie({
  id,
  title,
  release_date,
  opening_crawl,
}) {
  return (
    <did className="col my-3" style={{textAlign: "justify"}}>
      <h4 className="text-center">{title}</h4>
      <p className="fs-6 fw-bold text-center">{release_date}</p>
      <p className="fs-6">{opening_crawl}</p>
      <div className="text-center">
        <Link className="btn btn-warning" href={`/movie/${id}`}>Ver detalle</Link>
      </div>
    </did>
  );
}

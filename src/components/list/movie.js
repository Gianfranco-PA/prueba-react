import Link from "next/link";

export default function Movie({
  episode_id,
  title,
  release_date,
  opening_crawl,
}) {
  return (
    <did key={episode_id} className="col my-3" style={{textAlign: "justify"}}>
      <h4 className="text-center">{title}</h4>
      <p className="fs-6 fw-bold text-center">{release_date}</p>
      <p className="fs-6">{opening_crawl}</p>
      <div className="text-center">
        <Link className="btn btn-warning" href={`/movie/${episode_id}`}>Ver detalle</Link>
      </div>
    </did>
  );
}

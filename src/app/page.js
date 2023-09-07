import ListMovies from "@/components/list/listMovies";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col my-3">
          <ListMovies />
        </div>
      </div>
    </div>
  );
}

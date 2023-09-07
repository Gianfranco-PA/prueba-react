import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center mb-2">
          <Image src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

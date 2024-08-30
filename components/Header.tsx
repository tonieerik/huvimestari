import Image from "next/image";
import imageLogo from "../images/huvimestari-elamyspalvelut.png";

export default function Header() {
  return (
    <div className="relative bg-yellow z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Huvimestari</span>
              <Image
                src={imageLogo}
                alt="Huvimestari"
                width="250"
                height="88"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

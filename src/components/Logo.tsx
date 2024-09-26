
import Image from "next/image";
interface LogoProps {
    src: string;
  }
function Logo({src}:LogoProps) {
    return (
        <div>
            <Image
                className="rounded-full"
                src={src}
                alt="logo"
                width={50}
                height={50}
            />
        </div>
    )
}

export default Logo

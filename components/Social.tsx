import Link from "next/link"
import { FaGithub, FaLinkedinIn,  } from "react-icons/fa"
import { SiQiita } from "react-icons/si";

type Props = {
  containerStyles: string
  iconStyles: string
}

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <SiQiita />, path: "" },
  { icon: <FaGithub />, path: "" },
]

const Social = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => {
        return (
          <Link key={i} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social;
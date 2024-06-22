import Link from "next/link"
import { socials } from "@/lib/data"

type Props = {
  containerStyles: string
  iconStyles: string
}

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
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface Iprops {
    title: string,
    image: string
}

const Card = (props: Iprops) => {
    const {image, title} = props;
  return (
    <div>{title} {image}</div>
  )
}

export default Card
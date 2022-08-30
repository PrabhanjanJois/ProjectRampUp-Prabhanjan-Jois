import Image from "next/image";
import pic from "../images/health-logo.png";
// import { useRef } from "react";
// import { useSpring, animated, useChain } from "react-spring";
const Splashscreen = () => {
  //   //@ts-ignore
  //   const imgRef = useRef();
  //   // const imgRef = useRef<HTMLImageElement | null>(null);
  //   //@ts-ignore
  //   const imgStyle = useSpring({
  //     to: {
  //       opacity: 1,
  //     },
  //     from: {
  //       opacity: 0,
  //     },
  //     ref: imgRef,
  //   });
  //   //@ts-ignore
  //   useChain([imgRef]);
  return (
    <div className="container-div">
      {/* 
  // @ts-ignore */}
      <Image src={pic} height={95} alt="" width={115} />
    </div>
  );
};
export default Splashscreen;

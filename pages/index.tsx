import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexPage: NextPage = () => {
  const route = useRouter();

  useEffect(() => {
    route.replace("./login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image
        src={"/images/ronin-fullcolor.png"}
        width={160}
        height={160}
        alt="icon-ronin"
      />
    </div>
  );
};

export default IndexPage;

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "types";
import { NavBarLayout } from "src/layouts";
import { Exchange } from "src/domains";

const ExchangePage: NextPageWithLayout = () => {
  return <Exchange />;
};

ExchangePage.getLayout = function getLayout(page: ReactElement) {
  return <NavBarLayout>{page}</NavBarLayout>;
};

export default ExchangePage;

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "types";
import { UserStatusBarLayout } from "src/layouts";
import { Home } from "src/domains";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <UserStatusBarLayout>{page}</UserStatusBarLayout>;
};

export default HomePage;

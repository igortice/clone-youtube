import Head from 'next/head';

import Content from './Content';
import SideBar from './NavBar';
import TopBar from './TopBar';

const index = ({ children, title = process.env.NEXT_PUBLIC_NAME_APP }) => (
  <>
    <Head>
      <title>{title}</title>

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>

    <TopBar />

    <SideBar />

    <Content>{children}</Content>
  </>
);

export default index;

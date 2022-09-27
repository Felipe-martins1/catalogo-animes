import type { NextPage } from "next";

import { Layout as AntdLayout, Menu, Typography } from "antd";

import styles from "./Layout.module.scss";

const { Header, Footer, Sider, Content } = AntdLayout;
const { Title } = Typography;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdLayout className={styles.layout}>
      <Content className={styles.content}>{children}</Content>
    </AntdLayout>
  );
};

export default Layout;

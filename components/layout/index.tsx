import type { NextPage } from 'next'

import { Layout as AntdLayout, Menu, Typography } from 'antd';

import styles from './Layout.module.scss'

const { Header, Footer, Sider, Content } = AntdLayout;
const {Title} = Typography;

const Layout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <AntdLayout className={styles.layout}>
        <Header className={styles.header}> 
            <div className={styles.content}>
                <Title style={{margin: 0, color: "white"}} level={2}>
                ANIMELIST
                </Title>
            </div>
        </Header>
        <Content className={styles.content}>
            {children}
        </Content>
            <Footer className={styles.footer}>Footer</Footer>
        </AntdLayout>
    )
}

export default Layout

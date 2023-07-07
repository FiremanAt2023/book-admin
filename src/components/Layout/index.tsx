import React from 'react';
import { Layout as AntLayout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import style from './index.module.css';
import menuList from '@/assets/data/menuList';
import Image from 'next/image';
import bookLogo from '@/assets/Image/book_logo.png'

const { Header, Footer, Sider, Content } = AntLayout;
const { managementList, optionList } = menuList

const items: MenuProps['items'] = managementList.map(
    (item, index) => {
        return {
            key: `menu-${index}`,
            icon: React.createElement(item.icon),
            label: item.label,
            children: optionList[item.value]?.map((subItem, i) => {
                return {
                    key: `${item.value}-${i}`,
                    label: subItem,
                };
            }),
        };
    },
);

export function Layout({ children }) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <AntLayout>
            <Header className={style.header}>
                <div>
                    <Image src={bookLogo} width={40} height={40} alt="Book Logo" />

                    {/* <h1 className={style.logo} > Prepare Logo</h1> */}
                </div>

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <AntLayout style={{ padding: '12px 0', background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['bookManagement-0']}
                            defaultOpenKeys={['menu-0']}
                            style={{ height: '80%' }}
                            items={items}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        Layout: {children}
                    </Content>
                </AntLayout>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
        </AntLayout>
    );
}
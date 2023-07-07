import React from 'react';
import { Layout as AntLayout, Breadcrumb, Menu, theme,Image } from 'antd';
import type { MenuProps } from 'antd';
import style from './index.module.css';
import menuList from '@/assets/data/menuList';
import Icons from '@/assets/Icons';
import bookLogo from '@/assets/Image/book_logo.png';

const { Header, Footer, Sider, Content } = AntLayout;
const { managementList, optionList} = menuList

const items: MenuProps['items'] = managementList.map(
    (item, index) => {
        return {
            key: `menu-${index}`,
            icon: React.createElement(item.icon),
            label: item.label,
            children:optionList[item.value]?.map((subItem,i) => {
                
                return {
                    key:`${subItem}-${i}`,
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
                 {/* <Image src={bookLogo} /> */}
                {/* <img src={bookLogo} alt="bookLogo" /> */}
                <h1 className={style.logo} > Prepare Logo</h1>
                </div>

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <AntLayout style={{ padding: '12px 0', background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['menu-0']}
                            defaultOpenKeys={['menu-0']}
                            style={{ height: '100%' }}
                            items={items}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    {/* <Image src={bookLogo} /> */}

                        Layout: {children}
                    </Content>
                </AntLayout>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
        </AntLayout>
    );
}
import { Menu, Button } from 'antd';
import {useState} from 'react'
import {CloseOutlined,PlusOutlined} from '@ant-design/icons'
import styled from 'styled-components'
const { SubMenu } = Menu;
const Sidebar = function(){
        const [collapse,toggleCollapse] = useState(false)
        const sidebarIcon = !collapse ? <CloseOutlined onClick={() => toggleCollapse(!collapse)}/> :
            <PlusOutlined onClick={() => toggleCollapse(!collapse)}/>
        return (
            <Container>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapse}
                >

                    <SubMenu key="sub1"  title="תוכניות שלי" icon={sidebarIcon}>
                        <Menu.Item key="1">פנסיה</Menu.Item>
                        <Menu.Item key="2">קרן השתלמות</Menu.Item>
                        <Menu.Item key="3">קופות גמל</Menu.Item>
                        <Menu.Item key="4">ביטוח מנהלים </Menu.Item>
                        <Menu.Item key="5">ביטוח ריסק</Menu.Item>
                        <Menu.Item key="6">ביטוח אובדן כושר עבודה</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2"  title="הגדרת היעדים שלי">
                        <Menu.Item key="7">פרישה </Menu.Item>
                        <Menu.Item key="8">הגנה כלכלית אישית </Menu.Item>
                        <Menu.Item key="9">הגנה כללית למשפחה </Menu.Item>
                        <Menu.Item key="10">יעד חסכון</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3"  title="סיכום והשוואות">
                        <Menu.Item key="11">ניהל יעד תשואה</Menu.Item>
                        <Menu.Item key="12">עלויות דמי ניהול ומעקב </Menu.Item>
                        <Menu.Item key="13">עלויות ביטוח</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="14">ניהול הלוואות</Menu.Item>
                </Menu>
            </Container>
        );
}
const Container = styled.div`
    //width: 250px;
  position: fixed;
  z-index: 2;
  right: 0;
  top: 50%;
  transform: translate(0,-50%);
`

export default Sidebar
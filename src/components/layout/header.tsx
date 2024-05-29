import { Layout, Space } from "antd"
import CurrentUser from "./current_user"

const Header = () => {
    const headerStyles: React.CSSProperties = {
        backgroundColor: "white",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "sticky",
        height: "64px",
        top: 0,
        zIndex: 999
    }
    return (
        <Layout.Header style={headerStyles}>
            <Space align="center" size={"middle"}>
                <CurrentUser />
            </Space>
        </Layout.Header>
    )
}

export default Header

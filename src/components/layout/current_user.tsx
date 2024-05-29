import { Button, Popover } from 'antd'
import { useState } from 'react'
import CustomAvatar from '../custom_avatar'
import { useGetIdentity } from '@refinedev/core'
import { Text } from "../text"
import type { User } from "@/graphql/schema.types"
import { SettingOutlined } from '@ant-design/icons'
import {AccountSettings} from '@/components/layout/account_settings'

const CurrentUser = () => {
    const { data: user } = useGetIdentity<User>()

    const [isOpen, setIsOpen] = useState(false)
    const content = (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Text
                strong
                style={{ padding: "12px 20px" }}
            >
                {user?.name}
            </Text>
            <div
                style={{
                    borderTop: "1px solid #d9d9d9",
                    padding: "4px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                }}
            >
                <Button style={{ textAlign: "left" }}
                    icon={<SettingOutlined />}
                    type='text'
                    block
                    onClick={() => setIsOpen(true)}
                >
                    Acount Settings
                </Button>
            </div>
        </div>
    )

    return (
        <>
            <Popover
                placement='bottomRight'
                trigger={'click'}
                overlayInnerStyle={{ padding: "0" }}
                overlayStyle={{ zIndex: 99 }}
                content={content}
            >
                <CustomAvatar
                    name={user?.name}
                    src={user?.avatarUrl}
                    size="default"
                    style={{ cursor: 'pointer' }}
                />
            </Popover>
            {user && <AccountSettings
            opened={isOpen}
            setOpened={setIsOpen}
            userId={user.id}
            />}
        </>
    )
}

export default CurrentUser
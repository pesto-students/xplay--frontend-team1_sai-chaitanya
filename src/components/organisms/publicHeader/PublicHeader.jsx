import React from "react";
import { Col, Image, Row, Space } from "antd";

import styles from "./publicHeader.module.scss";
import { Link, useLocation } from "react-router-dom";

const PublicHeader = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <Space align="center" className={styles?.content} direction="vertical">
                <Image
                    height={56}
                    preview={false}
                    src="assets/images/XPlay_logo_black.jpg"
                    width={168}
                />
                <Row gutter={32} className={styles?.buttons}>
                    <Col>
                        <Link
                            className={`${styles?.link} ${pathname === '/login' ? styles?.active : styles?.inactive}`}
                            to={'/login'}
                        >Login
                        </Link>
                    </Col>
                    
                    <Col>
                        <Link
                            className={`${styles?.link} ${pathname === '/signup' ? styles?.active : styles?.inactive}`}
                            to={'/signup'}
                        >Sign Up
                        </Link>
                    </Col>
                </Row>
            </Space>
        </div>
    );
};

export default PublicHeader;

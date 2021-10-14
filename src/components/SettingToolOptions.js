import React from 'react';
import { Button, Col, Row } from "antd";

const SettingToolOptions = () => {
    return (
        <Row>
            <Col span={24}>
                <div style={{textAlign: 'center'}}>
                    <Button type="primary">Primary Button</Button>
                </div>
            </Col>
            <div style={{minHeight: '400px'}}>
            </div>
            <Col span={12}>
                <div style={{textAlign: 'center'}}>
                    <Button type="primary">Primary Button</Button>
                </div>
            </Col>
            <Col span={12}>
                <div style={{textAlign: 'center'}}>
                    <Button type="primary">Primary Button</Button>
                </div>
            </Col>
        </Row>
    );
};

export default SettingToolOptions;

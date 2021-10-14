import React from 'react';
import { Row, Col } from 'antd';
import MyForm from "./MyForm";

const SettingToolInput = () => {

    return (
        <div style={{marginLeft: 0, marginRight: 0}}>
            <Row justify="space-around" align="middle">
                <Col span={0}>
                </Col>
                <Col span={24}>
                    <MyForm />
                </Col>
                <Col span={0}>
                </Col>
            </Row>
        </div>
    );
};

export default SettingToolInput;

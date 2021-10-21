import React from 'react';
import { Row, Col } from 'antd';
import MyForm from './MyForm';

const SettingTool = (props) => {
    const {breakpoint, userOptions, snsOptions} = props;
    return (
        <div style={{with: '100%', height: '100%', marginLeft: 0, marginRight: 0, borderBottom: '1px solid #f0f0f0'}}>
            <Row justify="space-around" align="middle">
                <Col span={24}>
                    <MyForm
                        breakpoint={breakpoint}
                        userOptions={userOptions}
                        snsOptions={snsOptions}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default SettingTool;

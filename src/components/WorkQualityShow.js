import React from 'react';
import { Card, Col, Row } from "antd";
import { Liquid } from '@ant-design/charts';

const WorkQualityShow = (props) => {
    const config = {
        percent: props.data,
        outline: {
            border: 4,
            distance: 8,
        },
        wave: {length: 128},
    };
    return (
        <Card title="Card title"
              style={{width: '100%', height: '100%', overflow: 'hidden'}}>
            <Row gutter={16}>
                <Col span={24}>
                    <Liquid {...config} />
                </Col>
            </Row>
        </Card>
    );
};

export default WorkQualityShow;

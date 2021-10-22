import React from 'react';
import { Card, Col, Row } from "antd";
import { Liquid } from '@ant-design/charts';

const WorkQualityShow = (props) => {
    const config = {
        height: 300,
        percent: props.data,
        outline: {
            border: 4,
            distance: 7,
        },
        wave: {length: 128},
    };
    return (
        <div style={{textAlign: 'center', width: '100%', height: '100%',}}>
            <Card title="作业质量"
                  style={{width: '100%', height: '100%', overflow: 'hidden'}}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Liquid {...config} />
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default WorkQualityShow;

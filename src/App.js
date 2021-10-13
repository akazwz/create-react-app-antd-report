import React from 'react';
import { Row, Col } from 'antd';
import SumDataTextShow from './components/SumDataTextShow';
import './App.less';

const App = () => (
    <>
        <Row style={{textAlign: "center"}}>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            </Col>
            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                <SumDataTextShow />
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            </Col>
        </Row>
    </>
);

export default App;

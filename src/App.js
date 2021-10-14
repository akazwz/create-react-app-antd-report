import React from 'react';
import { Row, Col } from 'antd';
import SumDataTextShow from './components/SumDataTextShow';
import './App.less';

const App = () => {
    const sumTextData = {
        time: 3337,
        distance: 3337,
        area: 3337,
        earth: 3337,
    };

    return (
        <>
            <Row style={{textAlign: "center"}}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <SumDataTextShow data={sumTextData} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <SumDataTextShow data={sumTextData} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <SumDataTextShow data={sumTextData} />
                </Col>
            </Row>
        </>
    );
}
export default App;

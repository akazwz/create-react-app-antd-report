import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import SumDataTextShow from './components/SumDataTextShow';
import './App.less';
import WorkQualityShow from './components/WorkQualityShow';
import WorkAddressShow from './components/WorkAddressShow';
import SettingTool from './components/SettingTool';
import { useWindowSize } from "./hooks/useWindowSize";

const App = () => {
    const {width, height} = useWindowSize();
    console.log(width);
    console.log(height);
    const [showHeight, setShowHeight] = useState(height / 2);

    useEffect(() => {
        setShowHeight(height / 2);
    }, [height]);

    const sumTextData = {
        time: 3337,
        distance: 3337,
        area: 3337,
        earth: 3337,
    };

    const addressData = {
        province: [
            {
                type: '分类一',
                value: 27,
            },
            {
                type: '分类二',
                value: 25,
            },
            {
                type: '分类三',
                value: 18,
            },
        ],
        city: [
            {
                type: '分类四',
                value: 15,
            },
            {
                type: '分类五',
                value: 10,
            },
            {
                type: '其他',
                value: 5,
            },
            {
                type: '分wrerwe类四',
                value: 15,
            },
            {
                type: '分werwerwer类五',
                value: 10,
            },
            {
                type: '其rwerewrwer他',
                value: 5,
            },
            {
                type: '分类werwerew四',
                value: 15,
            },
            {
                type: '分类werwrwer五',
                value: 10,
            },
            {
                type: '其werwer他',
                value: 5,
            },
            {
                type: '分类dsf四',
                value: 15,
            },
            {
                type: '分wer类五',
                value: 10,
            },
            {
                type: '其34534wer他',
                value: 5,
            },
            {
                type: '分rwe345435r类四',
                value: 15,
            },
            {
                type: '分4535345rwer类五',
                value: 10,
            },
            {
                type: '其werw534523erw他',
                value: 5,
            },
            {
                type: '34534',
                value: 5,
            },
            {
                type: '分rwe675674r类四',
                value: 15,
            },
            {
                type: '75675675675',
                value: 10,
            },
            {
                type: '567567',
                value: 5,
            },
        ],
        district: [
            {
                type: '分类四',
                value: 15,
            },
            {
                type: '分类五',
                value: 10,
            },
            {
                type: '未知',
                value: 5,
            },
        ],
        count: 77,
    };

    return (
        <>
            <Row justify="center" style={{textAlign: "center"}}>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <div style={{height: showHeight, minHeight: '370px'}}>
                        <SumDataTextShow data={sumTextData} />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <div style={{height: showHeight, minHeight: '370px'}}>
                        <WorkQualityShow data={0.7} />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <div style={{height: showHeight, minHeight: '370px'}}>
                        <WorkAddressShow data={addressData} />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    {/*<SettingTool data={sumTextData} />*/}
                </Col>
            </Row>
            <Row style={{textAlign: "center", height: showHeight, minHeight: '370px'}}>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <WorkAddressShow data={addressData} />
                </Col>
            </Row>
        </>
    );
}
export default App;

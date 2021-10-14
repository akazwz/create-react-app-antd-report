import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import SumDataTextShow from './components/SumDataTextShow';
import { useWindowSize } from './hooks/useWindowSize';
import WorkQualityShow from './components/WorkQualityShow';
import WorkAddressShow from './components/WorkAddressShow';
import SettingToolInput from './components/SettingToolInput';
import WorkDataShow from './components/WorkDataShow';
import SettingToolOptions from './components/SettingToolOptions';
import './App.less';

const App = () => {
    const {width, height} = useWindowSize();
    console.log(width);
    console.log(height);
    const [showHeight, setShowHeight] = useState(height / 2 - 50);

    useEffect(() => {
        setShowHeight(height / 2 - 50);
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

    const workData = {
        time: [
            {
                name: 'London',
                month: 'Jan.',
                value: 18.9,
            },
            {
                name: 'London',
                month: 'Feb.',
                value: 28.8,
            },
            {
                name: 'London',
                month: 'Mar.',
                value: 39.3,
            },
            {
                name: 'London',
                month: 'Apr.',
                value: 81.4,
            },
            {
                name: 'London',
                month: 'May',
                value: 47,
            },
            {
                name: 'London',
                month: 'Jun.',
                value: 20.3,
            },
            {
                name: 'London',
                month: 'Jul.',
                value: 24,
            },
            {
                name: 'London',
                month: 'Aug.',
                value: 35.6,
            },
            {
                name: 'Berlin',
                month: 'Jan.',
                value: 12.4,
            },
            {
                name: 'Berlin',
                month: 'Feb.',
                value: 23.2,
            },
            {
                name: 'Berlin',
                month: 'Mar.',
                value: 34.5,
            },
            {
                name: 'Berlin',
                month: 'Apr.',
                value: 99.7,
            },
            {
                name: 'Berlin',
                month: 'May',
                value: 52.6,
            },
            {
                name: 'Berlin',
                month: 'Jun.',
                value: 35.5,
            },
            {
                name: 'Berlin',
                month: 'Jul.',
                value: 37.4,
            },
            {
                name: 'Berlin',
                month: 'Aug.',
                value: 42.4,
            },
        ],
        distance: [
            {
                name: 'London',
                month: 'Jan.',
                value: 38.9,
            },
            {
                name: 'London',
                month: 'Feb.',
                value: 18.8,
            },
            {
                name: 'London',
                month: 'Mar.',
                value: 33.3,
            },
            {
                name: 'London',
                month: 'Apr.',
                value: 51.4,
            },
            {
                name: 'London',
                month: 'May',
                value: 67,
            },
            {
                name: 'London',
                month: 'Jun.',
                value: 10.3,
            },
            {
                name: 'London',
                month: 'Jul.',
                value: 24,
            },
            {
                name: 'London',
                month: 'Aug.',
                value: 35.6,
            },
            {
                name: 'Berlin',
                month: 'Jan.',
                value: 12.4,
            },
            {
                name: 'Berlin',
                month: 'Feb.',
                value: 23.2,
            },
            {
                name: 'Berlin',
                month: 'Mar.',
                value: 34.5,
            },
            {
                name: 'Berlin',
                month: 'Apr.',
                value: 99.7,
            },
            {
                name: 'Berlin',
                month: 'May',
                value: 62.6,
            },
            {
                name: 'Berlin',
                month: 'Jun.',
                value: 35.5,
            },
            {
                name: 'Berlin',
                month: 'Jul.',
                value: 77.4,
            },
            {
                name: 'Berlin',
                month: 'Aug.',
                value: 42.4,
            },
        ],
        area: [
            {
                name: 'London',
                month: 'Jan.',
                value: 78.9,
            },
            {
                name: 'London',
                month: 'Feb.',
                value: 28.8,
            },
            {
                name: 'London',
                month: 'Mar.',
                value: 59.3,
            },
            {
                name: 'London',
                month: 'Apr.',
                value: 81.4,
            },
            {
                name: 'London',
                month: 'May',
                value: 37,
            },
            {
                name: 'London',
                month: 'Jun.',
                value: 10.3,
            },
            {
                name: 'London',
                month: 'Jul.',
                value: 24,
            },
            {
                name: 'London',
                month: 'Aug.',
                value: 25.6,
            },
            {
                name: 'Berlin',
                month: 'Jan.',
                value: 12.4,
            },
            {
                name: 'Berlin',
                month: 'Feb.',
                value: 23.2,
            },
            {
                name: 'Berlin',
                month: 'Mar.',
                value: 24.5,
            },
            {
                name: 'Berlin',
                month: 'Apr.',
                value: 99.7,
            },
            {
                name: 'Berlin',
                month: 'May',
                value: 52.6,
            },
            {
                name: 'Berlin',
                month: 'Jun.',
                value: 35.5,
            },
            {
                name: 'Berlin',
                month: 'Jul.',
                value: 87.4,
            },
            {
                name: 'Berlin',
                month: 'Aug.',
                value: 42.4,
            },
        ],
        earth: [
            {
                name: 'London',
                month: 'Jan.',
                value: 38.9,
            },
            {
                name: 'London',
                month: 'Feb.',
                value: 28.8,
            },
            {
                name: 'London',
                month: 'Mar.',
                value: 29.3,
            },
            {
                name: 'London',
                month: 'Apr.',
                value: 81.4,
            },
            {
                name: 'London',
                month: 'May',
                value: 47,
            },
            {
                name: 'London',
                month: 'Jun.',
                value: 20.3,
            },
            {
                name: 'London',
                month: 'Jul.',
                value: 74,
            },
            {
                name: 'London',
                month: 'Aug.',
                value: 35.6,
            },
            {
                name: 'Berlin',
                month: 'Jan.',
                value: 42.4,
            },
            {
                name: 'Berlin',
                month: 'Feb.',
                value: 23.2,
            },
            {
                name: 'Berlin',
                month: 'Mar.',
                value: 34.5,
            },
            {
                name: 'Berlin',
                month: 'Apr.',
                value: 69.7,
            },
            {
                name: 'Berlin',
                month: 'May',
                value: 52.6,
            },
            {
                name: 'Berlin',
                month: 'Jun.',
                value: 35.5,
            },
            {
                name: 'Berlin',
                month: 'Jul.',
                value: 87.4,
            },
            {
                name: 'Berlin',
                month: 'Aug.',
                value: 42.4,
            },
        ],
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
                    <SettingToolInput />
                </Col>
            </Row>
            <Row style={{textAlign: "center", height: showHeight, minHeight: '370px'}}>
                <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                    <WorkDataShow data={workData} />
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                    <SettingToolOptions />
                </Col>
            </Row>
        </>
    );
}
export default App;

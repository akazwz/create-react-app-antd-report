import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import Text from 'antd/lib/typography/Text';
import SelectCustom from './SelectCustom';
import { useWindowSize } from "../hooks/useWindowSize";

const UnitText = (props) => {
    const unit = props.unit;
    return (
        <Text style={{fontWeight: '100', fontSize: '10px'}}>{unit}</Text>
    );
};

const SumDataTextShow = (props) => {
    const {time, distance, area, earth} = props.data;

    const timeUnits = ["小时", "分钟", "天"];
    const distanceUnits = ["米", "千米", "里"];
    const areaUnits = ["亩", "平方米", "公顷"];
    const earthUnits = ["立方米", "土方", "公石"];
    const [timeUnit, setTimeUnit] = useState([timeUnits[0]]);
    const [distanceUnit, setDistanceUnit] = useState(distanceUnits[0]);
    const [areaUnit, setAreaUnit] = useState(areaUnits[0]);
    const [earthUnit, setEarthUnit] = useState(earthUnits[0]);

    const [showTime, setShowTime] = useState(time);
    const [showDistance, setShowDistance] = useState(distance);
    const [showArea, setShowArea] = useState(area);
    const [showEarth, setShowEarth] = useState(earth);


    const handleSelectTimeUnit = (value) => {
        setTimeUnit(value);
        switch (value) {
            case timeUnits[0]:
                setShowTime(time);
                break;
            case timeUnits[1]:
                setShowTime(time * 60);
                break;
            case timeUnits[2]:
                setShowTime(time / 24);
                break;
            default:
                setShowTime(time);
        }
    };

    const handleSelectDistanceUnit = (value) => {
        setDistanceUnit(value);
        switch (value) {
            case distanceUnits[0]:
                setShowDistance(distance);
                break;
            case distanceUnits[1]:
                setShowDistance(distance / 1000);
                break;
            case distanceUnits[2]:
                setShowDistance(distance / 500);
                break;
            default:
                setShowDistance(distance);
        }
    };

    const handleSelectAreaUnit = (value) => {
        setAreaUnit(value);
        switch (value) {
            case areaUnits[0]:
                setShowArea(area);
                break;
            case areaUnits[1]:
                setShowArea(area / 0.000666666666667);
                break;
            case areaUnits[2]:
                setShowArea(area / 0.0666666666667);
                break;
            default:
                setShowArea(area);
        }
    };

    const handleSelectEarthUnit = (value) => {
        setEarthUnit(value);
        switch (value) {
            case earthUnits[0]:
                setShowEarth(earth);
                break;
            case earthUnits[1]:
                setShowEarth(earth);
                break;
            case earthUnits[2]:
                setShowEarth(earth);
                break;
            default:
                setShowEarth(earth);
        }
    };

    return (
        <>
            <Card title="Card title"
                  style={{width: '100%', height: '100%', textAlign: 'center'}}>
                <Row gutter={16}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card bordered={true}>
                            <SelectCustom selects={timeUnits} onSelect={handleSelectTimeUnit} />
                            <Statistic title="title" precision={2} value={showTime}
                                       suffix={<UnitText unit={timeUnit} />} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card bordered={true}>
                            <SelectCustom selects={distanceUnits} onSelect={handleSelectDistanceUnit} />
                            <Statistic title="title" precision={2} value={showDistance}
                                       suffix={<UnitText unit={distanceUnit} />} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card bordered={true}>
                            <SelectCustom selects={areaUnits} onSelect={handleSelectAreaUnit} />
                            <Statistic title="title" precision={2} value={showArea}
                                       suffix={<UnitText unit={areaUnit} />} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card bordered={true}>
                            <SelectCustom selects={earthUnits} onSelect={handleSelectEarthUnit} />
                            <Statistic title="title" precision={2} value={showEarth}
                                       suffix={<UnitText unit={earthUnit} />} />
                        </Card>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default SumDataTextShow;

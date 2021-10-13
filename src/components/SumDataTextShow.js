import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Select } from "antd";
import Text from "antd/lib/typography/Text";

const {Option} = Select;

const UnitText = (props) => {
    const unit = props.unit;
    return (
        <Text style={{fontWeight: '100', fontSize: '10px'}}>{unit}</Text>
    );
};

const SelectUnit = (props) => {
    const units = props.units;
    const onSelect = props.onSelect;

    const options = units.map((unit) => {
        return (
            <Option value={unit}>{unit}</Option>
        );
    });

    return (
        <div style={{textAlign: 'right'}}>
            <Select defaultValue={units[0]} size="small" style={{width: 70}} onChange={onSelect}>
                {options}
            </Select>
        </div>
    );
};


const SumDataTextShow = (props) => {
    const timeUnits = ["小时", "分钟", "天"];
    const distanceUnits = ["米", "千米", "里"];
    const areaUnits = ["亩", "公顷", "英亩"];
    const earthUnits = ["平方米", "土方", "公石"];
    const [timeUnit, setTimeUnit] = useState([timeUnits[0]]);
    const [distanceUnit, setDistanceUnit] = useState(distanceUnits[0]);
    const [areaUnit, setAreaUnit] = useState(areaUnits[0]);
    const [earthUnit, setEarthUnit] = useState(earthUnits[0]);

    const handleSelectTimeUnit = (value) => {
        setTimeUnit(value);
    };

    const handleSelectDistanceUnit = (value) => {
        setDistanceUnit(value);
    };

    const handleSelectAreaUnit = (value) => {
        setAreaUnit(value);
    };

    const handleSelectEarthUnit = (value) => {
        setEarthUnit(value);
    };

    return (
        <>
            <Card title="Card title">
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card bordered={true}>
                            <SelectUnit units={timeUnits} onSelect={handleSelectTimeUnit} />
                            <Statistic title="title" value={3337} suffix={<UnitText unit={timeUnit} />} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card bordered={true}>
                            <SelectUnit units={distanceUnits} onSelect={handleSelectDistanceUnit} />
                            <Statistic title="title" value={3337} suffix={<UnitText unit={distanceUnit} />} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card bordered={true}>
                            <SelectUnit units={areaUnits} onSelect={handleSelectAreaUnit} />
                            <Statistic title="title" value={3337} suffix={<UnitText unit={areaUnit} />} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card bordered={true}>
                            <SelectUnit units={earthUnits} onSelect={handleSelectEarthUnit} />
                            <Statistic title="title" value={3337} suffix={<UnitText unit={earthUnit} />} />
                        </Card>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default SumDataTextShow;

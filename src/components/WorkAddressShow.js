import React, { useRef, useState } from 'react';
import { Card, Col, Row, Select } from "antd";
import { Pie, measureTextWidth } from '@ant-design/charts';
import Text from "antd/lib/typography/Text";

const {Option} = Select;

const SelectAddressScale = (props) => {
    const scales = props.scales;
    const onSelect = props.onSelect;

    const options = scales.map((scale) => {
        return (
            <Option value={scale}>{scale}</Option>
        );
    });

    return (
        <div style={{textAlign: 'right'}}>
            <Select defaultValue={scales[0]} size="small" style={{width: 70}} onChange={onSelect}>
                {options}
            </Select>
        </div>
    );
};

const WorkAddressShow = (props) => {
    const addressScales = ["省", "市", "县"];
    const {province, city, district, count} = props.data;
    const chart = useRef(null);
    const [height, setHeight] = useState(300);
    const [scale, setScale] = useState(province);
    const [chartData, setChartData] = useState(province);

    function renderStatistic(containerWidth, text, style) {
        let _measureTextWidth = (0, measureTextWidth)(text, style),
            textHeight = _measureTextWidth.height,
            textWidth = _measureTextWidth.width;
        let R = containerWidth / 2;
        let scale = 1;
        if (containerWidth < textWidth) {
            scale = Math.min(
                Math.sqrt(
                    Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))),
                ),
                1,
            );
        }
        let textStyleStr = 'width:'.concat(containerWidth, 'px;');
        return '<div style="'
            .concat(textStyleStr, ';font-size:')
            .concat(scale.toString(), 'em;line-height:')
            .concat(scale < 1 ? 1 : 'inherit', ';">')
            .concat(text, '</div>');
    }

    let config = {
        appendPadding: 10,
        data: chartData,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.64,
        meta: {
            value: {
                formatter: function formatter(v) {
                    return ''.concat(v, ' \xA5');
                },
            },
        },
        label: {
            type: 'inner',
            offset: '-50%',
            style: {textAlign: 'center'},
            autoRotate: false,
            content: '{value}',
        },
        statistic: {
            title: {
                offsetY: -4,
                customHtml: function customHtml(container, view, datum) {
                    let _container$getBoundin = container.getBoundingClientRect(),
                        width = _container$getBoundin.width,
                        height = _container$getBoundin.height;
                    let d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                    let text = datum ? datum.type : '总计';
                    return renderStatistic(d, text, {fontSize: 28});
                },
            },
            content: {
                offsetY: 4,
                style: {fontSize: '32px'},
                customHtml: function customHtml(container, view, datum, data) {
                    let _container$getBoundin2 = container.getBoundingClientRect(),
                        width = _container$getBoundin2.width;
                    let text = datum
                        ? ''.concat(datum.value)
                        : ''.concat(
                            data.reduce(function (r, d) {
                                return r + d.value;
                            }, 0),
                        );
                    return renderStatistic(width, text, {fontSize: 32});
                },
            },
        },
        interactions: [
            {type: 'element-selected'},
            {type: 'element-active'},
            {type: 'pie-statistic-active'},
        ],
    };

    const handleSelectAddressScales = (value) => {
        setScale(value);
        switch (value) {
            case addressScales[0]:
                setChartData(province);
                return;
            case addressScales[1]:
                setChartData(city);
                return;
            case addressScales[2]:
                setChartData(district);
                return;
            default:
                setChartData(province);
        }
    };

    const CardTitle = () => {
        return (
            <div>
                <Row>
                    <Col span={12} >
                        <div style={{textAlign: "right", marginLeft: '80px'}}>
                            some
                        </div>
                    </Col>
                    <Col span={12}>
                        <SelectAddressScale scales={addressScales} onSelect={handleSelectAddressScales} />
                    </Col>
                </Row>

            </div>
        );
    };

    return (
        <Card title={<CardTitle />}
              style={{width: '100%', height: '100%', overflow: 'hidden'}}>
            <Row gutter={16}>
                <Col span={24}>
                    <Pie {...config} />
                </Col>
            </Row>
        </Card>
    );
};

export default WorkAddressShow;

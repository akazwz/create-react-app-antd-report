import React, { useState } from 'react';
import { Card, Col, Row } from "antd";
import { Pie, measureTextWidth } from '@ant-design/charts';
import * as echarts from 'echarts';
import SelectCustom from './SelectCustom';

const WorkAddressShow = (props) => {
    const addressScales = ["省", "市", "县"];
    const {province, city, district, count} = props.data;
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
        height: 300,
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
        switch (value) {
            case addressScales[0]:
                setChartData(province);
                break;
            case addressScales[1]:
                setChartData(city);
                break;
            case addressScales[2]:
                setChartData(district);
                break;
            default:
                setChartData(province);
        }
    };

    return (
        <Card title={<Row>
            <Col span={12}>
                <div style={{textAlign: 'right', marginRight: '-30px'}}>
                    设备分布
                </div>
            </Col>
            <Col span={12}>
                <SelectCustom selects={addressScales} onSelect={handleSelectAddressScales} />
            </Col>
        </Row>}
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

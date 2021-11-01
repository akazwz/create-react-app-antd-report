import React, { useState } from 'react';
import { Radio, Card, Col, Row } from 'antd';
import { Column } from '@ant-design/charts';

const WorkDataShow = (props) => {
    const {time, distance, area, earth} = props.data;
    const [chartData, setChartData] = useState(time);

    const config = {
        data: chartData,
        isGroup: true,
        xField: 'month',
        yField: 'value',
        seriesField: 'name',
        color: [
            '#1890FF',
            '#FBD642'
        ],
        label: {
            position: 'middle',
            layout: [
                {type: 'interval-adjust-position'},
                {type: 'interval-hide-overlap'},
                {type: 'adjust-color'},
            ],
        },
    };

    const handleRadioOnChange = (e) => {
        const selectKey = e.target.value;
        switch (selectKey) {
            case 'time':
                setChartData(time);
                break;
            case 'distance':
                setChartData(distance);
                break;
            case 'area':
                setChartData(area);
                break;
            case 'earth':
                setChartData(earth);
                break;
            default:
                setChartData(time);
        }
    };

    return (
        <Card title={<div style={{textAlign: 'center'}}>
            <Radio.Group onChange={handleRadioOnChange} defaultValue="time">
                <Radio.Button value="time">作业时长</Radio.Button>
                <Radio.Button value="distance">作业距离</Radio.Button>
                <Radio.Button value="area">作业面积</Radio.Button>
                <Radio.Button value="earth">土方量</Radio.Button>
            </Radio.Group>
        </div>}
              style={{width: '100%', height: '100%', overflow: 'hidden'}}>
            <Row gutter={16}>
                <Col span={24}>
                    <Column  {...config} />
                </Col>
            </Row>
        </Card>
    );
};

export default WorkDataShow;

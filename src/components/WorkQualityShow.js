import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Col, Row } from "antd";

const WorkQualityShow = (props) => {
    const chart = useRef(null);
    const [height, setHeight] = useState(300);

    const handleResize = () => {
        if (chart.current != null) {
            setHeight(chart.current.clientWidth);
        }
        let myChart = echarts.getInstanceByDom(chart.current);
        if (!myChart) {
            myChart = echarts.init(chart.current);
        }
        myChart.resize();
    };

    useEffect(() => {
        if (chart.current !== null) {
            setHeight(chart.current.clientWidth);
            setTimeout(() => {
                let myChart = echarts.getInstanceByDom(chart.current);
                if (!myChart) {
                    myChart = echarts.init(chart.current);
                }
                myChart.setOption({
                    title: {
                        text: '达标率',
                        top: '53%',
                        left: 'center',
                        textStyle: {
                            color: '#333333',
                            fontSize: 14,
                            fontWeight: 400,
                        },
                    },
                    color: ['#1890FF', '#FAD337'],
                    series: [{
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        radius: '83%',
                        center: ['50%', '50%'],
                        pointer: {
                            show: false,
                        },
                        progress: {
                            show: true,
                            overlap: false,
                            roundCap: false,
                            clip: false,
                            itemStyle: {
                                borderWidth: 0,
                                borderColor: '#464646',
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                width: 25,
                            },
                        },
                        splitLine: {
                            show: false,
                            distance: 0,
                            length: 10,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                            distance: 50,
                        },
                        data: [
                            {
                                value: props.data,
                            },
                        ],
                        detail: {
                            fontSize: 32,
                            formatter: '{value}%',
                            offsetCenter: [0, -5],
                            borderWidth: 0,
                            color: '#333333',
                            fontWeight: 500,
                        },
                        itemStyle: {
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                    }]
                });
            }, 0);
        }
        window.addEventListener('resize', handleResize);
        return function cleanup() {
            window.removeEventListener('resize', handleResize);
        }
    }, [props.data]);
    return (
        <Row justify="center" align="middle">
            <Col span={24}>
                <div style={{
                    width: '60%',
                    height: height,
                    minHeight: 300,
                    margin: 'auto',
                }} ref={chart} />
            </Col>
        </Row>
    );
};

export default WorkQualityShow;

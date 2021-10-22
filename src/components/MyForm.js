import React, { useEffect, useState } from 'react';
import { Button, DatePicker, Divider, Form, Select } from "antd";
import locale from 'antd/es/date-picker/locale/zh_CN';
import Text from "antd/lib/typography/Text";
import { useWindowSize } from "../hooks/useWindowSize";
import 'moment/locale/zh-cn';

const MyForm = (props) => {
    const {breakpoint, userOptions, snsOptions} = props;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [selectWidth, setSelectWidth] = useState(200);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    useEffect(() => {
        if (breakpoint === 'xs' || breakpoint === 'xxs') {
            setFormLayout('inline');
            setSelectWidth(150);
        } else {
            setFormLayout('horizontal');
            setSelectWidth(200);
        }
    }, [breakpoint]);
    const onFormLayoutChange = ({layout}) => {
        setFormLayout(layout);
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const {width, height} = useWindowSize();

    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Form
                        name="control-hooks"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        form={form}
                        onFinish={onFinish}
                        layout={formLayout}
                        autoComplete="off"
                    >
                        <Divider>
                            <Text style={{
                                fontWeight: 'bolder',
                                fontSize: 17,
                            }}>
                                日期筛选
                            </Text>
                        </Divider>
                        <Form.Item
                            name="startTime"
                            label="开始日期"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <DatePicker
                                locale={locale}
                                showToday
                                size='default'
                                value={startTime}
                                onChange={(value, str) => {
                                    setStartTime(str);
                                }}
                                width={selectWidth}
                            />
                        </Form.Item>
                        <Form.Item
                            name="endTime"
                            label="结束日期"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <DatePicker
                                locale={locale}
                                showToday
                                size='default'
                                value={endTime}
                                onChange={(value, str) => {
                                    setEndTime(str);
                                }}
                            />
                        </Form.Item>
                        <Divider>
                            <Text style={{
                                fontWeight: 'bolder',
                                fontSize: 17,
                            }}>
                                条件筛选
                            </Text>
                        </Divider>
                        <Form.Item
                            name="userId"
                            label="用户名"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <Select
                                placeholder="请输入用户名"
                                allowClear
                                showSearch
                                style={{width: selectWidth}}
                                optionFilterProp="label"
                                filterOption={(input, option) =>
                                    option.label.toString().includes(input)
                                }
                                options={userOptions}
                            />
                        </Form.Item>
                        <Form.Item
                            name="sn"
                            label="设备SN"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <Select
                                placeholder="请选择设备sn"
                                allowClear
                                showSearch
                                style={{width: selectWidth}}
                                optionFilterProp="label"
                                filterOption={(input, option) =>
                                    option.label.toString().includes(input)
                                }
                                options={snsOptions}
                            />
                        </Form.Item>
                        <Form.Item
                            name="type"
                            label="设备类型"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <Select
                                placeholder="请选择设备类型"
                                allowClear
                                style={{width: selectWidth}}
                                options={[
                                    {label: '自动驾驶', value: 'auto'},
                                    {label: '平地仪', value: 'grader'},
                                ]}
                            />
                        </Form.Item>
                    </Form>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>

                    <Button
                        type="primary"
                        onClick={() => {
                        }}>
                        筛选
                    </Button>
                </div>
            </div>
        </>
    );
};

export default MyForm;

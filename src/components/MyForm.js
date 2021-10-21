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
        if (breakpoint === 'xs') {
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
                                Duration Select
                            </Text>
                        </Divider>
                        <Form.Item
                            name="startTime"
                            label="Start Time"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <DatePicker
                                locale={locale}
                                showToday
                                size='large'
                                value={startTime}
                                onChange={(value, str) => {
                                    setStartTime(str);
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="endTime"
                            label="End Time"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <DatePicker
                                locale={locale}
                                showToday
                                size='large'
                                value={endTime}
                                onChange={(value, str) => {
                                    setEndTime(str);
                                }}
                            />
                        </Form.Item>
                        <Divider>
                            <Text style={{
                                fontWeight: 'bolder',
                                fontSize: 21,
                            }}>
                                Options Filter
                            </Text>
                        </Divider>
                        <Form.Item
                            name="userId"
                            label="username"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select users"
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
                            label="SN"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select sns"
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
                            label="Type"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select sns"
                                allowClear
                                style={{width: selectWidth}}
                                options={[
                                    {label: 'auto', value: 'auto'},
                                    {label: 'grader', value: 'grader'},
                                ]}
                            />
                        </Form.Item>
                    </Form>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>

                    <Button onClick={() => {
                        alert(form.getFieldValue('sn'));
                    }}>
                        筛选
                    </Button>
                </div>
            </div>
        </>
    );
};

export default MyForm;

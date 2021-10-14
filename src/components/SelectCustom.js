import React from 'react';
import { Select } from "antd";

const {Option} = Select;

const SelectCustom = (props) => {
    const selects = props.selects;
    const onSelect = props.onSelect;

    const options = selects.map((unit) => {
        return (
            <Option value={unit}>{unit}</Option>
        );
    });

    return (
        <div style={{textAlign: 'right'}}>
            <Select defaultValue={selects[0]} size="small" style={{width: 70}} onChange={onSelect}>
                {options}
            </Select>
        </div>
    );
};

export default SelectCustom;

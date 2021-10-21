import React, { useEffect, useState } from 'react';
import GridLayout from './pages/GridLayout';
import { getWorkReportDataApi } from './components/Api/workreport';
import './App.less';

const App = () => {
    const [addressData, setAddressData] = useState();
    const [sumTextData, setSumTextData] = useState();
    const [sns, setSns] = useState([]);
    const userOptions = [
        {
            label: 'zwz',
            value: 1,
        },
        {
            label: 'zhaowenzhuo',
            value: 2,
        },
        {
            label: 'someone',
            value: 3,
        }
    ];
    useEffect(() => {
        getWorkReportDataApi().then((res) => {
            console.log(res);
            const {code, msg, data} = res;
            const {all_tdae, auto_chart, grader_chart, locations_chart, sns} = data;
            //const {time, distance, area, earth} = all_tdae;
            //const {province, city, district} = locations_chart;
            setSumTextData(all_tdae);
            setAddressData(locations_chart);
            setSns(sns);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <GridLayout
                sumTextData={sumTextData}
                addressData={addressData}
                sns={sns}
                userOptions={userOptions}
            />
        </>
    );
};

export default App;

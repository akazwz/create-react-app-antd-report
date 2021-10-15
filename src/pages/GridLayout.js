import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import SumDataTextShow from "../components/SumDataTextShow";
import WorkQualityShow from "../components/WorkQualityShow";
import WorkAddressShow from "../components/WorkAddressShow";
import WorkDataShow from "../components/WorkDataShow";
import SettingToolInput from "../components/SettingToolInput";
import SettingToolOptions from "../components/SettingToolOptions";

const GridLayout = () => {
    const sumTextData = {
        time: 3337,
        distance: 3337,
        area: 3337,
        earth: 3337,
    };
    const addressData = {
        province: [
            {
                type: '分类一',
                value: 27,
            },
            {
                type: '分类二',
                value: 25,
            },
            {
                type: '分类三',
                value: 18,
            },
        ],
        city: [
            {
                type: '分类四',
                value: 15,
            },
            {
                type: '分类五',
                value: 10,
            },
            {
                type: '其他',
                value: 5,
            },
            {
                type: '分wrerwe类四',
                value: 15,
            },
            {
                type: '分werwerwer类五',
                value: 10,
            },
            {
                type: '其rwerewrwer他',
                value: 5,
            },
            {
                type: '分类werwerew四',
                value: 15,
            },
            {
                type: '分类werwrwer五',
                value: 10,
            },
            {
                type: '其werwer他',
                value: 5,
            },
            {
                type: '分类dsf四',
                value: 15,
            },
            {
                type: '分wer类五',
                value: 10,
            },
            {
                type: '其34534wer他',
                value: 5,
            },
            {
                type: '分rwe345435r类四',
                value: 15,
            },
            {
                type: '分4535345rwer类五',
                value: 10,
            },
            {
                type: '其werw534523erw他',
                value: 5,
            },
            {
                type: '34534',
                value: 5,
            },
            {
                type: '分rwe675674r类四',
                value: 15,
            },
            {
                type: '75675675675',
                value: 10,
            },
            {
                type: '567567',
                value: 5,
            },
        ],
        district: [
            {
                type: '分类四',
                value: 15,
            },
            {
                type: '分类五',
                value: 10,
            },
            {
                type: '未知',
                value: 5,
            },
        ],
        count: 77,
    };
    const workData = {
        time: [
            {
                name: 'London',
                month: 'Jan.',
                value: 18.9,
            },
            {
                name: 'London',
                month: 'Feb.',
                value: 28.8,
            },
            {
                name: 'London',
                month: 'Mar.',
                value: 39.3,
            },
            {
                name: 'London',
                month: 'Apr.',
                value: 81.4,
            },
            {
                name: 'London',
                month: 'May',
                value: 47,
            },
            {
                name: 'London',
                month: 'Jun.',
                value: 20.3,
            },
            {
                name: 'London',
                month: 'Jul.',
                value: 24,
            },
            {
                name: 'London',
                month: 'Aug.',
                value: 35.6,
            },
            {
                name: 'Berlin',
                month: 'Jan.',
                value: 12.4,
            },
            {
                name: 'Berlin',
                month: 'Feb.',
                value: 23.2,
            },
            {
                name: 'Berlin',
                month: 'Mar.',
                value: 34.5,
            },
            {
                name: 'Berlin',
                month: 'Apr.',
                value: 99.7,
            },
            {
                name: 'Berlin',
                month: 'May',
                value: 52.6,
            },
            {
                name: 'Berlin',
                month: 'Jun.',
                value: 35.5,
            },
            {
                name: 'Berlin',
                month: 'Jul.',
                value: 37.4,
            },
            {
                name: 'Berlin',
                month: 'Aug.',
                value: 42.4,
            },
        ],
        distance: [
            {
                name: 'London',
                month: 'Jan.',
                value: 38.9,
            },
            {
                name: 'London',
                month: 'Feb.',
                value: 18.8,
            },
            {
                name: 'London',
                month: 'Mar.',
                value: 33.3,
            },
            {
                name: 'London',
                month: 'Apr.',
                value: 51.4,
            },
            {
                name: 'London',
                month: 'May',
                value: 67,
            },
            {
                name: 'London',
                month: 'Jun.',
                value: 10.3,
            },
            {
                name: 'London',
                month: 'Jul.',
                value: 24,
            },
            {
                name: 'London',
                month: 'Aug.',
                value: 35.6,
            },
            {
                name: 'Berlin',
                month: 'Jan.',
                value: 12.4,
            },
            {
                name: 'Berlin',
                month: 'Feb.',
                value: 23.2,
            },
            {
                name: 'Berlin',
                month: 'Mar.',
                value: 34.5,
            },
            {
                name: 'Berlin',
                month: 'Apr.',
                value: 99.7,
            },
            {
                name: 'Berlin',
                month: 'May',
                value: 62.6,
            },
            {
                name: 'Berlin',
                month: 'Jun.',
                value: 35.5,
            },
            {
                name: 'Berlin',
                month: 'Jul.',
                value: 77.4,
            },
            {
                name: 'Berlin',
                month: 'Aug.',
                value: 42.4,
            },
        ],
        area: [
            {
                name: 'London',
                month: 'Jan.',
                value: 78.9,
            },
            {
                name: 'London',
                month: 'Feb.',
                value: 28.8,
            },
            {
                name: 'London',
                month: 'Mar.',
                value: 59.3,
            },
            {
                name: 'London',
                month: 'Apr.',
                value: 81.4,
            },
            {
                name: 'London',
                month: 'May',
                value: 37,
            },
            {
                name: 'London',
                month: 'Jun.',
                value: 10.3,
            },
            {
                name: 'London',
                month: 'Jul.',
                value: 24,
            },
            {
                name: 'London',
                month: 'Aug.',
                value: 25.6,
            },
            {
                name: 'Berlin',
                month: 'Jan.',
                value: 12.4,
            },
            {
                name: 'Berlin',
                month: 'Feb.',
                value: 23.2,
            },
            {
                name: 'Berlin',
                month: 'Mar.',
                value: 24.5,
            },
            {
                name: 'Berlin',
                month: 'Apr.',
                value: 99.7,
            },
            {
                name: 'Berlin',
                month: 'May',
                value: 52.6,
            },
            {
                name: 'Berlin',
                month: 'Jun.',
                value: 35.5,
            },
            {
                name: 'Berlin',
                month: 'Jul.',
                value: 87.4,
            },
            {
                name: 'Berlin',
                month: 'Aug.',
                value: 42.4,
            },
        ],
        earth: [
            {
                name: 'London',
                month: 'Jan.',
                value: 38.9,
            },
            {
                name: 'London',
                month: 'Feb.',
                value: 28.8,
            },
            {
                name: 'London',
                month: 'Mar.',
                value: 29.3,
            },
            {
                name: 'London',
                month: 'Apr.',
                value: 81.4,
            },
            {
                name: 'London',
                month: 'May',
                value: 47,
            },
            {
                name: 'London',
                month: 'Jun.',
                value: 20.3,
            },
            {
                name: 'London',
                month: 'Jul.',
                value: 74,
            },
            {
                name: 'London',
                month: 'Aug.',
                value: 35.6,
            },
            {
                name: 'Berlin',
                month: 'Jan.',
                value: 42.4,
            },
            {
                name: 'Berlin',
                month: 'Feb.',
                value: 23.2,
            },
            {
                name: 'Berlin',
                month: 'Mar.',
                value: 34.5,
            },
            {
                name: 'Berlin',
                month: 'Apr.',
                value: 69.7,
            },
            {
                name: 'Berlin',
                month: 'May',
                value: 52.6,
            },
            {
                name: 'Berlin',
                month: 'Jun.',
                value: 35.5,
            },
            {
                name: 'Berlin',
                month: 'Jul.',
                value: 87.4,
            },
            {
                name: 'Berlin',
                month: 'Aug.',
                value: 42.4,
            },
        ],
    };

    const ResponsiveGridLayout = WidthProvider(Responsive);
    const [breakpoint, setBreakpoint] = useState('lg');
    const [settingHidden, setSettingHidden] = useState(false);
    const [qualityValue, setQualityValue] = useState(0);
    const breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    const cols = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2};
    const layouts = {
        lg: [
            {w: 3, h: 3, x: 0, y: 0, i: "work-data-text", moved: false, static: false},
            {w: 3, h: 3, x: 3, y: 0, i: "work-quality-gauge", moved: false, static: false},
            {w: 3, h: 3, x: 6, y: 0, i: "work-area-pie", moved: false, static: false},
            {w: 9, h: 3, x: 0, y: 3, i: "work-data-charts", moved: false, static: false},
            {w: 3, h: 6, x: 9, y: 0, i: "work-report-setting", moved: false, static: false}
        ],
        md: [
            {w: 10, h: 3, x: 0, y: 3, i: 'work-data-text', moved: false, static: false},
            {w: 10, h: 3, x: 0, y: 6, i: 'work-quality-gauge', moved: false, static: false},
            {w: 10, h: 3, x: 0, y: 9, i: 'work-area-pie', moved: false, static: false},
            {w: 10, h: 3, x: 0, y: 12, i: 'work-data-charts', moved: false, static: false},
            {w: 10, h: 3, x: 0, y: 0, i: 'work-report-setting', moved: false, static: false},
        ],
        sm: [
            {w: 6, h: 3, x: 0, y: 3, i: 'work-data-text', moved: false, static: false},
            {w: 6, h: 3, x: 0, y: 6, i: 'work-quality-gauge', moved: false, static: false},
            {w: 6, h: 3, x: 0, y: 9, i: 'work-area-pie', moved: false, static: false},
            {w: 6, h: 3, x: 0, y: 12, i: 'work-data-charts', moved: false, static: false},
            {w: 6, h: 3, x: 0, y: 0, i: 'work-report-setting', moved: false, static: false},
        ],
        xs: [
            {w: 4, h: 3, x: 0, y: 3, i: 'work-data-text', moved: false, static: false},
            {w: 4, h: 3, x: 0, y: 6, i: 'work-quality-gauge', moved: false, static: false},
            {w: 4, h: 3, x: 0, y: 9, i: 'work-area-pie', moved: false, static: false},
            {w: 4, h: 3, x: 0, y: 12, i: 'work-data-charts', moved: false, static: false},
            {w: 4, h: 3, x: 0, y: 0, i: 'work-report-setting', moved: false, static: false},
        ],
        xss: [
            {w: 2, h: 3, x: 0, y: 3, i: "work-data-text", moved: false, static: false},
            {w: 2, h: 3, x: 0, y: 6, i: "work-quality-gauge", moved: false, static: false},
            {w: 2, h: 3, x: 0, y: 9, i: "work-area-pie", moved: false, static: false},
            {w: 2, h: 3, x: 0, y: 12, i: "work-data-charts", moved: false, static: false},
            {w: 2, h: 3, x: 0, y: 0, i: "work-report-setting", moved: false, static: false}
        ],
    };
    const handleBreakPointChange = (breakpoint) => {
        setBreakpoint(breakpoint);
        if (breakpoint !== 'lg') {
            setSettingHidden(false);
        }
    };
    useEffect(() => {
        /*getWorkReportData();*/
    }, [])

    const handleLayoutChange = (value) => {
        console.log(value);
    }

    return (
        <>
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                onBreakpointChange={handleBreakPointChange}
                onLayoutChange={handleLayoutChange}
                compactType="horizontal"
                breakpoints={breakpoints}
                cols={cols}
            >
                <div key="work-data-text" style={{backgroundColor: '#ffffff'}}>
                    <SumDataTextShow data={sumTextData} />
                </div>
                <div key="work-quality-gauge" style={{backgroundColor: '#ffffff'}}>
                    <WorkQualityShow data={0.7} />
                </div>
                <div key="work-area-pie" style={{backgroundColor: '#ffffff'}}>
                    <WorkAddressShow data={addressData} />
                </div>
                <div key="work-data-charts" style={{backgroundColor: '#ffffff'}}>
                    <WorkDataShow data={workData} />
                </div>
                <div key="work-report-setting" style={{backgroundColor: '#ffffff', overflow: 'hidden'}}
                     hidden={settingHidden}>
                    <SettingToolInput />
                    <SettingToolOptions />
                </div>
            </ResponsiveGridLayout>
        </>
    );
};

export default GridLayout;

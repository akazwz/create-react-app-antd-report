import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import SumDataTextShow from "../components/SumDataTextShow";

const GridLayout = () => {
    const sumTextData = {
        time: 3337,
        distance: 3337,
        area: 3337,
        earth: 3337,
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
                <div key="work-data-text" style={{backgroundColor: 'grey'}}>
                    <SumDataTextShow data={sumTextData} />
                </div>
                <div key="work-quality-gauge" style={{backgroundColor: 'grey'}}>
                    work quality
                </div>
                <div key="work-area-pie" style={{backgroundColor: 'grey'}}>
                    work area
                </div>
                <div key="work-data-charts" style={{backgroundColor: 'grey'}}>
                    work data
                </div>
                <div key="work-report-setting" style={{backgroundColor: 'grey'}} hidden={settingHidden}>
                    setting
                </div>
            </ResponsiveGridLayout>
        </>
    );
};

export default GridLayout;

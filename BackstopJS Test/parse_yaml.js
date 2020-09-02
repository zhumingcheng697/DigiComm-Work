const YAML = require('yaml');
const fs = require('fs');
const backstop = require('backstopjs');
const readline = require('readline');

// http://logan.tw/posts/2015/12/12/read-lines-from-stdin-in-nodejs/
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(line);
});


const file = fs.readFileSync('nyu.yml', 'utf8');
const parsed = YAML.parse(file);

const scenarios = parsed.urls;

const defaultConfig = {
    paths: {
        bitmaps_reference: "backstop_data/bitmaps_reference",
        bitmaps_test: "backstop_data/bitmaps_test",
        engine_scripts: "backstop_data/engine_scripts",
        html_report: "backstop_data/html_report",
        ci_report: "backstop_data/ci_report"
    },
    report: ["browser"],
    engine: "puppeteer",
    engineOptions: {
        "args": ["--no-sandbox"]
    },
    asyncCaptureLimit: 20,
    asyncCompareLimit: 100,
    debug: false,
    debugWindow: false
}

function runBackstop(scenario, action = "test") {
    if (!["test", "approve", "reference"].includes(action)) {
        return;
    }

    let config = Object.assign({}, defaultConfig);

    config.viewports = scenario["screen_sizes"].map((screenSizeStr) => {
        const match = screenSizeStr.match(/([1-9][0-9]{0,})x([1-9][0-9]{0,})/);
        return {
            label: screenSizeStr,
            width: parseInt(match[1]),
            height: parseInt(match[2])
        };
    });

    config.scenarios = [
        {
            label: scenario.name,
            cookiePath: "",
            url: scenario.url1,
            referenceUrl: scenario.url2,
            readyEvent: "",
            readySelector: "",
            delay: parseInt(scenario.delay || "0") === 0 ? 0 : 3000,
            hideSelectors: [],
            removeSelectors: [],
            hoverSelector: "",
            clickSelector: "",
            postInteractionWait: 0,
            selectors: [],
            selectorExpansion: true,
            expect: 0,
            misMatchThreshold : 0.1,
            requireSameDimensions: true
        }
    ];

    backstop(action, {config: config});
}

runBackstop(scenarios[1], "test")
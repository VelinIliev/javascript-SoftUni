function main(browser, actions) {
    for (let i = 0; i < actions.length; i++) {
        let data = actions[i].split(" ");
        let action = data.shift();
        let site = data.join(" ");
        if (action === "Open"){
            browser['Open Tabs'].push(site);
            browser['Browser Logs'].push(`${action} ${site}`)
        } else if(action === 'Close') {
            if (browser['Open Tabs'].includes(site)) {
                let index = browser['Open Tabs'].indexOf(site);
                browser['Open Tabs'].splice(index, 1);
                browser['Recently Closed'].push(site);
            }
            browser['Browser Logs'].push(`${action} ${site}`)
        } else if (action === "Clear") {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
        }
    }
    console.log(browser['Browser Name']);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(", ")}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(", ")}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(", ")}`);
}

// main({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
// "Recently Closed":["Yahoo","Gmail"],
// "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
// ["Close Facebook", "Open StackOverFlow", "Open Google"]
// )
main({"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])

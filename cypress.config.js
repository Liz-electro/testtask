const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        env: {
            username: '',
            password: '',
            token: ''},
        baseUrl: 'https://factory.katanamrp.com/',
        reporter: 'mochawesome',
        reporterOptions: {
            overwrite: "false",
            reportDir: "reports",
            reportPageTitle: "UI Automation test status",
            reportTitle: "Automated UI Test Reporting Dashboard",
            showPassed: "true",
            autoOpen: "false",
            charts: "true",
            code: "false"
        }
    }
});

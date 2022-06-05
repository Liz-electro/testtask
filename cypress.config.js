const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://katanamrp.com/',
        env: {
            username: "",
            password: "",
            incorrectPassword: "test"
        },
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

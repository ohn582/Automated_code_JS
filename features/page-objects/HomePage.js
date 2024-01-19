const { expect } = require('chai').use(require('chai-as-promised'));
const { action } = require('../utilities/action');

const locators = {
    // project: '"Project"',
    // resource: '"Resource"',
    // anaysis: '"Anaysis"',
    // administration: '"Administration"',
    usersNavIcon: '.fa-users',
    navCogIcon: '.fa-cogs',



    navbar: {
        project: {
            icon: `[id="ext-customtreelistitem-2"]`,
            links: {
                project_Data: "'Data'",
                initiation: "'Initiation'",
            }
        },
        rescource: {
            links: {
                resource_Data: "'Rescource Data'",
                skill_Matrix: "'Skill Matrix'",
                capacity: "'Capacity'",
                Utilization: "'Utilization'",
            }
        },
        analysis: {
            links: {
                waterline: "'Waterline'",
                kpi: "'KPIs'",
            }
        },
        administration: {
            icon: `[id="ext-customtreelistitem-8"]`,
            links: {
                settings: "'Settings'",
                users_Rights: "'Users & Rights'",
                system_Lists: "'System Lists'",
                project_Lists: "'Project Lists'",
                resource_Lists: "'Resource Lists'",
                financial_Lists: "'Financial Lists'",
                agile: "'Agile'",
                views_Filters: "'Views & Filters'",
                other: "'Other'",
                about: "'About'",
            }
        },
    }
}

class HomePage {
    constructor(page) {
        this.page = page;
    }

    async click_navigation_link(link) {
        return new Promise(async (resolve, reject) => {
            try {
                switch (String(link)) {
                    case `project`:
                        let { project_Data, Initiation } = locators.navbar.project.links
                        await action.hover(this.page, locators.navbar.project.icon);
                        expect(await this.page.$(project_Data)).to.be.ok;
                        expect(await this.page.$(Initiation)).to.be.ok;
                        switch (String(link)) {
                            case `Data`:
                                await action.click(this.page, project_Data);
                                break;
                            case `Initiation`:
                                await action.click(this.page, Initiation);
                                break;
                        }
                    break;
                    case `Resource`:
                        let { resource_Data, skill_Matrix, capacity, utilization } = locators.navbar.rescource.links
                        await action.hover(this.page, locators.navbar.rescource.icon);
                        expect(await this.page.$(resource_Data)).to.be.ok;
                        expect(await this.page.$(skill_Matrix)).to.be.ok;
                        expect(await this.page.$(capacity)).to.be.ok;
                        expect(await this.page.$(utilization)).to.be.ok;
                        switch (String(link)) {
                            case `Resource Data`:
                                await action.click(this.page, resource_Data);
                                break;
                            case `Skill Matrix`:
                                await action.click(this.page, skill_Matrix);
                                break;
                            case `Capacity`:
                                await action.click(this.page, capacity);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Utilization`:
                                await action.click(this.page, utilization);
                                await this.page.waitForTimeout(5000)
                                break;
                        }
                    break;
                    case `Analysis`:
                        let { waterline, kpi } = locators.navbar.analysis.links
                        await action.hover(this.page, locators.navbar.analysis.icon);
                        expect(await this.page.$(waterline)).to.be.ok;
                        expect(await this.page.$(kpi)).to.be.ok;
                        switch (String(link)) {
                            case `Demand`:
                                await action.click(this.page, waterline);
                                break;
                            case `Project Data`:
                                await action.click(this.page, kpi);
                                break;
                        }
                    break;
                    

                    case `Administration`:
                        let { settings, users_Rights, system_Lists, project_Lists, resource_Lists, financial_Lists, agile, views_Filters, other, about } = locators.navbar.administration.links
                        await action.hover(this.page, locators.navbar.administration.icon);
                        expect(await this.page.$(settings)).to.be.ok;
                        expect(await this.page.$(users_Rights)).to.be.ok;
                        expect(await this.page.$(system_Lists)).to.be.ok;
                        expect(await this.page.$(project_Lists)).to.be.ok;
                        expect(await this.page.$(resource_Lists)).to.be.ok;
                        expect(await this.page.$(financial_Lists)).to.be.ok;
                        expect(await this.page.$(agile)).to.be.ok;
                        expect(await this.page.$(views_Filters)).to.be.ok;
                        expect(await this.page.$(other)).to.be.ok;
                        expect(await this.page.$(about)).to.be.ok;
                        switch (String(link)) {
                            case `Settings`:
                                await action.click(this.page, settings);
                                break;
                            case `Users & Rights`:
                                await action.click(this.page, users_Rights);
                                break;
                            case `System Lists`:
                                await action.click(this.page, system_Lists);
                                break;
                            case `project Lists`:
                                await action.click(this.page, project_Lists);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Resource Lists`:
                                await action.click(this.page, resource_Lists);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Financial Lists`:
                                await action.click(this.page, financial_Lists);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Agile`:
                                await action.click(this.page, agile);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Views & Filters`:
                                await action.click(this.page, views_Filters);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Other`:
                                await action.click(this.page, other);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `About`:
                                await action.click(this.page, about);
                                await this.page.waitForTimeout(5000)
                                break;
                        }
                    break;
                }
                return resolve(true);
            }
            catch (err) {
                console.log(`${err} issue`);
            }
        })
    }

    async clickAdministration() {
        await this.page.click(locators.administration)
    }

    async clickProject() {
        await this.page.click(locators.project)
    }

    async clickResource() {
        await this.page.click(locators.resource)
    }

    async clickAnaysis() {
        await this.page.click(locators.anaysis)
    }

    async hoverOverAssignments() {
        await this.page.hover(locators.usersNavIcon)
    }

    async getNavCogIcon() {
        return locators.navCogIcon
    }

    async verifyAssignments() {
        return expect(await this.page.$(locators.assignments)).to.exist
    }

    async getNavCogIcon() {
        return locators.navCogIcon
    }

    async getListsOption() {
        return locators.listsOption
    }

}

module.exports.HomePage = HomePage;
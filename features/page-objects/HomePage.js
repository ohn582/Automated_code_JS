const { expect } = require('chai').use(require('chai-as-promised'));
const { action } = require('../utilities/action');

const locators = {
    proj: '"Project"',
    reso: '"Resource"',
    ana: '"Anaysis"',
    admin: '"Administration"',
    usersNavIcon: '.fa-users',
    navCogIcon: '.fa-cogs',
    navbar: {
        project: {
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
            links: {
                settings: "'Settings'",
                users: "'Users & Rights'",
                objects: "'Objects'",
                project_Lists: "'Project Lists'",
                resource_Lists: "'Resource Lists'",
                financial_Lists: "'Financial Lists'",
                agile: "'Agile'",
                views_Filters: "'Views & Filters'",
                Other: "'Other'",
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
                        let { settings, users, objects, project_Lists, resource_Lists, financial_Lists, agile, views_Filters, Other } = locators.navbar.administration.links
                        await action.hover(this.page, locators.navbar.administration.icon);
                        expect(await this.page.$(settings)).to.be.ok;
                        expect(await this.page.$(users)).to.be.ok;
                        expect(await this.page.$(objects)).to.be.ok;
                        expect(await this.page.$(project_Lists)).to.be.ok;
                        expect(await this.page.$(resource_Lists)).to.be.ok;
                        expect(await this.page.$(financial_Lists)).to.be.ok;
                        expect(await this.page.$(agile)).to.be.ok;
                        expect(await this.page.$(views_Filters)).to.be.ok;
                        expect(await this.page.$(Other)).to.be.ok;
                        switch (String(link)) {
                            case `Settings`:
                                await action.click(this.page, settings);
                                break;
                            case `Edit OBSs`:
                                await action.click(this.page, users);
                                break;
                            case `Columns`:
                                await action.click(this.page, objects);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Views`:
                                await action.click(this.page, project_Lists);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Lists`:
                                await action.click(this.page, resource_Lists);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Periods`:
                                await action.click(this.page, financial_Lists);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Baselines`:
                                await action.click(this.page, agile);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Pulse`:
                                await action.click(this.page, views_Filters);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `About`:
                                await action.click(this.page, Other);
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
        await this.page.click(locators.admin)
    }

    async clickProject() {
        await this.page.click(locators.proj)
    }

    async clickResource() {
        await this.page.click(locators.reso)
    }

    async clickAnaysis() {
        await this.page.click(locators.ana)
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
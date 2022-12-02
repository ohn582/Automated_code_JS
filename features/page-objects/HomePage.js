const { expect } = require('chai').use(require('chai-as-promised'));
const { action } = require('../utilities/action');

const locators = {
    proj: `'Project'`,
    reso: `'Resource'`,
    ana: `'Anaysis'`,
    admin: `'Administration'`,
    list: `'List'`,
    navbar: {
        project: {
            links: {
                project_Data: `"Project Data"`,
                demand: '"Demand"',
                project_assignments: "'Assignments'",
            }
        },
        rescource: {
            links: {
                resource_Data: `"Rescource Data"`,
                skill_Matrix: '"Skill Matrix"',
                capacity: "'Capacity'",
                Utilization: '"Utilization"',
                rescource_assignments: "'Assignments'",
            }
        },
        analysis: {
            links: {
                project_Pivot: `"Project Pivot"`,
                skill_Matrix: '"Skill Matrix"',
            }
        },
        administration: {
            links: {
                settings: `"Settings"`,
                edit_OBSs: '"Edit OBSs"',
                columns: "'Columns'",
                views: "'Views'",
                lists: "'Lists'",
                periods: "'Periods'",
                baselines: "'Baselines'",
                pulse: "'Pulse'",
                about: "'About'",
            }
        },
        list: {
            links: {
                partitions: "'Partitions'",
                domains: "'Domains'",
                sponsors: "'Sponsors'",
                categories: "'Categories'",
                project_States: "'Project States'",
                project_Codes: "'Project Codes'",
                skills: "'Skills'",
                proficiencies: "'Proficiencies'",
                countries: "'Countries'",
                locations: "'Locations'",
                effort_States: "'Effort States'",
                cost_Categories: "'Cost Categories'",
                cost_Items: "'Cost Items'",
                cost_Item_Categories: "'Cost Item Categories'",
                baseline_Types: "'Baseline Types'",
                feature_States: "'Feature States'",
                overheads: "'Overheads'",
                user_Defined_Lists: "'User Defined Lists'",
            }
        }
    }
}

class HomePage {
    constructor(page) {
        this.page = page;
    }

    async click_navigation_link(icon, link) {
        return new Promise(async (resolve, reject) => {
            try {
                switch (String(icon)) {
                    case `Project`:
                        let { project_Data, demand, project_assignments } = locators.navbar.project.links
                        await action.hover(this.page, locators.navbar.project.icon);
                        expect(await this.page.$(project_Data)).to.be.ok;
                        expect(await this.page.$(demand)).to.be.ok;
                        expect(await this.page.$(project_assignments)).to.be.ok;
                        switch (String(link)) {
                            case `Project Data`:
                                await action.click(this.page, project_Data);
                                break;
                            case `Demand`:
                                await action.click(this.page, demand);
                                break;
                            case `Assignments`:
                                await action.click(this.page, project_assignments);
                                await this.page.waitForTimeout(5000)
                                break;
                        }
                    break;
                    case `Resource`:
                        let { resource_Data, skill_Matrix, capacity, utilization, rescource_assignments } = locators.navbar.rescource.links
                        await action.hover(this.page, locators.navbar.rescource.icon);
                        expect(await this.page.$(resource_Data)).to.be.ok;
                        expect(await this.page.$(skill_Matrix)).to.be.ok;
                        expect(await this.page.$(capacity)).to.be.ok;
                        expect(await this.page.$(utilization)).to.be.ok;
                        expect(await this.page.$(rescource_assignments)).to.be.ok;
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
                            case `Assignments`:
                                await action.click(this.page, rescource_assignments);
                                await this.page.waitForTimeout(5000)
                                break;
                        }
                    break;
                    case `Analysis`:
                        let { project_Pivot, resource_Pivot } = locators.navbar.analysis.links
                        await action.hover(this.page, locators.navbar.analysis.icon);
                        expect(await this.page.$(project_Pivot)).to.be.ok;
                        expect(await this.page.$(resource_Pivot)).to.be.ok;
                        switch (String(link)) {
                            case `Project Data`:
                                await action.click(this.page, project_Pivot);
                                break;
                            case `Skill Matrix`:
                                await action.click(this.page, resource_Pivot);
                                break;
                        }
                    break;

                    case `Administration`:
                        let { settings, edit_OBSs, columns, views, lists, periods, baselines, pulse, about } = locators.navbar.administration.links
                        await action.hover(this.page, locators.navbar.administration.icon);
                        expect(await this.page.$(settings)).to.be.ok;
                        expect(await this.page.$(edit_OBSs)).to.be.ok;
                        expect(await this.page.$(columns)).to.be.ok;
                        expect(await this.page.$(views)).to.be.ok;
                        expect(await this.page.$(lists)).to.be.ok;
                        expect(await this.page.$(periods)).to.be.ok;
                        expect(await this.page.$(baselines)).to.be.ok;
                        expect(await this.page.$(pulse)).to.be.ok;
                        expect(await this.page.$(about)).to.be.ok;
                        switch (String(link)) {
                            case `Settings`:
                                await action.click(this.page, settings);
                                break;
                            case `Edit OBSs`:
                                await action.click(this.page, edit_OBSs);
                                break;
                            case `Columns`:
                                await action.click(this.page, columns);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Views`:
                                await action.click(this.page, views);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Lists`:
                                await action.click(this.page, lists);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Periods`:
                                await action.click(this.page, periods);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Baselines`:
                                await action.click(this.page, baselines);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `Pulse`:
                                await action.click(this.page, pulse);
                                await this.page.waitForTimeout(5000)
                                break;
                            case `About`:
                                await action.click(this.page, about);
                                await this.page.waitForTimeout(5000)
                                break;
                        }
                    break;
                    case `List`:
                        let { partitions, domains } = locators.navbar.list.links
                        await action.hover(this.page, locators.navbar.list.icon);
                        expect(await this.page.$(partitions)).to.be.ok;
                        expect(await this.page.$(domains)).to.be.ok;
                        switch (String(link)) {
                            case `Partitions`:
                                await action.click(this.page, partitions);
                                break;
                            case `Domains`:
                                await action.click(this.page, domains);
                                break;
                            case `Sponsors`:
                                await action.click(this.page, sponsors);
                                break;
                            case `Categories`:
                                await action.click(this.page, categories);
                                break;
                            case `Project States`:
                                await action.click(this.page, project_States);
                                break;
                            case `Project Codes`:
                                await action.click(this.page, project_Codes);
                                break;
                            case `Skills`:
                                await action.click(this.page, skills);
                                break;
                            case `Proficiencies`:
                                await action.click(this.page, proficiencies);
                                break;
                            case `Countries`:
                                await action.click(this.page, countries);
                                break;
                            case `Locations`:
                                await action.click(this.page, locations);
                                break;
                            case `Effort States`:
                                await action.click(this.page, effort_States);
                                break;
                            case `Cost Categories`:
                                await action.click(this.page, cost_Categories);
                                break;
                            case `Locations`:
                                await action.click(this.page, locations);
                                break;
                            case `Effort States`:
                                await action.click(this.page, effort_States);
                                break;
                            case `Cost Categories`:
                                await action.click(this.page, cost_Categories);
                                break;
                            case `Cost Items`:
                                await action.click(this.page, cost_Items);
                                break;
                            case `Cost Item Categories`:
                                await action.click(this.page, cost_Item_Categories);
                                break;
                            case `Baseline Types`:
                                await action.click(this.page, baseline_Types);
                                break;
                            case `Feature States`:
                                await action.click(this.page, feature_States);
                                break;
                            case `Overheads`:
                                await action.click(this.page, overheads);
                                break;
                            case `User Defined Lists`:
                                await action.click(this.page, user_Defined_Lists);
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

    async clickList() {
        await this.page.click(locators.list)
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
const { expect } = require('chai').use(require('chai-as-promised'));
const { action } = require('../utilities/action');

const locators = {
    usersNavIcon: '.fa-users',
    navCogIcon: '.fa-cogs',

    navbar: {
        Project: {
            icon: `[id="ext-customtreelistitem-2"]`,
            links: {
                project_Data: "'Data'",
                initiation: "'Initiation'",
            }
        },
        Rescource: {
            links: {
                resource_Data: "'Rescource Data'",
                skill_Matrix: "'Skill Matrix'",
                capacity: "'Capacity'",
                Utilization: "'Utilization'",
            }
        },
        Analysis: {
            links: {
                waterline: "'Waterline'",
                kpi: "'KPIs'",
            }
        },
        Administration: {
            icon: `[id="R1MainNavigationTree-bodyWrap"] [id="ext-customtreelistitem-8"]`,
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

    async click_navigation_link(nav, link) {
        return new Promise(async (resolve, reject) => {
            try {
                switch (String(nav)) {
                    case `Project`:
                        let { project_Data, Initiation } = locators.navbar.Project.links
                        
                        await action.hover(this.page, locators.navbar.Project.icon);

                        switch (String(link)) {
                            case `Data`:
                                await action.click(this.page, project_Data);
                                break;
                            case `Initiation`:
                                await action.click(this.page, Initiation);
                                break;
                        }
                    break;

                    case `Rescource`:
                        let { resource_Data, skill_Matrix, capacity, utilization } = locators.navbar.Rescource.links
                        
                        await action.hover(this.page, locators.navbar.Rescource.icon);

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
                        let { waterline, kpi } = locators.navbar.Analysis.links
                        await action.hover(this.page, locators.navbar.Analysis.icon);
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
                        let { settings, users_Rights, system_Lists, project_Lists, resource_Lists, financial_Lists, agile, views_Filters, other, about } = locators.navbar.Administration.links

                        await action.click(this.page, locators.navbar.Administration.icon);
                        await this.page.waitForTimeout(2000)

                        switch (String(link)) {
                            case `Settings`:
                                await action.click(this.page, settings);
                                await this.page.waitForTimeout(2000)
                                break;
                            case `Users & Rights`:
                                await action.click(this.page, users_Rights);
                                await this.page.waitForTimeout(2000)
                                break;
                            case `System Lists`:
                                await action.click(this.page, system_Lists);
                                await this.page.waitForTimeout(2000)
                                break;
                            case `Project Lists`:
                                await action.click(this.page, project_Lists);
                                await this.page.waitForTimeout(2000)
                                break;
                            case `Resource Lists`:
                                await action.click(this.page, resource_Lists);
                                await this.page.waitForTimeout(2000)
                                break;
                            case `Financial Lists`:
                                await action.click(this.page, financial_Lists);
                                await this.page.waitForTimeout(2000)
                                break;
                            case `Agile`:
                                await action.click(this.page, agile);
                                await this.page.waitForTimeout(2000)
                                break;
                            case `Views & Filters`:
                                await action.click(this.page, views_Filters);
                                await this.page.waitForTimeout(2000)
                                break;
                            case `Other`:
                                await action.click(this.page, other);
                                // await action.click(this.page, locators.navbar.Administration.links.other);
                                await this.page.waitForTimeout(2000)
                                break;
                            case `About`:
                                await action.click(this.page, about);
                                await this.page.waitForTimeout(2000)
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

    async hoverOverAssignments() {
        await this.page.hover(locators.usersNavIcon)
    }

    async getNavCogIcon() {
        return locators.navCogIcon
    }

    async getListsOption() {
        return locators.listsOption
    }

    async Administration () {
        await this.page.click(locators.navbar.Administration.links.other);
    
    }
}

module.exports.HomePage = HomePage;
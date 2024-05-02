class Utilities {
    constructor(page) {
      this.page = page;
    }
  
    async pressKey(key) {
      await this.page.keyboard.press(key);
    }
  
    async dragAndDrop(originSelector, destination) {
      // let page = this.page;
      await this.page.waitForSelector(originSelector);
      // await this.page.waitForSelector(destinationSelector);
      let origin = await this.page.$(originSelector);
      // let destination = await this.page.$(destinationSelector);
      let ob = await origin.boundingBox();
      let db = await destination.boundingBox();
      console.log(
        `Dragging from ${ob.x + ob.width / 2}, ${ob.y + ob.height / 2}`
      );
      await this.page.mouse.move(ob.x + ob.width / 2, ob.y + ob.height / 2);
      await this.page.mouse.down();
      console.log(
        `Dropping at   ${db.x + db.width / 2}, ${db.y + db.height / 2}`
      );
      await this.page.mouse.move(db.x + db.width / 2, db.y + db.height / 2);
      await this.page.mouse.up();
    }
  
  }
  
  module.exports.Utilities = Utilities;
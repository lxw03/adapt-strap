var tablelitePage = function() {
  this.selectedItems = element(by.binding('models.selectedCars.length'));
  this.selectAllCheckbox = $('#tablelite th input[type="checkbox"]');
  this.nameInput = $('#tableLiteSearch');
  this.load = function () {
    browser.get('/##tablelite');
    browser.sleep(1000);
  };
  this.getSearchResultRows = function () {
    return element.all(by.css('#tablelite .ad-table-container tbody tr'));
  };
};

module.exports = tablelitePage;

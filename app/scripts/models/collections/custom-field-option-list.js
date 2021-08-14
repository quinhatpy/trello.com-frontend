// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const CollectionWithHelpers = require('app/scripts/models/collections/internal/collection-with-helpers');
const { CustomFieldOption } = require('app/scripts/models/custom-field-option');

class CustomFieldOptionList extends CollectionWithHelpers {
  static initClass() {
    this.prototype.model = CustomFieldOption;
  }
  initialize() {
    return this.listenTo(this, 'change:pos', this.sort);
  }

  comparator(option) {
    return option.get('pos');
  }
}
CustomFieldOptionList.initClass();

module.exports.CustomFieldOptionList = CustomFieldOptionList;

import Ember from "ember";
import "../../test-helper";
import {test, moduleForComponent} from "ember-qunit";
import EmberTable from "ember-table/components/ember-table";
import ColumnDefinition from "ember-table/models/column-definition";

moduleForComponent("ember-table", "resolve ember-table component", function () {
});

test("ember-table is created", function (assert) {
  var emberTable = this.subject();

  assert.ok(emberTable, "subject object is created");
  assert.ok(emberTable instanceof EmberTable, "ember table is created");
});

moduleForComponent("ember-table", "render ember-table component", {
  needs: [
    'view:body-table-container',
    'view:column-sortable-indicator',
    'view:footer-table-container',
    'view:header-block',
    'view:header-cell',
    'view:header-row',
    'view:header-table-container',
    'view:scroll-container',
    'view:lazy-table-block',
    'view:multi-item-collection',
    'view:scroll-container',
    'view:scroll-panel',
    'view:table-block',
    'view:table-cell',
    'view:table-row',
    'template:body-table-container',
    'template:footer-table-container',
    'template:header-cell',
    'template:header-row',
    'template:header-table-container',
    'template:scroll-container',
    'template:table-cell',
    'template:table-row'
  ]
});

test("render ember-table", function (assert) {
  assert.expect(0);
  var emberTable = this.subject({
    columns: [],
    content: []
  });

  this.$(""); //will cause component rendered
});

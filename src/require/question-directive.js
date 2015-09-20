define(["depa", "depb"], function($__0, $__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var depA = $__0.default;
  var depB = $__2.default;
  var ItemDirective = function() {
    function ItemDirective() {
      this.whatever = depA.thing;
    }
    return ($traceurRuntime.createClass)(ItemDirective, {}, {});
  }();
  return {};
});

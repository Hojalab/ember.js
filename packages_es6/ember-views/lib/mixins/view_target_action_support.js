import {Mixin} from 'ember-metal/mixin';
import TargetActionSupport from "ember-runtime/mixins/target_action_support";

// ES6TODO: computed should have its own export path so you can do import {defaultTo} from computed
import {computed} from "ember-metal/computed";
var alias = computed.alias;

/**
`Ember.ViewTargetActionSupport` is a mixin that can be included in a
view class to add a `triggerAction` method with semantics similar to
the Handlebars `{{action}}` helper. It provides intelligent defaults
for the action's target: the view's controller; and the context that is
sent with the action: the view's context.

Note: In normal Ember usage, the `{{action}}` helper is usually the best
choice. This mixin is most often useful when you are doing more complex
event handling in custom View subclasses.

For example:

```javascript
App.SaveButtonView = Ember.View.extend(Ember.ViewTargetActionSupport, {
  action: 'save',
  click: function() {
    this.triggerAction(); // Sends the `save` action, along with the current context
                          // to the current controller
  }
});
```

The `action` can be provided as properties of an optional object argument
to `triggerAction` as well.

```javascript
App.SaveButtonView = Ember.View.extend(Ember.ViewTargetActionSupport, {
  click: function() {
    this.triggerAction({
      action: 'save'
    }); // Sends the `save` action, along with the current context
        // to the current controller
  }
});
```

@class ViewTargetActionSupport
@namespace Ember
@extends Ember.TargetActionSupport
*/
var ViewTargetActionSupport = Mixin.create(TargetActionSupport, {
  /**
  @property target
  */
  target: alias('controller'),
  /**
  @property actionContext
  */
  actionContext: alias('context')
});

export default ViewTargetActionSupport;

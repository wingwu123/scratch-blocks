/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Field for numbers. Includes validator and numpad on touch.
 * @author tmickel@mit.edu (Tim Mickel)
 */
'use strict';

goog.provide('Blockly.FieldDecimal');

goog.require('Blockly.FieldNumber');
goog.require('Blockly.Touch');
goog.require('goog.math');
goog.require('goog.userAgent');

/**
 * Class for an editable number field.
 * In scratch-blocks, the min/max/precision properties are only used
 * to construct a restrictor on typable characters, and to inform the pop-up
 * numpad on touch devices.
 * These properties are included here (i.e. instead of just accepting a
 * decimalAllowed, negativeAllowed) to maintain API compatibility with Blockly
 * and Blockly for Android.
 * @param {(string|number)=} opt_value The initial content of the field. The value
 *     should cast to a number, and if it does not, '0' will be used.
 * @param {(string|number)=} opt_min Minimum value.
 * @param {(string|number)=} opt_max Maximum value.
 * @param {(string|number)=} opt_precision Precision for value.
 * @param {Function=} opt_validator An optional function that is called
 *     to validate any constraints on what the user entered.  Takes the new
 *     text as an argument and returns the accepted text or null to abort
 *     the change.
 * @extends {Blockly.FieldNumber}
 * @constructor
 */
Blockly.FieldDecimal = function(opt_value, opt_validator) {

  opt_value = (opt_value && !isNaN(opt_value)) ? String(opt_value) : '0';

  this.validator_list = this.createValidator(opt_validator);

  Blockly.FieldNumber.superClass_.constructor.call(
    this, opt_value);
  this.addArgType('number');
};
goog.inherits(Blockly.FieldDecimal, Blockly.FieldNumber);


Blockly.FieldDecimal.createMinmaxValidator = function(min, max){
  return function(text, fieldObject){
    let num = parseFloat(text);

    if(num < min)
    {
      fieldObject.recommValue = '' + min;
      return false;
    }
    if(num > max)
    {
      fieldObject.recommValue = '' + max;
      return false;
    }

    return true;
  };
}

Blockly.FieldDecimal.createRegExpValidator = function(pattern){
  return function(text, fieldObject){
    let ret = pattern.test(text);
    if(!ret)
    {
    }
    return ret;
  };
}

/**
 * Construct a FieldNumber from a JSON arg object.
 * @param {!Object} options A JSON object with options (value, min, max, and
 *                          precision).
 * @returns {!Blockly.FieldNumber} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldDecimal.fromJson = function(options) {
  return new Blockly.FieldDecimal(options['value'], options['validators']);
};

Blockly.FieldDecimal.prototype.createValidator = function(validParams) {

  let validators = [];

  for (let index = 0; index < validParams.length; index++) {
    let item = validParams[index];
    switch(item.type){
      case 'minmax':{
        validators.push(Blockly.FieldDecimal.createMinmaxValidator(item['min'], item['max']));
      }break;
      case 'regexp':{
        validators.push(Blockly.FieldDecimal.createRegExpValidator(item['pattern']));
      }break;
    }
  }
    
  return validators;

};

Blockly.FieldDecimal.prototype.test = function(text) {
  this.recommValue = null;
  for (let index = 0; index < this.validator_list.length; index++) {
    let validator = this.validator_list[index];
    let ret = validator(text, this);
    if(!ret) {
      return false;
    }
  }
  return true;
}

/**
 * Handle a change to the editor.
 * @param {!Event} e Keyboard event.
 * @private
 */
Blockly.FieldDecimal.prototype.onHtmlInputChange_ = function(e) {
  // Check if the key matches the restrictor.

  var htmlInput = Blockly.FieldTextInput.htmlInput_;
  // Update source block.
  var text = htmlInput.value;

  if (e.type === 'keypress' && this.restrictor_) {
    var keyCode;
    var isWhitelisted = false;
    if (goog.userAgent.GECKO) {
      // e.keyCode is not available in Gecko.
      keyCode = e.charCode;
      // Gecko reports control characters (e.g., left, right, copy, paste)
      // in the key event - whitelist these from being restricted.
      // < 32 and 127 (delete) are control characters.
      // See: http://www.theasciicode.com.ar/ascii-control-characters/delete-ascii-code-127.html
      if (keyCode < 32 || keyCode == 127) {
        isWhitelisted = true;
      } else if (e.metaKey || e.ctrlKey) {
        // For combos (ctrl-v, ctrl-c, etc.), Gecko reports the ASCII letter
        // and the metaKey/ctrlKey flags.
        isWhitelisted = Blockly.FieldTextInput.GECKO_KEYCODE_WHITELIST.indexOf(keyCode) > -1;
      }
    } else {
      keyCode = e.keyCode;
    }
    var char = String.fromCharCode(keyCode);
    if (!isWhitelisted && !this.restrictor_.test(char) && e.preventDefault) {
      // Failed to pass restrictor.
      e.preventDefault();
      return;
    }
  }

  if(e.type === 'input')
  {
    if(!this.test(text))
    {
      if(!!this.recommValue){
        htmlInput.value = this.recommValue;
      }
      else{
        htmlInput.value = this.getText();
      }
      return;
    }

  }
  //var htmlInput = Blockly.FieldTextInput.htmlInput_;
  // Update source block.
  //var text = htmlInput.value;
  if (text !== htmlInput.oldValue_) {
    htmlInput.oldValue_ = text;

    this.setText(text);
    this.validate_();
  } else if (goog.userAgent.WEBKIT) {
    // Cursor key.  Render the source block to show the caret moving.
    // Chrome only (version 26, OS X).
    this.sourceBlock_.render();
  }
  this.resizeEditor_();
};

Blockly.Field.register('field_decimal', Blockly.FieldDecimal);

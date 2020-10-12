/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Math blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.math');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

goog.require('Blockly.constants');

Blockly.Blocks['math_number'] = {
  /**
   * Block for generic numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_number",
          "name": "NUM",
          "value": "0"
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['math_integer'] = {
  /**
   * Block for integer value (no decimal, + or -).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_number",
          "name": "NUM",
          "precision": 1
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['math_whole_number'] = {
  /**
   * Block for whole number value, no negatives or decimals.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_number",
          "name": "NUM",
          "min": 0,
          "precision": 1
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

/**
 * validator use example
 * 
Blockly.Blocks['example'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": -100, "max": 100},
            {"type":"regexp", "pattern": /^-{0,1}(([0-9]{0,6})|([0-9]{0,6}\.\d{0,2}))$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

 */

Blockly.Blocks['math_decimal'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"regexp", "pattern": /^-{0,1}(([0-9]{0,6})|([0-9]{0,6}\.\d{0,2}))$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

/**
 * 最多6位正整数
 */
Blockly.Blocks['math_decimal_whole'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"regexp", "pattern": /^([0-9]{0,6})$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['math_decimal_0_60s'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": 0, "max": 60},
            {"type":"regexp", "pattern": /^(([0-9]{0,6})|([0-9]{0,6}\.\d{0,2}))$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['math_decimal_m100_p100'] = {
  /**
   * Block for whole number value, no negatives or decimals.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": -100, "max": 100},
            {"type":"regexp", "pattern": /^-{0,1}([0-9]{0,6})$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};


Blockly.Blocks['math_decimal_0_100'] = {
  /**
   * Block for whole number value, no negatives or decimals.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": 0, "max": 100},
            {"type":"regexp", "pattern": /^-{0,1}([0-9]{0,6})$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};


Blockly.Blocks['math_decimal_m150_p150'] = {
  /**
   * Block for whole number value, no negatives or decimals.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": -150, "max": 150},
            {"type":"regexp", "pattern": /^-{0,1}([0-9]{0,6})$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};


Blockly.Blocks['math_decimal_1_30'] = {
  /**
   * Block for whole number value, no negatives or decimals.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": 1, "max": 30},
            {"type":"regexp", "pattern": /^([0-9]{0,6})$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};


Blockly.Blocks['math_decimal_1_60'] = {
  /**
   * Block for whole number value, no negatives or decimals.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": 1, "max": 60},
            {"type":"regexp", "pattern": /^([0-9]{0,6})$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};


Blockly.Blocks['math_decimal_0_180'] = {
  /**
   * Block for whole number value, no negatives or decimals.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": 0, "max": 180},
            {"type":"regexp", "pattern": /^([0-9]{0,6})$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['math_decimal_0_1k'] = {
  /**
   * Block for whole number value, no negatives or decimals.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": 0, "max": 1000},
            {"type":"regexp", "pattern": /^([0-9]{0,6})$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};


Blockly.Blocks['math_decimal_0_255'] = {
  /**
   * Block for whole number value, no negatives or decimals.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_decimal",
          "name": "NUM",
          "validators":[
            {"type":"minmax", "min": 0, "max": 255},
            {"type":"regexp", "pattern": /^([0-9]{0,6})$/}
          ]
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['math_positive_number'] = {
  /**
   * Block for positive number value, with decimal.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_number",
          "name": "NUM",
          "min": 0
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['math_angle'] = {
  /**
   * Block for angle picker.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_angle",
          "name": "NUM",
          "value": 90
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

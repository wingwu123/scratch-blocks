/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating JavaScript for variable blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Clang.variables');

goog.require('Blockly.Clang');


Blockly.Clang['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.Clang.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Clang.ORDER_ATOMIC];
};

Blockly.Clang['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Clang.valueToCode(block, 'VALUE',
      Blockly.Clang.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Clang.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return varName + ' = ' + argument0 + ';\n';
};

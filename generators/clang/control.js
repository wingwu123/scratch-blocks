/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating JavaScript for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Clang.control');

goog.require('Blockly.Clang');

Blockly.Clang['control_if'] = function(block) {
  // If condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  if (Blockly.Clang.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    code += Blockly.Clang.injectId(Blockly.Clang.STATEMENT_PREFIX,
        block);
  }

  conditionCode = Blockly.Clang.valueToCode(block, 'CONDITION',
    Blockly.Clang.ORDER_NONE) || 'false';

  branchCode = Blockly.Clang.statementToCode(block, 'SUBSTACK');
  if (Blockly.Clang.STATEMENT_SUFFIX) {
    branchCode = Blockly.Clang.prefixLines(
      Blockly.Clang.injectId(Blockly.Clang.STATEMENT_SUFFIX,
        block), Blockly.Clang.INDENT) + branchCode;
  }
  code += 'if (' + conditionCode + ') {\n' + branchCode + '}';

  return code + '\n';
};

Blockly.Clang['control_if_else'] = function(block) {
  // If else condition.
  var n = 0;
  var code = '', branchCode, branchCode2, conditionCode;
  if (Blockly.Clang.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    code += Blockly.Clang.injectId(Blockly.Clang.STATEMENT_PREFIX,
        block);
  }

  conditionCode = Blockly.Clang.valueToCode(block, 'CONDITION',
    Blockly.Clang.ORDER_NONE) || 'false';

  branchCode = Blockly.Clang.statementToCode(block, 'SUBSTACK');
  if (Blockly.Clang.STATEMENT_SUFFIX) {
    branchCode = Blockly.Clang.prefixLines(
      Blockly.Clang.injectId(Blockly.Clang.STATEMENT_SUFFIX,
        block), Blockly.Clang.INDENT) + branchCode;
  }

  branchCode2 = Blockly.Clang.statementToCode(block, 'SUBSTACK2');
  if (Blockly.Clang.STATEMENT_SUFFIX) {
    branchCode2 = Blockly.Clang.prefixLines(
      Blockly.Clang.injectId(Blockly.Clang.STATEMENT_SUFFIX,
        block), Blockly.Clang.INDENT) + branchCode2;
  }

  code += 'if (' + conditionCode + ') {\n' + branchCode + '}\n' +
          'else{\n' + branchCode2 + '}';

  return code + '\n';
};

Blockly.Clang['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.Clang.ORDER_EQUALITY : Blockly.Clang.ORDER_RELATIONAL;
  var argument0 = Blockly.Clang.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Clang.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Clang['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.Clang.ORDER_LOGICAL_AND :
      Blockly.Clang.ORDER_LOGICAL_OR;
  var argument0 = Blockly.Clang.valueToCode(block, 'A', order);
  var argument1 = Blockly.Clang.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Clang['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.Clang.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.Clang.valueToCode(block, 'BOOL', order) ||
      'true';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.Clang['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.Clang.ORDER_ATOMIC];
};

Blockly.Clang['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.Clang.ORDER_ATOMIC];
};

Blockly.Clang['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.Clang.valueToCode(block, 'IF',
      Blockly.Clang.ORDER_CONDITIONAL) || 'false';
  var value_then = Blockly.Clang.valueToCode(block, 'THEN',
      Blockly.Clang.ORDER_CONDITIONAL) || 'null';
  var value_else = Blockly.Clang.valueToCode(block, 'ELSE',
      Blockly.Clang.ORDER_CONDITIONAL) || 'null';
  var code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.Clang.ORDER_CONDITIONAL];
};

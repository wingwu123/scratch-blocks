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

goog.provide('Blockly.Clang.sensing');

goog.require('Blockly.Clang');


Blockly.Clang['sensing_gray_detected_line'] = function(block) {

  var order = Blockly.Clang.ORDER_NONE;
  var port = block.getFieldValue('PORT');
  var line_type = block.getFieldValue('LINE');
  var code;

  code = 'gray_detected_line( ' + port + ', ' + line_type + ' )';
  return [code, Blockly.Clang.ORDER_FUNCTION_CALL];

};

Blockly.Clang.sensing.simple_port_func = function (funcName) {
  var func = function (block) {
    var code = '';
    var port = block.getFieldValue('PORT');

    code = funcName + '(' + port + ')';

    return [code, Blockly.Clang.ORDER_FUNCTION_CALL];
  };

  return func;
};


Blockly.Clang['sensing_gray_value'] = Blockly.Clang.sensing.simple_port_func('gray_value'); 

Blockly.Clang['sensing_flame_value'] = Blockly.Clang.sensing.simple_port_func('flame_value'); 

Blockly.Clang['sensing_temperature_value'] = Blockly.Clang.sensing.simple_port_func('temperature_value');  

Blockly.Clang['sensing_humidity_value'] = Blockly.Clang.sensing.simple_port_func('humidity_value'); 

Blockly.Clang['sensing_volume_value'] = Blockly.Clang.sensing.simple_port_func('volume_value');  

Blockly.Clang['sensing_ambient_light_value'] 
  = Blockly.Clang.sensing.simple_port_func('ambient_light_value');

Blockly.Clang['sensing_ultrasonic_detection_distance'] 
  = Blockly.Clang.sensing.simple_port_func('ultrasonic_detection_distance'); 

Blockly.Clang['sensing_gas_pressure'] 
  = Blockly.Clang.sensing.simple_port_func('gas_pressure'); 

Blockly.Clang['sensing_infrared_receiver'] 
  = Blockly.Clang.sensing.simple_port_func('infrared_receiver'); 

Blockly.Clang['sensing_potentiometer'] 
  = Blockly.Clang.sensing.simple_port_func('potentiometer'); 

Blockly.Clang['sensing_bluetooth_receiver'] = function(block) {

  var order = Blockly.Clang.ORDER_NONE;
  var code;
  
  code = 'bluetooth_receiver()';
  return [code, Blockly.Clang.ORDER_FUNCTION_CALL];
};

Blockly.Clang['sensing_jointed_arm'] = function(block) {

  var order = Blockly.Clang.ORDER_NONE;
  var port = block.getFieldValue('PORT');
  var axis = block.getFieldValue('AXIS');
  var code;

  code = 'jointed_arm( ' + port + ', ' + axis + ' )';
  return [code, Blockly.Clang.ORDER_FUNCTION_CALL];
};

Blockly.Clang['sensing_touch_button'] = function(block) {

  var order = Blockly.Clang.ORDER_NONE;
  var port = block.getFieldValue('PORT');
  var key = block.getFieldValue('KEY');
  var code;

  code = 'touch_button( ' + port + ', ' + key + ' )';
  return [code, Blockly.Clang.ORDER_FUNCTION_CALL];
};

Blockly.Clang['sensing_gyroscope'] = function(block) {

  var order = Blockly.Clang.ORDER_NONE;
  var port = block.getFieldValue('PORT');
  var axis = block.getFieldValue('AXIS');
  var code;

  code = 'gyroscope( ' + port + ', ' + axis + ' )';
  return [code, Blockly.Clang.ORDER_FUNCTION_CALL];
};

Blockly.Clang['sensing_limit_switch']
  = Blockly.Clang.sensing.simple_port_func('limit_switch'); 

Blockly.Clang['sensing_water_temperature']
  = Blockly.Clang.sensing.simple_port_func('water_temperature'); 

Blockly.Clang['sensing_analog_input']
  = Blockly.Clang.sensing.simple_port_func('analog_input');

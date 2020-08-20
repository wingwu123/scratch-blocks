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
 * @fileoverview Matrix blocks for Blockly.
 * @author khanning@gmail.com (Kreg Hanning)
 */
'use strict';

goog.provide('Blockly.Blocks.matrix');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

goog.require('Blockly.constants');

Blockly.Blocks['matrix'] = {
  /**
   * Block for matrix value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_matrix",
          "name": "MATRIX"
        }
      ],
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "output": "Number",
      "extensions": ["colours_pen"]
    });
  }
};


Blockly.Blocks['matrix_symble_image'] = {
  /**
   * Block for matrix value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "name": "IMAGE",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/1.svg",
          "width": 40,
          "height": 40
        }
        ,{
          "type": "input_value",
          "name": "SYMBLE"
        }
        
      ],
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "output": "Number",
      "extensions": ["colours_looks"]
    });
  }
};

Blockly.Blocks['matrix_symble'] = {
  /**
   * Block for matrix value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_iconmenu",
          "name": "SYMBLE",
          "dropdown_width": 220,
          "options": [
            {src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/1.svg", width: 40, height: 40, alt: '', value: '1'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/2.svg", width: 40, height: 40, alt: '', value: '2'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/3.svg", width: 40, height: 40, alt: '', value: '3'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/4.svg", width: 40, height: 40, alt: '', value: '4'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/5.svg", width: 40, height: 40, alt: '', value: '5'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/6.svg", width: 40, height: 40, alt: '', value: '6'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/7.svg", width: 40, height: 40, alt: '', value: '7'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/8.svg", width: 40, height: 40, alt: '', value: '8'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/9.svg", width: 40, height: 40, alt: '', value: '9'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/10.svg", width: 40, height: 40, alt: '', value: '10'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/11.svg", width: 40, height: 40, alt: '', value: '11'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/12.svg", width: 40, height: 40, alt: '', value: '12'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/13.svg", width: 40, height: 40, alt: '', value: '13'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/14.svg", width: 40, height: 40, alt: '', value: '14'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/15.svg", width: 40, height: 40, alt: '', value: '15'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/16.svg", width: 40, height: 40, alt: '', value: '16'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/17.svg", width: 40, height: 40, alt: '', value: '17'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/18.svg", width: 40, height: 40, alt: '', value: '18'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/19.svg", width: 40, height: 40, alt: '', value: '19'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/20.svg", width: 40, height: 40, alt: '', value: '20'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/21.svg", width: 40, height: 40, alt: '', value: '21'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/22.svg", width: 40, height: 40, alt: '', value: '22'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/23.svg", width: 40, height: 40, alt: '', value: '23'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/24.svg", width: 40, height: 40, alt: '', value: '24'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/25.svg", width: 40, height: 40, alt: '', value: '25'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/26.svg", width: 40, height: 40, alt: '', value: '26'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/27.svg", width: 40, height: 40, alt: '', value: '27'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/28.svg", width: 40, height: 40, alt: '', value: '28'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/29.svg", width: 40, height: 40, alt: '', value: '29'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/30.svg", width: 40, height: 40, alt: '', value: '30'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/31.svg", width: 40, height: 40, alt: '', value: '31'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/32.svg", width: 40, height: 40, alt: '', value: '32'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/33.svg", width: 40, height: 40, alt: '', value: '33'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/34.svg", width: 40, height: 40, alt: '', value: '34'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/35.svg", width: 40, height: 40, alt: '', value: '35'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/36.svg", width: 40, height: 40, alt: '', value: '36'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/37.svg", width: 40, height: 40, alt: '', value: '37'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/38.svg", width: 40, height: 40, alt: '', value: '38'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/39.svg", width: 40, height: 40, alt: '', value: '39'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/40.svg", width: 40, height: 40, alt: '', value: '40'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/41.svg", width: 40, height: 40, alt: '', value: '41'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/42.svg", width: 40, height: 40, alt: '', value: '42'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/43.svg", width: 40, height: 40, alt: '', value: '43'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/44.svg", width: 40, height: 40, alt: '', value: '44'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/45.svg", width: 40, height: 40, alt: '', value: '45'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/46.svg", width: 40, height: 40, alt: '', value: '46'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/47.svg", width: 40, height: 40, alt: '', value: '47'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/48.svg", width: 40, height: 40, alt: '', value: '48'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/49.svg", width: 40, height: 40, alt: '', value: '49'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/50.svg", width: 40, height: 40, alt: '', value: '50'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/51.svg", width: 40, height: 40, alt: '', value: '51'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/52.svg", width: 40, height: 40, alt: '', value: '52'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/symbols/53.svg", width: 40, height: 40, alt: '', value: '53'}
        ],
        }
      ],
      "outputShape": Blockly.OUTPUT_SHAPE_SQUARE,
      "output": "Number",
      "extensions": ["colours_looks"]
    });
  }
};


Blockly.Blocks['matrix_emotion_image'] = {
  /**
   * Block for matrix value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "name": "IMAGE",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/1.svg",
          "width": 80,
          "height": 40
        }
        ,{
          "type": "input_value",
          "name": "EMOTION"
        }
        
      ],
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "output": "Number",
      "extensions": ["colours_looks"]
    });
  }
};

Blockly.Blocks['matrix_emotion'] = {
  /**
   * Block for matrix value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_iconmenu",
          "name": "EMOTION",
          "dropdown_width": 270,
          "options": [
            {src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/1.svg", width: 80, height: 40, alt: '', value: '1'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/2.svg", width: 80, height: 40, alt: '', value: '2'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/3.svg", width: 80, height: 40, alt: '', value: '3'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/4.svg", width: 80, height: 40, alt: '', value: '4'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/5.svg", width: 80, height: 40, alt: '', value: '5'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/6.svg", width: 80, height: 40, alt: '', value: '6'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/7.svg", width: 80, height: 40, alt: '', value: '7'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/8.svg", width: 80, height: 40, alt: '', value: '8'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/9.svg", width: 80, height: 40, alt: '', value: '9'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/10.svg", width: 80, height: 40, alt: '', value: '10'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/11.svg", width: 80, height: 40, alt: '', value: '11'}
            ,{src: Blockly.mainWorkspace.options.pathToMedia + "icons/emotions/12.svg", width: 80, height: 40, alt: '', value: '12'}
        ],
        }
      ],
      "outputShape": null, //Blockly.OUTPUT_SHAPE_SQUARE,
      "output": "Number",
      "extensions": ["colours_looks"]
    });
  }
};

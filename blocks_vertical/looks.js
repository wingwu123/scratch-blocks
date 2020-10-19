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

'use strict';

goog.provide('Blockly.Blocks.looks');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['looks_sayforsecs'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAYFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_say'] = {
  /**
   * Block to say.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAY,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_thinkforsecs'] = {
  /**
   * Block to think for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINKFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_think'] = {
  /**
   * Block to think.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINK,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_show'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SHOW,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_hide'] = {
  /**
   * Hide block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_HIDE,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_hideallsprites'] = {
  /**
   * Hide-all-sprites block. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 2.0
   * projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_HIDEALLSPRITES,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changeeffectby'] = {
  /**
   * Block to change graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGEEFFECTBY,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
          ]
        },
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_seteffectto'] = {
  /**
   * Block to set graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETEFFECTTO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_cleargraphiceffects'] = {
  /**
   * Block to clear graphic effects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changesizeby'] = {
  /**
   * Block to change size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGESIZEBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setsizeto'] = {
  /**
   * Block to set size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETSIZETO,
      "args0": [
        {
          "type": "input_value",
          "name": "SIZE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_size'] = {
  /**
   * Block to report size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SIZE,
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_changestretchby'] = {
  /**
   * Block to change stretch. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 1.4
   * projects as well as 2.0 projects that still have the block.
   * The "stretch" blocks were introduced in very early versions of Scratch,
   * but their functionality was removed shortly later. They still appeared
   * correctly up until (and including) Scratch 1.4 - as "change stretch by"
   * and "set stretch to" - but were removed altogether in Scratch 2.0, and
   * displayed as red "undefined" blocks. Some Scratch projects still contain
   * these blocks, however, and they don't open in 3.0 unless the blocks
   * actually exist (though they still don't funcitonally do anything).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGESTRETCHBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setstretchto'] = {
  /**
   * Block to set stretch. Does not actually do anything. This is an obsolete
   * block that is implemented for compatibility with Scratch 1.4 projects
   * (see looks_changestretchby).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETSTRETCHTO,
      "args0": [
        {
          "type": "input_value",
          "name": "STRETCH"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_costume'] = {
  /**
   * Costumes drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "COSTUME",
          "options": [
            ['costume1', 'COSTUME1'],
            ['costume2', 'COSTUME2']
          ]
        }
      ],
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['looks_switchcostumeto'] = {
  /**
   * Block to switch the sprite's costume to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHCOSTUMETO,
      "args0": [
        {
          "type": "input_value",
          "name": "COSTUME"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextcostume'] = {
  /**
   * Block to switch the sprite's costume to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_NEXTCOSTUME,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_switchbackdropto'] = {
  /**
   * Block to switch the backdrop to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTO,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_backdrops'] = {
  /**
   * Backdrop list
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "looks_backdrops",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BACKDROP",
          "options": [
            ['backdrop1', 'BACKDROP1']
          ]
        }
      ],
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['looks_gotofrontback'] = {
  /**
   * "Go to front/back" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOTOFRONTBACK,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FRONT_BACK",
          "options": [
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT, 'front'],
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK, 'back']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_goforwardbackwardlayers'] = {
  /**
   * "Go forward/backward [Number] Layers" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FORWARD_BACKWARD",
          "options": [
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD, 'forward'],
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD, 'backward']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_backdropnumbername'] = {
  /**
   * Block to report backdrop's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_BACKDROPNUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_costumenumbername'] = {
  /**
   * Block to report costume's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_COSTUMENUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_switchbackdroptoandwait'] = {
  /**
   * Block to switch the backdrop to the selected one and wait.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextbackdrop'] = {
  /**
   * Block to switch the backdrop to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

//dev-looks

Blockly.Blocks.looks.EMOTION_ID_MENU_OPEION = [
  ['表情1', '1'],
  ['表情2', '2']
];

Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION = [
  ['1', '1'],
  ['2', '2'],
  ['3', '3'],
  ['4', '4']
];

Blockly.Blocks['looks_set_emotion'] = {
  /**
   * Block set emotion. matrix
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SET_EMOTION,
      "args0": [
        /*
        {
          "type": "field_dropdown",
          "name": "EMOTION_ID",
          "options": Blockly.Blocks.looks.EMOTION_ID_MENU_OPEION
        },
        */
        {
          "type": "input_value",
          "name": "EMOTION_ID"
        
        },
        {
          "type": "field_dropdown",
          "name": "LEFT_PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        },
        {
          "type": "field_dropdown",
          "name": "RIGHT_PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION,
          "defValue": 1
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_off_emotion'] = {
  /**
   * Block set emotion.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_OFF_EMOTION,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LEFT_PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        },
        {
          "type": "field_dropdown",
          "name": "RIGHT_PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION,
          "defValue": 1
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};


Blockly.Blocks.looks.SYMBOL_ID_MENU_OPEION = [
  ['符号1', '1'],
  ['符号2', '2']
];

Blockly.Blocks['looks_set_symbol'] = {
  /**
   * Block set symbel.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SET_SYMBOL,
      "args0": [
        /*
        {
          "type": "field_dropdown",
          "name": "SYMBOL",
          "options": Blockly.Blocks.looks.SYMBOL_ID_MENU_OPEION
        },*/
        {
          "type": "input_value",
          "name": "SYMBOL"
        },
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_custom_led_matrix'] = {
  /**
   * Block off led matrix.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CUSTOM_LED_MATRIX,
      "args0": [
        {
          "type": "field_matrix",
          "name": "MATRIX",
          "matrix": "0000000001110000111110011011101011111111111111100111100000000000",
          "shape": 8,
        },
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_off_led_matrix'] = {
  /**
   * Block off led matrix.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_OFF_LED_MATRIX,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};


Blockly.Blocks['looks_set_digital_tube'] = {
  /**
   * Block off led matrix.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SET_DIGITAL_TUBE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};


Blockly.Blocks['looks_clear_digital_tube'] = {
  /**
   * Block clear digital tube.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CLEAR_DIGITAL_TUBE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};


Blockly.Blocks['looks_set_led_light_rgb'] = {
  /**
   * Block set led light RGB.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SET_LED_LIGHT_RGB,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        },
        {
          "type": "input_value",
          "name": "R"
        },
        {
          "type": "input_value",
          "name": "G"
        },
        {
          "type": "input_value",
          "name": "B"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};


Blockly.Blocks.looks.LED_COLOR_MENU_OPEION = function() {

  return [
    
    [Blockly.Msg.LOOKS_LED_COLOR_WHITE  , '1'],
    [Blockly.Msg.LOOKS_LED_COLOR_YELLOW , '2'],
    [Blockly.Msg.LOOKS_LED_COLOR_PURPLE , '3'],
    [Blockly.Msg.LOOKS_LED_COLOR_CYAN   , '4'],
    [Blockly.Msg.LOOKS_LED_COLOR_RED    , '5'],
    [Blockly.Msg.LOOKS_LED_COLOR_GREEN  , '6'],
    [Blockly.Msg.LOOKS_LED_COLOR_BLUE   , '7'],
    [Blockly.Msg.LOOKS_LED_COLOR_BLACK  , '8'] 
  ];

}; 

Blockly.Blocks['looks_set_led_light_color'] = {
  /**
   * Block set led light color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SET_LED_LIGHT_COLOR,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        },
        {
          "type": "field_dropdown",
          "name": "COLOR",
          "options": Blockly.Blocks.looks.LED_COLOR_MENU_OPEION()
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};


Blockly.Blocks['looks_off_led_light'] = {
  /**
   * Block off led light.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_OFF_LED_LIGHT,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks.looks.LED_ID_MENU_OPEION = function() {
  return [
    [Blockly.Msg.LOOKS_INTEGRATED_LED_ID_ALL /* '全部' */, '0'],
    ['1', '1'],
    ['2', '2'],
    ['3', '3'],
    ['4', '4']
  ];
}; 

Blockly.Blocks['looks_integrated_led'] = {
  /**
   * Block off led light.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_INTEGRATED_LED,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        },
        {
          "type": "field_dropdown",
          "name": "LED_ID",
          "options": Blockly.Blocks.looks.LED_ID_MENU_OPEION()
        },
        {
          "type": "input_value",
          "name": "R"
        },
        {
          "type": "input_value",
          "name": "G"
        },
        {
          "type": "input_value",
          "name": "B"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};


Blockly.Blocks['looks_led_strip'] = {
  /**
   * Block off led .
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_LED_STRIP,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Blocks.looks.EMOTION_PORT_MENU_OPEION
        },
        {
          "type": "input_value",
          "name": "LED_ID"
        },
        {
          "type": "input_value",
          "name": "R"
        },
        {
          "type": "input_value",
          "name": "G"
        },
        {
          "type": "input_value",
          "name": "B"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks.looks.BUZZER_PITCH_MENU_OPEION = [
  ['C5', '1'],
  ['D5', '2'],
  ['E5', '3'],
  ['F5', '4'],
  ['G5', '5'],
  ['A5', '6'],
  ['B5', '7'],
  ['C5', '8']
];

Blockly.Blocks.looks.BUZZER_LEN_MENU_OPEION = [
  ['1/8', '1'],
  ['1/4', '2'],
  ['1/2', '3'],
  ['1'  , '4']
];


Blockly.Blocks['looks_beep'] = {
  /**
   * Block beep.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_BEEP,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PITCH",
          "options": Blockly.Blocks.looks.BUZZER_PITCH_MENU_OPEION
        },
        {
          "type": "field_dropdown",
          "name": "LEN",
          "options": Blockly.Blocks.looks.BUZZER_LEN_MENU_OPEION
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

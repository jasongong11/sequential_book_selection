/***************************************** 
 * Sequential_Media_Selection_Final Test *
 *****************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'sequential_media_selection_final';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(instruction_1RoutineBegin());
flowScheduler.add(instruction_1RoutineEachFrame());
flowScheduler.add(instruction_1RoutineEnd());
flowScheduler.add(instruction_2RoutineBegin());
flowScheduler.add(instruction_2RoutineEachFrame());
flowScheduler.add(instruction_2RoutineEnd());
flowScheduler.add(instruction_3RoutineBegin());
flowScheduler.add(instruction_3RoutineEachFrame());
flowScheduler.add(instruction_3RoutineEnd());
flowScheduler.add(instruction_4RoutineBegin());
flowScheduler.add(instruction_4RoutineEachFrame());
flowScheduler.add(instruction_4RoutineEnd());
flowScheduler.add(training_1RoutineBegin());
flowScheduler.add(training_1RoutineEachFrame());
flowScheduler.add(training_1RoutineEnd());
flowScheduler.add(training_2RoutineBegin());
flowScheduler.add(training_2RoutineEachFrame());
flowScheduler.add(training_2RoutineEnd());
flowScheduler.add(training_3RoutineBegin());
flowScheduler.add(training_3RoutineEachFrame());
flowScheduler.add(training_3RoutineEnd());
flowScheduler.add(training_4RoutineBegin());
flowScheduler.add(training_4RoutineEachFrame());
flowScheduler.add(training_4RoutineEnd());
flowScheduler.add(training_5RoutineBegin());
flowScheduler.add(training_5RoutineEachFrame());
flowScheduler.add(training_5RoutineEnd());
flowScheduler.add(training_6RoutineBegin());
flowScheduler.add(training_6RoutineEachFrame());
flowScheduler.add(training_6RoutineEnd());
flowScheduler.add(training_7RoutineBegin());
flowScheduler.add(training_7RoutineEachFrame());
flowScheduler.add(training_7RoutineEnd());
flowScheduler.add(training_8RoutineBegin());
flowScheduler.add(training_8RoutineEachFrame());
flowScheduler.add(training_8RoutineEnd());
flowScheduler.add(transitionRoutineBegin());
flowScheduler.add(transitionRoutineEachFrame());
flowScheduler.add(transitionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(recall_check_instructionRoutineBegin());
flowScheduler.add(recall_check_instructionRoutineEachFrame());
flowScheduler.add(recall_check_instructionRoutineEnd());
const recall_check_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(recall_check_trialsLoopBegin(recall_check_trialsLoopScheduler));
flowScheduler.add(recall_check_trialsLoopScheduler);
flowScheduler.add(recall_check_trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://ucdavis.co1.qualtrics.com/jfe/form/SV_4UZTaquS73Utsge?id=' + expInfo['participant']), '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var text;
var instruction_1Clock;
var instruction_1_text_1;
var instruction_1_key_resp;
var instruction_2Clock;
var instruction_2_text;
var instruction_2_key_resp;
var instruction_3Clock;
var instruction_3_text;
var instruction_3_key_resp;
var instruction_4Clock;
var instruction_4_text;
var instruction_4_key_resp;
var training_1Clock;
var training_1_text;
var training_1_key_resp;
var training_1_option_1;
var training_1_option_2;
var training_1_option_3;
var training_1_option_4;
var training_1_option_5;
var training_1_option_6;
var training_1_option_7;
var training_1_option_8;
var training_1_option_9;
var training_2Clock;
var training_2_text;
var training_2_option_1;
var training_2_option_2;
var training_2_option_3;
var training_2_option_4;
var training_2_option_5;
var training_2_option_6;
var training_2_option_7;
var training_2_option_8;
var training_2_option_9;
var training_2_mouse;
var training_3Clock;
var training_3_text;
var training_3_key_resp;
var training_4Clock;
var training_4_text;
var key_resp_2;
var training_5Clock;
var feedback_text_2;
var training_5_enjoyment_1;
var training_5_enjoyment_2;
var training_5_enjoyment_3;
var training_5_enjoyment_4;
var training_5_enjoyment_5;
var training_5_enjoyment_6;
var training_5_enjoyment_7;
var training_5_enjoyment_8;
var training_5_enjoyment_9;
var feedback_like_2;
var feedback_dislike_2;
var training_5_feedback_1;
var training_5_feedback_2;
var training_5_feedback_3;
var training_5_feedback_4;
var training_5_feedback_5;
var training_5_feedback_6;
var training_5_feedback_7;
var training_5_feedback_8;
var training_5_feedback_9;
var mouse_4;
var training_6Clock;
var feedback_text_4;
var training_6_uncertainty_1;
var training_6_uncertainty_2;
var training_6_uncertainty_3;
var training_6_uncertainty_4;
var training_6_uncertainty_5;
var training_6_uncertainty_6;
var training_6_uncertainty_7;
var training_6_uncertainty_8;
var training_6_uncertainty_9;
var uncertainty_text;
var uncertainty_text_10;
var uncertainty_text_11;
var uncertainty_text_12;
var uncertainty_text_13;
var uncertainty_text_14;
var uncertainty_text_15;
var uncertainty_text_16;
var uncertainty_text_17;
var mouse_6;
var training_7Clock;
var training_7_text;
var training_7_option_1;
var training_7_option_2;
var training_7_option_3;
var training_7_option_4;
var training_7_option_5;
var training_7_option_6;
var training_7_option_7;
var training_7_option_8;
var training_7_option_9;
var training_7_key_resp;
var training_8Clock;
var training_8_text;
var training_8_option_1;
var training_8_option_2;
var training_8_option_3;
var training_8_option_4;
var training_8_option_5;
var training_8_option_6;
var training_8_option_7;
var training_8_option_8;
var training_8_option_9;
var training_8_key_resp;
var transitionClock;
var transition_text;
var transition_key_resp;
var fixationClock;
var fix;
var selectionClock;
var selection_enjoyment_1;
var selection_enjoyment_2;
var selection_enjoyment_3;
var selection_enjoyment_4;
var selection_enjoyment_5;
var selection_enjoyment_6;
var selection_enjoyment_7;
var selection_enjoyment_8;
var selection_enjoyment_9;
var option_1;
var option_2;
var option_3;
var option_4;
var option_5;
var option_6;
var option_7;
var option_8;
var option_9;
var option_10;
var option_11;
var option_12;
var option_13;
var option_14;
var option_15;
var option_16;
var option_17;
var option_18;
var option_19;
var option_20;
var option_21;
var option_22;
var option_23;
var option_24;
var option_25;
var option_26;
var option_27;
var option_28;
var option_29;
var option_30;
var option_31;
var option_32;
var option_33;
var option_34;
var option_35;
var option_36;
var option_37;
var option_38;
var option_39;
var option_40;
var option_41;
var option_42;
var option_43;
var option_44;
var option_45;
var option_46;
var option_47;
var option_48;
var option_49;
var option_50;
var option_51;
var option_52;
var option_53;
var option_54;
var option_55;
var option_56;
var option_57;
var option_58;
var option_59;
var option_60;
var option_61;
var option_62;
var option_63;
var option_64;
var option_65;
var option_66;
var option_67;
var option_68;
var option_69;
var option_70;
var option_71;
var option_72;
var option_73;
var option_74;
var option_75;
var option_76;
var option_77;
var option_78;
var option_79;
var option_80;
var option_81;
var option_82;
var option_83;
var option_84;
var option_85;
var option_86;
var option_87;
var option_88;
var option_89;
var option_90;
var option_91;
var option_92;
var option_93;
var option_94;
var option_95;
var option_96;
var option_97;
var option_98;
var option_99;
var option_100;
var option_101;
var option_102;
var option_103;
var option_104;
var option_105;
var option_106;
var option_107;
var option_108;
var option_109;
var option_110;
var option_111;
var option_112;
var option_113;
var option_114;
var option_115;
var option_116;
var option_117;
var option_118;
var option_119;
var option_120;
var option_121;
var option_122;
var option_123;
var option_124;
var option_125;
var option_126;
var option_127;
var option_128;
var option_129;
var option_130;
var option_131;
var option_132;
var option_133;
var option_134;
var option_135;
var option_136;
var option_137;
var option_138;
var option_139;
var option_140;
var option_141;
var option_142;
var option_143;
var option_144;
var option_145;
var option_146;
var option_147;
var option_148;
var option_149;
var option_150;
var option_151;
var option_152;
var option_153;
var option_154;
var option_155;
var option_156;
var option_157;
var option_158;
var option_159;
var option_160;
var option_161;
var option_162;
var option_163;
var option_164;
var option_165;
var option_166;
var option_167;
var option_168;
var option_169;
var option_170;
var option_171;
var option_172;
var option_173;
var option_174;
var option_175;
var option_176;
var option_177;
var option_178;
var option_179;
var option_180;
var option_181;
var option_182;
var option_183;
var option_184;
var option_185;
var option_186;
var option_187;
var option_188;
var option_189;
var option_190;
var option_191;
var option_192;
var option_193;
var option_194;
var option_195;
var option_196;
var option_197;
var option_198;
var option_199;
var option_200;
var option_201;
var option_202;
var option_203;
var option_204;
var option_205;
var option_206;
var option_207;
var option_208;
var option_209;
var option_210;
var option_211;
var option_212;
var option_213;
var option_214;
var option_215;
var option_216;
var option_217;
var option_218;
var option_219;
var option_220;
var option_221;
var option_222;
var option_223;
var option_224;
var option_225;
var mouse;
var selection_instruction;
var option_list;
var option_dict;
var option_index;
var selected_options;
var clickable_options;
var selection_like;
var selection_dislike;
var selection_feedback_1Clock;
var book_text;
var text_2;
var option_text_dict;
var key_resp;
var selection_feedback_2Clock;
var feedback_text;
var enjoyment_1;
var enjoyment_2;
var enjoyment_3;
var enjoyment_4;
var enjoyment_5;
var enjoyment_6;
var enjoyment_7;
var enjoyment_8;
var enjoyment_9;
var feedback_like;
var feedback_dislike;
var feedback_1;
var feedback_2;
var feedback_3;
var feedback_4;
var feedback_5;
var feedback_6;
var feedback_7;
var feedback_8;
var feedback_9;
var selected_enjoyment;
var enjoyments;
var enjoyment_index;
var enjoyment_dict;
var mouse_2;
var selection_feedback_3Clock;
var feedback_text_3;
var uncertainty_1;
var uncertainty_2;
var uncertainty_3;
var uncertainty_4;
var uncertainty_5;
var uncertainty_6;
var uncertainty_7;
var uncertainty_8;
var uncertainty_9;
var uncertainty_text_1;
var uncertainty_text_2;
var uncertainty_text_3;
var uncertainty_text_4;
var uncertainty_text_5;
var uncertainty_text_6;
var uncertainty_text_7;
var uncertainty_text_8;
var uncertainty_text_9;
var mouse_3;
var recall_check_instructionClock;
var recall_instruction_text;
var recall_instruction_key;
var recall_checkClock;
var recall_check_text;
var recall_check_book;
var recall_check_yes;
var recall_check_no;
var recall_check_yes_text;
var recall_check_no_text;
var recall_check_mouse;
var endClock;
var finish_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Thank you for participating our study! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instruction_1"
  instruction_1Clock = new util.Clock();
  instruction_1_text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_1_text_1',
    text: 'In this experiment, the task includes three parts.\n\nIn the first part, you will be shown different books, \nand asked to choose which you would like to read.\n\nPress spacebar on your keyboard to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction_1_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_2"
  instruction_2Clock = new util.Clock();
  instruction_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_2_text',
    text: 'Second, after you have made a choice on a book,\nyou will be shown a summary that introduces the plot\nand story of the book that you have chosen.\n\nPress the spacebar on your keyboard to continue.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction_2_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_3"
  instruction_3Clock = new util.Clock();
  instruction_3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_3_text',
    text: 'Third, after you have read the book summary, \nyou need to respond how much you enjoyed \nreading the book summary.\n\nThen, you need to indicate how certain you are\nfor your response on your enjoyment.\n\nPress the spacebar on your keyboard to continue.\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction_3_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_4"
  instruction_4Clock = new util.Clock();
  instruction_4_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_4_text',
    text: 'These three parts of the task will repeat 15 times.\n\nThere will be a training session that help you learn\nhow to do this task.\n\nPress the spacebar on your keyboard to continue.\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction_4_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_1"
  training_1Clock = new util.Clock();
  training_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_1_text',
    text: 'In the first part, we will show you a set of book\noptions that are displayed in a grid. \nThe grey boxes in the grid will represent \ndifferent book options.\n\nFor example, you may see a grid of book\noptions like  the 3x3 grid on the right. \nIn the actual task, you will see a much larger grid.\n\nImportantly, the distance between boxes in the \ngrid represents similarities between books. \nThe closer two boxes are, \nthe more similar the two books are. \n\nPress the spacebar on your keyboard to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  training_1_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  training_1_option_1 = new visual.Rect ({
    win: psychoJS.window, name: 'training_1_option_1', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  training_1_option_2 = new visual.Rect ({
    win: psychoJS.window, name: 'training_1_option_2', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  training_1_option_3 = new visual.Rect ({
    win: psychoJS.window, name: 'training_1_option_3', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  training_1_option_4 = new visual.Rect ({
    win: psychoJS.window, name: 'training_1_option_4', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  training_1_option_5 = new visual.Rect ({
    win: psychoJS.window, name: 'training_1_option_5', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  training_1_option_6 = new visual.Rect ({
    win: psychoJS.window, name: 'training_1_option_6', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  training_1_option_7 = new visual.Rect ({
    win: psychoJS.window, name: 'training_1_option_7', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  training_1_option_8 = new visual.Rect ({
    win: psychoJS.window, name: 'training_1_option_8', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  training_1_option_9 = new visual.Rect ({
    win: psychoJS.window, name: 'training_1_option_9', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  // Initialize components for Routine "training_2"
  training_2Clock = new util.Clock();
  training_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_2_text',
    text: 'To choose a book that you would like to read, \nyou need to click a box to select the \ncorresponding book. \n\nFor example, to choose the book on \nthe left bottom of the grid. \nYou need to click the box that is displayed\nat the left bottom of the grid. \n\nWe have marked the box with a red outline. \nNow click the box to select this book. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  training_2_option_1 = new visual.Rect ({
    win: psychoJS.window, name: 'training_2_option_1', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  training_2_option_2 = new visual.Rect ({
    win: psychoJS.window, name: 'training_2_option_2', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  training_2_option_3 = new visual.Rect ({
    win: psychoJS.window, name: 'training_2_option_3', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  training_2_option_4 = new visual.Rect ({
    win: psychoJS.window, name: 'training_2_option_4', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  training_2_option_5 = new visual.Rect ({
    win: psychoJS.window, name: 'training_2_option_5', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  training_2_option_6 = new visual.Rect ({
    win: psychoJS.window, name: 'training_2_option_6', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  training_2_option_7 = new visual.Rect ({
    win: psychoJS.window, name: 'training_2_option_7', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.06)],
    anchor: 'center',
    lineWidth: 10.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  training_2_option_8 = new visual.Rect ({
    win: psychoJS.window, name: 'training_2_option_8', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  training_2_option_9 = new visual.Rect ({
    win: psychoJS.window, name: 'training_2_option_9', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  training_2_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  training_2_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "training_3"
  training_3Clock = new util.Clock();
  training_3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_3_text',
    text: 'After you have selected the book option,\nyou will read the summary of the book\nthat introduces the plot and story of the book.\n\nPress the spacebar on your keyboard to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  training_3_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_4"
  training_4Clock = new util.Clock();
  training_4_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_4_text',
    text: 'For example, you need to read the summary of\nthe book that you have just selected.\n\n\nDestination wedding consultant Willow Ambrose has fought a battle with the scale for much of her life, but she has finally won the war. By putting her past behind her and cutting off all contact with anyone who knew her before and, of course, controlling everything she can, Willow has carved out a new body and a new life. But when she comes face to face with someone who left an indelible mark on her heart years before, all that threatens to crumble. Navy seal Nick Hershey is on medical leave, doing a friend a favor as a stand in "man of honor" at a beach wedding. He might not be that interested in the nuptials, but the wedding planner catches his eye the minute they meet. When he realizes Willow is really a girl he knew in college--and a girl he unintentionally hurt to the core--he knows he has some making up to do. Willow has learned how to beat every temptation...but Nick\'s sweet-as-candy kisses just might be the one thing she can\'t resist. But the closer they get, the more the past threatens to tear them apart. \n\n\nAfter you have read this book summary, \npress the spacebar on your keyboard to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_5"
  training_5Clock = new util.Clock();
  feedback_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text_2',
    text: 'After you have read the book summary, \nyou need to respond to the following question:\n\nHow much did you like the book summary you just read?\n\nPlease click the button to choose your response.\n\nThe red buttons on the right are for books that you really like.\nThe blue buttons on the left are for books that you really dislike.\nYou can use all buttons inbetween. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  training_5_enjoyment_1 = new visual.Rect ({
    win: psychoJS.window, name: 'training_5_enjoyment_1', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [(- 0.4), (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#5977e3'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  training_5_enjoyment_2 = new visual.Rect ({
    win: psychoJS.window, name: 'training_5_enjoyment_2', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [(- 0.3), (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#7b9ff9'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  training_5_enjoyment_3 = new visual.Rect ({
    win: psychoJS.window, name: 'training_5_enjoyment_3', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [(- 0.2), (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#9ebeff'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  training_5_enjoyment_4 = new visual.Rect ({
    win: psychoJS.window, name: 'training_5_enjoyment_4', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [(- 0.1), (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#c0d4f5'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  training_5_enjoyment_5 = new visual.Rect ({
    win: psychoJS.window, name: 'training_5_enjoyment_5', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0, (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#ffffff'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  training_5_enjoyment_6 = new visual.Rect ({
    win: psychoJS.window, name: 'training_5_enjoyment_6', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0.1, (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#f2cbb7'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  training_5_enjoyment_7 = new visual.Rect ({
    win: psychoJS.window, name: 'training_5_enjoyment_7', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0.2, (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#f7ac8e'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  training_5_enjoyment_8 = new visual.Rect ({
    win: psychoJS.window, name: 'training_5_enjoyment_8', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0.3, (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#ee8468'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  training_5_enjoyment_9 = new visual.Rect ({
    win: psychoJS.window, name: 'training_5_enjoyment_9', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0.4, (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#d65244'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  feedback_like_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_like_2',
    text: 'Extremely liked',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  feedback_dislike_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dislike_2',
    text: 'Extremely disliked',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  training_5_feedback_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_5_feedback_1',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  training_5_feedback_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_5_feedback_2',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  training_5_feedback_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_5_feedback_3',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  training_5_feedback_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_5_feedback_4',
    text: '4',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.1), (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -15.0 
  });
  
  training_5_feedback_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_5_feedback_5',
    text: '5',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0, 0.0, 0.0]),  opacity: undefined,
    depth: -16.0 
  });
  
  training_5_feedback_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_5_feedback_6',
    text: '6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });
  
  training_5_feedback_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_5_feedback_7',
    text: '7',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  training_5_feedback_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_5_feedback_8',
    text: '8',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -19.0 
  });
  
  training_5_feedback_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_5_feedback_9',
    text: '9',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "training_6"
  training_6Clock = new util.Clock();
  feedback_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  training_6_uncertainty_1 = new visual.Rect ({
    win: psychoJS.window, name: 'training_6_uncertainty_1', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0.15],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  training_6_uncertainty_2 = new visual.Rect ({
    win: psychoJS.window, name: 'training_6_uncertainty_2', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  training_6_uncertainty_3 = new visual.Rect ({
    win: psychoJS.window, name: 'training_6_uncertainty_3', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0.05],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  training_6_uncertainty_4 = new visual.Rect ({
    win: psychoJS.window, name: 'training_6_uncertainty_4', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  training_6_uncertainty_5 = new visual.Rect ({
    win: psychoJS.window, name: 'training_6_uncertainty_5', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.05)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  training_6_uncertainty_6 = new visual.Rect ({
    win: psychoJS.window, name: 'training_6_uncertainty_6', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  training_6_uncertainty_7 = new visual.Rect ({
    win: psychoJS.window, name: 'training_6_uncertainty_7', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.15)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  training_6_uncertainty_8 = new visual.Rect ({
    win: psychoJS.window, name: 'training_6_uncertainty_8', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.2)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  training_6_uncertainty_9 = new visual.Rect ({
    win: psychoJS.window, name: 'training_6_uncertainty_9', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.25)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  uncertainty_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text',
    text: 'Extremely certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  uncertainty_text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_10',
    text: 'Very certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  uncertainty_text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_11',
    text: 'Somewhat certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  uncertainty_text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_12',
    text: 'Slightly certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  uncertainty_text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_13',
    text: 'Neither certain nor uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  uncertainty_text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_14',
    text: 'Slightly uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -15.0 
  });
  
  uncertainty_text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_15',
    text: 'Somewhat uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -16.0 
  });
  
  uncertainty_text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_16',
    text: 'Very uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });
  
  uncertainty_text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_17',
    text: 'Extremely uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  // Initialize components for Routine "training_7"
  training_7Clock = new util.Clock();
  training_7_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_7_text',
    text: 'Now you have finished one trial of the task.\n\nThere are a total of 15 trials in the actual task.\nYour task is to choose books that maximize \nyour reading enjoyment.\n\nAfter you have indicated your enjoyment on\nthe selected book option.\nWe will mark the book option with colors based\non your preference. \nReddish color indicates liked,\nBluish color indicates disliked.\n\nPress the spacebar on your keyboard to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  training_7_option_1 = new visual.Rect ({
    win: psychoJS.window, name: 'training_7_option_1', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  training_7_option_2 = new visual.Rect ({
    win: psychoJS.window, name: 'training_7_option_2', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  training_7_option_3 = new visual.Rect ({
    win: psychoJS.window, name: 'training_7_option_3', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  training_7_option_4 = new visual.Rect ({
    win: psychoJS.window, name: 'training_7_option_4', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  training_7_option_5 = new visual.Rect ({
    win: psychoJS.window, name: 'training_7_option_5', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  training_7_option_6 = new visual.Rect ({
    win: psychoJS.window, name: 'training_7_option_6', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  training_7_option_7 = new visual.Rect ({
    win: psychoJS.window, name: 'training_7_option_7', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  training_7_option_8 = new visual.Rect ({
    win: psychoJS.window, name: 'training_7_option_8', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  training_7_option_9 = new visual.Rect ({
    win: psychoJS.window, name: 'training_7_option_9', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  training_7_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_8"
  training_8Clock = new util.Clock();
  training_8_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_8_text',
    text: 'Remeber, the closer two books are, \nthe more similar they are.\n\nFor example, the book that has a green box outline is \nmore similar to the book that has a red box outline, \ncompared to the book with a blue box outline. \n\nThis is because the green box is closer to the red box, \ncompared to the blue box. \n\nPress the spacebar on your keyboard to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  training_8_option_1 = new visual.Rect ({
    win: psychoJS.window, name: 'training_8_option_1', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  training_8_option_2 = new visual.Rect ({
    win: psychoJS.window, name: 'training_8_option_2', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  training_8_option_3 = new visual.Rect ({
    win: psychoJS.window, name: 'training_8_option_3', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.06],
    anchor: 'center',
    lineWidth: 10.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), 1.0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  training_8_option_4 = new visual.Rect ({
    win: psychoJS.window, name: 'training_8_option_4', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  training_8_option_5 = new visual.Rect ({
    win: psychoJS.window, name: 'training_8_option_5', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  training_8_option_6 = new visual.Rect ({
    win: psychoJS.window, name: 'training_8_option_6', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  training_8_option_7 = new visual.Rect ({
    win: psychoJS.window, name: 'training_8_option_7', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.06)],
    anchor: 'center',
    lineWidth: 10.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  training_8_option_8 = new visual.Rect ({
    win: psychoJS.window, name: 'training_8_option_8', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.06)],
    anchor: 'center',
    lineWidth: 10.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.3569), 0.2314, (- 0.7412)]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  training_8_option_9 = new visual.Rect ({
    win: psychoJS.window, name: 'training_8_option_9', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  training_8_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "transition"
  transitionClock = new util.Clock();
  transition_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'transition_text',
    text: 'Now, you have completed the training session! \n\nWhen you are ready,\nyou may press the spacebar on your keyboard\nto start the experiment!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  transition_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "selection"
  selectionClock = new util.Clock();
  selection_enjoyment_1 = new visual.Rect ({
    win: psychoJS.window, name: 'selection_enjoyment_1', 
    width: [0.05, 0.075][0], height: [0.05, 0.075][1],
    ori: 0.0, pos: [(- 0.7), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#5977e3'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  selection_enjoyment_2 = new visual.Rect ({
    win: psychoJS.window, name: 'selection_enjoyment_2', 
    width: [0.05, 0.075][0], height: [0.05, 0.075][1],
    ori: 0.0, pos: [(- 0.65), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#7b9ff9'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  selection_enjoyment_3 = new visual.Rect ({
    win: psychoJS.window, name: 'selection_enjoyment_3', 
    width: [0.05, 0.075][0], height: [0.05, 0.075][1],
    ori: 0.0, pos: [(- 0.6), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#9ebeff'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  selection_enjoyment_4 = new visual.Rect ({
    win: psychoJS.window, name: 'selection_enjoyment_4', 
    width: [0.05, 0.075][0], height: [0.05, 0.075][1],
    ori: 0.0, pos: [(- 0.55), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#c0d4f5'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  selection_enjoyment_5 = new visual.Rect ({
    win: psychoJS.window, name: 'selection_enjoyment_5', 
    width: [0.05, 0.075][0], height: [0.05, 0.075][1],
    ori: 0.0, pos: [(- 0.5), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#ffffff'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  selection_enjoyment_6 = new visual.Rect ({
    win: psychoJS.window, name: 'selection_enjoyment_6', 
    width: [0.05, 0.075][0], height: [0.05, 0.075][1],
    ori: 0.0, pos: [(- 0.45), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#f2cbb7'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  selection_enjoyment_7 = new visual.Rect ({
    win: psychoJS.window, name: 'selection_enjoyment_7', 
    width: [0.05, 0.075][0], height: [0.05, 0.075][1],
    ori: 0.0, pos: [(- 0.4), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#f7ac8e'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  selection_enjoyment_8 = new visual.Rect ({
    win: psychoJS.window, name: 'selection_enjoyment_8', 
    width: [0.05, 0.075][0], height: [0.05, 0.075][1],
    ori: 0.0, pos: [(- 0.35), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#ee8468'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  selection_enjoyment_9 = new visual.Rect ({
    win: psychoJS.window, name: 'selection_enjoyment_9', 
    width: [0.05, 0.075][0], height: [0.05, 0.075][1],
    ori: 0.0, pos: [(- 0.3), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#d65244'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  option_1 = new visual.Rect ({
    win: psychoJS.window, name: 'option_1', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  option_2 = new visual.Rect ({
    win: psychoJS.window, name: 'option_2', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  option_3 = new visual.Rect ({
    win: psychoJS.window, name: 'option_3', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  option_4 = new visual.Rect ({
    win: psychoJS.window, name: 'option_4', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -12, interpolate: true,
  });
  
  option_5 = new visual.Rect ({
    win: psychoJS.window, name: 'option_5', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -13, interpolate: true,
  });
  
  option_6 = new visual.Rect ({
    win: psychoJS.window, name: 'option_6', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -14, interpolate: true,
  });
  
  option_7 = new visual.Rect ({
    win: psychoJS.window, name: 'option_7', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -15, interpolate: true,
  });
  
  option_8 = new visual.Rect ({
    win: psychoJS.window, name: 'option_8', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -16, interpolate: true,
  });
  
  option_9 = new visual.Rect ({
    win: psychoJS.window, name: 'option_9', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -17, interpolate: true,
  });
  
  option_10 = new visual.Rect ({
    win: psychoJS.window, name: 'option_10', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -18, interpolate: true,
  });
  
  option_11 = new visual.Rect ({
    win: psychoJS.window, name: 'option_11', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -19, interpolate: true,
  });
  
  option_12 = new visual.Rect ({
    win: psychoJS.window, name: 'option_12', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -20, interpolate: true,
  });
  
  option_13 = new visual.Rect ({
    win: psychoJS.window, name: 'option_13', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -21, interpolate: true,
  });
  
  option_14 = new visual.Rect ({
    win: psychoJS.window, name: 'option_14', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -22, interpolate: true,
  });
  
  option_15 = new visual.Rect ({
    win: psychoJS.window, name: 'option_15', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, 0.42],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -23, interpolate: true,
  });
  
  option_16 = new visual.Rect ({
    win: psychoJS.window, name: 'option_16', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -24, interpolate: true,
  });
  
  option_17 = new visual.Rect ({
    win: psychoJS.window, name: 'option_17', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -25, interpolate: true,
  });
  
  option_18 = new visual.Rect ({
    win: psychoJS.window, name: 'option_18', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -26, interpolate: true,
  });
  
  option_19 = new visual.Rect ({
    win: psychoJS.window, name: 'option_19', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -27, interpolate: true,
  });
  
  option_20 = new visual.Rect ({
    win: psychoJS.window, name: 'option_20', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -28, interpolate: true,
  });
  
  option_21 = new visual.Rect ({
    win: psychoJS.window, name: 'option_21', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -29, interpolate: true,
  });
  
  option_22 = new visual.Rect ({
    win: psychoJS.window, name: 'option_22', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -30, interpolate: true,
  });
  
  option_23 = new visual.Rect ({
    win: psychoJS.window, name: 'option_23', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -31, interpolate: true,
  });
  
  option_24 = new visual.Rect ({
    win: psychoJS.window, name: 'option_24', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -32, interpolate: true,
  });
  
  option_25 = new visual.Rect ({
    win: psychoJS.window, name: 'option_25', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -33, interpolate: true,
  });
  
  option_26 = new visual.Rect ({
    win: psychoJS.window, name: 'option_26', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -34, interpolate: true,
  });
  
  option_27 = new visual.Rect ({
    win: psychoJS.window, name: 'option_27', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -35, interpolate: true,
  });
  
  option_28 = new visual.Rect ({
    win: psychoJS.window, name: 'option_28', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -36, interpolate: true,
  });
  
  option_29 = new visual.Rect ({
    win: psychoJS.window, name: 'option_29', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -37, interpolate: true,
  });
  
  option_30 = new visual.Rect ({
    win: psychoJS.window, name: 'option_30', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, 0.36],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -38, interpolate: true,
  });
  
  option_31 = new visual.Rect ({
    win: psychoJS.window, name: 'option_31', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -39, interpolate: true,
  });
  
  option_32 = new visual.Rect ({
    win: psychoJS.window, name: 'option_32', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -40, interpolate: true,
  });
  
  option_33 = new visual.Rect ({
    win: psychoJS.window, name: 'option_33', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -41, interpolate: true,
  });
  
  option_34 = new visual.Rect ({
    win: psychoJS.window, name: 'option_34', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -42, interpolate: true,
  });
  
  option_35 = new visual.Rect ({
    win: psychoJS.window, name: 'option_35', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -43, interpolate: true,
  });
  
  option_36 = new visual.Rect ({
    win: psychoJS.window, name: 'option_36', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -44, interpolate: true,
  });
  
  option_37 = new visual.Rect ({
    win: psychoJS.window, name: 'option_37', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -45, interpolate: true,
  });
  
  option_38 = new visual.Rect ({
    win: psychoJS.window, name: 'option_38', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -46, interpolate: true,
  });
  
  option_39 = new visual.Rect ({
    win: psychoJS.window, name: 'option_39', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -47, interpolate: true,
  });
  
  option_40 = new visual.Rect ({
    win: psychoJS.window, name: 'option_40', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -48, interpolate: true,
  });
  
  option_41 = new visual.Rect ({
    win: psychoJS.window, name: 'option_41', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -49, interpolate: true,
  });
  
  option_42 = new visual.Rect ({
    win: psychoJS.window, name: 'option_42', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -50, interpolate: true,
  });
  
  option_43 = new visual.Rect ({
    win: psychoJS.window, name: 'option_43', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -51, interpolate: true,
  });
  
  option_44 = new visual.Rect ({
    win: psychoJS.window, name: 'option_44', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -52, interpolate: true,
  });
  
  option_45 = new visual.Rect ({
    win: psychoJS.window, name: 'option_45', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, 0.3],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -53, interpolate: true,
  });
  
  option_46 = new visual.Rect ({
    win: psychoJS.window, name: 'option_46', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -54, interpolate: true,
  });
  
  option_47 = new visual.Rect ({
    win: psychoJS.window, name: 'option_47', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -55, interpolate: true,
  });
  
  option_48 = new visual.Rect ({
    win: psychoJS.window, name: 'option_48', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -56, interpolate: true,
  });
  
  option_49 = new visual.Rect ({
    win: psychoJS.window, name: 'option_49', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -57, interpolate: true,
  });
  
  option_50 = new visual.Rect ({
    win: psychoJS.window, name: 'option_50', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -58, interpolate: true,
  });
  
  option_51 = new visual.Rect ({
    win: psychoJS.window, name: 'option_51', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -59, interpolate: true,
  });
  
  option_52 = new visual.Rect ({
    win: psychoJS.window, name: 'option_52', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -60, interpolate: true,
  });
  
  option_53 = new visual.Rect ({
    win: psychoJS.window, name: 'option_53', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -61, interpolate: true,
  });
  
  option_54 = new visual.Rect ({
    win: psychoJS.window, name: 'option_54', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -62, interpolate: true,
  });
  
  option_55 = new visual.Rect ({
    win: psychoJS.window, name: 'option_55', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -63, interpolate: true,
  });
  
  option_56 = new visual.Rect ({
    win: psychoJS.window, name: 'option_56', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -64, interpolate: true,
  });
  
  option_57 = new visual.Rect ({
    win: psychoJS.window, name: 'option_57', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -65, interpolate: true,
  });
  
  option_58 = new visual.Rect ({
    win: psychoJS.window, name: 'option_58', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -66, interpolate: true,
  });
  
  option_59 = new visual.Rect ({
    win: psychoJS.window, name: 'option_59', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -67, interpolate: true,
  });
  
  option_60 = new visual.Rect ({
    win: psychoJS.window, name: 'option_60', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, 0.24],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -68, interpolate: true,
  });
  
  option_61 = new visual.Rect ({
    win: psychoJS.window, name: 'option_61', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -69, interpolate: true,
  });
  
  option_62 = new visual.Rect ({
    win: psychoJS.window, name: 'option_62', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -70, interpolate: true,
  });
  
  option_63 = new visual.Rect ({
    win: psychoJS.window, name: 'option_63', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -71, interpolate: true,
  });
  
  option_64 = new visual.Rect ({
    win: psychoJS.window, name: 'option_64', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -72, interpolate: true,
  });
  
  option_65 = new visual.Rect ({
    win: psychoJS.window, name: 'option_65', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -73, interpolate: true,
  });
  
  option_66 = new visual.Rect ({
    win: psychoJS.window, name: 'option_66', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -74, interpolate: true,
  });
  
  option_67 = new visual.Rect ({
    win: psychoJS.window, name: 'option_67', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -75, interpolate: true,
  });
  
  option_68 = new visual.Rect ({
    win: psychoJS.window, name: 'option_68', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -76, interpolate: true,
  });
  
  option_69 = new visual.Rect ({
    win: psychoJS.window, name: 'option_69', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -77, interpolate: true,
  });
  
  option_70 = new visual.Rect ({
    win: psychoJS.window, name: 'option_70', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -78, interpolate: true,
  });
  
  option_71 = new visual.Rect ({
    win: psychoJS.window, name: 'option_71', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -79, interpolate: true,
  });
  
  option_72 = new visual.Rect ({
    win: psychoJS.window, name: 'option_72', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -80, interpolate: true,
  });
  
  option_73 = new visual.Rect ({
    win: psychoJS.window, name: 'option_73', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -81, interpolate: true,
  });
  
  option_74 = new visual.Rect ({
    win: psychoJS.window, name: 'option_74', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -82, interpolate: true,
  });
  
  option_75 = new visual.Rect ({
    win: psychoJS.window, name: 'option_75', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, 0.18],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -83, interpolate: true,
  });
  
  option_76 = new visual.Rect ({
    win: psychoJS.window, name: 'option_76', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -84, interpolate: true,
  });
  
  option_77 = new visual.Rect ({
    win: psychoJS.window, name: 'option_77', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -85, interpolate: true,
  });
  
  option_78 = new visual.Rect ({
    win: psychoJS.window, name: 'option_78', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -86, interpolate: true,
  });
  
  option_79 = new visual.Rect ({
    win: psychoJS.window, name: 'option_79', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -87, interpolate: true,
  });
  
  option_80 = new visual.Rect ({
    win: psychoJS.window, name: 'option_80', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -88, interpolate: true,
  });
  
  option_81 = new visual.Rect ({
    win: psychoJS.window, name: 'option_81', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -89, interpolate: true,
  });
  
  option_82 = new visual.Rect ({
    win: psychoJS.window, name: 'option_82', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -90, interpolate: true,
  });
  
  option_83 = new visual.Rect ({
    win: psychoJS.window, name: 'option_83', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -91, interpolate: true,
  });
  
  option_84 = new visual.Rect ({
    win: psychoJS.window, name: 'option_84', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -92, interpolate: true,
  });
  
  option_85 = new visual.Rect ({
    win: psychoJS.window, name: 'option_85', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -93, interpolate: true,
  });
  
  option_86 = new visual.Rect ({
    win: psychoJS.window, name: 'option_86', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -94, interpolate: true,
  });
  
  option_87 = new visual.Rect ({
    win: psychoJS.window, name: 'option_87', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -95, interpolate: true,
  });
  
  option_88 = new visual.Rect ({
    win: psychoJS.window, name: 'option_88', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -96, interpolate: true,
  });
  
  option_89 = new visual.Rect ({
    win: psychoJS.window, name: 'option_89', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -97, interpolate: true,
  });
  
  option_90 = new visual.Rect ({
    win: psychoJS.window, name: 'option_90', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, 0.12],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -98, interpolate: true,
  });
  
  option_91 = new visual.Rect ({
    win: psychoJS.window, name: 'option_91', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -99, interpolate: true,
  });
  
  option_92 = new visual.Rect ({
    win: psychoJS.window, name: 'option_92', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -100, interpolate: true,
  });
  
  option_93 = new visual.Rect ({
    win: psychoJS.window, name: 'option_93', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -101, interpolate: true,
  });
  
  option_94 = new visual.Rect ({
    win: psychoJS.window, name: 'option_94', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -102, interpolate: true,
  });
  
  option_95 = new visual.Rect ({
    win: psychoJS.window, name: 'option_95', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -103, interpolate: true,
  });
  
  option_96 = new visual.Rect ({
    win: psychoJS.window, name: 'option_96', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -104, interpolate: true,
  });
  
  option_97 = new visual.Rect ({
    win: psychoJS.window, name: 'option_97', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -105, interpolate: true,
  });
  
  option_98 = new visual.Rect ({
    win: psychoJS.window, name: 'option_98', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -106, interpolate: true,
  });
  
  option_99 = new visual.Rect ({
    win: psychoJS.window, name: 'option_99', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -107, interpolate: true,
  });
  
  option_100 = new visual.Rect ({
    win: psychoJS.window, name: 'option_100', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -108, interpolate: true,
  });
  
  option_101 = new visual.Rect ({
    win: psychoJS.window, name: 'option_101', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -109, interpolate: true,
  });
  
  option_102 = new visual.Rect ({
    win: psychoJS.window, name: 'option_102', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -110, interpolate: true,
  });
  
  option_103 = new visual.Rect ({
    win: psychoJS.window, name: 'option_103', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -111, interpolate: true,
  });
  
  option_104 = new visual.Rect ({
    win: psychoJS.window, name: 'option_104', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -112, interpolate: true,
  });
  
  option_105 = new visual.Rect ({
    win: psychoJS.window, name: 'option_105', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, 0.06],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -113, interpolate: true,
  });
  
  option_106 = new visual.Rect ({
    win: psychoJS.window, name: 'option_106', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -114, interpolate: true,
  });
  
  option_107 = new visual.Rect ({
    win: psychoJS.window, name: 'option_107', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -115, interpolate: true,
  });
  
  option_108 = new visual.Rect ({
    win: psychoJS.window, name: 'option_108', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -116, interpolate: true,
  });
  
  option_109 = new visual.Rect ({
    win: psychoJS.window, name: 'option_109', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -117, interpolate: true,
  });
  
  option_110 = new visual.Rect ({
    win: psychoJS.window, name: 'option_110', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -118, interpolate: true,
  });
  
  option_111 = new visual.Rect ({
    win: psychoJS.window, name: 'option_111', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -119, interpolate: true,
  });
  
  option_112 = new visual.Rect ({
    win: psychoJS.window, name: 'option_112', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -120, interpolate: true,
  });
  
  option_113 = new visual.Rect ({
    win: psychoJS.window, name: 'option_113', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -121, interpolate: true,
  });
  
  option_114 = new visual.Rect ({
    win: psychoJS.window, name: 'option_114', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -122, interpolate: true,
  });
  
  option_115 = new visual.Rect ({
    win: psychoJS.window, name: 'option_115', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -123, interpolate: true,
  });
  
  option_116 = new visual.Rect ({
    win: psychoJS.window, name: 'option_116', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -124, interpolate: true,
  });
  
  option_117 = new visual.Rect ({
    win: psychoJS.window, name: 'option_117', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -125, interpolate: true,
  });
  
  option_118 = new visual.Rect ({
    win: psychoJS.window, name: 'option_118', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -126, interpolate: true,
  });
  
  option_119 = new visual.Rect ({
    win: psychoJS.window, name: 'option_119', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -127, interpolate: true,
  });
  
  option_120 = new visual.Rect ({
    win: psychoJS.window, name: 'option_120', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, 0.0],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -128, interpolate: true,
  });
  
  option_121 = new visual.Rect ({
    win: psychoJS.window, name: 'option_121', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -129, interpolate: true,
  });
  
  option_122 = new visual.Rect ({
    win: psychoJS.window, name: 'option_122', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -130, interpolate: true,
  });
  
  option_123 = new visual.Rect ({
    win: psychoJS.window, name: 'option_123', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -131, interpolate: true,
  });
  
  option_124 = new visual.Rect ({
    win: psychoJS.window, name: 'option_124', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -132, interpolate: true,
  });
  
  option_125 = new visual.Rect ({
    win: psychoJS.window, name: 'option_125', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -133, interpolate: true,
  });
  
  option_126 = new visual.Rect ({
    win: psychoJS.window, name: 'option_126', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -134, interpolate: true,
  });
  
  option_127 = new visual.Rect ({
    win: psychoJS.window, name: 'option_127', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -135, interpolate: true,
  });
  
  option_128 = new visual.Rect ({
    win: psychoJS.window, name: 'option_128', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -136, interpolate: true,
  });
  
  option_129 = new visual.Rect ({
    win: psychoJS.window, name: 'option_129', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -137, interpolate: true,
  });
  
  option_130 = new visual.Rect ({
    win: psychoJS.window, name: 'option_130', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -138, interpolate: true,
  });
  
  option_131 = new visual.Rect ({
    win: psychoJS.window, name: 'option_131', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -139, interpolate: true,
  });
  
  option_132 = new visual.Rect ({
    win: psychoJS.window, name: 'option_132', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -140, interpolate: true,
  });
  
  option_133 = new visual.Rect ({
    win: psychoJS.window, name: 'option_133', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -141, interpolate: true,
  });
  
  option_134 = new visual.Rect ({
    win: psychoJS.window, name: 'option_134', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -142, interpolate: true,
  });
  
  option_135 = new visual.Rect ({
    win: psychoJS.window, name: 'option_135', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, (- 0.06)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -143, interpolate: true,
  });
  
  option_136 = new visual.Rect ({
    win: psychoJS.window, name: 'option_136', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -144, interpolate: true,
  });
  
  option_137 = new visual.Rect ({
    win: psychoJS.window, name: 'option_137', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -145, interpolate: true,
  });
  
  option_138 = new visual.Rect ({
    win: psychoJS.window, name: 'option_138', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -146, interpolate: true,
  });
  
  option_139 = new visual.Rect ({
    win: psychoJS.window, name: 'option_139', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -147, interpolate: true,
  });
  
  option_140 = new visual.Rect ({
    win: psychoJS.window, name: 'option_140', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -148, interpolate: true,
  });
  
  option_141 = new visual.Rect ({
    win: psychoJS.window, name: 'option_141', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -149, interpolate: true,
  });
  
  option_142 = new visual.Rect ({
    win: psychoJS.window, name: 'option_142', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -150, interpolate: true,
  });
  
  option_143 = new visual.Rect ({
    win: psychoJS.window, name: 'option_143', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -151, interpolate: true,
  });
  
  option_144 = new visual.Rect ({
    win: psychoJS.window, name: 'option_144', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -152, interpolate: true,
  });
  
  option_145 = new visual.Rect ({
    win: psychoJS.window, name: 'option_145', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -153, interpolate: true,
  });
  
  option_146 = new visual.Rect ({
    win: psychoJS.window, name: 'option_146', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -154, interpolate: true,
  });
  
  option_147 = new visual.Rect ({
    win: psychoJS.window, name: 'option_147', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -155, interpolate: true,
  });
  
  option_148 = new visual.Rect ({
    win: psychoJS.window, name: 'option_148', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -156, interpolate: true,
  });
  
  option_149 = new visual.Rect ({
    win: psychoJS.window, name: 'option_149', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -157, interpolate: true,
  });
  
  option_150 = new visual.Rect ({
    win: psychoJS.window, name: 'option_150', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, (- 0.12)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -158, interpolate: true,
  });
  
  option_151 = new visual.Rect ({
    win: psychoJS.window, name: 'option_151', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -159, interpolate: true,
  });
  
  option_152 = new visual.Rect ({
    win: psychoJS.window, name: 'option_152', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -160, interpolate: true,
  });
  
  option_153 = new visual.Rect ({
    win: psychoJS.window, name: 'option_153', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -161, interpolate: true,
  });
  
  option_154 = new visual.Rect ({
    win: psychoJS.window, name: 'option_154', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -162, interpolate: true,
  });
  
  option_155 = new visual.Rect ({
    win: psychoJS.window, name: 'option_155', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -163, interpolate: true,
  });
  
  option_156 = new visual.Rect ({
    win: psychoJS.window, name: 'option_156', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -164, interpolate: true,
  });
  
  option_157 = new visual.Rect ({
    win: psychoJS.window, name: 'option_157', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -165, interpolate: true,
  });
  
  option_158 = new visual.Rect ({
    win: psychoJS.window, name: 'option_158', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -166, interpolate: true,
  });
  
  option_159 = new visual.Rect ({
    win: psychoJS.window, name: 'option_159', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -167, interpolate: true,
  });
  
  option_160 = new visual.Rect ({
    win: psychoJS.window, name: 'option_160', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -168, interpolate: true,
  });
  
  option_161 = new visual.Rect ({
    win: psychoJS.window, name: 'option_161', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -169, interpolate: true,
  });
  
  option_162 = new visual.Rect ({
    win: psychoJS.window, name: 'option_162', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -170, interpolate: true,
  });
  
  option_163 = new visual.Rect ({
    win: psychoJS.window, name: 'option_163', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -171, interpolate: true,
  });
  
  option_164 = new visual.Rect ({
    win: psychoJS.window, name: 'option_164', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -172, interpolate: true,
  });
  
  option_165 = new visual.Rect ({
    win: psychoJS.window, name: 'option_165', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, (- 0.18)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -173, interpolate: true,
  });
  
  option_166 = new visual.Rect ({
    win: psychoJS.window, name: 'option_166', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -174, interpolate: true,
  });
  
  option_167 = new visual.Rect ({
    win: psychoJS.window, name: 'option_167', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -175, interpolate: true,
  });
  
  option_168 = new visual.Rect ({
    win: psychoJS.window, name: 'option_168', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -176, interpolate: true,
  });
  
  option_169 = new visual.Rect ({
    win: psychoJS.window, name: 'option_169', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -177, interpolate: true,
  });
  
  option_170 = new visual.Rect ({
    win: psychoJS.window, name: 'option_170', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -178, interpolate: true,
  });
  
  option_171 = new visual.Rect ({
    win: psychoJS.window, name: 'option_171', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -179, interpolate: true,
  });
  
  option_172 = new visual.Rect ({
    win: psychoJS.window, name: 'option_172', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -180, interpolate: true,
  });
  
  option_173 = new visual.Rect ({
    win: psychoJS.window, name: 'option_173', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -181, interpolate: true,
  });
  
  option_174 = new visual.Rect ({
    win: psychoJS.window, name: 'option_174', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -182, interpolate: true,
  });
  
  option_175 = new visual.Rect ({
    win: psychoJS.window, name: 'option_175', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -183, interpolate: true,
  });
  
  option_176 = new visual.Rect ({
    win: psychoJS.window, name: 'option_176', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -184, interpolate: true,
  });
  
  option_177 = new visual.Rect ({
    win: psychoJS.window, name: 'option_177', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -185, interpolate: true,
  });
  
  option_178 = new visual.Rect ({
    win: psychoJS.window, name: 'option_178', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -186, interpolate: true,
  });
  
  option_179 = new visual.Rect ({
    win: psychoJS.window, name: 'option_179', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -187, interpolate: true,
  });
  
  option_180 = new visual.Rect ({
    win: psychoJS.window, name: 'option_180', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, (- 0.24)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -188, interpolate: true,
  });
  
  option_181 = new visual.Rect ({
    win: psychoJS.window, name: 'option_181', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -189, interpolate: true,
  });
  
  option_182 = new visual.Rect ({
    win: psychoJS.window, name: 'option_182', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -190, interpolate: true,
  });
  
  option_183 = new visual.Rect ({
    win: psychoJS.window, name: 'option_183', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -191, interpolate: true,
  });
  
  option_184 = new visual.Rect ({
    win: psychoJS.window, name: 'option_184', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -192, interpolate: true,
  });
  
  option_185 = new visual.Rect ({
    win: psychoJS.window, name: 'option_185', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -193, interpolate: true,
  });
  
  option_186 = new visual.Rect ({
    win: psychoJS.window, name: 'option_186', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -194, interpolate: true,
  });
  
  option_187 = new visual.Rect ({
    win: psychoJS.window, name: 'option_187', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -195, interpolate: true,
  });
  
  option_188 = new visual.Rect ({
    win: psychoJS.window, name: 'option_188', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -196, interpolate: true,
  });
  
  option_189 = new visual.Rect ({
    win: psychoJS.window, name: 'option_189', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -197, interpolate: true,
  });
  
  option_190 = new visual.Rect ({
    win: psychoJS.window, name: 'option_190', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -198, interpolate: true,
  });
  
  option_191 = new visual.Rect ({
    win: psychoJS.window, name: 'option_191', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -199, interpolate: true,
  });
  
  option_192 = new visual.Rect ({
    win: psychoJS.window, name: 'option_192', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -200, interpolate: true,
  });
  
  option_193 = new visual.Rect ({
    win: psychoJS.window, name: 'option_193', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -201, interpolate: true,
  });
  
  option_194 = new visual.Rect ({
    win: psychoJS.window, name: 'option_194', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -202, interpolate: true,
  });
  
  option_195 = new visual.Rect ({
    win: psychoJS.window, name: 'option_195', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, (- 0.3)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -203, interpolate: true,
  });
  
  option_196 = new visual.Rect ({
    win: psychoJS.window, name: 'option_196', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -204, interpolate: true,
  });
  
  option_197 = new visual.Rect ({
    win: psychoJS.window, name: 'option_197', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -205, interpolate: true,
  });
  
  option_198 = new visual.Rect ({
    win: psychoJS.window, name: 'option_198', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -206, interpolate: true,
  });
  
  option_199 = new visual.Rect ({
    win: psychoJS.window, name: 'option_199', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -207, interpolate: true,
  });
  
  option_200 = new visual.Rect ({
    win: psychoJS.window, name: 'option_200', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -208, interpolate: true,
  });
  
  option_201 = new visual.Rect ({
    win: psychoJS.window, name: 'option_201', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -209, interpolate: true,
  });
  
  option_202 = new visual.Rect ({
    win: psychoJS.window, name: 'option_202', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -210, interpolate: true,
  });
  
  option_203 = new visual.Rect ({
    win: psychoJS.window, name: 'option_203', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -211, interpolate: true,
  });
  
  option_204 = new visual.Rect ({
    win: psychoJS.window, name: 'option_204', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -212, interpolate: true,
  });
  
  option_205 = new visual.Rect ({
    win: psychoJS.window, name: 'option_205', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -213, interpolate: true,
  });
  
  option_206 = new visual.Rect ({
    win: psychoJS.window, name: 'option_206', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -214, interpolate: true,
  });
  
  option_207 = new visual.Rect ({
    win: psychoJS.window, name: 'option_207', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -215, interpolate: true,
  });
  
  option_208 = new visual.Rect ({
    win: psychoJS.window, name: 'option_208', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -216, interpolate: true,
  });
  
  option_209 = new visual.Rect ({
    win: psychoJS.window, name: 'option_209', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -217, interpolate: true,
  });
  
  option_210 = new visual.Rect ({
    win: psychoJS.window, name: 'option_210', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, (- 0.36)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -218, interpolate: true,
  });
  
  option_211 = new visual.Rect ({
    win: psychoJS.window, name: 'option_211', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.1), (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -219, interpolate: true,
  });
  
  option_212 = new visual.Rect ({
    win: psychoJS.window, name: 'option_212', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [(- 0.04), (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -220, interpolate: true,
  });
  
  option_213 = new visual.Rect ({
    win: psychoJS.window, name: 'option_213', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.02, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -221, interpolate: true,
  });
  
  option_214 = new visual.Rect ({
    win: psychoJS.window, name: 'option_214', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.08, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -222, interpolate: true,
  });
  
  option_215 = new visual.Rect ({
    win: psychoJS.window, name: 'option_215', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.14, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -223, interpolate: true,
  });
  
  option_216 = new visual.Rect ({
    win: psychoJS.window, name: 'option_216', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.2, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -224, interpolate: true,
  });
  
  option_217 = new visual.Rect ({
    win: psychoJS.window, name: 'option_217', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.26, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -225, interpolate: true,
  });
  
  option_218 = new visual.Rect ({
    win: psychoJS.window, name: 'option_218', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.32, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -226, interpolate: true,
  });
  
  option_219 = new visual.Rect ({
    win: psychoJS.window, name: 'option_219', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.38, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -227, interpolate: true,
  });
  
  option_220 = new visual.Rect ({
    win: psychoJS.window, name: 'option_220', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.44, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -228, interpolate: true,
  });
  
  option_221 = new visual.Rect ({
    win: psychoJS.window, name: 'option_221', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.5, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -229, interpolate: true,
  });
  
  option_222 = new visual.Rect ({
    win: psychoJS.window, name: 'option_222', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.56, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -230, interpolate: true,
  });
  
  option_223 = new visual.Rect ({
    win: psychoJS.window, name: 'option_223', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.62, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -231, interpolate: true,
  });
  
  option_224 = new visual.Rect ({
    win: psychoJS.window, name: 'option_224', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.68, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -232, interpolate: true,
  });
  
  option_225 = new visual.Rect ({
    win: psychoJS.window, name: 'option_225', 
    width: [0.055, 0.055][0], height: [0.055, 0.055][1],
    ori: 0.0, pos: [0.74, (- 0.42)],
    anchor: 'center',
    lineWidth: 0.02, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: undefined, depth: -233, interpolate: true,
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  selection_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'selection_instruction',
    text: 'Click a grey box to select a book to view.\n\nMake a selection that maximizes \nyour reading enjoyment.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -235.0 
  });
  
  // Run 'Begin Experiment' code from code
  option_list = [option_1, option_2, option_3, option_4, option_5, option_6, option_7, option_8, option_9, option_10, option_11, option_12, option_13, option_14, option_15, option_16, option_17, option_18, option_19, option_20, option_21, option_22, option_23, option_24, option_25, option_26, option_27, option_28, option_29, option_30, option_31, option_32, option_33, option_34, option_35, option_36, option_37, option_38, option_39, option_40, option_41, option_42, option_43, option_44, option_45, option_46, option_47, option_48, option_49, option_50, option_51, option_52, option_53, option_54, option_55, option_56, option_57, option_58, option_59, option_60, option_61, option_62, option_63, option_64, option_65, option_66, option_67, option_68, option_69, option_70, option_71, option_72, option_73, option_74, option_75, option_76, option_77, option_78, option_79, option_80, option_81, option_82, option_83, option_84, option_85, option_86, option_87, option_88, option_89, option_90, option_91, option_92, option_93, option_94, option_95, option_96, option_97, option_98, option_99, option_100, option_101, option_102, option_103, option_104, option_105, option_106, option_107, option_108, option_109, option_110, option_111, option_112, option_113, option_114, option_115, option_116, option_117, option_118, option_119, option_120, option_121, option_122, option_123, option_124, option_125, option_126, option_127, option_128, option_129, option_130, option_131, option_132, option_133, option_134, option_135, option_136, option_137, option_138, option_139, option_140, option_141, option_142, option_143, option_144, option_145, option_146, option_147, option_148, option_149, option_150, option_151, option_152, option_153, option_154, option_155, option_156, option_157, option_158, option_159, option_160, option_161, option_162, option_163, option_164, option_165, option_166, option_167, option_168, option_169, option_170, option_171, option_172, option_173, option_174, option_175, option_176, option_177, option_178, option_179, option_180, option_181, option_182, option_183, option_184, option_185, option_186, option_187, option_188, option_189, option_190, option_191, option_192, option_193, option_194, option_195, option_196, option_197, option_198, option_199, option_200, option_201, option_202, option_203, option_204, option_205, option_206, option_207, option_208, option_209, option_210, option_211, option_212, option_213, option_214, option_215, option_216, option_217, option_218, option_219, option_220, option_221, option_222, option_223, option_224, option_225];
  option_dict = {};
  option_index = "option_";
  for (var i, _pj_c = 0, _pj_a = util.range(1, 226), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      option_index = ("option_" + i.toString());
      option_dict[option_index] = option_list[(i - 1)];
  }
  selected_options = [];
  mouse.clicked_name = [];
  clickable_options = [];
  
  selection_like = new visual.TextStim({
    win: psychoJS.window,
    name: 'selection_like',
    text: 'Extremely liked',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0.0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -237.0 
  });
  
  selection_dislike = new visual.TextStim({
    win: psychoJS.window,
    name: 'selection_dislike',
    text: 'Extremely disliked',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.7), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -238.0 
  });
  
  // Initialize components for Routine "selection_feedback_1"
  selection_feedback_1Clock = new util.Clock();
  book_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'book_text',
    text: 'This is the book summary.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'If you have finished reading this book summary,\npress the spacebar on your keyboard to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from code_3
  option_text_dict = {"option_1": "Fate throws a curveball at the San Francisco ex-husband-and-wife legal team of Mike Daley and Rosie Fernandez, when Mike picks up the phone and hears the voice of Leon Walker. This is not good news-because Walker was the one who ruined their marriage. Years ago, he and his brother participated in a stickup that left a man dead. Through a series of (some said) questionable maneuvers, Mike got the charges dropped, but he and Rosie fought about it all the time and it finally drove a wedge between them. Now, a Silicon Valley venture capitalist has been found dead in a dumpster on San Francisco's skid row. The new murder has been pinned on Walker, but he not only tells Mike he is innocent, he says he is a dying man and doesn't want to go to his grave proclaimed a murderer. Dogged investigation, courtroom nimbleness, and a healthy dose of luck usually have helped Mike before, but it looks like it'll take more than that to prevail this time, and his time is running out-both on his client and, just maybe, on his partnership.", "option_2": "Vanni is furious when her fianc\u00e9 tricks her into attending a conference where his father\u2019s church is protesting the New Species Organization. She hates everything those vile bigots stand for. Vanni goes to the bar to cool off and ends up seated next to a handsome New Species. Things heat up fast when they are both drugged. Smiley doesn't want to believe the sweet human would dose them with the breeding drug. He's willing to trust her and determined to save her life. He'll hold her. Protect her. Offer up his body to distract them both from the pain. She is his female, even if she doesn't realize it yet.", "option_3": "Houston firefighter, Jeff Taylor is a fireman's fireman. He's not afraid of anything, and no situation is too dangerous to keep him on the sideline if lives are at stake. Lisa Matheson runs a semi-successful ad agency that's on the brink of falling apart. Her employees are incompetent and her schedule has become exhausting. When she takes on a client with a brilliant idea for a big conference, she thinks that maybe, finally this is her lucky break. However, the fire station wasn't what she had in mind for finding conference speakers. When she falls for a handsome but shy firefighter, it's possible that life might just be going her way for a change. The only problem is she can't control Jeff and the death wish he seems to have...", "option_4": "Life in the California sun suits Elvis Cole--until the day a fifteen-year-old girl and her two younger siblings walk into his office. Then everything changes. Three years ago, a Seattle family ran for their lives in a hail of bullets. Hired by three kids to find their missing father, Elvis now must pick up the cold pieces of a drama that began that night. What he finds is a sordid tale of high crimes and illicit drugs. As clues to a man's secret life emerge from the shadows, Elvis knows he's not just up against ruthless mobsters and some very angry Feds. He's facing a storm of desperation and conspiracy--bearing down on three children whose only crime was their survival...", "option_5": "Since feisty newspaper reporter Jenessa Jones' return to her hometown of Hidden Valley, California, her budding romance with the handsome Detective Michael Baxter has begun to heat up--but there are certain people in town that are not pleased and will do all they can to keep that from happening. When a scandalous murder is uncovered on the nearby college campus, Jenessa is assigned the front-page story at the local newspaper, the Hidden Valley Herald. Surprisingly, her aunt is named as a prime suspect, compelling Jenessa to find the real killer in order to keep her favorite relative from going to prison. As she doggedly follows the growing trail of clues, Jenessa's investigation takes a dangerous turn and puts her life in peril. With time running out, can Detective Baxter capture the murderer and save the woman he loves?", "option_6": "Francesca Amaro moves back to her hometown of Cape Bay, Massachusetts, and takes over the family business, Antonia's Italian Cafe. She spends her days making delicious artisan cappuccinos, until she stumbles upon her neighbor's dead body. When the police discover Mr. Cardosi was poisoned, Francesca becomes a suspect. The victim's son, Matty, happens to be Francesca's old high school friend. Together, they uncover the secrets of the locals in order to find the killer in their idyllic beach town.", "option_7": "'You\u2019ve done better.\u201d With one uncharacteristically sassy tweet to her longtime celebrity crush, Zoe Miller\u2019s life turns upside down. Ultrahot A-lister Chase Covington doesn\u2019t just respond to Zoe\u2019s tweet, he does the unthinkable: he messages Zoe directly. Now she must decide between walking away or meeting her crush in person. Chase knows better than to trust anyone from the Internet, but Zoe\u2019s saucy challenge has totally caught his interest\u2014and her girl-next-door personality is keeping it. He\u2019s been burned enough to know he needs to keep his heart close. But his feelings for Zoe might be a lot more than just an online flirtation. He just has to convince her\u2026When the press gets wind of Zoe and Chase\u2019s secret relationship, their romance turns into tabloid headlines. Will they be able to hold on to their Hollywood love story?", "option_8": "Amanda Graham should be happy with her newly-inherited historic inn, a fat cat named Oscar, and living in a small Oregon beach town, but a terrible discovery between the dunes on the coast and she's right back in the soup, trying to solve a murder and save her friend! Sure, maybe he was such a rotten person he deserved to die, but as secrets start to be revealed, Amanda is drawn deeper into danger and intrigue. With a harvest festival looming, and tourists starting to come back to visit, figuring out how and why he died is the best way to protect the town, and her sweet friend. She's turned her back on LA and life in a gray office cubicle, so her best bet is to dig in and fight for her new hometown.", "option_9": "Nickel is a survivor. He has to be. For as long as he can remember, his life has hinged on the flip of a coin. Or, rather, the scribble of a social worker's pen. He's been through the system, even had a good dad for a few years, until he was gone, too. But Nickel remembers everything he taught him, and since the day he escaped from foster-care hell, he's put that knowledge to good use. Just twelve years old, he makes a steady living by selling marijuana to high schoolers, blackmailing pedophiles he ferrets out online, and working as a private investigator. When a beautiful girl named Arrow hires him to find her little sister Shelby, Nickel figures at best the kid's a runaway; at worst, some perv's gotten a hold of her. He scours the internet and the streets of Arrow's suburban neighborhood, and what he finds there is as ugly a truth as he's ever seen. For beyond the manicured lawns, Nickel discovers children for sale, and adults with souls black as the devil. And people like that aren't about to let some kid ruin their game.", "option_10": "Can Anna find love in the City of Light? Anna is happy in Atlanta. She has a loyal best friend and a crush on her coworker at the movie theater, who is just starting to return her affection. So she's not too pleased when her father decides to send her to a boarding school in Paris for her senior year. But despite not speaking a word of French, Anna meets some cool new friends, including the handsome Etienne St. Clair, who quickly becomes her best friend. Unfortunately, he's taken--and Anna might be too. Will a year of romantic near misses end with the French kiss she's been waiting for?", "option_11": "Pretty please with spaghetti on top? Andy Buckland has always dreamed of being a chef. But after a live studio audience is stricken with food poisoning during her debut cooking show, she finds herself blacklisted in the culinary community. The only job open to her is working in her family's southern pasta shop, and, to make matters worse, her first assignment is serving baked ziti to her former lover and his spoiled bride-to-be at their engagement party! But a broken heart and a bruised ego are the least of Andy's troubles when she discovers a dead body at the party with the words 'welcome home' written in flour next to it. Is it a warning? A threat? Or a frame-up job? Andy is determined to find out. With the help of her over-the-top Italian family, Andy will prove that she has what it takes to not only cook the best dish in town but also catch a killer, too!", "option_12": "Gemma ditches her high-flying job and returns to Oxford to follow her dream: opening a traditional English tearoom serving warm buttery scones with jam and clotted cream... Only problem is--murder is the first thing on the menu and Gemma is the key suspect! And the only people Gemma can turn to for help are four nosy old ladies from her local Cotswolds village - not to mention a cheeky little tabby cat named Muesli. Who was the mysterious woman Gemma met on the flight back from Australia and why was she murdered? Now Gemma must find the killer, solve the mystery and clear her name if she's to have her cake--and serve it too.", "option_13": "Do Squire and Kelly have enough patience and faith to make their second chance possible? After his deployment, injured and discharged Major Squire Ackerman returns to Three Rivers Ranch, anxious to prove himself capable of running the cattle operation so his parents can retire. Things would be easier if the ranch wasn't missing 1.6 million dollars, which forces Squire to hire Kelly, the girl who rejected his high school prom invitation, as his accountant. She's back in town with her four-year-old son, living in her parent's basement until she can get her life back together. With fresh ink on her divorce papers and open gashes on her heart, she's not ready for much beyond her new job on the ranch. Squire wants to forgive Kelly for ignoring him a decade ago. He'd like to provide the stable life she needs, but with old wounds opening and a ranch on the brink of financial collapse, it will take patience and faith to make their second chance possible.", "option_14": "When Val Jensen gets dumped for her decision to stay a virgin until marriage, the nasty breakup goes viral on YouTube, making her the latest internet sensation. After days of ridicule from her peers, Val starts a school-wide campaign to rally support for her cause. She meant to make a statement, but she never dreamed the entire nation would get caught up in the controversy. As if becoming nationally recognized as 'Virgin Val' isn't enough, Val's already hectic life starts to spin wildly out of control when bad boy Kyle Hamilton, lead singer for the hit rock band Tralse, decides to take her abstinence as a personal challenge. How can a girl stay true to herself when this year's Sexiest Man Alive is doing everything in his power to win her over?", "option_15": "Half-korean, half-japanese, Masaji Ishikawa has spent his whole life feeling like a man without a country. This feeling only deepened when his family moved from Japan to North Korea when Ishikawa was just thirteen years old, And unwittingly became members of the lowest social caste. His father, himself a Korean national, was lured to the new communist country by promises of abundant work, education for his children, and a higher station in society. But the reality of their new life was far from Utopian. A memoir translated from the original Japanese, Ishikawa candidly recounts his tumultuous upbringing and the brutal thirty-six years he spent living under a crushing totalitarian regime, as well as the challenges he faced repatriating to Japan after barely escaping North Korea with his life.", "option_16": "The past and the present collide with stunning results in the latest Reed Ferguson mystery. Potential client Brad Webb asks Denver private investigator Reed Ferguson to look into the decades-old murder of Brad's grandfather, Dewey Webb. Dewey was a Denver-based private detective who died mysteriously in 1955, and although Reed is intrigued, he doesn't see much promise in solving the case. After all, the police didn't find Dewey's killer at the time, and seventy years have passed, leaving a cold trail. However, Reed accepts the case, and as he is drawn back into both the underworld and the elite society of 1950s Denver, he realizes that Dewey had discovered secrets that someone still wants to keep hidden today, even if it means resorting to murder. Can Reed piece together old and new clues to find the killer, or will the past come back to harm him?", "option_17": "Peaches Monroe is a curvy young woman who always speaks her mind. She's working in her small town bookstore when a handsome dark-haired man comes running in, hiding from reporters. He's Dalton Deangelo, a sexy actor who plays a vampire on a popular TV series. Within minutes of meeting, Peaches and Dalton have undeniable chemistry. She thinks he's just a Hollywood playboy after another conquest. He thinks she's the cutest, funniest, smartest girl he's ever met. Sparks fly in this very funny, sexy series.", "option_18": "Beck Hardin returns to his Texas hometown - and his estranged father - after the death of his wife leaves him with two children to raise. The town is still reeling from the murder of sixteen-year-old Heidi, whose father - Beck's old college friend - asks Beck to help him find Heidi's killer before the statute of limitations runs out. Meanwhile, Beck is pushed into becoming town Judge, and he makes some powerful enemies amongst the rich white landowners when he refuses to condone their treatment of the Mexican workers of the town. As events escalate, the landowners carefully plot their revenge...", "option_19": "Mickey Haller gets the text, 'Call me ASAP - 187,' and the California penal code for murder immediately gets his attention. Murder cases have the highest stakes and the biggest paydays, and they always mean Haller has to be at the top of his game. When Mickey learns that the victim was his own former client, a prostitute he thought he had rescued and put on the straight and narrow path, he knows he is on the hook for this one. He soon finds out that she was back in LA and back in the life. Far from saving her, Mickey may have been the one who put her in danger. Haunted by the ghosts of his past, Mickey must work tirelessly and bring all his skill to bear on a case that could mean his ultimate redemption or proof of his ultimate guilt.", "option_20": "A string of brutal murders has bodies piling up in Brooklyn, and Detective Frankie Donovan knows what is going on. Clues left at the crime scenes point to someone from the old neighborhood, and that isn't good. Frankie has taken two oaths in his life-the one he took to uphold the law when he became a cop, and the one he took with his two best friends when they were eight years old and inseparable. Those relationships have forced Frankie to make many tough decisions, but now he faces the toughest one of his life; he has five murders to solve and one of those two friends is responsible. If Frankie lets him go, he breaks the oath he took as a cop and risks losing his job. But if he tries to bring him in, he breaks the oath he kept for twenty-five years-and risks losing his life. In the neighborhood where Frankie Donovan grew up, you never broke an oath.", "option_21": "An abandoned house. A forgotten evil. Home sweet home... Shane Ryan returns to Nashua and the childhood memories that drove him to join the Marines. After a prolonged legal battle with his aunt and uncle, Shane has possession of the family home where his parents disappeared over 20 years ago. The house, a monstrous castle filled with ghosts and secrets, is more alive than its inhabitants. When his aunt and uncle come to town, then vanish, Shane's life takes a turn for the worse. Detective Marie Lafontaine immediately labels Shane as the prime suspect. And in a race against time, Shane desperately searches for clues about his parents. But there's something lurking beyond the walls and beneath the surface. Something sinister that has haunted him ever since he saw its face in the pond behind the house. And it isn't happy that Shane is back. It isn't happy at all.", "option_22": "Stella Reynolds is new to the job, new to the state, and new to making mistakes in front of thousands of people, but that\u2019s exactly what she signs up for when she takes a job as a TV reporter in the mountains of Bozeman, Montana. Being on live TV in a small town has never been so funny, until Stella covers the town\u2019s first murders in years. When the prime suspect\u2019s girlfriend enlists Stella to help clear his name, she uncovers another shocking crime that could expose a handful of powerful insiders. Who is honest, who can\u2019t be trusted, and who committed the murders? Stella is on a tight deadline to find out. Can she help free an innocent man, or will the real culprit get away with murder?", "option_23": "He's your perfect date. You're his next victim. When the tortured body of a young woman is found in a dumpster, her eyes swollen shut and her clothes soaked with blood, Detective Erika Foster is one of the first at the crime scene. The trouble is, this time, it's not her case. While she fights to secure her place on the investigation team, Erika can't help but get involved and quickly finds a link to the unsolved murder of a woman four months earlier. Dumped in a similar location, both women have identical wounds - a fatal incision to their femoral artery. Stalking his victims online, the killer is preying on young pretty women using a fake identity. How will Erika catch a murderer who doesn't seem to exist? Then another girl is abducted while waiting for a date. Erika and her team must get to her before she becomes another dead victim, and, come face to face with a terrifyingly sadistic individual.", "option_24": "Mt. Abrams was the kind of small, quiet town where, as any of its residents would tell you, nothing ever happened. That was why Ellie Rocca loved living there, even if her ex-husband did not. But even small towns had secrets, as Ellie discovered when Lacey Mitchell suddenly disappeared. Ellie caught Lacey\u2019s husband in a lie, and one small discovery led to another until it became apparent that nothing about the Mitchell\u2019s was quite what it seemed. Mother\u2019s Day was just around the corner. With a sexy detective on the case, and Ellie and her friends getting closer to the truth, can Lacey Mitchell be found in time to enjoy the day with her sons? Or was something more deadly going on?", "option_25": "Cherry blossom check Smokey check Skinny check Dead kid in the check. For sixteen year old Mattie Hathaway, this is her normal everyday routine. She\u2019s been able to see ghosts since her mother tried to murder her when she was five years old. No way does she want anyone to know she can talk to spooks. Being a foster kid is hard enough without being labeled a freak too. Normally, she just ignores the ghosts and they go away. That is until she see\u2019s the ghost of her foster sister\u2026 Sally. Everyone thinks Sally\u2019s just another runaway, but Mattie knows the truth\u2014she\u2019s dead. Murdered. Mattie feels like she has to help Sally, but she can\u2019t do it alone. Against her better judgment, she teams up with a young policeman, Officer Dan, and together they set out to discover the real truth behind Sally\u2019s disappearance. Only to find out she\u2019s dealing with a much bigger problem, a serial killer, and she may be the next victim\u2026 Will Mattie be able to find out the truth before the killer finds her?", "option_26": "He knows how to score, on and off the ice. Allie Hayes is in crisis mode. With graduation looming, she still doesn't have the first clue about what she's going to do after college. To make matters worse, she's nursing a broken heart thanks to the end of her longtime relationship. Wild rebound sex is definitely not the solution to her problems, but gorgeous hockey star Dean Di-Laurentis is impossible to resist. Just once, though, because even if her future is uncertain, it sure as heck won't include the king of one-night stands. It'll take more than flashy moves to win her over. Dean always gets what he wants. Girls, grades, girls, recognition, girls...he's a ladies man, all right, and he's yet to meet a woman who's immune to his charms. Until Allie. For one night, the feisty blonde rocked his entire world--and now she wants to be friends? Nope. It's not over until he says it's over. Dean is in full-on pursuit, but when life-rocking changes strike, he starts to wonder if maybe it's time to stop focusing on scoring...and shoot for love.", "option_27": "Gorgeous hotel heiress Katelyn 'Katie\u201d Morrison seems to have it all. But when she crosses paths with Dean Prescott\u2014the only man she\u2019s ever loved\u2014at her brother\u2019s wedding, Katie realizes there\u2019s a gaping hole in her life. After the ceremony she gets an even bigger surprise: a baby girl left on her doorstep. Determined to keep the newborn until she learns who her mother is, Katie has her hands full and doesn\u2019t need Dean snooping around\u2026 especially when his presence stirs feelings she thought were long gone.. Dean Prescott knows Katie is lying to him about the baby. He shouldn\u2019t care what the woman who broke his heart is up to\u2026 and he most certainly shouldn\u2019t still be aching for her. Yet Dean can\u2019t ignore the need to protect Katie\u2014or the desire to be near her every chance he gets. But when he and Katie solve the mystery surrounding the baby, their second chance for happiness could be shattered forever.", "option_28": "Elise Pepper has had her share of bad dates, but she's never had a dead body crash one before. Mr. Hamilton, the renowned Ice-man, purveyor of shady mortgages does just that when Elise finds him dead at the ice-rink. The scene of the crime is no coincidence, either. The Ice-man meets an icy end. And a freak power outage is only impeding the police. When Elise\u2019s coworker, Sue, begs for help, Elise is surprised to discover Sue was related to the man. And her family is fighting over his will and the appearance of an illegitimate son. It doesn't take long to discover everyone in town had reason to benefit from the banker\u2019s death. When even the king and queen of the local high school's Winter Ball come under suspicion, Elise wonders if they'll ever find out who did it.This may be the first case where the killer walks away.", "option_29": "Sven is a man who takes pride in his ability to separate himself from his emotions. He's a man who knows who he is and where he's going in life, a man who needs no one, because needing someone, anyone, is a weakness. Maggie wants the happily ever after but has never picked the right men, or stuck around long enough, to build a forever. It's always been easier to get out early, before emotions make things messy. When Maggie wakes up naked in Sven's bed, with no memory of the night before, these two must be honest about their feelings and face their fears, so they can build a future together. Will love be enough for them to get their happy ending together, or will a threat from outside strike them down before they ever have a chance?", "option_30": "One Christmas can change your life...Kyle Houseman believes he'll never find anyone he could love as much as Olivia Arnold, who's now married to his stepbrother. Not only did he lose her, he's been through one divorce and has no desire to go through another. He's determined to be extra careful about the next woman he gets involved with--which is why he fights his attraction to the beautiful stranger who rents his farmhouse for the Christmas holiday. Lourdes Bennett is a country music artist. She's only planning to stay in Whiskey Creek long enough to write the songs for her next album--the album that's going to put her back on top. Her dreams don't include settling in a town even smaller than the one she escaped. But as she comes to know Kyle, she begins to wonder if she'd be making a terrible mistake to leave him behind.", "option_31": "When Tahoe Detective Owen McKenna gets a call from a woman who\u2019s afraid for her life, it sounds like she is excessively paranoid. McKenna investigates and discovers that two other people have already died. He believes the killer is after something worth millions, a precious artifact that dates back to Renaissance Italy. When McKenna finds a connection between the victims and a famous retired pro football tackle named Adam Simms, he worries that Simms will be the next victim. Simms seems gentle as a teddy bear. But decades of football gave Simms Traumatic Brain Injury, causing loss of memory and worse. When Simms can\u2019t remember details of his relationship to the other victims, McKenna begins to wonder if it\u2019s because Simms is suffering dementia or if he\u2019s a diabolical fake. As McKenna pursues the case, he will need every bit of strength and skill, for the murderer is determined to kill McKenna in the most vicious way imaginable...", "option_32": "When Kennedy Stern's childhood pastor asks her to volunteer at his new pregnancy center, she carves time out of her rigorous college schedule to promote the cause of the unborn. After receiving a disturbing call from someone far too young to carry a child in the first place, Kennedy can no longer blindly hide behind the pro-life platitudes she grew up believing. She resolves to locate the unknown girl but winds up entrenched in a mystery that grows more convoluted as it unfolds. Soon, Kennedy finds herself a pawn in a deadly game of intrigue, at the mercy of those who consider a few innocent lives a small ransom to pay in exchange for personal and political victory.", "option_33": "A cowboy who wants to be a preacher. An outlaw's daughter who wants to change his mind. On his way to interview for a position at a church in the Piney Woods of Texas, Crockett Archer can't believe it when he's forced off the train by an outlaw and presented to the man's daughter as the preacher she requested for her birthday. He's determined to escape--which would be much easier if he could stop thinking about Joanna Robbins and her unexpected request. For months, Joanna had prayed for a minister. A man to breathe life back into the abandoned church at the heart of her community. A man to assist her in fulfilling a promise to her dying mother. But just when it seems her prayers have been answered, it turns out the parson is there against his will and has dreams of his own calling him elsewhere. Is there any way she can convince Crockett he ended up right where he was supposed to be?", "option_34": "Someone is stealing the hearts of beautiful women... Detective Mike McCabe moved from a top homicide job with the NYPD to Portland, Maine to leave his failed marriage and suspicions of wrongdoing behind, and to find a more peaceful life for himself and his 13 year old daughter. But the small New England city is not nearly as safe as he thought. On a warm September night, a missing high-school athlete is found dead in a scrap metal yard, her heart removed from her body with surgical precision. As outrage over the killing spreads, a young business woman disappears while out on a morning jog. McCabe is certain both crimes are the work of one man\u2014a murderer skilled in cardiac surgery who is using his scalpel to target young women. With the clock ticking, McCabe and his partner Maggie Savage find themselves in a desperate race against time to find and rescue the missing woman before she becomes the next victim of the sadistic killer\u2019s blade.", "option_35": "In Apalachicola, Florida, sinister things are afoot, as sinister things tend to be. Lt. Maggie Redmond is called to a crime scene on St. George Island, where she is met with the body of Gregory Boudreaux. The medical examiner calls it a suicide, but no one knows that Maggie has a horrible connection to the dead man. When Gregory's uncle, Bennett Boudreaux, the richest and scariest man in town, takes a sudden interest in Maggie, people start to wonder, Maggie included. Maggie knows he may suspect her of killing his nephew, but she finds herself slowly drawn to the man. As Maggie fights to help a young girl escape the clutches of a volatile drug dealer who'd love to see Maggie dead, she also struggles to hide her dark link to a dead man, and her burgeoning relationship with her boss, Sheriff Wyatt Hamilton. Unfortunately, secrets have a way of revealing themselves at low tide.", "option_36": "Dying is what changed Mary O'Reilly's life. Well, actually, coming back from the dead and having the ability to communicate with ghosts is really what did it. Now, a private investigator in rural Freeport, Illinois, Mary's trying to learn how to incorporate her experience as a Chicago cop and new-found talent into a real job. Her challenge is to solve the mysteries, get real evidence (a ghost's word just doesn't hold up in court), and be sure the folks in town, especially the handsome new police chief, doesn't think she's nuts. Twenty-four years ago, a young woman drowned in the swimming pool of a newly elected State Senator. It was ruled an accident. But now, as the Senator prepares to move on to higher positions, the ghost of the woman is appearing to the Senator's wife. Mary is hired to discover the truth behind the death. She unearths a connection between the murder and the disappearance of five little girls whose cases, twenty-four years later, are still all unsolved. As she digs further she becomes the next target for serial killer's quest to tie up all his loose ends.", "option_37": "Georgie Kaye lives every day as if it were a gift, because to her it is. She beat cancer, against all predictions, and is following her life's dream to draw portraits of the fur babies of the world. When Georgie and her twin sister Aleta arrive at an art gallery that wants to show Georgie's work, they schmooze with donors, charm the artists, and overindulge at the sweets table. Everything is working perfectly in their favor, until an owner of the gallery is killed. Georgie must help solve the mystery before the opportunity to have her first art show disappears. Working with Aleta and her detective ex-husband Stan, Georgie sleuths her way to the answers, running into unexpected twists along the way.", "option_38": "Can we overcome our past? Katie Parker is about to get a new life-whether she wants one or not. With her mom in prison, and her father AWOL, Katie is sent to live with a squeaky-clean family who could have their own sitcom. She launches a full-scale plan to get sent back to the girls' home when she finds herself in over her head...and heart. When Katie and her new 'wrong crowd' get into significant trouble at school, she finds her punishment is restoring a historic theater with a crazy grandma who goes by the name of Mad Maxine. In the midst of her punishment, Katie uncovers family secrets that run deep, and realizes she's not the only one with a pain-filled past. Katie must decide if she'll continue her own family's messed up legacy or embrace a new beginning in this place called In Between.", "option_39": "A leather-bound journal. A single father. A woman in pursuit of freedom. Garner Bradford, heir to the troubled Bradford Shipping empire, doesn't know much about babies. But he's going to have to learn fast because he's just become a single father to his newborn daughter. As he confesses through his journal entries, he's not entirely sure how to keep a newborn alive, whether or not he'll ever patch together his shattered heart, or how to forgive himself for his mistakes. Career girl Kathleen Burke is wholly uninterested in settling down. She has big dreams, and none of them include Garner and his small hometown in Washington State. Yet she can't seem to get her handsome boss out of her head or her heart. There's something extraordinarily tempting about his beautifully sad green eyes...", "option_40": "Life\u2019s tough for Melody Bittersweet. She\u2019s single, addicted to sugar and super heroes, her family are officially bonkers, and she sees dead people. Is it any wonder no-one\u2019s swiping right on Tinder? Waking up lonely on her twenty seventh birthday, Melody finally snaps. She can\u2019t carry on basing all of her life decisions on the advice of her magic 8 ball; things have got to change. Fast forward two months, and she\u2019s now the proud proprietor of her very own ghostbusting agency - kind of like in the movies but without the dodgy white jumpsuits. She\u2019s also flirting with her ex Leo Dark, fraternising with her enemy in alleyways, and she\u2019s somehow ended up with a pug called Lestat. Life just went from dull to dynamite and it\u2019s showing no sign of slowing up anytime soon. Melody\u2019s been hired to clear Scarborough House of its incumbent ghosts, there\u2019s the small matter of a murder to solve, and then there\u2019s the two very handsome, totally inappropriate men hoping to distract her from the job\u2026", "option_41": "When Meg Cole's father dies unexpectedly, she becomes the majority shareholder of his oil company and the single inheritor of his fortune. Though Meg is soft-spoken and tenderhearted-more interested in art than in oil-she's forced to return home to Texas and to Whispering Creek Ranch to take up the reins of her father's empire.The last thing she has the patience or the sanity to deal with? Her father's thoroughbred racehorse farm. She gives its manager, Bo Porter, six months to close the place down. Bo's determined to resent the woman who's decided to rob him of his dream. But instead of anger, Meg evokes within him a profound desire to protect. The more time he spends with her, the more he longs to overcome every obstacle that separates them-her wealth, his unworthiness, her family's outrage-and earn the right to love her. But just when Meg begins to realize that Bo might be the one thing on the ranch worth keeping, their fragile bond is viciously broken by a force from Meg's past. Can their love-and their belief that God can work through every circumstance-survive?", "option_42": "A wrong number, and a cry of desperation at the end of the line, sparks a long distance friendship between two women who\u2019ve never met. Through fourteen years of trouble and heartache from a stagnant domestic life, the struggle for civil rights, and the stigma of interracial relationships, a bond forms between the two that changes both of their lives forever. It\u2019s 1958, a time when women and Negroes are deemed second-class and are being second-guessed, from there arises the perfect storm for change, and the perfect time for an unlikely friendship. Beatrice 'Beanie\u201d Peterson, forced to marry at fifteen and live with two sister wives, six children, and an abusive husband twenty years her senior, is looking for a way out. Adeline 'Liddie\u201d Garrison, friend of Jack Kennedy, wife of a prominent Boston business man, and resident of Beacon Hill has already found her way in.", "option_43": "Marie doesn't need a complication like Horse. The massive, tattooed, badass biker who shows up at her brother's house one afternoon doesn't agree. He wants Marie on his bike and in his bed. Now. But Marie just left her abusive jerk of an ex-husband and she's not looking for a new man. Especially one like Horse--she doesn't know his real name or where he lives, she's ninety percent certain he's a criminal and that the 'business' he talks with her brother isn't website design. She needs him out of her life, which would be a snap if he'd just stop giving her mind-blowing orgasms. Horse is part of the Reapers Motorcycle Club, and when he wants something, he takes it. What he wants is Marie, but she's not interested in becoming 'property of'. Then her brother steals from the club. Marie can save him by giving Horse what he wants--at home, in public, on his bike... If she's a very, very good girl, she'll get lots more of those orgasms only he can offer, and he'll let her brother live.", "option_44": "Mirror, Mirror, on the wall, Who is the Fairest of them all? Mina Grime discovers that all is not fair when it comes to the Fae and their tales, especially when they don't all play by the rules. Barely surviving the Story's first fairy tale quest, Mina still has hundreds to go before she can end the curse on her family. But a new player arises to challenge Mina while new rules revamp the game she has just barely begun to understand. All the while, people are mysteriously disappearing, including Jared, whom Mina must finally determine to be friend or foe. And with the loss of her greatest weapon, Mina must try to outwit a deadly hunter. Can Mina survive the most difficult quest yet while protecting those she loves from falling victim to one of the lethal tales of all? Or will she become a pawn when she strikes a bargain with the Queen of Fae?", "option_45": "Tapestry of Hope weaves together the heartrending and hope-building stories of two young women. Jasmine Wainwright is the sheltered daughter of a Mississippi plantation owner. When her father strikes a deal to sell his cotton to Lowell mills through businessman Bradley Houston, he throws an arranged marriage with Jasmine into the bargain. Kiara O'Neill and her brother escape starvation in Ireland by traveling to America as Bradley Houston's indentured servants. But Bradley has more in mind for Kiara than she wants to imagine. Both women suffer in the home of this unloving husband and merciless master. Will God somehow bring hope to their lives?", "option_46": "While on a visit to London, American genealogist Jefferson Tayte's old friend and colleague dies in his arms. Before long, Tayte and a truth-seeking historian, Professor Jean Summer, find themselves following a corpse-ridden trail that takes them to the Royal Society of London, circa 1708. What to make of the story of five men of science, colleagues of Isaac Newton and Christopher Wren, who were mysteriously hanged for high treason? As they edge closer to the truth, Tayte and the professor find that death is once again in season. A new killer, bent on restoring what he sees as the true, royal bloodline, is on the loose... as is a Machiavellian heir-hunter who senses that the latest round of murder, kidnapping, and scandal represents an unmissable business opportunity.", "option_47": "In the closing days of the Civil War, Beth Wendland, a Union spy in Richmond, learns of a Confederate conspiracy to send a wagon bomb to destroy the White House and kill President Lincoln and his generals. Abandoned by her political masters, Beth must evade Rebel soldiers and the bomb's mastermind to deliver the information to Washington before the conspirators can unleash their deadly attack. Assisted by the Federal officer who loves her, Beth risks more than her life to snuff out the burning fuse of the world's first vehicle bomb and prevent disaster on the eve of victory.", "option_48": "When a Boeing 747 drops out of the sky with the men of the Cartel aboard, the women of the family have to step into their own. With the federal government on their heels and the family on the brink of destruction, a female dynasty is born. After the government's case is thwarted, the ladies plan to take the family legit. They head west to establish a new endeavor, but with new territory comes new problems. The Carter family name doesn't ring as loud as it did in Miami. It's a new set of gangsters, a new set of rules, as the Cartel finds problems with an Arabic millionaire. Even as the new Cartel struggles to go legit, trouble always finds a way into the family's circle. Larceny, deceit, and murder are all in the cards. This mafia family tries to go corporate, but the streets won't let them. This is the rise of the female Cartel.", "option_49": "The island is nearly deserted, haunting, beautiful. Across a slip of ocean lies South Carolina. But for the handful of families on Yamacraw island, America is a world away. For years the people here lived proudly from the sea, but now its waters are not safe. Waste from industry threatens their very existence-unless, somehow, they can learn a new life. But they will learn nothing without someone to teach them, and their school has no teacher. Here is Pat Conroy's extraordinary drama based on his own experience-the true story of a man who gave a year of his life to an island and the new life its people gave him.", "option_50": "Two years after her husband\u2019s death, Sarah Woodward moves her boys away from their fast paced life in suburban Atlanta to small town Hailey, Colorado. But Sarah doesn\u2019t know a Colorado Senator has earmarked her ranch for purchase and he\u2019ll do anything to get it. Unwilling to sell, she dismisses his continued offers and moves ahead by improving the land with the help of a sexy stranger. A.J. Dodge is a man with a past. He\u2019s returned to his hometown ready to set down roots and make things right with his family and whatever anyone else thinks he doesn\u2019t give a damn. Until his old friend Tommy Thornton asks a favor, a favor he can\u2019t refuse, and Dodge becomes involved with the beautiful widow Sarah Woodward. She\u2019s alone with her young sons on a dilapidated ranch she\u2019s determined to get up and running with or without his help. Under pressure to deliver the Woodward ranch to a land developer with shady connections, the senator sets in motion a dangerous plot to convince Sarah to sell. Dodge will risk everything to protect Sarah and the boys including his heart.", "option_51": "When a call from his daughter, Katie, interrupts his much-needed vacation, Detective Wade Jackson knows it's bad news. His ex-wife, Renee, has disappeared and Jackson heads home to discover she's been kidnapped. That same weekend, a young University of Oregon student is brutally beaten and dumped naked at the ER. As Jackson teams with FBI Agent Carla River to retrace Renee's movements and handle a high-tech, fast-moving ransom demand, Detective Lara Evans must identify the young assault victim, then track down the assailant with no leads to go on except the whispered rumor of a secret sorority. As the ransom goes horribly wrong and the suspects refuse to crack under interrogation, Jackson grows more fearful that Katie's mother will be lost forever and his daughter may never forgive him.", "option_52": "When Lucas Walker inexplicably recovers from a terminal illness, everyone is astonished --except for his girlfriend Emma, who never gave up hope. However, as friends and family celebrate the miracle, Emma becomes alarmed: Lucas has changed. He speaks haltingly, can't recall past events, and even his own dog doesn't recognize him. Emma begins to suspect something is terribly wrong. What happened to the Lucas she loved? Does his strange behavior have something to do with the shooting light that fell into Lucas's backyard the night he recovered? As the two set off on a road trip in search of the truth, the journey takes an unexpected turn. First they're shot at by unknown enemies and then helped by unlikely allies. Before long, Emma and Lucas are plunged into a desperate life or death race against time.", "option_53": "A husband's lies can have deadly consequences. When Juliet Cole's husband of fifteen years is murdered before her eyes, she thinks it was a random shooting. Devastated and traumatized, she answers hours of questioning, then returns home to break the tragic news to her sons. But a threatening voicemail escalates this from a random shooting to a planned, deliberate attack. Juliet realizes that she and her children are in danger too--unless she meets the killers' demands. But as she and her sisters untangle the clues, her husband's dark secrets come to light. The more she learns, the more her life is dismantled. Was her husband an innocent victim or a hardened criminal?", "option_54": "Leaving her small town behind, Bethany Casse moves to Chicago in search of a new life. Working at a top financial bank brings her into contact with two men who are as different as night and day. Kent Plack, heir to Plack Industries, has no interest in being with a woman for longer than one night. A spoiled and lazy man-whore, he is completely content with his playboy lifestyle, and Beth is surprised when they form an unlikely friendship. Brian Benson, a finance banker, is gorgeous and respectful. A man plucked from Beth's dreams, he is definite husband material. Unfortunately, Beth has a hard rule against dating coworkers, but Brian is determined to change her mind. When a deadbeat mother and money problems follow her to Chicago, Beth is offered a solution that could fix everything. Marrying for money seems simple enough, but when lines become blurred, Beth faces difficult choices, making her realize that the easy way out just made her life even harder than before.", "option_55": "A battered box containing an odd assortment of mementos encourages antiques dealer Reagan Bishop to step back in time. Her quest to learn Karyn Ritter\u2019s story results in modern day friendship and unexpected romance. Desperate to escape a forced marriage, Karyn Ensinger flees Brandenberg, Germany, and travels to America in response to a plea for 'German wives\u201d for a group of lonely men in a place called Nebraska. At least, Karyn thinks, her husband will be someone she has chosen for herself. Married to a stranger, Karyn is horrified when she realizes Mikal Ritter expects her to live in what he calls a 'sod house.\u201d Mud and heat, hail storms and rattlesnakes, prairie fires and desperate loneliness tempt Karyn to despair. She has just begun to believe her marriage of convenience has the potential to turn to love when the life she has worked so hard to build is threatened with destruction.", "option_56": "Kim Miller is an immaculately put-together woman with a great career, a loving boyfriend, and a beautifully tidy apartment in Brooklyn. You would never guess that she spent her childhood hiding behind the closed doors of her family's idyllic Long Island house, navigating between teetering stacks of aging newspaper, broken computers, and boxes upon boxes of unused junk festering in every room--the product of her father's painful and unending struggle with hoarding. In this coming-of-age story, Kim brings to life her experience of growing up in a rat-infested home, concealing her father's shameful secret from friends for years, and of the emotional burden that ultimately led to an attempt to take her own life. And in beautiful prose, Miller sheds light on her complicated yet loving relationship with her parents that has thrived in spite of the odds. Coming Cleanis a story about recognizing where we come from and the relationships that define us--and about finding peace in the homes we make for ourselves.", "option_57": "Lucy London puts the word genius to shame. Having obtained her PhD in microbiology by the age of twenty, she's amassed a wealth of knowledge, but one subject still eludes her--people. The pendulum of passions experienced by those around her confuses and intrigues her, so when she's offered a grant to study emotion as a pathogen, she jumps on the opportunity. Enter Jensen Walker, Lucy's neighbor and the one person she finds appealing. Jensen's life is the stuff of campus legend, messy, emotional, and complicated. Basically, the perfect starting point for Lucy's study. When her tenaciousness wears him down and he consents to help her, sparks fly. To her surprise, Lucy finds herself battling with her own emotions, as foreign as they are intense. With the clock ticking on her deadline, Lucy must decide what's more important: analyzing her passions...or giving in to them?", "option_58": "Caitlyn's world changes when she learns that she was found as an abandoned baby and adopted by her American family. Now, her search for answers takes her to the tiny English village of Tillyhenge where a man has been murdered by witchcraft - and where a mysterious shop selling enchanted chocolates is home to the 'local witch'... Soon Caitlyn finds herself fending off a toothless old vampire, rescuing an adorable kitten and meeting handsome aristocrat Lord James Fitzroy... not to mention discovering that she herself might have magical blood in her veins! When she's dragged into the murder investigation and realises that dark magic is involved, Caitlyn is forced to choose. Can she embrace her witchy powers in time to solve the mystery and save those she loves?", "option_59": "In 1966 when Judy became pregnant at the age of 16, her family kept her plight a secret. She was sent from her all-girls Catholic school to hide in a home for unwed mothers, give birth, and relinquish her baby girl to adoption. The fabricated story of her kidney disease was supposed to undo the impending damage to her reputation. Judy's father instructed her to never look back. Judy's grief and shame was tangible as she fought to keep the secret contained. But as an adult, she felt compelled to address the loss by searching for her birth daughter and bringing her story to light. Judy experiences firsthand that secrets keep your soul hidden in shame and stifle the clarity of your true being. In the end, Judy sails free from the shadows of silence and experiences a deeper, more compassionate connection with herself and others.", "option_60": "It is the summer of 1838 in St. Lawrenceville, Missouri, and Molly McGarvie's life is about to change forever. When her beloved Samuel succumbs to cholera, Molly is heartbroken but determined to take care of herself and her children. But when Samuel's unscrupulous brother takes over the family business and leaves Molly to fend for herself, she knows she must head out on her own. It is a dangerous journey and Molly has to leave her old life behind. Somehow she must find a way to make a living, keep her family together, and fend off some over-eager suitors.", "option_61": "Kim Philby was the most notorious British defector and Soviet mole in history. Agent, double agent, traitor and enigma, he betrayed every secret of Allied operations to the Russians in the early years of the Cold War. Philby's two closest friends in the intelligence world, Nicholas Elliott of MI6 and James Jesus Angleton, the CIA intelligence chief, thought they knew Philby better than anyone, and then discovered they had not known him at all. This is a story of intimate duplicity; of loyalty, trust and treachery, class and conscience; of an ideological battle waged by men with cut-glass accents and well-made suits in the comfortable clubs and restaurants of London and Washington; of male friendships forged, and then systematically betrayed. With access to newly released MI5 files and previously unseen family papers, and with the cooperation of former officers of MI6 and the CIA, this definitive biography unlocks what is perhaps the last great secret of the Cold War.", "option_62": "With the man who kidnapped her daughter imprisoned aboard her ship, Captain Alisa Marchenko is closer than ever to reuniting her family. But her new guest has been in a coma for weeks, with the secret to her daughter's location locked away in his mind. She must find a way to sneak him into a state-of-the-art hospital on Arkadius, a planet in the heart of Alliance territory. Not an easy task when she and the cyborg Leonidas, her most trusted ally, are wanted by the Alliance army. As if that mission weren\u2019t daunting enough, the Staff of Lore has appeared on the planet. As has the man who stole Alisa\u2019s father.", "option_63": "Jess Williams is an ordinary young boy with a loving family growing up in Black Creek, Kansas. That all changes when he comes home and finds his family brutally murdered. Forced to become a man overnight, he vows to avenge his family's savage deaths. He begins to practice with his Pa's Colt .45 and then a stroke of destiny arrives when he discovers a new pistol and holster that mysteriously appears. Jess practices with it relentlessly until he becomes so quick that he is unbeatable on the draw. He leaves home transformed from a boy to a highly skilled shootist with no reason to live except to hunt down and kill each of the three men responsible for the murders. As he begins his journey, he does so with a pistol and holster that no one has ever seen before-and won't again for almost one-hundred years.", "option_64": "The sleepy town of Solitude, Oregon, has turned into ground zero for a turf war between the manufacturers and distributors of a lethal new drug. When a teenage witness disappears, social worker Carly Taylor must find him before he\u2019s silenced permanently. Rogue County investigator Seth Harding wants to keep Carly, his estranged wife, out of harm\u2019s way, but she refuses to let his concern keep her from doing her job. When one of her young charges vanishes, Carly gets pulled even deeper into the deadly case, and Seth knows he must help her\u2026 even if it leads them right into the criminals\u2019 crosshairs.", "option_65": "A serial killer stalks the streets of Savannah... Homicide detective Elise Sandburg and her partner, profiler David Gould, are all too familiar with the terrible costs of chasing evil. Despite their wounded psyches, the detectives delve into the deranged killer's twisted mind, determined to unravel the clues in the taunts he leaves behind. A city gripped by fear...When his daughter becomes the killer's next victim, a grief-stricken mayor comes down hard on the police, demanding that they catch the psychopath--now. Feeling the pressure, department officials enlist the aid of an FBI profiler who has unresolved business with David. A cunning and elusive madman... In a heart-pounding race to stop the next homicide, the detectives uncover their own role in the madman's deadly game. Will they outsmart the killer before another horrific murder takes place in their beautiful city? Or have Elise and David finally met their match?", "option_66": "Buried deep in a ravine in the picturesque Smoky Mountains is a very dark secret. David Hobbs, vacationing with his wife Miriam, inadvertently stumbles upon a small cloth 'keepsake' bag and a broken tooth. A human tooth. Miriam begs David to hand the bag and tooth over to park officials, but he ignores his wife's pleas and secretly keeps the 'harmless' items. The action opens a doorway that had been closed for nearly a hundred years and unleashes hell on earth, or at least hell in the lives of David and Miriam. Following the brutal murder of his best friend in Denver, and an aborted attack on his oldest son, David desperately seeks to understand why a mysterious teenage girl has chosen to terrorize him and the males closest to him. To prevent further devastation to his family and end the wanton bloodshed, he returns to the enchanted hills of eastern Tennessee, where a terrible truth awaits discovery... one that forces him to face the consequences for the unpaid sins of his ancestors.", "option_67": "It's Maya and Jamie's anniversary, and she waits with excitement for him to return home for a celebratory dinner. There's a knock at the door. It's the police. Jamie has been found hanging in a local wood.His death is ruled a suicide, but Maya doesn't believe Jamie would take his own life. Something isn't right. Someone has broken into her house. Someone is watching her. And someone has gone to great lengths to cover up what Jamie was doing before he died.Maya's grief turns to suspicion, and as she begins to investigate the weeks leading up to Jamie's death, her trail leads her to a place known as 'The Big House' and the horrific secrets within. Secrets people will stop at nothing to keep hidden. People linked to the heart of the Establishment who think they're untouchable.Now Maya has a dangerous decision to make. How far is she prepared to go to reveal the truth?", "option_68": "She's the obsession two men share: one wants her love, the other wants her life. A shared passion for justice first brought Baton Rouge district attorney Lauren Chandler and US marshal Anthony Ross together--when each played their part in bringing down the infamous Bayou Butcher. The sparks flying between the two made it clear they weren't just a legal dream team. Then desire had to make way for duty, and what they had was done. But it would never be over. Five years later, it's none other than the Butcher who gets things started again, when his shocking jailbreak reunites the lawyer and the lawman...and reignites their love. But this time, the pair is in danger of being permanently parted--by a killer with revenge on his mind, and Lauren on the top of his list. As a new wave of terror sweeps through the streets and swamps of Baton Rouge, one man will pit his boundless passion against another's relentless hate, for the life of the woman who obsesses them both.", "option_69": "When the body of the teenage boy, Julian Long, is discovered in the Green Swamps of Florida, the citizens of Bushlake know the city will never be the same again. Julian was popular, loved by all, and the circumstances of his death are more than strange. What secrets is the boy in the swamps hiding? Stephanie Boulder has returned to the town after fifteen years to take care of her grandmother, who is terminally ill. She writes for the local paper, and as soon as she starts digging into the story of Julian Long, she discovers secrets deep within the town's history. Secrets so cruel, so profoundly buried, uncovering them will put her life in grave danger. What if dreams were not just dreams? Would you dare to sleep again? Desperate for answers, Stephanie embarks on a journey that spans beyond her beliefs, heading towards a terrifying nightmare, trying to figure out who the Umbrella Man is.", "option_70": "Olivia Westerly knows what she knows -- opals mean disaster, eleven is the unluckiest number on earth and children weigh a woman down like a pocketful of stones. That's why she's avoided marriage for almost forty years. But when Charlie Doyle happened along, he was simply too wonderful to resist. Now she's a widow with an eleven-year-old boy claiming to be her grandson. Spare Change is a quirky mix of Southern flair, serious thoughts about the important things in life, the madcap adventures of a young boy and a late change of heart that makes all the difference in an unusually independent woman. With a foul mouth, dark secrets and heavily guarded emotions, Ethan Allen Doyle is not an easy child to like. He was counting on the grandpa he'd never met for a place to hide, but now that plan is shot to blazes because the grandpa's dead too. He's got seven dollars and twenty-six cents, his mama's will for staying alive, and Dog. But none of those things are gonna help if Scooter Cobb finds him.", "option_71": "One moment, Olivia Kavanaugh is preparing to walk down the aisle and embrace her own happily ever after. The next, she learns that her fiance, Wyatt Hammond, has been in a fatal car accident. Then comes a startling discovery: Wyatt's car wasn't heading toward the church. He was fifty miles away... with a baby gift in the backseat. Her faith shaken, Olivia pores over the clues left behind, desperate to know where Wyatt was going that day and why. As she begins uncovering secrets, she also navigates a tense relationship with her judgmental mother and tries to ignore the attentions of a former boyfriend who's moved back home. But when she starts receiving letters written by Wyatt before his death, she must confront a disturbing question: Can we ever know anyone fully, even someone we love? When an unexpected path forward--though nothing like the life she once envisioned--offers the promise of a new beginning, will she be strong enough to let go of the past and move toward it?", "option_72": "Sending a half-naked picture to a stranger she met online, seems innocent and fun to Lilly Randall. After spending the past four years working towards an honors degree, she needs a distraction and flirting with a man she doesn't know can't hurt, right? Clive Parker is the one man who holds all of Lilly's dreams in the palm of his hand. He's the CEO of one of the world's largest technology firms. When her picture ends up in his pocket, her future will never be the same again. She wants him to see her potential. He questions her motives. Neither can deny the unexpected attraction that exists between them. When Clive's doubts begin to push them apart, Lilly is forced to face the reality that nothing in life is guaranteed and in the blink of an eye, everything you value can be gone.", "option_73": "Ever since her mother\u2019s death, twenty-two year old Jori Hayden has lived safely under the shelter of her wealthy father. But when the severe economic depression of the 1800s destroys the family\u2019s fortune, the Haydens must venture west together along the Santa Fe Trail in search of a new livelihood. With her father in poor health and her Aunt Kate\u2013a dedicated Christian\u2013keeping charge over the younger siblings, Jori hires Chad Rocklin right out of prison to lead their wagon train. And in a journey marked with danger at every turn, romance, faith, and family prove to be the biggest fortunes of all.", "option_74": "Lydia King knows what it's like to be in need, so when she joins the Teaville Moral Society, she genuinely hopes to help the town's poor. But with her father's debts increasing by the day and her mother growing sicker by the week, she wonders how long it will be until she ends up in the poor house herself. Her best chance at a financially secure future is to impress the politician courting her, and it certainly doesn't hurt that the moral society's president is her suitor's mother. Her first task as a moral society member--to obtain a donation from Nicholas Lowe, the wealthiest man in town--should be easy . . . except he flat-out refuses. Despite appearances, Nicholas wants to help others but prefers to do it his own way, keeping his charity private. When Lydia proves persistent, they agree to a bargain, though Nicholas has a few surprises up his sleeve. Neither foresee the harrowing complications that will arise from working together. When town secrets are brought to light, this unlikely pair must decide where their beliefs--and hearts--truly align.", "option_75": "This tale describes the turbulent childhood of the author in 1970s Las Vegas. Born into an ongoing cycle of alcoholism and abandonment amidst fallen adults, Marlayna develops a powerful sense of self-preservation in contrast to the quirky people entrusted with her care. Her story explores the personalities of the bizarre characters who populate her life as she moves from home to home, parent to parent, family to family, ultimately becoming homeless at the age of fourteen. Out of the resources of her remarkable childhood emerges an inner strength that will charm and captivate readers and remain in their consciousness long after the last page of her story has been turned.", "option_76": "From Andre Agassi, one of the most beloved athletes in history and one of the most gifted men ever to step onto a tennis court, a beautiful, haunting autobiography. Agassis incredibly rigorous training begins when he is just a child. By the age of thirteen, he is banished to a Florida tennis camp that feels like a prison camp. Lonely, scared, a ninth-grade dropout, he rebels in ways that will soon make him a 1980s icon. He dyes his hair, pierces his ears, dresses like a punk rocker. By the time he turns pro at sixteen, his new look promises to change tennis forever, as does his lightning-fast return. And yet, despite his raw talent, he struggles early on. We feel his confusion as he loses to the worlds best, his greater confusion as he starts to win. After stumbling in three Grand Slam finals, Agassi shocks the world, and himself, by capturing the 1992 Wimbledon. Overnight he becomes a fan favorite and a media target. With its breakneck tempo and raw candor, Open will be read and cherished for years. A treat for ardent fans, it will also captivate readers who know nothing about tennis. Like Agassis game, it sets a new standard for grace, style, speed, and power", "option_77": "An invaluable CIA asset has gone missing, and with him, secrets that in the wrong hands could prove disastrous. The only question is: Can Mitch Rapp find him first? Joe Rickman, head of CIA clandestine operations in Afghanistan, has been kidnapped and his four bodyguards executed in cold blood. But Mitch Rapp's experience and nose for the truth make him wonder if something even more sinister isn't afoot. Irene Kennedy, director of the CIA, has dispatched him to Afghanistan to find Rickman at all costs. Rapp, however, isn't the only one looking for Rickman. The FBI is too, and it quickly becomes apparent that they're less concerned with finding Rickman than placing the blame on Rapp. With CIA operations in crisis, Rapp must be as ruthless and deceitful as his enemies if he has any hope of finding Rickman and completing his mission. But with elements within his own government working against both him and American interests, will Rapp be stopped dead before he can succeed?", "option_78": "The Scourge of Muirwood is the final installment of the Muirwood Trilogy. Upon discovering she is the lost heir of Pry-Ree, Lia is forced to leave the protection of Muirwood once again. She embarks upon a perilous journey across the kingdom where she avoids capture and begs passage on a ship bound to Dahomey. Lia's safety is in further jeopardy when she finally reaches Dochte Abbey and learns the hetaera have taken control. Lia must gather all her strength and muster the courage to defeat them, for if she fails, the consequence would be a world in ruin and the shattered lives of those she loves.", "option_79": "Captain Alisa Marchenko finally has a lead on finding her daughter, but her passengers want her to take them on their quest instead. Even though the Star Nomad is her ship, they have power she cannot fight, and she finds herself with no choice but to accept another detour. But the ancient relic they seek has the ability to destroy worlds and is coveted by many. The path leading to it is riddled with competitors and littered with the dead, and even a cyborg and a Starseer may not be strong enough to fight the obstacles in the way. Swept up in a fate she never chose, Alisa must find a way to survive against impossible odds, knowing that if her passengers succeed, they will change the course of history-maybe not for the better.", "option_80": "When Toby Haynes witnesses a double murder\u2015and suspects his boss, Tanner Mason, as the perpetrator of the crime\u2015he does the only thing he can think he calls in Nathan McBride. CIA special ops veteran McBride and his partner, Harvey Fontana, respond to their friend\u2019s plea. As they launch a covert investigation into Mason, the security chief for one of the nation\u2019s leading private military contractors, they discover that not everything is as it appears. Mason and his inner circle are leading a top-secret operation to tackle a wave of crime plaguing the US-Mexican border, and the murder may have been part of their complicated strategy\u2015or part of a more menacing agenda. Soon McBride and Fontana find themselves engaged in a deadly game. With a powerful politician behind it all, stopping Mason could mean joining a secret war\u2015with truly global stakes.", "option_81": "John Milton has blood on his conscience. He was an assassin for the British government for a decade until he got out. He treks into the Michigan wilderness for the solitude he needs to forget his guilt. He isn't looking for trouble, but trouble always seems to come looking for him. Morten Lundquist, a man with his own dark secrets, is a deputy in the town of Truth. He finds himself investigating Milton, but Lundquist has no idea how dangerous his quarry is. Double crossed and badly injured, Milton flees into the remote Porcupine Mountains with a posse on his tail. His enemies thought that they could hunt him down. They were wrong - and where John Milton is concerned, there are no second chances.", "option_82": "In the quiet safety of the Bluebird Ranch, old promises resurface and unexpected love brings new hope. Though tragedy has wrecked her life, Allie Siders holds on to the hope that her five-year-old daughter, Betsy, will speak again. But with a stalker out for revenge, all Allie can think about now is their safety. She must sever all ties and abandon life as she knows it. She heads to the peaceful Bluebird Ranch, nestled deep in Texas hill country, and to the only person who can help them. The ranch is a sanctuary for abused horses, and also for troubled youths: the perfect place for Betsy to grow and recover. Ranch owner Elijah DeAngelo eagerly welcomes the duo. But Rick Bailey-the ranch foreman and DeAngelo's right hand man-hasn't decided to let his guard down ... yet. Promises made long ago soon force Rick and Allie to work together to escape danger. Will they discover love along the way?", "option_83": "Kate Freeman opened the front door of her vacation villa to see a Florida State Trooper standing on the porch. A few moments later, 50,000 paralyzing volts shot through her body. Her world went dark after her head impacted the tile floor. She woke unable to move. Sitting only a few feet away bound to a chair, her six-year-old son sat quietly staring at her. It was just the beginning of their nightmare. 150 miles away, Kate's husband Paul was on his annual scuba trip in the Bahamas. Early the next morning, he pulled away from the dock and headed back to the villa on Sugar Loaf Key to be reunited with his family. He would be the first to find them - exactly as the killer planned. Decisions have to be made that take them deeper into the darkness of a sociopath's world. It's a place they have to travel in order to hunt him down and make the punishment fit the crime. Few expected her to survive. Nobody expected her to fight.", "option_84": "Beauty isn\u2019t everything. Beneath Simone\u2019s long fake hair, phony smile, and saline booty is a web of trickery, lies, and murder. After being attacked by Jimmy, Simone\u2019s web of lies begins to violently unravel. One by one, her skeletons are falling out of the closet and revealing her true colors. While Simone fights to keep the man and life that she stole, Chance is fighting desperately to keep his life with Gia. Amidst the hot and steamy passion, which builds between Gia and Chance like a scorching inferno, is the fear of Chance being locked away for the rest of his life. After a visit from the new detective assigned to Aeysha\u2019s murder case, Eboni is intent on making Omari see the truth about Simone and her wicked ways. Everyone is forced to come clean and see their true involvement in Aeysha Walker\u2019s murder. And finally Simone is forced to make a decision; either face the aftermath of her destruction or run away from the man that she fought so hard to get.", "option_85": "Sara Adams awakes blind, unable to remember the most basic details of her life, but her darkness seems a blessing when she discovers the terrors of The Light. Stella Montgomery investigates the news from the mean streets of Detroit, where she's noticed a disturbing trend: young women are vanishing. When her best friend disappears, Stella digs for answers--despite warnings from her police detective boyfriend--following a twisted trail that leads her through the city's most dangerous and forsaken precincts. There she uncovers something more sinister than she could have imagined: a shadowy organization known as The Light, led by the enigmatic Father Gabriel. As Sara struggles to understand her place in the strange world she's awakened to--an oppressive cult demanding unquestioning obedience--and her feelings for Jacob, the husband she can't recall and whose harsh and tender attentions confuse and beguile her, Stella risks all to discover the truth. But enlightenment always comes with a price....", "option_86": "Joclyn Despain has been marred by a brand on her skin. She doesn't know why the mark appeared on her neck, but she doesn't want anyone to see it, including her best friend Ryland, who knows everything else about her. The scar is the reason she hides herself behind baggy clothes, and won't let the idea of kissing Ryland enter her mind, no matter how much she wants to. The scar is the reason she is being hunted. If only she knew that she was.If only she had known that the cursed stone her estranged father sent for her 16th birthday would trigger a change in her. Now, she is being stalked by a tall blonde man, and is miraculously throwing her high school bully ten feet in the air. Joclyn attempts to find some answers and the courage to follow her heart. When Ryland finds her scar; only he knows what it means, and who will kill her because of it.", "option_87": "One shot fired deep in the pine forests of her youth was all it took to change Hattie's life forever. At the age of fourteen, Hattie learns that her mother, Addie, is dead, and her father, Hubbard, stands accused of Addie's murder, along with countless other shocking betrayals. Overnight, Hattie becomes mother to her three siblings while still very much a child herself. The life she had dreamt of now seems impossible to achieve. How will Hattie break away from the father who prevents her from living the life she desperately wants? Will her heart ever be able to heal in the height of The Great Depression?", "option_88": "Abigail Baldwyn might not be a widow after all.... Ever since she received word that her husband, Robert, was killed in the Civil War, Abigail has struggled to keep her Tennessee home and family together. Then a letter arrives claiming that Robert isn't dead, yet he has no plans to return. Desperate for answers, Abigail travels to Independence, Missouri, where she joins a westbound wagon train to find him. Leading a company along the Oregon Trail isn't part of Hoke Mathews's plans. But then the former cavalry scout gets a glimpse of Abigail--so elegant compared to the rest of their hardscrabble wagon community, yet spirited and resilient. Through every peril they encounter--snakebites, Indian raids, fevers, dangerous grudges--his bond with Abigail grows. Abigail knew this journey would test her courage. Now it's testing her marriage vows and her heart, daring her to claim a future on her own terms in a land rich with promise.", "option_89": "Murdered artists. Masterful forgeries.Art crime at its worst. A straightforward murder investigation quickly turns into a quagmire of stolen Eurocorps weapons, a money-laundering charity, forged art and high-ranking EU officials abusing their power. As an insurance investigator and world renowned expert in nonverbal communication, Dr Genevieve Lenard faces the daily challenge of living a successful, independent life. Particularly because she has to deal with her high functioning Autism. Nothing - not her studies, her high IQ or her astounding analytical skills - prepared her for the changes about to take place in her life. It started as a favour to help her boss' acerbic friend look into the murder of a young artist, but soon it proves to be far more complex. Forced out of her predictable routines, safe environment and limited social interaction, Genevieve is thrown into exploring the meaning of friendship, expanding her social definitions, and for the first time in her life be part of a team in a race to stop more artists from being murdered.", "option_90": "An unforgettable story of the joy of motherhood, the bravery of a community, and the hope of one extraordinary woman. At the age of twenty-two, Jennifer Worth leaves her comfortable home to move into a convent and become a midwife in post war London's East End slums. The colorful characters she meets while delivering babies all over London-from the plucky, warm-hearted nuns with whom she lives to the woman with twenty-four children who can't speak English to the prostitutes and dockers of the city's seedier side-illuminate a fascinating time in history. Beautifully written and utterly moving, The Midwife will touch the hearts of anyone who is, and everyone who has, a mother.", "option_91": "Nine men, ex-military, are on a mission to destroy a genetics laboratory and capture a genetically engineered specimen. They are supported by four rogue CIA agents, who have commandeered a test drone and a missile at a Marine base. The team attacks the genetics laboratory complex before dawn, during a raging blizzard. Within hours, seven of the men are dead, one is severely wounded and one barely escapes. The drone with its missile has been destroyed. The next morning the four rogue agents are found dead from carbon monoxide poisoning. Mark Midway does not know his real parents, nor where and when he was born. Two scientists adopted him when he was a young child and his home since has been a genetic research laboratory. After the attack, Mark flees the laboratory complex, seeking safety and somewhere he can call home. The FBI is on his case and a mysterious organization offers him its assistance. However, he is at risk. There are unknown killers chasing him and he needs to protect himself and his friends. He needs to survive.", "option_92": "In Amsterdam, an Israeli terrorist analyst is murdered. The police believe the killer is a deranged Muslim extremist, but Israeli intelligence knows better. Art-restorer, assassin and spy Gabriel Allon is dispatched to investigate, uncovering a major terrorist operation in London. Gabriel arrives too late to prevent the kidnapping of the daughter of the US ambassador. With time running out, Allon has no choice but to plunge into a desperate search, both for the woman and for those responsible, but the truth, when he finds it, is more terrible than he could expect. It will endanger his life and shake him to the core.", "option_93": "While out on a mission, Noah receives a call that tells them that something has gone wrong. Allison has been arrested, and there is an investigation going on into the recent admissions of Team Camelot. He is ordered to go to ground and stay off the radar until further notice. Sometimes, though, things are not what they seem. While locked up in a special prison designed for political inmates, Allison is informed that there is a conspiracy involving the highest levels of government that is designed to strip America of its sovereignty and its people of their rights. A small group of conspirators are working as double agents, trying to stop the tragedies that will be used to bring about their goals, one of which will cost the lives of thousands of American children. Allison is spirited away from the prison and sent secretly to Noah, where she gives him the orders he never thought he would receive: to assassinate American elected officials, including the President of the United States.", "option_94": "Henry and Jason led normal lives in Seattle before they were abducted to another world. Their kidnapper, the vain, self-styled god Dolos refuses to send them back unless they can accomplish an impossible task. Oddly, Dolos doesn\u2019t seem to care if they succeed or not. Luckily, Henry and Jason studied Historical European Martial Arts (HEMA) on Earth. Unfortunately, a Japanese American EMT and a geeky IT programmer don\u2019t have many other useful skills on a sword and sorcery world like Ludus. Stranded in the middle of nowhere on an alien world, the friends have no real direction and only a few possessions including magic-granting orbs from an apathetic god. Undaunted, the two begin their insane adventure to return home, but basic survival and eventually paying rent will have to take priority.", "option_95": "A beautiful, ambitious woman is murdered. The person charged? One of the most powerful deal-makers in the world. Ozzie is pulled into to help prove the egomaniac\u2019s innocence. Early on, the evidence seems irrefutable -- until it isn\u2019t. Could who this man knows determine who lives and who dies? Forced to make a deal with the devil, Ozzie must determine how to out think the king of rainmakers. And that\u2019s when Ozzie realizes this isn\u2019t just a one-lane game. Ozzie flexes his own power of persuasion to fight through the haze of threats and outright danger. With everything on the line, Ozzie\u2019s instincts take him to the brink of death. In the end, innocent people will die. Can Ozzie save his family from something he can\u2019t see?", "option_96": "Dr. Samantha Moore is one of the youngest and most acclaimed researchers in the world. Her specialty is blood and she has been recruited by the largest pharmaceutical company in Scotland. For what purpose she cannot begin to imagine, but in an attempt to break out of her painfully shy shell, she throws caution to the wind and leaves her family and best friend behind in Savannah. Dr. Kade Gunnach is taking a chance hiring an outsider, but he\u2019s desperate to find out how to help his sister. He believes the key lies in her blood, but so far, no one has found the answers. When the new researcher walks into his office, he\u2019s unprepared for his reaction to her and the life-changing ramifications her arrival brings. They\u2019re drawn together by a force neither is prepared for, but Kade is holding something back. Something that could scare her away. When Samantha learns his secret, will she run? Will Kade be able to live with the answers he\u2019s been desperately searching for?", "option_97": "Wynter Evans is a promising young reporter for a television station in St. Louis, but even a bright future doesn't take away her pain over the disappearance of her brother nine years ago. So when she stumbles across a photograph of a boy with an eerie resemblance to him, she can't pass up the chance to track him down. With research for work as her cover, she sets out with one of the station's photogs for the place where the picture was taken: the town of Sanctuary. Almost as soon as she arrives, she meets the town's handsome young mayor, Rueben King, and together they begin to uncover long held secrets that could tear the small town apart and change everything Wynter thought she knew about her life. As the truth of her family's past hides in the shadows, it's clear someone will stop at nothing to keep the answers she's searching for hidden forever--even if the cost is Wynter's very life.", "option_98": "Seventeen-year-old Raine Cooper has enough on her plate dealing with her father's disappearance, her mother's erratic behavior and the possibility of her boyfriend relocating. The last thing she needs is Torin St. James--a mysterious new neighbor with a wicked smile and uncanny way of reading her. Raine is drawn to Torin's dark sexiness against her better judgment, until he saves her life with weird marks and she realizes he is different. But by healing her, Torin changes something inside Raine. Now she can't stop thinking about him. Half the time, she's not sure whether to fall into his arms or run. Scared, she sets out to find out what Torin is. But the closer she gets to the truth the more she uncovers something sinister about Torin. What Torin is goes back to an ancient mythology and Raine is somehow part of it. Not only are she and her friends in danger, she must choose a side, but the wrong choice will cost Raine her life.", "option_99": "A past hidden in darkness. Her present cloaked in secrets. The future holds the only truth that cannot be escaped. After the mysterious and violent death of her parents, Blake Brennan finds comfort with an unconventional family. As the dramatic loss of her parents continues to haunt her--and hinders her from reciprocating love that others give freely--Blake embarks on a harrowing journey in search for the truth. Living in a constant state of fear and need for control, vivid nightmares reveal details that lead to perilous situations. The past begins to collide with the present, and Blake must decide if the truth is worth losing the ones she loves. Can love conquer all as her past comes to light? Or will Blake realize that there is no light in darkness?", "option_100": "Nita Islas wants to find love. She's tired of the superficial relationships and is ready to give true romance a try. She uses the Paranormal Dating Agency and hopes they can help her where all others have failed. What she didn't expect was to find her date flat on his back in nothing more than a towel. Ky Stone has been in love with curvy and funny Nita since they were in High School. When she moved away, she took his heart with her. Then one day Ky wakes up to find her leaning over him. He's sure he's died and gone to heaven. He has no idea what she's doing there, but he's sure as hell not letting her leave. Fate, meddling family and the PDA have brought them together again. The chemistry between them is explosive. But there's problems with Ky's neighboring clan and he's keeping secrets from Nita. He needs to find a way to open up to her or lies and unexpected danger could tear them apart... forever.", "option_101": "I was perfectly content with my life--that is, until the pages of my story were ripped out before I had a chance to live happily ever after. Alice Grace Ripley lives in a dream world, her nose stuck in a book. But the happily-ever-after life she's planned on suddenly falls apart when her boyfriend breaks up with her, accusing her of living in a world of fiction instead of the real one. To top it off, Alice loses her beloved library job because of cutbacks due to the Great Depression. Longing to run from small-town gossip, Alice flees to the mountains of eastern Kentucky to deliver five boxes of donated books to the tiny coal-mining town of Acorn, a place with no running water, no electricity, and where the librarians ride ornery horses up steep mountain passes to deliver books. When Alice is forced to stay in Acorn far longer than she planned, she discovers that real-life adventure, mystery--and especially romance--may be far better than her humble dreams could have imagined.", "option_102": "When Lillian finds herself facing off against vampires and other mythological impossibilities, help comes from an unlikely source-the stone gargoyle who has been sleeping in her garden for the last twelve years. After the battle, Lillian learns the humans she thought were her family are actually a powerful coven of witches at war with the demonic Riven. Lillian is something more than human, a Sorceress and Avatar to the gods. Gregory has been her protector for many lifetimes, but when she was still a child troubles in their homeland forced him to flee with her to the human world. However, Gregory fears something from her childhood followed them to this world-he suspects Lillian is host to an infant demon, one capable of evil greater than even the Riven. Extra complications arise when she realizes she's concealing a forbidden love for her guardian. While she might be able to defeat the Riven with Gregory's help, she does not know if her fragile new love can survive the evil growing in her own soul.", "option_103": "Could following the opportunity of a lifetime cost them the love of their lives? One of the many immigrants struggling to survive in 1850s New York, Elise Neumann knows she must take action to care for her younger sisters. She finds a glimmer of hope when the New York Children's Aid Society starts sending skilled workers to burgeoning towns out west. But the promise of the society's orphan trains is not all that it seems. Born into elite New York society, Thornton Quincy possesses everything except the ability to step out from his brother's shadow. When their ailing father puts forth a unique challenge to determine who will inherit his railroad-building empire, Thornton finally sees his chance. The conditions to win? Be the first to build a sustainable community along the Illinois Central Railroad and find a suitable wife. Thrown together against all odds, Elise and Thornton couldn't be from more different worlds. The spark that ignites between them is undeniable, but how can they let it grow when that means forfeiting everything they've been working toward?", "option_104": "Little Boy Blue, where did you go? Who led you away? Only I know . . . .Two-year-old Tommy Basko goes missing from a popular inner-city playground. Six months later, his parents begin receiving cryptic messages in rhyme about Tommy. The police don't believe the messages are from the abductor, but Tommy's mother Phoebe is certain they're a game meant for her. Against the advice of the police, Phoebe decides to play the game. She begins a frantic search for the writer of the rhymes, at the cost of causing her marriage to shatter. When the shocking identity of the message-writer is discovered, Phoebe's desperate race for the truth has only just begun. Who took Tommy? And why?", "option_105": "Witches are real. They're descendants of the Greek gods. Nicole Cassidy is a witch descended from the Greek gods... but she doesn't know it until she moves to a new town and discovers a dangerous world of magic and monsters that she never knew existed. When the Olympian Comet shoots through the sky for the first time in three thousand years, Nicole and four others -- including mysterious bad-boy Blake -- are gifted with elemental powers. But the comet has another effect -- it opens the portal to another dimension that has imprisoned the Titans for centuries. After an ancient monster escapes, it's up to Nicole and the others to follow a cryptic prophecy in time to save the town... and possibly the world.", "option_106": "A cyberattack on an obscure U.S. dam leaves thousands dead and the government wondering who attacked it, and why. When they realize it is just the tip of the iceberg-and that the safety of all of America is at stake-the President has no choice but to call in Luke Stone. Head of an elite, disbanded FBI team, Luke does not want the job. But with new enemies-foreign and domestic-closing in on her from all sides, the President can only trust him. What follows is an action-packed international roller-coaster, as Luke learns that the terrorists are more sophisticated than anyone realizes, that the target is more extensive than anyone could image-and that there is very little time left to save America.", "option_107": "In 2157, a mysterious gas known as Variant spreads across the globe, killing or mutating most organic life. The surviving humans take refuge in an underground city, determined to return home. But after generations of failures and botched attempts, hope is beginning to dwindle. That is, until a young scientist makes a unique discovery--and everything changes. Suddenly, there's reason to hope again, and it rests within a group of genetically engineered children that are both human and Variant. Terry is one of these children, modified and trained to endure the harsh conditions of a planet he cannot begin to understand. After years of preparation, Terry thinks he knows what to expect. But the reality is far stranger than anything he can imagine--and what he will become is far more dangerous.", "option_108": "Just for a day, Colorado cop David Wolf trades slogging through murky meltwaters and even murkier small-town politics for an overnight camping trip in the wilderness with his son. But when a man with fresh burns turns up on their trail, falling from the heavy load in his backpack and running wild from something, Wolf suspects his father-son camping trip may have just taken a turn for the worse. Unfortunately his instincts are spot on, and Wolf is forced into action with the last person he wants by his side in a deadly battle - his only son. When news of their harrowing escape from certain death travels through the valleys, local FBI agents want to take over Wolf's investigation, hoping to halt murder and corruption originating 7,000 miles away in Afghanistan. Wolf ignores the FBI's order to stand down, even if the case involves a matter of national security. Not when his son's safety is at stake. In this stomach-dropping third installment of the David Wolf series, Wolf partners with a beautiful FBI agent to bust an inter-continental conspiracy threatening anyone who has the bad enough luck to stumble on it.", "option_109": "Kidnapped by an illegal fighting ring. Paraded as a prize. What else can go wrong? This is the first dig on which Kayla Tucker is part of the \u2018command staff\u2019 and she is determined nothing is going to go wrong. This archeologist has plans for her future, and nothing is going to stand in her way. No man. No love affair. No distraction, at all. But then everything turns out differently. Navy SEAL Shane Freeman has always wanted to serve his country. Unfortunately, when it was discovered that he was a dragon shifter, he was discharged at once. F*** it! No way back. This hard decision would tear anybody apart\u2026but not him\u2026it\u2019s quite the contrary\u2026it makes him stronger. Coming back as the CEO of his own company, he finally can donate money to worthy causes and help people that way. And the fact that he\u2019s funding Kayla\u2019s dig? Well, that\u2019s just coincidence, right? When Shane learns that Kayla is in trouble, his Navy SEAL protector instincts are on fire. He\u2019ll stop at nothing to save her. There is no way he\u2019s going to let some slimy person win her in a fight that she had no say in. He wants her to be his own. Even though he\u2019d have to fight for her again and again and again\u2026", "option_110": "There is something unique about Zoey Daniels. She can see the fae\u2014a species kept hidden from the human world. Because of her talent, she is hired as a Collector by the Department of Molecular Genetics (DMG), a secret government agency that uses fae blood to save human lives, curing things like cancer and birth defects. She is trained to collect the fae, never considering them anything but soulless monsters who feed on humans like their personal buffet. When devastation strikes Seattle, everything Zoey knows is turned upside down. An electrical storm tangles her with Ryker, a ruthless wanderer, who looks like a Viking and kills like a brute. His hate for humans is as equal as her hate for fae. When DMG turns on Zoey, she can no longer trust the government agency she had spent years dedicating her life to and is forced into an alliance with the callous Viking. Ryker and Zoey\u2019s connection sends them down a road of lies, deceit, corruption, and murder. It won\u2019t be just the city left in embers\u2026", "option_111": "Samantha Rousseau is used to getting her hands dirty. Working on a master's degree in wildlife biology while helping take care of her sick father, she has no time for celebrity gossip, designer clothes, or lazy vacations. So when a duchess from the small country of Lilaria invites her to dinner, Samantha assumes it's to discuss a donation for the program. The truth will change the course of her life in ways she never dreamed . . . As crown prince of Lilaria, Alex D'Lynsal has had his share of scandalous headlines, but the latest pictures in the press have sent him packing to America and forced him to swear off women. That is, until he meets Samantha Rousseau. She's stubborn, feisty, and incredibly sexy. Not to mention heiress to an estate in his country, which makes her everyone's front-page news. While Sam tries to navigate her new world of politics and wealth, she will also have to dodge her growing feelings for Alex. Giving in to them means more than just falling in love; it would mean accepting the weight of an entire country on her shoulders.", "option_112": "Matt Morrisey is a bear shifter with a sweet tooth, an easy smile, and muscles for miles. When Mina Brooks' dreams of opening her own bakery go up in literal flames, she has no choice but to run. Bad men are after her and they won't stop coming until she's silenced for good. It's hard to escape though when you roll your car off a mountain road and get tangled up with the local police. Trapped in jail with her enemies closing in, Mina is all but done for. Matt Morrisey expected the call would be just another drunk who needed a lawyer he couldn't afford, but when the big shifter laid eyes on his client and her sweet curves, he knew his life was about to change. Mina was his fated mate, he could feel it in his blood. How could he convince the terrified woman that they were destined for each other, that he could protect her, without scaring her off? As fate pulls the two of them closer, and the dangerous men close in on Mina, Matt has to prove he's got what it takes to defend the woman he loves from the mysterious forces pursuing her.", "option_113": "Curvy bear shifter Veronica Muir is ready for a new mate. It's been six long and lonely years since her husband was killed, leaving her to raise rambunctious twin cubs on her own. And wouldn't you know it, the first time she dips her toe into the dating world, she ends up falling head over heels in love\u2026with a human. Marine biologist Jess Slade is still raw from his divorce when he spots Veronica's online profile. Unable to resist her luscious curves, he takes a chance on love by moving to her hometown of Kodiak, Alaska. But the one thing he doesn't know about her might be the one thing he can't get past. When a group of human-hating werebears called The Brotherhood threaten to tear them apart \u2014 quite literally \u2014 Jess and Veronica, with a little help from Max and Bethany, must decide where their loyalties lie and if their love is worth fighting for.", "option_114": "It isn\u2019t every day a sexy demigod throws a pissed-off Cupid onto psychologist Matilda Schmidt\u2019s couch and informs her the fate of the world depends on her ability to get him off his diapered ass and back to helping people fall in love. Just when Matilda convinces herself she\u2019s not hallucinating, in walks a Vegas hit man with a big gun and a bigger threat: pay back the million dollars she owes a notorious casino mogul, or wind up as fish food in Lake Mead. Rocketing across country with a gun to her head, Matilda has a dysfunctional love-god in her laptop bag, a million dollar debt she has no knowledge of, and must convince the seductive hit man he\u2019s snatched the wrong woman before he convinces her he might be the right man\u2014for a night. Can Matilda stay alive long enough to keep love from becoming history?", "option_115": "Around the world humans are hallucinating after sleepless nights. In a sterile, underground institute the forecasters keep reporting the same events. And in the backwoods of Texas, a sixteen-year-old girl is about to be caught up in a fierce, ethereal battle. Meet Roya Stark. She drowns every night in her dreams, spends her hours reading classic literature to avoid her family's ridicule, and is prone to premonitions--which are becoming more frequent. And now her dreams are filled with strangers offering to reveal what she has always wanted to know: Who is she? That's the question that haunts her, and she's about to find out. But will Roya live to regret learning the truth?", "option_116": "Dinah Devereaux, New Orleans-born slave and seamstress, suddenly finds herself relegated to a sweltering kitchen on the Natchez town estate of Riverwood. Having never cooked a day in her life, she is terrified of being found out and banished to the cotton fields as was her mother before her. But when she accidentally burns the freedom papers of Jonathan Mayfield, a handsome free man of color to whom she's attracted, her fear of the fields becomes secondary. A gifted cabinetmaker, Jonathan Mayfield's heart is set on finally becoming a respected businessman by outfitting a bedroom at the palatial Riverwood\u2014until a beautiful new slave destroys his proof of freedom and his fragile confidence along with it. When the mistress of Riverwood orders Dinah to work alongside the sullen Mr. Mayfield, sparks fly setting the two on a collision course. Is their mutual love for God strong enough to overcome deep-seated insecurities and set the couple on a path toward self-acceptance and love for each other?", "option_117": "Ella Harper is a survivor--a pragmatic optimist. She's spent her whole life moving from town to town with her flighty mother, struggling to make ends meet and believing that someday she'll climb out of the gutter. After her mother's death, Ella is truly alone. Until Callum Royal appears, plucking Ella out of poverty and tossing her into his posh mansion among his five sons who all hate her. Each Royal boy is more magnetic than the last, but none as captivating as Reed Royal, the boy who is determined to send her back to the slums she came from. Reed doesn't want her. He says she doesn't belong with the Royals. He might be right. Wealth. Excess. Deception. It's like nothing Ella has ever experienced, and if she's going to survive her time in the Royal palace, she'll need to learn to issue her own Royal decrees.", "option_118": "Just as she was flowering into her teens, life uprooted Dawn from the tanned crowds and sunny beaches of southern California. It transplanted her into rainy, rural Washington, where she strove to adjust, mature and thrive. Love came to Dawn--and was ripped from her by events and manipulations she could not control. But Dawn had a core of steel. An emotional castaway, she battled grimly through life's trials and sorrows, safeguarding her heart against further ravages. Then love reached out to Dawn once more--if she could find the courage and spirit to grab it with both hands, and this time, never let go. This is her story.", "option_119": "The best way to get over someone is to get under someone else. That was the saying, right? A year after his wife had left him, Hunter still hadn\u2019t taken that advice to heart\u2026 until she walked into the bar. Long, black hair, red, red lips, and curves for days, Hunter couldn\u2019t take his eyes off her.Isobel was on the run and the sleepy town of Hawthorne seemed like a great place to hide. She could take a time out to escape all her problems\u2014evil stepmother and all\u2014and pretend for a while they\u2019d never catch up with her. She didn\u2019t count on the sizzling connection to the sexy as sin man at the bar when she blew into town. But can a city girl and a country boy ever be anything more than a short-lived fire that burns crazily bright and then flames out fast?", "option_120": "In the summer of 1991 I was a normal kid. I did normal things. I had friends and a mother who loved me. I was just like you. Until the day my life was stolen. For eighteen years I was a prisoner. I was an object for someone to use and abuse. For eighteen years I was not allowed to speak my own name. I became a mother and was forced to be a sister. For eighteen years I survived an impossible situation. On August 26, 2009, I took my name back. My name is Jaycee Lee Dugard. I don't think of myself as a victim. I survived. A Stolen Life is my story - in my own words, in my own way, exactly as I remember it.", "option_121": "After recovering from the shock of Neverland's recent attack, Noah and the team are sent back into the field to identify and eliminate a power player who uses his position as a legitimate arms dealer to manipulate terror groups and nations alike. Unfortunately, this means infiltrating the man's organization, and the only opening he's got is for an assassin of his own. Impersonating a recently eliminated assassin-for-hire, Noah makes his way through the ranks to the top leadership, but then comes the surprise. The Top Dog isn't who the government thought he was, and the truth will have repercussions that will rock the world.", "option_122": "The greatest manhunt in the history of the United States is launched as one of its own turns against it in a devastating and truly shocking attack. One of its most trusted and capable agents is revealed to be one of the most deceitful and traitorous men ever to have lived. The scale of his deceit and hatred for his country is unveiled to the world as he promises a reign of terror that will destroy America. Sparing no expense or resource, the American intelligence community, law enforcement agencies and military might are unleashed to catch a man they spent twenty years training to be one of their very best. The race across the globe intensifies as the deadline of the attack looms and the full extent of the Traitor's plans are pieced together. America, as a nation, is facing its greatest threat to its survival since the height of the cold war and the menace of nuclear holocaust. Only this time, the enemy is going to die trying...", "option_123": "When ex-CIA analyst Tom Butler stumbles across evidence of a conspiracy that will destroy America as a free nation, he must do whatever he can before it\u2019s too late. Not knowing who he can trust, Butler has to resort to extreme measures to reveal the true nature of America\u2019s Trust. As he nears his goal, America is plunged into crisis. A war everyone thought would happen fifty years earlier, suddenly and inexplicably, raises its head. With the world's armies bracing themselves for a battle nobody could see coming and America on the brink of annihilation, Butler realizes the scale of the conspiracy was far beyond even his worst nightmare\u2026", "option_124": "As soon as Annalise, a counterintelligence agent working for the American OSS office, thinks that all the dangers are finally behind, swept away by the protective hand of her high-ranking lover \u2013 the Chief of the RSHA Ernst Kaltenbrunner \u2013 she has to face an even bigger challenge. With both fronts approaching her quickly collapsing Germany, she has to make a fateful to run from the Allied prosecution together with the father of her unborn baby, the man, who the Allies consider one of the major war criminals and who they can\u2019t wait to bring to justice; or to stay with her husband Heinrich and accept a generous offer from the OSS \u2013 a new and free life in the United States\u2026", "option_125": "The end of the world is just the beginning of the hunt ... Estes Park Police Chief Marcus Colton and tracker Sam 'Raven' Spears have never liked one another, but when a young girl goes missing in Rocky Mountain National Park, Colton hires Spears to help find her. Their search ends after a night of devastating horror. When word reaches Estes that the nation has been hit by a coordinated electromagnetic pulse attack, Colton and Spears are forced to work together again. But they quickly realize they aren't just tracking a killer--they are tracking a madman. As the United States descends into chaos, the hunters become the hunted. Halfway across the country, Senator Charlize Montgomery awakes to find the nation's capital has gone dark. Forced to set off on foot, she treks across a city that has woken to a new world, and as the night progresses, she learns the EMP attack was just the beginning.", "option_126": "As World War II rages across Europe and the Pacific, its impact ripples through communities in the heartland of America. A farm girl is locked in a dangerous love triangle with two German soldiers held in an Illinois POW camp ... Another German, a war refugee, is forced to risk her life spying on the developing Manhattan Project in Chicago ... And espionage surrounds the disappearance of an actress from the thriving Jewish community of Chicago\u2019s Lawndale.", "option_127": "The feud between YaYa and Leah has ruined the lives of everyone around them. The animosity is alive, and resentments run deeper than ever. Indie has watched YaYa's past destroy the woman he once knew, and his patience has run thin. After being left at the altar, he is heartbroken and confused. His quests to save YaYa from herself have failed, and he finally decides that it's time to let the love of his life go. Her thirst for blood is unquenchable, and like a black hole she sucks the life out of everything around her. If he doesn't cut his ties, he knows that YaYa will cripple him and destroy their family in the process. Then he receives a phone call stating that YaYa is in trouble, and his entire world crumbles at his feet. Who lives and who dies? Will YaYa's addiction to Leah stop her from living her happily ever after? Will the infamous bad girl Leah ever receive her karma?", "option_128": "Former Marine Jake Porter has far deeper scars than the one that marks his face. He struggles with symptoms of PTSD, lives a solitary life, and avoids relationships. When Lyndie James, Jake's childhood best friend, lands back in Holley, Texas, Jake cautiously hires her to exercise his Thoroughbreds. Lyndie is tender-hearted, fiercely determined, and afraid of nothing, just like she was as a child. Jake pairs her with Silver Leaf, a horse full of promise but lacking in results, hoping she can solve the mystery of the stallion's reluctance to run. Though Jake and Lyndie have grown into very different adults, the bond that existed during their childhood still ties them together. Against Jake's will, Lyndie's sparkling, optimistic personality begins to tear down the walls he's built around his heart. A glimmer of the hope he'd thought he'd lost returns, but fears and regrets still plague him. Will Jake ever be able to love Lyndie like she deserves, or is his heart too shattered to mend?", "option_129": "In the wake of ridding their territory of a menace, Sasha has only one pressing duty left: find more human magic workers. And while it is undoubtedly important on some grand scale, the task is, in itself, surprisingly uneventful. That is, until a strange predator takes an interest in her and Charles on their trek home one evening. In the space of twenty-four hours Sasha's life goes from mundane to being stalked and threatened. A new shifter has moved into town, and if the whispered rumors are to be believed, something even more sinister is lurking behind, watching and waiting for the right moment to spring. But that isn't the only element that turns Sasha's life upside down. She has one hell of a secret that will change her and Stefan's life forever.", "option_130": "'If science is right, then I am crazy. And crazy is dangerous.' In a world where nothing supernatural exists, Tess Eckhart is positive she's going crazy. After her complete freakout at a high school party, her parents worry she might be right. So much that they pack their bags and move across the country, next to a nationally-renowned facility for the mentally ill. Tess is determined to fit in at her new school, despite the whispers and stares. But when it comes to Luka Williams, a reluctantly popular boy in her class, she's unused to a stare that intense. Then the headaches start, and the seemingly prophetic dreams that haunt her at night. As Tess tries harder to hide them, she becomes increasingly convinced that Luka knows something--that he might somehow be responsible. But what if she's wrong? What if Luka Williams is the only thing separating her from a madness too terrifying to fathom?", "option_131": "When a rich gentleman finds a beautiful young woman lying in the snow, on the brink of death, he takes her back to his house and, when she has recovered, employs her as a maid. Immediately Elira realizes that Anthony Luther is no ordinary man and nothing about the house she now lives in is as it seems, for Anthony is a powerful wizard. Inexplicably drawn together, they begin a tentative romance, but it\u2019s not just Elira\u2019s uncertainties and the rules of upper-class society which drive a wedge between them; rivalries and a precious family heirloom, a priceless necklace of unforeseen power handed down through generations, threaten not only the couple\u2019s happiness, but also their lives and the safety of the people around them", "option_132": "Every moment possesses its own kind of magic... Aimee Spencer learned the hard way that for some moments, there are no take-backs, no rewinds, no do-overs. A year ago her world imploded and Aimee has been running ever since. She doesn't want to feel. She doesn't want to remember. To bury the ghosts that haunt her, she is living a life that has become unrecognizable. Cole Everly is a golden boy with a cocky smile and an attitude to match. He's grown accustomed to girls throwing themselves at his feet, but when Aimee trips and literally lands in his lap one afternoon, she's not at all what he expects. Difficult, damaged, closed-off. If Cole needed to make a list of qualities to avoid in a girl, Aimee would probably match up with every single one of them. He knows that he should stay away but he's drawn to her in a way that he can't exactly explain. In this honest and absorbing story, Aimee and Cole struggle to sort out the thin spaces between loss and love. Ultimately, they will need to learn how to navigate through the pieces of the past if they want to hold on to the future and each other.", "option_133": "After being unjustly expelled from the Boston Conservatory of Music, Amaryllis Brigham sees her dreams of founding a music academy in her hometown of Seattle, Washington, disappearing before her very eyes. Now, the only way to achieve her goal comes with high stakes for someone set on avoiding men as much as possible: Marry within the year to inherit the immense fortune of her estranged grandmother. Amaryllis reluctantly moves in to her aunt's Boston home and rubs shoulders with fashionable society. Despite her own misgivings, she soon finds herself quickly falling in love with the most unlikely of men, Nathan Everstone, the envy of every eligible female, whose father has haunted her dreams for the decade following her mother's tragic death. However, Nathan turns out to be much more than he seems...and everything she never knew she wanted. But can she ever really trust an Everstone man?", "option_134": "Wedding bells can't chime soon enough for Chloe Mills and Bennett Ryan. Chloe, exasperated and stressed by all the last-minute to-dos, is on the verge of saying 'I do' to eloping. For his part, Bennett's so worried about being distracted by Chloe's body that he makes a no-sex-until-the-wedding-night rule that only seems to be making things worse by continually backfiring on him. As their crazy families descend for the big day- only a few of them actually trying to be helpful- the fiery lovers are about to test whether the couple that argues together can keep it together long enough to exchange rings, and not just heated words.", "option_135": "In 1906, I was barely over fourteen years old, and it was my wedding day. My older sister, Helen, came to my room, took me by the hand, and sat me down on the bed. She opened her mouth to say something, but then her face flushed, and she turned her head to look out the window. After a second, she squeezed my hand and looked back in my eyes. She said, 'You've always been a good girl, Maude, and done what I told you. Now, you're going to be a married woman, and he will be the head of the house. When you go home tonight after your party, no matter what he wants to do to you, you have to let him do it. Do you understand?' I didn't understand, but I nodded my head anyway. It sounded strange to me, the way so many things did. I would do what she told me. I didn't have a choice, any more than I had a choice in being born.", "option_136": "In a world full of super powers, Felix has a pretty crappy one. He has the ability to modify any item he owns. To upgrade anything. Sounds great on paper. Almost like a video game. Except that the amount of power it takes to actually change, modify, or upgrade anything worthwhile is beyond his abilities. With that in mind, Felix settled into a normal life. A normal job. His entire world changes when the city he lives in is taken over by a Super Villain. Becoming a country of one city. A city state. Surprisingly, not a whole lot changed. Politicians were still corrupt. Banks still held onto your money. And criminals still committed crime. Though the black market has become more readily available. And in that not so black market, Felix discovers he has a way to make his power useful after all, and grasps a hold of his chance with both hands.", "option_137": "Starting an interstellar security consulting company was supposed to be easy. Rade got his ex-military teammates together and they pooled their savings to buy a ship and six mechs. The Argonauts were born. But it wasn't easy. Ruthless bankers breathing down their necks, vengeful warlords promising to pursue them across the galaxy, and now a mysterious new client who wants Rade and his Argonauts to escort her to a frontier planet. Problem is, the new client won't reveal her cargo. It's probably something illegal. Well, Rade needs the money, so a man's gotta do what a man's gotta do. They arrive to find the frontier colony strangely deserted. When the shit hits the fan and the Argonauts face a possible alien infestation, it's time to pull out the big guns. Because if there's one thing Rade and his Argonauts really love, it's a good bug hunt. And this one looks to be the hunt of a lifetime. For fans of Old Man's War, Guardians of the Galaxy, and Armor.", "option_138": "Sometimes a terrorist threat comes from the least expected place. Beyond the plains of the Serengeti, in the distant shadows of Kilimanjaro, a new evil has risen. A man named Baku Toli is building an army with child soldiers he abducted from Tanzanian towns. But the threat he poses isn\u2019t just to East Africa. Somehow this rebel has acquired powerful missiles armed with enough nerve gas to wipe out entire cities. Government Agent Sean Wyatt and his partner Emily Starks travel to Tanzania to foil Toli\u2019s evil scheme and bring his reign of terror to an end, but what they find is that there is more to the mission than they first believed. Go back in time to the years just after the tragic events of 9/11. Follow Sean, Emily, and Tommy Schultz as they race against time to figure out who is pulling the strings behind a wicked plan that could bring the world to its knees.", "option_139": "The night Russ Becker witnesses a strange astronomical event, his world changes forever. Before long Russ discovers he's developed incredible superpowers, and he's not the only one. Three other young people--beautiful Mallory, arrogant Jameson, and mysterious Nadia--have had the same experience and all of them now have powers of their own. Mallory can control peoples' minds, Jameson moves objects with his thoughts, and Nadia has empathic abilities. At first, the four relish their newfound gifts, but things become serious when they learn they are being hunted by an organization that wants them for its own nefarious purposes. When Russ's family is threatened, he's forced into action. What transpires will change all of them in ways they never imagined.", "option_140": "Massachusetts, 1815. Will his love endure once he learns her secret? Three years ago, Captain Brogan Talvis's late wife abandoned their son, leaving no clue as to the boy's whereabouts. After searching relentlessly, Brogan discovers his son was adopted by a New England shipbuilder. And the man's daughter, Lorena Huntley, acts as loving guardian to the child. Lorena, who hides a dark truth, finds herself falling for the handsome captain and ex-privateer who's come to secure ownership of one of her father's ships. She's unaware of Brogan's own secret when another's deceit has her sailing toward Europe against her will. Haunted by thoughts of Lorena in peril, Brogan is compelled to choose between the boy he longs for and the woman who has captured his heart.", "option_141": "He's seen his fated mate die a thousand times... and yet, they've never met. Crew is a powerful, yet tortured, wolf shifter. With a weary heart, he seeks to avoid fulfilling a prophecy that foretells the death of his fated mate...true love lost before it has a chance to begin. Dahlia has seen her death at the hands of a demon many times, and the vision is starting to destroy her mind. Giving up on her sanity, her only hope is that death will come well and swift. But when she meets Crew, that all changes. For the first time in many years, she wants to see what happens after the blood spills from her fatal wound. Something in her heart says, with Crew, the last time will not be the end...", "option_142": "He has sworn it. He has to protect the future emperor. No distractions allowed, no matter what. But fate has other plans. Sizzling hot dragon shifter Bryant Chandler knows his determination. His mate is long gone and he has no plans to find another. Now he has sworn to protect the baby who will one day rule them all. No questions asked. But the day luscious Esther put her bounteous virgin curves in close proximity to him, all bets were off. Esther Doran, an archeologist, has her own problems. She can\u2019t find anybody to fund her dream dig, and is starting to think that life just doesn\u2019t want to see her happy. Until she meets that hot dragon guard Bryant Chandler and sparks fly immediately. And then, one drunken night ends with them being married. Who cares if he\u2019s the most delicious, gorgeous man she\u2019d ever set eyes on? Love wasn\u2019t in the plan. But when Bryant's rival finds out about Esther and decides that she's the best way to take Bryant down, the two are forced together once more. And when a sexy dragon is the only thing standing between her and death, passions might just reach the boiling point.", "option_143": "She vowed to protect her heart.... Andie Shayne believes in forever... for everyone else. She has an up-and-coming wedding planning business, and her own failed engagement, to prove it. Now all Andie wants is to save the date for Seaglass Celebrations becoming a premier destination wedding resort. And making sure the wedding of the summer goes off without a hitch will get her there--despite the arrival of one unexpected guest. The sexy-as-sin best man...who's also the ex who broke Andie's heart. Mark Kavanaugh wants to make amends with Andie. He knows breaking off their engagement--at the altar!--was unforgivable. But he's a wiser man now, vowing to make peace with his past. But with desire reigniting on Turtle Island, Mark realizes he never stopped loving Andie. He wants her; and this time, he's determined to do it right.", "option_144": "Obedience is better than sacrifice...and trumps romance, no matter how sweet. Profound loneliness propels a childless widow west with the idea of choosing an orphan to share her life. On the way, a fellow traveler takes her by surprise. She never dreams, is unprepared, doesn't need another man, but can't get him out of her head...or heart. He's so perfect-every bit the one she'd searched for as a young woman-except his mistrust of God has erected a wall she cannot breach. Marcus Ford blames God and struggles for peace after losing his wife and baby. Not once has he considered another woman could be the answer, but the widow is like none other he's ever met. He falls hard, but plans are taking him east. Hope dashed sends two hearts into the pit. If only Ford could forgive God or the widow ease up on her adamant resolve. Will God's mercy shine a beacon in the fog of despair and prove sufficient to heal their souls?", "option_145": "A new adventure begins on Harmony\u2026 With its opulent casinos and hotels, the desert city of Illusion Town is totally unique\u2014and will take you on a thrill ride you\u2019ll never forget. Hannah West isn\u2019t the first woman to wake up in Illusion Town married to a man she barely knows, but she has no memory of the ceremony at all. For that matter, neither does Elias Coppersmith, her new husband. All either can remember is that they were on the run\u2026 With Hannah\u2019s dubious background and shaky para-psych profile, she could have done much worse. The cooly competent mining heir arouses her curiosity\u2014as well as other parts of her mind and body. And even her dust bunny likes him. But a honeymoon spent retracing their footsteps leads Hannah and Elias into the twisting underground catacombs, where secrets from both their pasts will come to light\u2014and where the energy of their clashing auras will grow hot enough to burn\u2026", "option_146": "Waking up in hell was not Del Bellator\u2019s idea of a good time. She\u2019d rather be back on earth, killing demons and hunting down magical treasure for her shop, Ancient Magic. Turns out that escaping hell is easy\u2014it\u2019s staying out that\u2019s hard. Del\u2019s death magic defies the laws of the supernatural world. Worse\u2014she doesn\u2019t know how to control it. If others learn what she is, it\u2019s guaranteed persecution by the Order of the Magica. And Del already has a deadly and forbidden secret\u2014she shares a soul with a dragon. Things get sticky when Roarke Fallon, Warden of the Underworld, shows up on her doorstep wanting to drag her back to hell. He\u2019s a one of a kind shifter\u2014the most powerful she\u2019s ever met\u2014and he\u2019s set his sights on her. Helping him catch an escaped demon gives her an opportunity to win her freedom, but only if she teams up with Roarke. She\u2019ll have to use her forbidden magic to get the job done. And that is a recipe for discovery and disaster.", "option_147": "Beautiful, successful, and plus-sized El suffered a violent attack that has left her hating all handsome, wealthy men. Unfortunately for Stefan, he's the epitome of what she hates. Stefan is a playboy to the extreme with one hard and fast rule: date a woman once, take her to bed and be gone before morning. Until El. When he is the winning bidder at his brother Simon's charity auction, he thinks his dream of finding his one true mate has come true. Wrong. So very very wrong. It'll require drastic measures by the entire Le Beau family to make this mating happen. Welcome to New Orleans, Louisiana, where every myth and scary story you were ever told is real. A place where the things that go bump in the night, or daytime for that matter, are surprisingly friendly. For the most part. Take a good look at your neighbor, the person sitting beside you at the bar, or your coworker. Are you sure they're human?", "option_148": "What if you had to do the one thing you hated most to get the guy you loved to notice you? Ryan Hunter's parties are legend. And tonight she's going to be there. Lisa Matthews anticipates the return of her best friend and only love since kindergarten from soccer camp. But when Tony finally shows up, his mind is more focused on another girl. And worse, she's a soccer player. Fighting for the attention Lisa craves, she's just a hairbreadth away from making a very stupid decision. But when extraordinary times call for extraordinary measures, she's prepared to play ball to get her man. The tryouts are hell, the first match ends bloody, and the morning after the selection party she wakes up in the worst place possible--in the arms of the captain of the soccer team. The hottest guy in school... Ryan Hunter.", "option_149": "Graham Castle. Hot single dad.Arrogant, filthy rich, and cocky as h*ll.We couldn't be more different. But being stranded in a blizzard has a way of bringing people closer. Holly All I want is to run away, escape. Then Graham Castle barged into my life. Big ego. Bulging muscles. Ruggedly handsome. He awakened my deepest desires. I gave him a precious gift. My virginity. Now what I want is to escape into his arms. But will our winter romance outlive the storm? Graham Even billionaires have a Christmas wish list. My only wish is to see my son - Charlie. Then walks in the most gorgeous green eyes. Fiery red hair, seductive curves, and full of sass. I knew she was meant to be mine. To taste. To touch. To command. Now we're stranded together. She can't escape me or this blizzard. I'll claim her sweet innocence and please her in every way. But she left me with no explanation... Will I get her back and give my son the family he deserves?", "option_150": "Warning: This is just the start. This doesn't end well. And it's going to get much worse before it ever gets better. Cole: I push her buttons. I want to push them in the good way. Dirty, up-against-the-wall, my-hand-in-her-pants kind of way. But that's not possible, because I'm dark and she's light, and we both know it. So I push her buttons in the bad way, making her hate me. Hailey: If a genie granted me three wishes, I'd ask for Cole Parker to never look at me again, that I'd forget the dark promise in his eyes, and that just once, before he vanished from my life completely, that he'd push me up against a wall and make me scream. Then I'd go wash my mouth out with soap. This is the complete story of Cole Parker and Hailey Dashford Reid.", "option_151": "Captain Jackson Wolfe survived the initial incursion of a vicious alien species into human space ... barely. He had assumed the juggernaut that had devastated three Terran systems was the herald for a full invasion, but for the last few years it has been eerily quiet along the Frontier. Jackson now struggles to convince the Confederate leadership the threat is still imminent and needs to be taken seriously. While powerful factions make backroom deals he is desperate to find irrefutable proof that the invaders are coming and if humanity expects to survive they must marshal their forces and make a stand before it's too late.", "option_152": "A new monster emerges. The newly christened leader of Delta Force Team Ghost, Master Sergeant Joe Fitzpatrick arrives in Normandy over 70 years after Allied Forces joined the fight against the Nazis. The war to free survivors and eradicate pockets of adult Variants and their offspring is underway by the European Unified Forces. But as the troops push east, rumors of a new type of monster spread through the ranks. Fitz and his new team quickly realize that the fight for Europe might be harder than anyone ever imagined. Back in the States, Captain Reed Beckham and Dr. Kate Lovato are settling into a new life on Plum Island. Across the United States, the adult Variants have all been wiped out, and the juveniles are on the run. But the survivors soon realize there are other monsters at home, and they may be human.", "option_153": "For more than a dozen years, Eli has studied the art of war from some of the most skilled fighters on three planets. There's no question, he has what it takes to be a professional soldier. There's just one problem. His father is General Grant Justice, the most famous man in the galaxy and leader of a new governmental alliance that unites four alien races. When it comes time to enlist, the younger Justice has to make a choice. Rely on his last name and claim an automatic commission as an officer? Or enter basic training as a lowly private and earn his way to the top? For Eli, the decision is an easy one. He changes his name and enlists as an anonymous recruit. Unfortunately, not all of life's choices have such clear-cut answers. An alien-led rebellion is brewing in the ranks of the army he has just joined, and Eli is forced to choose sides. His actions will determine the fate of his father, the alliance, and the entire human race.", "option_154": "Dropping out of sub-space into the wrong galactic sector, Sethran Kada wakes up with a headache and an extraordinary alien aboard his ship. She implores him to help stop the abductions of her people, a newly evolved species emerging from sub-space. Their dangerous potential has caught the attention of rebel factions as well as the ruling Commonwealth. When contact with her kind turns pilots into casualties, the Governors fear an imminent invasion engineered by their rebel enemies. Pursued by Air Command, Seth heads deep into rebel-controlled territory to recover the stolen entities and keep this deadly weapon from falling into the wrong hands. Things get personal when his alien visitor begins to transform his mind and his life, turning the rescue mission into a fight for survival for all of them.", "option_155": "A fanatical terrorist has visions of the Islamic Mahdi commanding him to begin the Apocalypse and bring about the End of Days. An ancient brotherhood of assassins hidden for centuries reappears to murder and ignite the fires of war. A truck carrying a terrible weapon leaves Sudan for the lawless mountains of Algeria and an unknown destination. Director Elizabeth Harker of the Project sends Nick Carter and Selena Connor to the burning wastelands of Western Africa, the back streets of San Diego and the bitter mountains of the Hindu Kush, before a final confrontation that will decide the future of Western civilization.", "option_156": "Sardelle Terushan wakes from three hundred years in a mage stasis shelter, only to realize that she is the last of the Referatu, the sorcerers who once helped protect Iskandia from conquerors. Their subterranean mountain community was blown up in a treacherous sneak attack by soldiers who feared their power. Everyone Sardelle ever knew is dead, and the sentient soulblade she has been bonded to since her youth is buried in the core of the mountain. Further, what remains of her home has been infested by bloodthirsty miners commanded by the descendants of the very soldiers who destroyed her people. Sardelle needs help to reach her soulblade -- her only link to her past and her last friend in the world. Her only hope is to pretend she's one of the prisoners while trying to gain the commander's trust. But lying isn't her specialty, especially when the world has changed so much in the intervening centuries, and if Colonel Zirkander figures out who she truly is, he'll be duty-bound to sentence her to the only acceptable punishment for sorcerers: Death.", "option_157": "Ian\u2019s alpha tosses him out of his car at a training camp for worthless and weak wolf shifters run by a crazy vampire. His only choice is to escape and go lone wolf. Until he runs into Clare\u2026 She actually volunteered for this gig. Her wolf is all alpha but it\u2019s crammed into a petite package, and she definitely has no mercy when it comes to him. The work is hard. The training dangerous. Surviving is optional. Clare can\u2019t stand Ian\u2019s disregard for her authority and he hates her driven ambition. Sparks fly and teeth are bared. Opposites attract they say. If they don\u2019t kill each other first.", "option_158": "Former Pinkerton spy Lily Handland has always dreamed of a quiet, safe life, free from chasing criminals and putting herself at risk. So when the opportunity to invest in a failing Great Camp in the Adirondacks comes to her attention, she quickly jumps at the chance. Filled with grief, widower Owen Murphy wants to run away from it all. Though he\u2019s worked hard to forge a future for himself, his guilt has kept him mired in the past. But all that changes when a headstrong, mysterious woman shows up at Owen\u2019s door. Together, as Lily and Owen restore the beauty of the Great Camp, he begins to finally see a future. But will learning about Lily\u2019s past destroy it all?", "option_159": "A toxic river divides nineteen-year-old Violet Bates's world by gender. Women rule the East. Men rule the West. Welcome to the lands of Matrus and Patrus. Ever since the disappearance of her beloved younger brother, Violet's life has been consumed by an anger she struggles to control. Already a prisoner to her own nation, now she has been sentenced to death for her crimes. But one decision could save her life. To enter the kingdom of Patrus, where men rule and women submit. Everything about the patriarchy is dangerous for a rebellious girl like Violet. She cannot break the rules if she wishes to stay alive. But abiding by rules has never been Violet's strong suit. When she's thrust into more danger than she could have ever predicted, Violet is forced to sacrifice many things in the forbidden kingdom ... including forbidden love. In a world divided by gender, only the strongest survive..", "option_160": "Dragon love burns bright, can she survive the flames? Graeme made his way to Serenity for one very specific, hopefully-deadly reason, but a few friendly wolf shifters on the Serenity Police Department almost made him reconsider his centuries-old death wish. His body, however, remembers it well, acting upon it when he is unable. Heather Herrin has just received news that threatens to change everything for her, but when she sees a half-naked beast of a man in a hospital bed, he takes center stage in her thoughts, giving her some relief. Until he runs hot then cold so often she almost gives up on him, having no way of knowing he's someone that will make her entire life make sense. Are Graeme's reasons for turning down what he thought he'd never be blessed to have enough to keep them apart? Or will Heather manage to break through his walls in time to save them both?", "option_161": "Jonas isn't the kind of guy to submit to the expectations of others, even when his life is on the line. So when he wakes up in the cell of a dungeon with torture devices hanging on the wall, he can only think one thing: this should be fun. What he didn't expect, however, is the beautiful but broken female pitting herself against his resolve. For once, the pain of his past is shallow in comparison to another, and he wants nothing more than to extinguish her pain. When Sasha realizes one of her own has been taken, the gloves come off. Using her ever-expanding resources of both human and non-human magic workers, she sets out to battle the most advanced, most experienced magic worker in the world. Regardless of being completely outmatched, Sasha and Stefan rush to Jonas' aid.", "option_162": "Next in line to lead the vampire species, Princess Naya Kensington has always abided by her royal responsibilities. At the urging of her best friend, Naya breaks the rules and crosses the line when she goes to a human nightclub. Following a chance encounter, Naya alters her life with a singular act forged from lust and blood. Vaughn Llewelyn has secrets and obligations of his own, but he ignores them when he spots Naya across the nightclub. He wants her in a way he\u2019s never felt before, and although he can\u2019t possibly have more than one night with Naya, he knows no one else will do. One night of forbidden love creates a bond that will forever change both of their lives\u2026 as well as their worlds.", "option_163": "'How odd to be made of flesh, balanced on bone, and filled with a soul you've never met.' Charlize Wynwood and Silas Nash have been best friends since they could walk. They've been in love since the age of fourteen. But as of this morning...they are complete strangers. Their first kiss, their first fight, the moment they fell in love... every memory has vanished.'I don't care what our real first kiss was,' he says. 'That's the one I want to remember.' Charlize and Silas must work together to uncover the truth about what happened to them and why. But the more they learn about the couple they used to be... the more they question why they were ever together to begin with.' I want to remember what it feels like to love someone like that. And not just anyone. I want to know what it feels like to love Charlie.'", "option_164": "Love is the one thing I can't afford. Before I met Elizabeth, I was living by two simple rules. 1. Drink, f*ck and be merry. 2. Don\u2019t get attached. Having more money than I could ever spend meant I could go on like that forever. Which is why I knew I should have tossed her out the moment she reappeared at my door, eager to get to work on upending my whole damn life. She was trouble, and letting her stay could only lead to me breaking all kinds of rules \u2013 including the only two that mattered. But making her leave threatens to break something even more important. My heart. No matter what I do, she\u2019s destined to destroy all I've ever known. That's what bombshells do. They bring everything around them to ruin. I should know. I have a bombshell of my own. And yet I can\u2019t help but wonder\u2026 what if obliterating the life I have now is the only way to build something better?", "option_165": "He told me to 'settle, girl.' He asked if 'something was wrong with me?' He said I was an 'easy target.' That was within minutes when I first met Caden Banks. I labeled him an asshole, but he was more than that. Arrogant. Smug. Alpha. He was also to-die-for gorgeous, and my stepbrother's fraternity brother. Okay, yes I was a little naive, a tad bit socially awkward, and the smallest amount of stalker-ish, but if Caden Banks thought he could tell me what to do, he had another thing coming. I came to college with daydreams about being with my stepbrother, but what if I fell for the anti-stepbrother instead? Standalone.", "option_166": "A silver pyramid in space ten thousand years old\u2026 The secrets of the mysterious New Men\u2026 A war like no other\u2026 Starship Victory\u2014Earth\u2019s ancient, alien spacecraft\u2014has won a smashing victory against the New Men, driving them from 'C\u201d Quadrant. On their way home, Captain Maddox and his crew run into a vast machine trapped inside an ion storm. Maddox doesn\u2019t know it yet, but the meeting isn\u2019t an accident. There\u2019s a traitor aboard ship, implementing a secret plan, threatening to destroy everything Star Watch has achieved against the New Men. Now begins a deadly race as Captain Maddox, the crew and Galyan are pitted against the masters of a centuries-old conspiracy. Human existence lies in the balance.", "option_167": "Arimnestos is a peasant boy who dreams of becoming a bronzesmith like his father, but their peaceful life is shattered by Thebes and Sparta. Standing in the battle line for the first time, he tastes blood and unlikely victory. But wounded and knocked unconscious, he wakes not a hero - but a victim, betrayed and enslaved. Slavery forces him into the high culture of the Greek and Persian worlds, but the seductive spell of this new life is shattered when the Greeks revolt against the might of the Persian Empire, forcing him to choose between new love and old friends, thrusting him back into the battle haze. Arimnestos has a god-like talent that pays well in this violent world - one that will ultimately take him to the battlefield of Marathon and beyond. Like his hero, Achilles, he is a killer of men.", "option_168": "We are not alone. On Ganymede, breadbasket of the outer planets, a Martian marine watches as her platoon is slaughtered by a monstrous supersoldier. On Earth, a high-level politician struggles to prevent interplanetary war from reigniting. And on Venus, an alien protomolecule has overrun the planet, wreaking massive, mysterious changes and threatening to spread out into the solar system. In the vast wilderness of space, James Holden and the crew of the Rocinante have been keeping the peace for the Outer Planets Alliance. When they agree to help a scientist search war-torn Ganymede for a missing child, the future of humanity rests on whether a single ship can prevent an alien invasion that may have already begun . . . Caliban's War is a breakneck science fiction adventure following the critically acclaimed Leviathan Wakes.", "option_169": "Sometimes you have to make a stand. They've been relentlessly hounded ever since The Purge decimated the world, and every day since has been a struggle to stay one step ahead of the enemy. Keo has returned, claiming to have information that can turn the tide of war against the ghouls. Lara wants nothing more than to strike back, but she has other problems: Will has yet to make contact, and a team she's sent on an important mission has gone off the radar. Meanwhile, Texas becomes a battlefield as a new force rises to challenge the rule of the ghouls and their human collaborators. Led by a mysterious leader, this new threat has the firepower to cripple the enemy, but their cure might be worse than the disease. Caught between two destructive forces, Lara, Keo, and their friends will have to make a choice--fall in line or forge their own path--before the decision is made for them. A year after The Purge, any chance of victory will rest on the tips of the Spears, and those fearless enough to wield them...", "option_170": "For thirty years humanity struggled to cope with the brilliants, the one percent of people born with remarkable gifts. For thirty years we tried to avoid a devastating civil war. We failed. The White House is a smoking ruin. Madison Square Garden is an internment camp. In Wyoming, an armed militia of thousands marches toward a final, apocalyptic battle. Nick Cooper has spent his life fighting for his children and his country. Now, as the world staggers on the edge of ruin, he must risk everything he loves to face his oldest enemy--a brilliant terrorist so driven by his ideals that he will sacrifice humanity's future to achieve them.", "option_171": "The Errant Flock David Sanz\u2019s journey south is halted abruptly after a devastating turn of events. In a tense battle for survival against thieves and the militia he has been fleeing from, he finds himself shackled and incarcerated in the prison he once guarded. The Duke of Sagrat\u2019s brother, Rafael Perato, has survived the war, and the royal court\u2019s treacherous intrigues, but when news of his brother\u2019s death reaches their Most Catholic Majesties his life is thrown into turmoil. Banished by the king, and tasked with carrying out insurmountable missions, he becomes entangled in a web of deadly plots and subterfuge, which threaten not only Sagrat but his very life. In this fast paced epic, David Sanz and Rafael Perato face adversaries more devious and powerful than themselves, and it is only faith, courage, and unlikely alliances, that may save them both from the Inquisitor and the deadly marauder, Alejandro.", "option_172": "Now a celebrated war hero, Captain Kat Falcone is back at the helm of HMS Lightning\u2026and up against near-impossible odds. After an ill-timed outburst almost ends her career, Kat is handed command of a deep-strike mission into enemy space. The objective is to gather intelligence and distract the hostile Theocracy while the Commonwealth prepares its counteroffensive. The chances for success are slim\u2014and for survival even slimmer. Armed with a ragtag fleet of outdated starships, a few loyal officers, and a skeleton crew of refugees, Kat knows the Royal Navy expects her to fail. But failure almost certainly means death\u2014or worse, as the Theocracy does not treat prisoners kindly. Pitted against the enemy defenses of her old nemesis Admiral Junayd, there is no room for error. And with a spy hidden aboard her ship, Kat will need more than her wits to survive. Can Kat enter the lion\u2019s den, strike a blow for the Commonwealth, and escape with her life?", "option_173": "Set in a terrifyingly brutal Rome-like world, An Ember in the Ashes is an epic fantasy debut about an orphan fighting for her family and a soldier fighting for his freedom. It's a story that's literally burning to be told. Laia is a Scholar living under the iron-fisted rule of the Martial Empire. When her brother is arrested for treason, Laia goes undercover as a slave at the empire's greatest military academy in exchange for assistance from rebel Scholars who claim that they will help to save her brother from execution. Elias is the academy's finest soldier-- and secretly, its most unwilling. Elias is considering deserting the military, but before he can, he's ordered to participate in a ruthless contest to choose the next Martial emperor. When Laia and Elias's paths cross at the academy, they find that their destinies are more intertwined than either could have imagined and that their choices will change the future of the empire itself.", "option_174": "When female wolf shifter Taryn Warner first encounters Trey Coleman, an alpha male wolf shifter with a dangerous reputation, she\u2019s determined to resist his charms. After all, Trey\u2014who was only fourteen when he defeated his own father in a duel, winning the right to be alpha of his pack\u2014can\u2019t have anything to offer the talented healer besides trouble, or so she thinks. Taryn finds herself drawn in by Trey\u2019s forceful demeanor and arctic-blue eyes, and she eventually agrees to enter an uneasy alliance with him. If the two succeed in convincing their respective packs that they\u2019ve chosen each other as mates, Trey will win valuable political allies, while Taryn will escape an odious arranged mating. But there are a lot of potential pitfalls to this plan\u2014including the very real possibility that the wolf shifters, overwhelmed by their growing attraction to each other, will be unable to maintain the clear heads needed to pull off the deception.", "option_175": "As a wolf shifter with razor-sharp senses, Jessa Lebron can perceive the slightest change in the air. And her lupine instincts go into overdrive right before her mother, who abandoned her years ago, returns to the pack bearing secrets that change everything. The biggest secret of all: Jessa is dragon marked, a designation that places her in grave danger. The dragon marked are destined to resurrect the dragon king, a fearsome ancient warmonger. And they must be eliminated. Soon Jessa is locked up in Vanguard, the notorious paranormal prison that houses criminal vampires, feys, and magic users. Thankfully, she's not alone: Braxton Compass, her best friend and a dragon shifter, has her back. Jessa and Braxton must find a way to free themselves and the rest of the dragon marked. But can her pack mates help her stop the dragon king before his deadly return.", "option_176": "Rowan would give his life to protect the woman he loves. Lyric is determined to save Rowan, even if it's from her own pack. Lyric Carmichael is a shifter in trouble. When a pack of rogue wolves attacks her, she knows she will have to fight for her life. Being a member of the Iron Wolves MC and a wolf shifter, she's used to fighting, with the odds stacked against her, she's not sure she'll make it out alive. Rowan Shade, a member of the Special Forces has fought many battles, so wading into the fight to save a gorgeous woman is second nature. Being bitten by Lyric in order to save him from a fate worse than death, and finding out there are supernatural beings, is one of the most erotic experiences of his life. He just hopes they live long enough to explore more of this new and wild world. As Rowan and Lyric explore their new relationship, the danger to the pack intensifies. When they find out one of their own has betrayed them, the strength of the entire MC is needed in order for them all to survive the upcoming battle.", "option_177": "Waking up in some strange man\u2019s bed was never big girl Kira Ardan\u2019s goal for the day. Neither was waking up naked. Wait, naked? Someone had a lot of explaining to do and soon. Luke Lyen is at the height of his need. He wants a mate and he wants her now. Finding the woman meant to be his brings out the lust he\u2019s been fighting for days. If only she weren\u2019t so stubborn, he might be able to get her to understand she is his. Then they could move on with dirty, freaky loving. The big lion is doing things with his tongue that makes Kira\u2019s brain cells melt. It will take more than a little danger to get this curvy woman to let go of her firm beliefs. She\u2019s not interested in being anyone\u2019s MINE, but maybe he can convince her to be HIS.", "option_178": "A year earlier, Seattle advertising executive Alan Christoffersen lost everything he held dear--his beloved wife was killed in a terrible accident; his partner stole his business from him; and the bank foreclosed on his home when he couldn't pay the mortgage. With seemingly nothing left to live for, Alan set out to walk from Seattle to the farthest point on the map, Key West. And now, after walking more than two thousand miles on a journey filled with surprises, dangers, and revelations, he approaches his destination--and the most important decision of his life.", "option_179": "These Royals will ruin you. Easton Royal has it all: looks, money, intelligence. His goal in life is to have as much fun as possible. He never thinks about the consequences because he doesn't have to. Until Hartley Wright appears, shaking up his easy life. She's the one girl who's said no, despite being attracted to him. Easton can't figure her out and that makes her all the more irresistible. Hartley doesn't want him. She says he needs to grow up. She might be right. Rivals. Rules. Regrets. For the first time in Easton's life, wearing a Royal crown isn't enough. He's about to learn that the higher you start, the harder you fall.", "option_180": "Benjamin, a nine-year-old autistic boy with a love of Disney, was taking his first trip to Walt Disney World. The last thing his parents expected was to see him come alive. What followed was a remarkable tale of inspiration, heartbreak, dedication and joy as Benjamin's family relocated from Seattle to Orlando in order to capture that magic and put it to practical use. Amidst the daily challenges of life for an autistic child, Benjamin's passion for one particular theme park attraction would lead his family on a breathtaking journey of hope and discovery. How many rides does it take for an ending to become a new beginning?", "option_181": "Over 100,000 copies of the Slaver Wars series were sold in 2013. Operation First Strike is coming to an end. It has succeeded in buying the Human Federation of Worlds valuable time to prepare for the coming invasion. Now Fleet Admiral Streth needs to get his remaining warships back home to aid in the defense of the human worlds. The AIs and the Hocklyns are determined to follow the admiral and annihilate every single human in the Federation. The humans are massively outnumbered, but they have a daring plan that just might save their worlds. However, the AIs have a plan of their own, one that if it succeeds will ensure the end of the human race.", "option_182": "The Federation is pushing the Hocklyns steadily back, but they still vastly outnumber the Humans and their allies by hundreds to one. Fleet Admiral Hedon Streth has to defeat them before they develop newer and more deadly weapons. In a bold move, Hedon comes up with a daring plan to attack the Hocklyn home worlds. If he succeeds, the war will be over and if he fails then the Federation will face imminent defeat. The AIs have withdrawn to the center of the galaxy where they are working on their Great Project. Once completed it will send out a hyperwave that will eliminate all organic life in the galaxy. Can anything be done to stop this impending apocalypse?", "option_183": "The war that began on Hayden's World years ago has blossomed into a brawl across the stars, and yet that single and otherwise largely unimportant colony continues to be a central point in the conflagration. Human forces have pushed outward, now taking enemy worlds in response to the attacks on their own, but they don't have the numbers or the power to hold what they take. Now the alien Alliance shows a sliver of its true power, and the war for domination of the skies over Hayden burns brightly once more. Neither side has any intentions of giving up the game, and both sides have plenty more aces held back against a rainy day. A fiery rain is coming, and when it passes, the future of the entire Orion-Cygnus Arm of our Galaxy will be decided. Admiral Nadine Brooke, Captain Jane MacKay, and Sergeant Sorilla Aida intend to make certain it's decided in humanity's favor.", "option_184": "A warlike alien race. A stranded platoon. One man's fight to save his brothers--and humanity itself--from total annihilation. Rade Galaal and his elite team are dispatched to the farthest reaches of known space to investigate the disappearance of a classified new supercarrier. Equipped with Hoplites, powerful battle suits laden with enough firepower to raze a small city, Rade and his team explore the barren world where the starship issued its final transmission. But shortly after they land, things start to go very wrong. Cut off from the fleet, stranded on an unforgiving planet, and surrounded by hostiles, Rade and his men find themselves fighting for their very lives against a seemingly unstoppable foe. Even the awesome firepower of the Hoplites might not be enough. Can Rade overcome his demons in time to save the platoon, or will his team become the first casualty of the coming Alien War?", "option_185": "In the 25th century humans have conquered space. The advent of faster-than-light travel has opened up hundreds of habitable planets for colonization, and humans have exploited the virtually limitless space and resources for hundreds of years with impunity. So complacent have they become with the overabundance that armed conflict is a thing of the past, and their machines of war are obsolete and decrepit. What would happen if they were suddenly threatened by a terrifying new enemy? Would humanity fold and surrender, or would they return to their evolutionary roots and meet force with force? One ship--and one captain--will soon be faced with this very choice. Against incredible odds, Jackson Wolfe is determined to save humanity-and in the process, might end up saving himself.", "option_186": "Earth is conquered. Sol is lost. One ship is tasked to free them. One Captain to save them all. When an alien armada destroys the United Earth Space Force and takes control of the human homeworld, newly reinstated Captain Annette Bond must take her experimental hyperspace cruiser Tornado into exile as Terra's only interstellar privateer. She has inferior technology, crude maps and no concept of her enemy, but the seedy underbelly of galactic society welcomes her so long as she has prizes to sell and money to spend. But when your only allies are pirates and slavers, things are never as they seem-and if you become all that you were sworn to destroy, what are you fighting for?", "option_187": "This is the tale of Colonel Alexander Hunter, a dauntless and daring Confederate cavalry officer, who, with his band of intrepid outcasts, becomes a legend in the rolling hills of northern Virginia. Inspired by love of country and guided by a sense of duty and honor, Hunter must make a desperate choice when he discovers the woman he promised his dying brother he would protect is the Union spy he vowed to his men he would destroy. Readers will discover the fine line between friends and enemies when the paths of these two tenacious foes cross by the fates of war and their destinies become entwined forever.", "option_188": "Honor. Courage. Commitment. Three things Jesse Carter has lost. A former Marine, Jesse used to stand proud of his achievements and live by the code. But when circumstance made him question everything he believed in, those most basic values didn't feel so important after all. Sex. Lies. Knights Rebels. Three things Jesse Carter has found. Reborn into a brotherhood not so different from the one he left behind, Jesse finds it all too easy to block out his past and claim the role as Rebels' fun-loving player. Until he meets Bell. Shy, awkward, and with troubles of her own, Bell Johnson's no stranger to hiding her pain. When Jesse forces himself into her life, she's at risk of her defences crumbling. Does Bell have the strength to survive Jesse and his demons or is she fated to become another casualty in the self-destruction of Jesse Carter?", "option_189": "An apocalyptic event has destroyed Evie's hometown and killed her mother. What makes it worse? Evie's prophetic visions predicted it all--but she wrote it off as one of her freakish dreams. Now Evie teams up with a wrong-side-of-the-bayou classmate: Jack Deveaux. They are forced to leave town on a road trip heading to meet Evie's maternal grandmother. Meanwhile, Evie is coming to terms with the fact that she has special powers--powers that have revealed themselves to her slowly. The mythology of the story is inspired by Tarot cards. Evie is the personification of the Empress Tarot card, the genesis of her abilities. Along the way, she and Jack meet teens who have taken on the powers of other Tarot characters. It seems an ancient prophesy is being played out, and these teens have been tapped to reenact the battle.", "option_190": "Just outside Los Angeles, a prisoner hidden away for 70 years sits up, gets off the bed and disappears through a solid wall. In Australia, a magician impresses audiences by producing real elephants. Nobody realizes it's not an illusion. Across the world, individuals and ancient organizations with supernatural power suddenly detect the presence of something even they can't understand. At the center of it all, Seb Varden, a 32-year old musician with a secret in his past, slits his wrists, is shot dead and run over on the freeway. He's had better days. Seb is about to discover the universe is a far more complicated place than he'd ever imagined.", "option_191": "Having your throat cut has a way of changing a girl\u2026 so does being bitten by one of your two lovers. Luscious and curvy, that\u2019s what they called me as they shared me. Jericho behind me, his viking-huge hands on my hips, and Colt in front of me, his muscular thighs parted, generously saluting, taking what was his with a hand fixed in my fiery red hair.\u2026 So my fianc\u00e9 had cheated. Who cares. Well, I\u2019d cared. For months. His betrayal had eaten me alive, filling me with resentment fueled rage. I\u2019d stopped seeing beyond the past at the cost of the present and the future. My life was stuck. Black Wolf Mountain was my answer. So, I went, leaving everyone I knew and loved behind as I searched for myself in the wilderness. Instead, death found me lying in a bed soaked with my own blood. But death is no match for a wolf\u2026not my wolves. But what about me? Is there more to me than death can take? Is there enough of me for two to love?", "option_192": "Cade Derringer wants me naked and vulnerable. Screw that. The last thing I need is a dirty-talking, bad boy shifter crashing into my life. Especially the wolf pack alpha, who never lets me forget that the first time he saw me, I was stark-freaking-bare-assed. Trouble is, I can't seem to stop losing my clothes around him. But that doesn't mean I like him. Nor does it mean I\u2019ll obey his sexy, arrogant orders\u2026 Even if I am forced to marry the jerk. I've got no damn use for a wife. Especially one with dark, mysterious secrets. I'm a hunter. Chicks like her are my natural prey. But Jess lights me up with mystic fire every time I nail her. If she thinks that means we're fated mates, forget it. I take what\u2019s mine, but I don't believe in fairy tales.", "option_193": "I pray that God forgive them... Corrie Ten Boom stood naked with her older sister Betsie, watching a concentration camp matron beating a prisoner. Oh, the poor woman, Corrie cried. Yes. May God forgive her, Betsie replied. And, once again, Corrie realized that it was for the souls of the brutal Nazi guards that her sister prayed. Both woman had been sent to the camp for helping the Jews. Christs Spirit and words were their guide; it was His persecuted people they tried to save at the risk of their own lives; it was His strength that sustained them through times of profound horror. Here is a book aglow with the glory of God and the courage of a quiet Christian spinster whose life was transformed by it. A story of Christs message and the courage woman who listened and lived to pass it along with joy and triumph!", "option_194": "My name is Lily Snow. I am twenty-five years old, and despite being born with an unattractive face, I have never doubted who I am: smart, driven, and beautiful on the inside. Until I met Maxwell Cole. He's handsome, excessively wealthy, and the owner of Cole Cosmetics. It's been my dream to work for this man for as long as I can remember. The good news is he wants to hire me. The bad news is he wants me for all the wrong reasons. Ugly reasons. In exchange, he's offered me my dreams on a silver platter. The job. The title. A beautiful future. But this man is as messed up and ugly as they come on the inside. I'm not sure anyone can help him, and he just might take my heart down with him.", "option_195": "California archaeology student Chione Ini-Herit has vivid dreams about the discovery of an opulent tomb. After learning that Chione's dreams are playing out in Egypt, the founder of the California Institute of Archaeology accepts an offer to examine a mysterious site in Valley of the Queens. When they discover a tomb, things begin to unravel. Magical spells encoded into the hieroglyphs on the tomb's walls transport Chione and her former boyfriend, fellow archaeologist Aaron Ashby, back 3,500 years to ancient Egypt. Even stranger, Aaron and Chione begin to morph into Tutankhamon and Tauret, a priestess in Pharaoh's Court, after learning that Tauret coded the magical spells into the hieroglyphs to keep her and Pharaoh irrevocably joined in the afterlife. When other team members speak the spells aloud, they, too, are affected in unfathomable ways by the Ka, the spirit of the entombed person. Chione and Aaron learn that Tauret has conjured powerful spells to provide Tutankhamon with a living heir, and Tauret has chosen Chione and Aaron to complete her destiny.", "option_196": "Dark space won the battle. Humanity has just won a major victory against the invading Sythians--the first victory in the history of the war. The savage Gors have joined forces with Dark Space, and now for the first time since the invasion, it looks like the tide is turning. But the Sythians weren't defeated. Humanity just bloodied their noses. Now they know where Dark Space is, and they are coming back for revenge. The wars still rages. Admiral Hoff Heston is secretly terrified of what's coming, but he's lulling people into a false sense of security. He needs to buy time. The people of Dark Space are not as alone as they think. And everything is about to change. Avilon, a lost sector of humans, has remained hidden and untouched by the Sythian invasion. No one knew they even existed, except for Admiral Heston. Now he must send a mission to contact them and get help, but what humanity finds there will change more than just the course of the war against the alien invaders... it will change the very nature of their existence.", "option_197": "An enemy unleashed. A combat unit in jeopardy. Can a disgraced soldier be humanity\u2019s savior? A string of terrorist attacks explode across Galactic Union Space. The culprit: the Korvenite Liberation Front. Their target: humankind. If left unchecked, the Korvenites\u2019 vendetta will bring the Union--and humanity\u2014to their knees. The elite Star Brigade unit once produced some of the Union\u2019s finest soldiers. And amongst Star Brigade\u2019s roster, Captain Habraum Nwosu was the best. Was\u2014until one catastrophic battle annihilated both his team and Star Brigade\u2019s reputation. Now Nwosu has fled his post, disgraced and broken. Against a foe as merciless as the Korvenites, Star Brigade needs to be at its best. But with a dwindling roster and Habraum Nwosu\u2019s absence, the Brigade\u2019s best might not be enough. And this time, failure is not an option.", "option_198": "Lt. Charlie Harrison survived the horrors of Rabaul and the midnight battle with the Mizukaze. When he reports to Sabertooth at Pearl, he must contend with a crew that isn't quite welcoming and an officer protecting a dire secret. While underway, the captain reveals the submarine's mission--travel to the Japanese-occupied Philippines, deliver supplies to the Filipino guerillas, and bring American refugees home. When Sabertooth runs into Yosai, one of the aircraft carriers that attacked Pearl Harbor, the mission changes. As disaster strikes, Charlie must take command and make the ultimate decision--get the refugees home, or risk everything on an all-or-nothing attack.", "option_199": "We have fought battles that left more than a hundred corpses on the ground and not a word of it has ever been set down. The Order fights, but often it fights in shadow, without glory or reward. We have no banners. Vaelin Al Sorna is the Sixth Order's newest recruit. Under their brutal training regime, he learns how to forge a blade, survive the wilds and kill a man quickly and quietly - all in the name of protecting the Realm and the Faith. Now his skills will be put to the test. War is coming. Vaelin must draw upon the very essence of his strength and cunning if he is to survive the coming conflict. Yet as the world teeters on the edge of chaos, Vaelin will learn that the truth can cut deeper than any sword.", "option_200": "Lucas Thatcher has always been my enemy. It's been a decade since I've seen him, but our years on opposite coasts were less of a lasting peace and more of a temporary cease-fire. Now that we're both back in our small town, I know Lucas expects the same old war, but I've changed since high school--and from the looks of it, so has he. The arrogant boy who was my teenage rival is now a chiseled doctor armed with intimidating good looks. He is Lucas Thatcher 2.0, the new and improved version I'll be competing with in the workplace instead of the schoolyard. I'm not worried; I'm a doctor now too, board-certified and sexy in a white coat. It almost feels like winning will be too easy--until Lucas unveils a tactic neither of us has ever used before: sexual warfare. The day he pushes me up against the wall and presses his lips to mine, I can't help but wonder if he's filling me with passion or poison. Every fleeting touch is perfect torture. With every stolen kiss, my walls crumble a little more. After all this time, Lucas knows exactly how to strip me of my defenses, but I'm in no hurry to surrender. Knowing thy enemy has never felt so good.", "option_201": "Darrow would have lived in peace, but his enemies brought him war. The Gold overlords demanded his obedience, hanged his wife, and enslaved his people. But Darrow is determined to fight back. Risking everything to transform himself and breach Gold society, Darrow has battled to survive the cutthroat rivalries that breed Society's mightiest warriors, climbed the ranks, and waited patiently to unleash the revolution that will tear the hierarchy apart from within. Finally, the time has come. But devotion to honor and hunger for vengeance run deep on both sides. Darrow and his comrades-in-arms face powerful enemies without scruple or mercy. Among them are some Darrow once considered friends. To win, Darrow will need to inspire those shackled in darkness to break their chains, unmake the world their cruel masters have built, and claim a destiny too long denied--and too glorious to surrender.", "option_202": "The year is 1772, and on the eve of the American Revolution, the long fuse of rebellion has already been lit. Men lie dead in the streets of Boston, and in the backwoods of North Carolina, isolated cabins burn in the forest. With chaos brewing, the governor calls upon Jamie Fraser to unite the back-country and safeguard the colony for King and Crown. But from his wife Jamie knows that three years hence the shot heard round the world will be fired, and the result will be independence - with those loyal to the King either dead or in exile. And there is also the matter of a tiny clipping from The Wilmington Gazette, dated 1776, which reports Jamie's death, along with his kin. For once, he hopes, his time-traveling family may be wrong about the future.", "option_203": "Having recovered from the wounds of battle and having won for himself a fortune, a crew, and a longship, Thorgrim Night Wolf makes ready to leave the Viking town of Dubh-linn for the long journey back to his home in Norway. But the gods have other plans, and Thorgrim and his men wash up in the small Viking longphort of V k-l. Thinking themselves among friends, they soon learn that the opposite is true, that Grimarr Giant, the Lord of V k-l, has reason to want Thorgrim and his son Harald dead. In a world where they cannot tell friend from foe, a world of violence at sea and on land, Thorgrim, Harald, Ornolf, Starri, and their band of Norsemen find themselves once again fighting not just for plunder but for their very survival.", "option_204": "I thought the threat from Seattle was finished. That we showed up in time and took care of business. I hate being wrong. It really ruins my day. When Roger, the alpha of the North American pack, shows up at my door with the news that a demon has made it to the Underworld with knowledge of me, some hard decisions have to be made. Do I stay above ground, with all my magical friends, and wait for the battle to come to me? Or do I seek the demon out, and pluck the threat out by the root? I don't want my friends to die on my behalf. I could never life with myself. But if I venture into the Underworld, it'll be the most perilous journey of my life. This time, it isn't just my life hanging in the balance, it is my eternity.", "option_205": "You think you know what is right and what is wrong? Then tell me if this man should die. He is my enemy. He is to be my end. He is the one I love. I have spent my life in shades of grey. I have died and returned to a world of color. I have fought an Angel and lived. I have kissed the Prince of Ravens. I have faced the Lord of Night and made him kneel. I was accepted into the Four Orders, and I created the fifth. I freed the Shadow of Rome. I sat upon the Twilight Throne. The man asks for my surrender. He asks for peace. He is too late. The girl he knew is gone, and death is in her place. I am Nightfall, and this is my story. You think you know it? Think again.", "option_206": "Humans and androids crowd the raucous streets of New Beijing. A deadly plague ravages the population. From space, a ruthless lunar people watch, waiting to make their move. No one knows that Earth's fate hinges on one girl. Cinder, a gifted mechanic, is a cyborg. She's a second-class citizen with a mysterious past, reviled by her stepmother and blamed for her stepsister's illness. But when her life becomes intertwined with the handsome Prince Kai's, she suddenly finds herself at the center of an intergalactic struggle, and a forbidden attraction. Caught between duty and freedom, loyalty and betrayal, she must uncover secrets about her past in order to protect her world's future.", "option_207": "I was ruthless. I was feared. I had sacrificed. Myself. Her. Everything... Living in a world where I was worth more dead than alive was a choice. I was a bad man, never claimed to be anything else. I've done things I'm not proud of. Seen things that can't be unseen. I've caused pain that I can't undo. It was all my choice. Every decision. Every order. Right and wrong never mattered. Until her. She was under my protection, until she became my obsession. But who was going to save her... From. Me. The devil himself. Fate brought us together. Destiny destroyed us.", "option_208": "My name is Larkspur, and I am an Elemental. My people use the power of the earth to sustain life and defy our enemies. I should be at my father's side as a royal princess. But as a half-breed, bastard child, that isn't going to happen. I've been accused of attacking the queen, my wicked stepmother, and my life is suddenly on the line. I have only two options left to me: banishment, or training to become one of the King's Elite Guards, an Ender. Option one will kill me. Option two is meant to break me, but it's the only way to survive. Did I mention I have no power like the rest of the elementals, and my connection to the earth is worth next to nothing? Could things get any worse? Of course they can. Welcome to being an Elemental.", "option_209": "I am cursed by the desert I was born in, and now I wander the space between the Walls meant to hold my kind-the supernatural kind- in. If I can find a way out, if I can find a way to escape, perhaps I can outrun this curse. But that means passing through the Ice Witch's realm-something no one has returned from. But life has a funny way of changing directions on you. A freak accident. A child in danger. And a damn Warlock named Merlin who thinks he can manipulate me. It looks like I'm about to start a journey I never planned on, to face a Witch who has never been challenged, in an attempt to survive a storm of magic, danger, and trickery.", "option_210": "She's a client. That's all. Or it should be. But with every lesson, she's becoming more. The secrets I'm hiding behind the image of the Gentleman Mentor make telling her the truth--and having anything real--impossible. I'm training her for another man, and that fact guts me every time I think of it. I know she's not mine ... but part of me won't accept that. Am I willing to risk it all to keep her? He calls himself the Gentleman Mentor. Just reading his ad makes me feel more alive than I have in years. He promises to teach me the art of seduction ... and show me the most sinfully erotic pleasures. He's going to help me become the kind of confident, sexy woman men can't ignore. Six lessons ... with the most gorgeous man ... who happens to be a Dom. The only problem ... now that I've experienced his brand of delectable domination will anyone else ever compare?", "option_211": "In the twentieth century, Earth sent probes, transmissions, and welcoming messages to the stars. Unfortunately, someone noticed. The Galactics arrived with their battle fleet in 2052. Rather than being exterminated under a barrage of hell-burners, Earth joined their vast Empire. Swearing allegiance to our distant alien overlords wasn't the only requirement for survival. We also had to have something of value to trade, something that neighboring planets would pay their hard-earned credits to buy. As most of the local worlds were too civilized to have a proper army, the only valuable service Earth could provide came in the form of soldiers...someone had to do their dirty work for them, their fighting and dying.", "option_212": "The Galaxy is a Dumpster Fire A hot, stinking, dumpster fire. And most days I don\u2019t know if the legionnaires are putting out the flames, or fanning them into an inferno. A hostile force ambushes Victory Company during a reconnaissance-in-force deep inside enemy territory. Stranded behind enemy lines, a sergeant must lead a band of survivors against merciless insurgents on a deadly alien world somewhere along the galaxy\u2019s edge. With no room for error, the Republic\u2019s elite fighting force must struggle to survive under siege while waiting on a rescue that might never come. When you think you\u2019ve surrounded the Legion... you\u2019ve just made your last mistake.", "option_213": "'Is it better to be a bad man and accomplish great things, or be a great man and accomplish nothing?' Quintus Sertorius has spent the first 20 years of his life training horses on his family farm, but this must end when his father dies and his village's political connections to Rome are severed. For the sake of his family, Quintus must leave his village for the Eternal City. If he succeeds, his people will be fed. If he fails, his people will starve. He begins his political career under the most influential men in Rome, but soon discovers that those in the Senate are less inclined to help him than he had hoped. His journey takes him from the corrupt and treacherous Forum to the deadly forests of Gaul, making powerful friends and enemies along the way. But it will take more than allies to succeed. He will have to decide what compromises he is willing to make, and what risks he is willing to take, if he is to secure a future for himself and his people.", "option_214": "Burmese War, 1852. Unable to join the famous Royal Malverns, Jack Windrush is commissioned into the despised 113th Foot. Determined to rise in the ranks and make a name for himself, he is sent with the 113th to join the British expedition. But when they get involved in the attack of Rangoon, Jack realizes that war on the fringes of the Empire is not as honorable and glorious as he expected. After a chance meeting with a renegade British soldier, Jack witnesses the true terrors of war, and begins to question the whole framework in which he has grown up.", "option_215": "Over 14 days at the heart of the Battle of Britain, Spitfire pilots Jack and Alex struggle to survive the savage battles raging in the air over southern England. Several times a day, they fly against overwhelming odds, witnessing the death and disfigurement of friends and enemies, and wrestling with the knowledge that the same could happen to them at any moment. Brief periods on the ground offer little respite, with Biggin Hill subjected to frequent air raids, during which many more friends are killed. Both Jack and Alex find love, but the Battle takes its toll. The flying scenes in Wings Over Summer are especially vivid, perhaps because Ron Powell spent much of his 32 years in the RAF as a flying instructor, teaching young men and women to turn upside down, jink and spin in light aircraft. He also met several Battle of Britain veterans and, more than anything, hopes Wings Over Summer will stand as a tribute to their courage.", "option_216": "Diving into a revolutionary new video game, Marcus and his friends escape a stagnant society, entering into a world that defies their wildest imaginations. But from the moment that he logs in, Marcus finds himself separated from his friends and thrown into remote village under attack by a horde of goblins. Forced into battle, Marcus rallies the beleaguered villagers and with their help, manages to drive off the invading creatures. With the village in ruins and their supplies spoiled, the survivors desperately turn to Marcus for help in rebuilding the village. Realizing that this game is nothing like he's ever played before, Marcus is swept up into a whirlwind of adventure as he struggles to defend his new home, quickly finding that marauding goblins are the least of his problems.", "option_217": "Poland, 1939. A country, torn by the occupation of two unlikely allies - Nazi Germany and the Soviet Union. On the border of this newly divided territory, a young Wehrmacht Unteroffizier, Werner and a Soviet Military Interpreter, Kira meet and fall in love against all odds. Both forced into the military against their will, they wish for one thing only - a peaceful life together. Everything is set for Kira to defect and marry Werner... But the German army invades the Soviet Union, and now the two lovers are forced to fight against each other on the opposite sides of the frontline; trying to keep their humanity as more and more atrocities are committed by both armies. They have to decide if their love is stronger than the devastation surrounding them or succumb to the hate as sworn enemies should. Partially based on true events, this novel will take you on the unforgettable journey through war-torn countries, where hope can be lost in no-man\u2019s-land, and one will have to go to great lengths not to lose sight of it.", "option_218": "Coming in the wake of Fin Gall, Dubh-linn, continues the story of Thorgrim Night Wolf and his band of Viking warriors as they plunder the Irish coast. Eager to return to his native Norway, Thorgrim agrees to participate in one last raid under the command of a man he does not trust. But the Northmen, he finds, are no longer simply invaders on foreign soil. They have become a part of the Irish kings\u2019 ongoing struggle for power, and far from securing a means to return home, Thorgrim and his men are plunged into a battle for the throne of Tara, a battle that will test their strength and loyalty as none has before.", "option_219": "The Fleet's Old Lady - out for one last dance. Avalon was the flagship of the Castle Federation in the last war, now twenty years past. The first of the deep space carriers, no other warship in the fleet holds as many honors or has recorded as many kills. No other warship in the fleet is as old. Accepting the inevitable, the Federation Space Navy has decided to refit her and send her on a tour of the frontier, showing the flag to their allies and enemies as a reminder of her glory - and then decommission her for good. But Avalon has been a backwater posting for ten years - and has problems a mere refit can't fix. The systems along her planned tour have been seeing pirates for the first time in decades, and there are rumblings of Commonwealth scouting ships all along the border. It may be Avalon's final tour - but it looks to be anything but quiet!", "option_220": "History and legend combine in the gripping tale of Hakon Haraldsson, a Christian boy who once fought for the High Seat of a Viking realm. It is 935 A.D. and the North is in turmoil. King Harald Fairhair has died, leaving the High Seat of the realm to his murderous son, Erik Bloodaxe. To solidify his claim, Erik ruthlessly disposes of all claimants to his throne, save one: his youngest brother Hakon. Erik's surviving enemies send a ship to Wessex, where the Christian King Athelstan is raising Hakon. Unable to avoid his fate, he returns to the Viking North to face his brother and claim his birthright, only to discover that victory will demand sacrifices beyond his wildest nightmares.", "option_221": "Going through an apocalyptic event doesn't mean the end of the world. My dad is a modern day Noah, you know building an ark, trying to save folks and getting my brother, and I ready for the impending end of days \u2013 whatever that means. Nothing in his prepper manuals had us ready for what actually happened. I had nothing to prepare me for Jaeden and Lachlan. Heck, I don\u2019t know of any girl that would have been prepared for those two. There was nothing to prepare us for the things that go bump in the night or zombies, although now that I think on it, zombies might have been easier to deal with than what really happened. No, an apocalyptic event is just a set-up for things in our world to be shaken and stirred. What will rise from the ruins remains to be seen.", "option_222": "Burned by a dragon. Abandoned for the windrocs to pick over. The traitor Ra'aba tried to silence Hualiama forever. But he reckoned without the strength of a dragonet's paw, and the courage of a girl who refused to die. Only an extraordinary friendship will save Hualiama's beloved kingdom of Fra'anior and restore the King to the Onyx Throne. Flicker, the valiant dragonet. Hualiama, a foundling, adopted into the royal family. The power of a friendship which paid the ultimate price. This is the tale of Hualiama Dragonfriend and a love which became legend.", "option_223": "More than anything, I crave adventure. But in the disease ridden land of Verald, life is mapped out much like the well-established rings of our kingdom. At the very heart reigns our vicious king and Lord Irrik, an invincible dragon shifter, at his side. Their power poisons the land and the people, leading to a steadily mounting number of enemies. But change is coming. When the rebellion surges, the king strikes back. Captured by Lord Irrik, I'm suddenly embroiled in a deadly game. One where I'm desperate to understand the rules. Because I'm not only fighting for my life... but also a love that could be the very key to my freedom.", "option_224": "The small Colorado mountain town of Hutchins Creek promises to be the perfect location for NY reporter Paige MacKenzie to complete an assignment for The Manhattan Post. Situated along the Durango-Silverton train line, not only does the town set an ideal scene for an article on Old West railroad history, it also serves Paige's personal to meet up with favorite cowboy Jake Norris, of Jackson Hole, for a little romance. When a mysterious 1920's coin is discovered behind the Hutchins Creek Railroad Museum, Paige starts digging into four generations of Hutchins family history, with a little help from the Denver Mint. As legends of steam engines and coin mintage mingle, will Paige discover the true origin of the coin, or will she find herself riding the rails dangerously close to more than one long-hidden town secret?", "option_225": "I know what I\u2019m doing when I text Scott at four in the morning. He knows what I\u2019m doing, too. That\u2019s why he shows up twenty-three minutes later, freshly showered with a condom in his pocket and a barely dissolved breath mint on his tongue. I smirk as he looms over me. 'You are such a dirty old man.\u201d 'We need to stop doing this.\u201d 'Why?\u201d 'Because you\u2019re twenty-one and I\u2019m not. Because I want to take you on a f***ing date and you won\u2019t. Because we wind up yelling at each other half the time.\u201d 'But the rest of the time you\u2019re inside me and it feels so good, right?\u201d His eyes darken and I don\u2019t need to look down to know he\u2019s hard for me."};
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "selection_feedback_2"
  selection_feedback_2Clock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'How much did you like the book summary you just read?\n\nPlease click the button to choose your response.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  enjoyment_1 = new visual.Rect ({
    win: psychoJS.window, name: 'enjoyment_1', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [(- 0.4), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#5977e3'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  enjoyment_2 = new visual.Rect ({
    win: psychoJS.window, name: 'enjoyment_2', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [(- 0.3), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#7b9ff9'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  enjoyment_3 = new visual.Rect ({
    win: psychoJS.window, name: 'enjoyment_3', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [(- 0.2), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#9ebeff'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  enjoyment_4 = new visual.Rect ({
    win: psychoJS.window, name: 'enjoyment_4', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [(- 0.1), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#c0d4f5'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  enjoyment_5 = new visual.Rect ({
    win: psychoJS.window, name: 'enjoyment_5', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#ffffff'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  enjoyment_6 = new visual.Rect ({
    win: psychoJS.window, name: 'enjoyment_6', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0.1, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#f2cbb7'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  enjoyment_7 = new visual.Rect ({
    win: psychoJS.window, name: 'enjoyment_7', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0.2, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#f7ac8e'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  enjoyment_8 = new visual.Rect ({
    win: psychoJS.window, name: 'enjoyment_8', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0.3, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#ee8468'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  enjoyment_9 = new visual.Rect ({
    win: psychoJS.window, name: 'enjoyment_9', 
    width: [0.1, 0.15][0], height: [0.1, 0.15][1],
    ori: 0.0, pos: [0.4, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('#d65244'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  feedback_like = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_like',
    text: 'Extremely like',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  feedback_dislike = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dislike',
    text: 'Extremely dislike',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  feedback_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_1',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  feedback_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_2',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  feedback_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_3',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  feedback_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_4',
    text: '4',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.1), 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -15.0 
  });
  
  feedback_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_5',
    text: '5',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0, 0.0, 0.0]),  opacity: undefined,
    depth: -16.0 
  });
  
  feedback_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_6',
    text: '6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });
  
  feedback_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_7',
    text: '7',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  feedback_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_8',
    text: '8',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -19.0 
  });
  
  feedback_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_9',
    text: '9',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  // Run 'Begin Experiment' code from code_2
  selected_enjoyment = [];
  enjoyments = [enjoyment_1, enjoyment_2, enjoyment_3, enjoyment_4, enjoyment_5, enjoyment_6, enjoyment_7, enjoyment_8, enjoyment_9];
  enjoyment_index = "enjoyment_";
  enjoyment_dict = {};
  for (var i, _pj_c = 0, _pj_a = util.range(1, 10), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      enjoyment_index = ("enjoyment_" + i.toString());
      enjoyment_dict[enjoyment_index] = enjoyments[(i - 1)];
  }
  console.log(enjoyment_dict);
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "selection_feedback_3"
  selection_feedback_3Clock = new util.Clock();
  feedback_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  uncertainty_1 = new visual.Rect ({
    win: psychoJS.window, name: 'uncertainty_1', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0.15],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  uncertainty_2 = new visual.Rect ({
    win: psychoJS.window, name: 'uncertainty_2', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  uncertainty_3 = new visual.Rect ({
    win: psychoJS.window, name: 'uncertainty_3', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0.05],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  uncertainty_4 = new visual.Rect ({
    win: psychoJS.window, name: 'uncertainty_4', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  uncertainty_5 = new visual.Rect ({
    win: psychoJS.window, name: 'uncertainty_5', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.05)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  uncertainty_6 = new visual.Rect ({
    win: psychoJS.window, name: 'uncertainty_6', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.1)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  uncertainty_7 = new visual.Rect ({
    win: psychoJS.window, name: 'uncertainty_7', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.15)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  uncertainty_8 = new visual.Rect ({
    win: psychoJS.window, name: 'uncertainty_8', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.2)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  uncertainty_9 = new visual.Rect ({
    win: psychoJS.window, name: 'uncertainty_9', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, (- 0.25)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  uncertainty_text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_1',
    text: 'Extremely certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  uncertainty_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_2',
    text: 'Very certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  uncertainty_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_3',
    text: 'Somewhat certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  uncertainty_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_4',
    text: 'Slightly certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  uncertainty_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_5',
    text: 'Neither certain nor uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  uncertainty_text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_6',
    text: 'Slightly uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -15.0 
  });
  
  uncertainty_text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_7',
    text: 'Somewhat uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -16.0 
  });
  
  uncertainty_text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_8',
    text: 'Very uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });
  
  uncertainty_text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_text_9',
    text: 'Extremely uncertain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "recall_check_instruction"
  recall_check_instructionClock = new util.Clock();
  recall_instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_instruction_text',
    text: 'In the following task, you will complete a recall task. \nYou will indicate whether or not you have read\nthe summary of a book in the previous task. \n\nIf you have read the summary, \nplease click the button "Yes, I have read it". \nIf not, please click the button "No, I have not read it". \n\nPlease note that this is just a recall task. \nWe do NOT use this recall check to reject your submission. \n\nPress the spacebar on your keyboard to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  recall_instruction_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall_check"
  recall_checkClock = new util.Clock();
  recall_check_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_check_text',
    text: 'Have you read this book summary in the previous task?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  recall_check_book = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_check_book',
    text: 'text',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  recall_check_yes = new visual.Rect ({
    win: psychoJS.window, name: 'recall_check_yes', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, pos: [(- 0.3), (- 0.4)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  recall_check_no = new visual.Rect ({
    win: psychoJS.window, name: 'recall_check_no', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, pos: [0.3, (- 0.4)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  recall_check_yes_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_check_yes_text',
    text: 'Yes, I have read it',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  recall_check_no_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_check_no_text',
    text: 'No, I have not read it',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  recall_check_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  recall_check_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  finish_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'finish_text',
    text: 'Thank you! \n\nYou have completed this task.\n\nNow, wait for 5 seconds. \n\nYou will be soon redirected to a survey web page. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(text);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instruction_1_key_resp_allKeys;
var instruction_1Components;
function instruction_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_1' ---
    t = 0;
    instruction_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruction_1_key_resp.keys = undefined;
    instruction_1_key_resp.rt = undefined;
    _instruction_1_key_resp_allKeys = [];
    // keep track of which components have finished
    instruction_1Components = [];
    instruction_1Components.push(instruction_1_text_1);
    instruction_1Components.push(instruction_1_key_resp);
    
    for (const thisComponent of instruction_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_1' ---
    // get current time
    t = instruction_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_1_text_1* updates
    if (t >= 0.0 && instruction_1_text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_1_text_1.tStart = t;  // (not accounting for frame time here)
      instruction_1_text_1.frameNStart = frameN;  // exact frame index
      
      instruction_1_text_1.setAutoDraw(true);
    }

    
    // *instruction_1_key_resp* updates
    if (t >= 3 && instruction_1_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_1_key_resp.tStart = t;  // (not accounting for frame time here)
      instruction_1_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_1_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_1_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_1_key_resp.clearEvents(); });
    }

    if (instruction_1_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_1_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_1_key_resp_allKeys = _instruction_1_key_resp_allKeys.concat(theseKeys);
      if (_instruction_1_key_resp_allKeys.length > 0) {
        instruction_1_key_resp.keys = _instruction_1_key_resp_allKeys[_instruction_1_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instruction_1_key_resp.rt = _instruction_1_key_resp_allKeys[_instruction_1_key_resp_allKeys.length - 1].rt;
        instruction_1_key_resp.duration = _instruction_1_key_resp_allKeys[_instruction_1_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_1' ---
    for (const thisComponent of instruction_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction_1_key_resp.corr, level);
    }
    psychoJS.experiment.addData('instruction_1_key_resp.keys', instruction_1_key_resp.keys);
    if (typeof instruction_1_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_1_key_resp.rt', instruction_1_key_resp.rt);
        psychoJS.experiment.addData('instruction_1_key_resp.duration', instruction_1_key_resp.duration);
        routineTimer.reset();
        }
    
    instruction_1_key_resp.stop();
    // the Routine "instruction_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instruction_2_key_resp_allKeys;
var instruction_2Components;
function instruction_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2' ---
    t = 0;
    instruction_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruction_2_key_resp.keys = undefined;
    instruction_2_key_resp.rt = undefined;
    _instruction_2_key_resp_allKeys = [];
    // keep track of which components have finished
    instruction_2Components = [];
    instruction_2Components.push(instruction_2_text);
    instruction_2Components.push(instruction_2_key_resp);
    
    for (const thisComponent of instruction_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2' ---
    // get current time
    t = instruction_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_2_text* updates
    if (t >= 0.0 && instruction_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_2_text.tStart = t;  // (not accounting for frame time here)
      instruction_2_text.frameNStart = frameN;  // exact frame index
      
      instruction_2_text.setAutoDraw(true);
    }

    
    // *instruction_2_key_resp* updates
    if (t >= 3 && instruction_2_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_2_key_resp.tStart = t;  // (not accounting for frame time here)
      instruction_2_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_2_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_2_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_2_key_resp.clearEvents(); });
    }

    if (instruction_2_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_2_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_2_key_resp_allKeys = _instruction_2_key_resp_allKeys.concat(theseKeys);
      if (_instruction_2_key_resp_allKeys.length > 0) {
        instruction_2_key_resp.keys = _instruction_2_key_resp_allKeys[_instruction_2_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instruction_2_key_resp.rt = _instruction_2_key_resp_allKeys[_instruction_2_key_resp_allKeys.length - 1].rt;
        instruction_2_key_resp.duration = _instruction_2_key_resp_allKeys[_instruction_2_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2' ---
    for (const thisComponent of instruction_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction_2_key_resp.corr, level);
    }
    psychoJS.experiment.addData('instruction_2_key_resp.keys', instruction_2_key_resp.keys);
    if (typeof instruction_2_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_2_key_resp.rt', instruction_2_key_resp.rt);
        psychoJS.experiment.addData('instruction_2_key_resp.duration', instruction_2_key_resp.duration);
        routineTimer.reset();
        }
    
    instruction_2_key_resp.stop();
    // the Routine "instruction_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instruction_3_key_resp_allKeys;
var instruction_3Components;
function instruction_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_3' ---
    t = 0;
    instruction_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruction_3_key_resp.keys = undefined;
    instruction_3_key_resp.rt = undefined;
    _instruction_3_key_resp_allKeys = [];
    // keep track of which components have finished
    instruction_3Components = [];
    instruction_3Components.push(instruction_3_text);
    instruction_3Components.push(instruction_3_key_resp);
    
    for (const thisComponent of instruction_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_3' ---
    // get current time
    t = instruction_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_3_text* updates
    if (t >= 0.0 && instruction_3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_3_text.tStart = t;  // (not accounting for frame time here)
      instruction_3_text.frameNStart = frameN;  // exact frame index
      
      instruction_3_text.setAutoDraw(true);
    }

    
    // *instruction_3_key_resp* updates
    if (t >= 3 && instruction_3_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_3_key_resp.tStart = t;  // (not accounting for frame time here)
      instruction_3_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_3_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_3_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_3_key_resp.clearEvents(); });
    }

    if (instruction_3_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_3_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_3_key_resp_allKeys = _instruction_3_key_resp_allKeys.concat(theseKeys);
      if (_instruction_3_key_resp_allKeys.length > 0) {
        instruction_3_key_resp.keys = _instruction_3_key_resp_allKeys[_instruction_3_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instruction_3_key_resp.rt = _instruction_3_key_resp_allKeys[_instruction_3_key_resp_allKeys.length - 1].rt;
        instruction_3_key_resp.duration = _instruction_3_key_resp_allKeys[_instruction_3_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_3' ---
    for (const thisComponent of instruction_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction_3_key_resp.corr, level);
    }
    psychoJS.experiment.addData('instruction_3_key_resp.keys', instruction_3_key_resp.keys);
    if (typeof instruction_3_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_3_key_resp.rt', instruction_3_key_resp.rt);
        psychoJS.experiment.addData('instruction_3_key_resp.duration', instruction_3_key_resp.duration);
        routineTimer.reset();
        }
    
    instruction_3_key_resp.stop();
    // the Routine "instruction_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instruction_4_key_resp_allKeys;
var instruction_4Components;
function instruction_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_4' ---
    t = 0;
    instruction_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruction_4_key_resp.keys = undefined;
    instruction_4_key_resp.rt = undefined;
    _instruction_4_key_resp_allKeys = [];
    // keep track of which components have finished
    instruction_4Components = [];
    instruction_4Components.push(instruction_4_text);
    instruction_4Components.push(instruction_4_key_resp);
    
    for (const thisComponent of instruction_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_4' ---
    // get current time
    t = instruction_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_4_text* updates
    if (t >= 0.0 && instruction_4_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_4_text.tStart = t;  // (not accounting for frame time here)
      instruction_4_text.frameNStart = frameN;  // exact frame index
      
      instruction_4_text.setAutoDraw(true);
    }

    
    // *instruction_4_key_resp* updates
    if (t >= 3 && instruction_4_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_4_key_resp.tStart = t;  // (not accounting for frame time here)
      instruction_4_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_4_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_4_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_4_key_resp.clearEvents(); });
    }

    if (instruction_4_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_4_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_4_key_resp_allKeys = _instruction_4_key_resp_allKeys.concat(theseKeys);
      if (_instruction_4_key_resp_allKeys.length > 0) {
        instruction_4_key_resp.keys = _instruction_4_key_resp_allKeys[_instruction_4_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instruction_4_key_resp.rt = _instruction_4_key_resp_allKeys[_instruction_4_key_resp_allKeys.length - 1].rt;
        instruction_4_key_resp.duration = _instruction_4_key_resp_allKeys[_instruction_4_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_4' ---
    for (const thisComponent of instruction_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction_4_key_resp.corr, level);
    }
    psychoJS.experiment.addData('instruction_4_key_resp.keys', instruction_4_key_resp.keys);
    if (typeof instruction_4_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_4_key_resp.rt', instruction_4_key_resp.rt);
        psychoJS.experiment.addData('instruction_4_key_resp.duration', instruction_4_key_resp.duration);
        routineTimer.reset();
        }
    
    instruction_4_key_resp.stop();
    // the Routine "instruction_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _training_1_key_resp_allKeys;
var training_1Components;
function training_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_1' ---
    t = 0;
    training_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    training_1_key_resp.keys = undefined;
    training_1_key_resp.rt = undefined;
    _training_1_key_resp_allKeys = [];
    // Run 'Begin Routine' code from code_4
    training_1_text.setAlignHoriz("left");
    
    // keep track of which components have finished
    training_1Components = [];
    training_1Components.push(training_1_text);
    training_1Components.push(training_1_key_resp);
    training_1Components.push(training_1_option_1);
    training_1Components.push(training_1_option_2);
    training_1Components.push(training_1_option_3);
    training_1Components.push(training_1_option_4);
    training_1Components.push(training_1_option_5);
    training_1Components.push(training_1_option_6);
    training_1Components.push(training_1_option_7);
    training_1Components.push(training_1_option_8);
    training_1Components.push(training_1_option_9);
    
    for (const thisComponent of training_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_1' ---
    // get current time
    t = training_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *training_1_text* updates
    if (t >= 0.0 && training_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_text.tStart = t;  // (not accounting for frame time here)
      training_1_text.frameNStart = frameN;  // exact frame index
      
      training_1_text.setAutoDraw(true);
    }

    
    // *training_1_key_resp* updates
    if (t >= 3 && training_1_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_key_resp.tStart = t;  // (not accounting for frame time here)
      training_1_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { training_1_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { training_1_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { training_1_key_resp.clearEvents(); });
    }

    if (training_1_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = training_1_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _training_1_key_resp_allKeys = _training_1_key_resp_allKeys.concat(theseKeys);
      if (_training_1_key_resp_allKeys.length > 0) {
        training_1_key_resp.keys = _training_1_key_resp_allKeys[_training_1_key_resp_allKeys.length - 1].name;  // just the last key pressed
        training_1_key_resp.rt = _training_1_key_resp_allKeys[_training_1_key_resp_allKeys.length - 1].rt;
        training_1_key_resp.duration = _training_1_key_resp_allKeys[_training_1_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *training_1_option_1* updates
    if (t >= 0 && training_1_option_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_option_1.tStart = t;  // (not accounting for frame time here)
      training_1_option_1.frameNStart = frameN;  // exact frame index
      
      training_1_option_1.setAutoDraw(true);
    }

    
    // *training_1_option_2* updates
    if (t >= 0 && training_1_option_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_option_2.tStart = t;  // (not accounting for frame time here)
      training_1_option_2.frameNStart = frameN;  // exact frame index
      
      training_1_option_2.setAutoDraw(true);
    }

    
    // *training_1_option_3* updates
    if (t >= 0 && training_1_option_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_option_3.tStart = t;  // (not accounting for frame time here)
      training_1_option_3.frameNStart = frameN;  // exact frame index
      
      training_1_option_3.setAutoDraw(true);
    }

    
    // *training_1_option_4* updates
    if (t >= 0 && training_1_option_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_option_4.tStart = t;  // (not accounting for frame time here)
      training_1_option_4.frameNStart = frameN;  // exact frame index
      
      training_1_option_4.setAutoDraw(true);
    }

    
    // *training_1_option_5* updates
    if (t >= 0 && training_1_option_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_option_5.tStart = t;  // (not accounting for frame time here)
      training_1_option_5.frameNStart = frameN;  // exact frame index
      
      training_1_option_5.setAutoDraw(true);
    }

    
    // *training_1_option_6* updates
    if (t >= 0 && training_1_option_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_option_6.tStart = t;  // (not accounting for frame time here)
      training_1_option_6.frameNStart = frameN;  // exact frame index
      
      training_1_option_6.setAutoDraw(true);
    }

    
    // *training_1_option_7* updates
    if (t >= 0 && training_1_option_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_option_7.tStart = t;  // (not accounting for frame time here)
      training_1_option_7.frameNStart = frameN;  // exact frame index
      
      training_1_option_7.setAutoDraw(true);
    }

    
    // *training_1_option_8* updates
    if (t >= 0 && training_1_option_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_option_8.tStart = t;  // (not accounting for frame time here)
      training_1_option_8.frameNStart = frameN;  // exact frame index
      
      training_1_option_8.setAutoDraw(true);
    }

    
    // *training_1_option_9* updates
    if (t >= 0 && training_1_option_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_1_option_9.tStart = t;  // (not accounting for frame time here)
      training_1_option_9.frameNStart = frameN;  // exact frame index
      
      training_1_option_9.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_1' ---
    for (const thisComponent of training_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(training_1_key_resp.corr, level);
    }
    psychoJS.experiment.addData('training_1_key_resp.keys', training_1_key_resp.keys);
    if (typeof training_1_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('training_1_key_resp.rt', training_1_key_resp.rt);
        psychoJS.experiment.addData('training_1_key_resp.duration', training_1_key_resp.duration);
        routineTimer.reset();
        }
    
    training_1_key_resp.stop();
    // the Routine "training_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gotValidClick;
var training_2Components;
function training_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_2' ---
    t = 0;
    training_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the training_2_mouse
    // current position of the mouse:
    training_2_mouse.x = [];
    training_2_mouse.y = [];
    training_2_mouse.leftButton = [];
    training_2_mouse.midButton = [];
    training_2_mouse.rightButton = [];
    training_2_mouse.time = [];
    training_2_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from code_5
    training_2_text.setAlignHoriz("left");
    
    // keep track of which components have finished
    training_2Components = [];
    training_2Components.push(training_2_text);
    training_2Components.push(training_2_option_1);
    training_2Components.push(training_2_option_2);
    training_2Components.push(training_2_option_3);
    training_2Components.push(training_2_option_4);
    training_2Components.push(training_2_option_5);
    training_2Components.push(training_2_option_6);
    training_2Components.push(training_2_option_7);
    training_2Components.push(training_2_option_8);
    training_2Components.push(training_2_option_9);
    training_2Components.push(training_2_mouse);
    
    for (const thisComponent of training_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function training_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_2' ---
    // get current time
    t = training_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *training_2_text* updates
    if (t >= 0.0 && training_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_text.tStart = t;  // (not accounting for frame time here)
      training_2_text.frameNStart = frameN;  // exact frame index
      
      training_2_text.setAutoDraw(true);
    }

    
    // *training_2_option_1* updates
    if (t >= 0 && training_2_option_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_option_1.tStart = t;  // (not accounting for frame time here)
      training_2_option_1.frameNStart = frameN;  // exact frame index
      
      training_2_option_1.setAutoDraw(true);
    }

    
    // *training_2_option_2* updates
    if (t >= 0 && training_2_option_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_option_2.tStart = t;  // (not accounting for frame time here)
      training_2_option_2.frameNStart = frameN;  // exact frame index
      
      training_2_option_2.setAutoDraw(true);
    }

    
    // *training_2_option_3* updates
    if (t >= 0 && training_2_option_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_option_3.tStart = t;  // (not accounting for frame time here)
      training_2_option_3.frameNStart = frameN;  // exact frame index
      
      training_2_option_3.setAutoDraw(true);
    }

    
    // *training_2_option_4* updates
    if (t >= 0 && training_2_option_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_option_4.tStart = t;  // (not accounting for frame time here)
      training_2_option_4.frameNStart = frameN;  // exact frame index
      
      training_2_option_4.setAutoDraw(true);
    }

    
    // *training_2_option_5* updates
    if (t >= 0 && training_2_option_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_option_5.tStart = t;  // (not accounting for frame time here)
      training_2_option_5.frameNStart = frameN;  // exact frame index
      
      training_2_option_5.setAutoDraw(true);
    }

    
    // *training_2_option_6* updates
    if (t >= 0 && training_2_option_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_option_6.tStart = t;  // (not accounting for frame time here)
      training_2_option_6.frameNStart = frameN;  // exact frame index
      
      training_2_option_6.setAutoDraw(true);
    }

    
    // *training_2_option_7* updates
    if (t >= 0 && training_2_option_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_option_7.tStart = t;  // (not accounting for frame time here)
      training_2_option_7.frameNStart = frameN;  // exact frame index
      
      training_2_option_7.setAutoDraw(true);
    }

    
    // *training_2_option_8* updates
    if (t >= 0 && training_2_option_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_option_8.tStart = t;  // (not accounting for frame time here)
      training_2_option_8.frameNStart = frameN;  // exact frame index
      
      training_2_option_8.setAutoDraw(true);
    }

    
    // *training_2_option_9* updates
    if (t >= 0 && training_2_option_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_option_9.tStart = t;  // (not accounting for frame time here)
      training_2_option_9.frameNStart = frameN;  // exact frame index
      
      training_2_option_9.setAutoDraw(true);
    }

    // *training_2_mouse* updates
    if (t >= 0 && training_2_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_2_mouse.tStart = t;  // (not accounting for frame time here)
      training_2_mouse.frameNStart = frameN;  // exact frame index
      
      training_2_mouse.status = PsychoJS.Status.STARTED;
      training_2_mouse.mouseClock.reset();
      prevButtonState = training_2_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (training_2_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = training_2_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [training_2_option_7]) {
            if (obj.contains(training_2_mouse)) {
              gotValidClick = true;
              training_2_mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = training_2_mouse.getPos();
          training_2_mouse.x.push(_mouseXYs[0]);
          training_2_mouse.y.push(_mouseXYs[1]);
          training_2_mouse.leftButton.push(_mouseButtons[0]);
          training_2_mouse.midButton.push(_mouseButtons[1]);
          training_2_mouse.rightButton.push(_mouseButtons[2]);
          training_2_mouse.time.push(training_2_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_2' ---
    for (const thisComponent of training_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (training_2_mouse.x) {  psychoJS.experiment.addData('training_2_mouse.x', training_2_mouse.x[0])};
    if (training_2_mouse.y) {  psychoJS.experiment.addData('training_2_mouse.y', training_2_mouse.y[0])};
    if (training_2_mouse.leftButton) {  psychoJS.experiment.addData('training_2_mouse.leftButton', training_2_mouse.leftButton[0])};
    if (training_2_mouse.midButton) {  psychoJS.experiment.addData('training_2_mouse.midButton', training_2_mouse.midButton[0])};
    if (training_2_mouse.rightButton) {  psychoJS.experiment.addData('training_2_mouse.rightButton', training_2_mouse.rightButton[0])};
    if (training_2_mouse.time) {  psychoJS.experiment.addData('training_2_mouse.time', training_2_mouse.time[0])};
    if (training_2_mouse.clicked_name) {  psychoJS.experiment.addData('training_2_mouse.clicked_name', training_2_mouse.clicked_name[0])};
    
    // the Routine "training_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _training_3_key_resp_allKeys;
var training_3Components;
function training_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_3' ---
    t = 0;
    training_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    training_3_key_resp.keys = undefined;
    training_3_key_resp.rt = undefined;
    _training_3_key_resp_allKeys = [];
    // keep track of which components have finished
    training_3Components = [];
    training_3Components.push(training_3_text);
    training_3Components.push(training_3_key_resp);
    
    for (const thisComponent of training_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_3' ---
    // get current time
    t = training_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *training_3_text* updates
    if (t >= 0.0 && training_3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_3_text.tStart = t;  // (not accounting for frame time here)
      training_3_text.frameNStart = frameN;  // exact frame index
      
      training_3_text.setAutoDraw(true);
    }

    
    // *training_3_key_resp* updates
    if (t >= 3 && training_3_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_3_key_resp.tStart = t;  // (not accounting for frame time here)
      training_3_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { training_3_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { training_3_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { training_3_key_resp.clearEvents(); });
    }

    if (training_3_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = training_3_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _training_3_key_resp_allKeys = _training_3_key_resp_allKeys.concat(theseKeys);
      if (_training_3_key_resp_allKeys.length > 0) {
        training_3_key_resp.keys = _training_3_key_resp_allKeys[_training_3_key_resp_allKeys.length - 1].name;  // just the last key pressed
        training_3_key_resp.rt = _training_3_key_resp_allKeys[_training_3_key_resp_allKeys.length - 1].rt;
        training_3_key_resp.duration = _training_3_key_resp_allKeys[_training_3_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_3' ---
    for (const thisComponent of training_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(training_3_key_resp.corr, level);
    }
    psychoJS.experiment.addData('training_3_key_resp.keys', training_3_key_resp.keys);
    if (typeof training_3_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('training_3_key_resp.rt', training_3_key_resp.rt);
        psychoJS.experiment.addData('training_3_key_resp.duration', training_3_key_resp.duration);
        routineTimer.reset();
        }
    
    training_3_key_resp.stop();
    // the Routine "training_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var training_4Components;
function training_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_4' ---
    t = 0;
    training_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_10
    training_4_text.setAlignHoriz("left");
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    training_4Components = [];
    training_4Components.push(training_4_text);
    training_4Components.push(key_resp_2);
    
    for (const thisComponent of training_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_4' ---
    // get current time
    t = training_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *training_4_text* updates
    if (t >= 0.0 && training_4_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_4_text.tStart = t;  // (not accounting for frame time here)
      training_4_text.frameNStart = frameN;  // exact frame index
      
      training_4_text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 20 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_4' ---
    for (const thisComponent of training_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "training_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training_5Components;
function training_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_5' ---
    t = 0;
    training_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    training_5Components = [];
    training_5Components.push(feedback_text_2);
    training_5Components.push(training_5_enjoyment_1);
    training_5Components.push(training_5_enjoyment_2);
    training_5Components.push(training_5_enjoyment_3);
    training_5Components.push(training_5_enjoyment_4);
    training_5Components.push(training_5_enjoyment_5);
    training_5Components.push(training_5_enjoyment_6);
    training_5Components.push(training_5_enjoyment_7);
    training_5Components.push(training_5_enjoyment_8);
    training_5Components.push(training_5_enjoyment_9);
    training_5Components.push(feedback_like_2);
    training_5Components.push(feedback_dislike_2);
    training_5Components.push(training_5_feedback_1);
    training_5Components.push(training_5_feedback_2);
    training_5Components.push(training_5_feedback_3);
    training_5Components.push(training_5_feedback_4);
    training_5Components.push(training_5_feedback_5);
    training_5Components.push(training_5_feedback_6);
    training_5Components.push(training_5_feedback_7);
    training_5Components.push(training_5_feedback_8);
    training_5Components.push(training_5_feedback_9);
    training_5Components.push(mouse_4);
    
    for (const thisComponent of training_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_5' ---
    // get current time
    t = training_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text_2* updates
    if (t >= 0.0 && feedback_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text_2.tStart = t;  // (not accounting for frame time here)
      feedback_text_2.frameNStart = frameN;  // exact frame index
      
      feedback_text_2.setAutoDraw(true);
    }

    
    // *training_5_enjoyment_1* updates
    if (t >= 0.0 && training_5_enjoyment_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_enjoyment_1.tStart = t;  // (not accounting for frame time here)
      training_5_enjoyment_1.frameNStart = frameN;  // exact frame index
      
      training_5_enjoyment_1.setAutoDraw(true);
    }

    
    // *training_5_enjoyment_2* updates
    if (t >= 0.0 && training_5_enjoyment_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_enjoyment_2.tStart = t;  // (not accounting for frame time here)
      training_5_enjoyment_2.frameNStart = frameN;  // exact frame index
      
      training_5_enjoyment_2.setAutoDraw(true);
    }

    
    // *training_5_enjoyment_3* updates
    if (t >= 0.0 && training_5_enjoyment_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_enjoyment_3.tStart = t;  // (not accounting for frame time here)
      training_5_enjoyment_3.frameNStart = frameN;  // exact frame index
      
      training_5_enjoyment_3.setAutoDraw(true);
    }

    
    // *training_5_enjoyment_4* updates
    if (t >= 0.0 && training_5_enjoyment_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_enjoyment_4.tStart = t;  // (not accounting for frame time here)
      training_5_enjoyment_4.frameNStart = frameN;  // exact frame index
      
      training_5_enjoyment_4.setAutoDraw(true);
    }

    
    // *training_5_enjoyment_5* updates
    if (t >= 0.0 && training_5_enjoyment_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_enjoyment_5.tStart = t;  // (not accounting for frame time here)
      training_5_enjoyment_5.frameNStart = frameN;  // exact frame index
      
      training_5_enjoyment_5.setAutoDraw(true);
    }

    
    // *training_5_enjoyment_6* updates
    if (t >= 0.0 && training_5_enjoyment_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_enjoyment_6.tStart = t;  // (not accounting for frame time here)
      training_5_enjoyment_6.frameNStart = frameN;  // exact frame index
      
      training_5_enjoyment_6.setAutoDraw(true);
    }

    
    // *training_5_enjoyment_7* updates
    if (t >= 0.0 && training_5_enjoyment_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_enjoyment_7.tStart = t;  // (not accounting for frame time here)
      training_5_enjoyment_7.frameNStart = frameN;  // exact frame index
      
      training_5_enjoyment_7.setAutoDraw(true);
    }

    
    // *training_5_enjoyment_8* updates
    if (t >= 0.0 && training_5_enjoyment_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_enjoyment_8.tStart = t;  // (not accounting for frame time here)
      training_5_enjoyment_8.frameNStart = frameN;  // exact frame index
      
      training_5_enjoyment_8.setAutoDraw(true);
    }

    
    // *training_5_enjoyment_9* updates
    if (t >= 0.0 && training_5_enjoyment_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_enjoyment_9.tStart = t;  // (not accounting for frame time here)
      training_5_enjoyment_9.frameNStart = frameN;  // exact frame index
      
      training_5_enjoyment_9.setAutoDraw(true);
    }

    
    // *feedback_like_2* updates
    if (t >= 0.0 && feedback_like_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_like_2.tStart = t;  // (not accounting for frame time here)
      feedback_like_2.frameNStart = frameN;  // exact frame index
      
      feedback_like_2.setAutoDraw(true);
    }

    
    // *feedback_dislike_2* updates
    if (t >= 0.0 && feedback_dislike_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dislike_2.tStart = t;  // (not accounting for frame time here)
      feedback_dislike_2.frameNStart = frameN;  // exact frame index
      
      feedback_dislike_2.setAutoDraw(true);
    }

    
    // *training_5_feedback_1* updates
    if (t >= 0.0 && training_5_feedback_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_feedback_1.tStart = t;  // (not accounting for frame time here)
      training_5_feedback_1.frameNStart = frameN;  // exact frame index
      
      training_5_feedback_1.setAutoDraw(true);
    }

    
    // *training_5_feedback_2* updates
    if (t >= 0.0 && training_5_feedback_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_feedback_2.tStart = t;  // (not accounting for frame time here)
      training_5_feedback_2.frameNStart = frameN;  // exact frame index
      
      training_5_feedback_2.setAutoDraw(true);
    }

    
    // *training_5_feedback_3* updates
    if (t >= 0.0 && training_5_feedback_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_feedback_3.tStart = t;  // (not accounting for frame time here)
      training_5_feedback_3.frameNStart = frameN;  // exact frame index
      
      training_5_feedback_3.setAutoDraw(true);
    }

    
    // *training_5_feedback_4* updates
    if (t >= 0.0 && training_5_feedback_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_feedback_4.tStart = t;  // (not accounting for frame time here)
      training_5_feedback_4.frameNStart = frameN;  // exact frame index
      
      training_5_feedback_4.setAutoDraw(true);
    }

    
    // *training_5_feedback_5* updates
    if (t >= 0.0 && training_5_feedback_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_feedback_5.tStart = t;  // (not accounting for frame time here)
      training_5_feedback_5.frameNStart = frameN;  // exact frame index
      
      training_5_feedback_5.setAutoDraw(true);
    }

    
    // *training_5_feedback_6* updates
    if (t >= 0.0 && training_5_feedback_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_feedback_6.tStart = t;  // (not accounting for frame time here)
      training_5_feedback_6.frameNStart = frameN;  // exact frame index
      
      training_5_feedback_6.setAutoDraw(true);
    }

    
    // *training_5_feedback_7* updates
    if (t >= 0.0 && training_5_feedback_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_feedback_7.tStart = t;  // (not accounting for frame time here)
      training_5_feedback_7.frameNStart = frameN;  // exact frame index
      
      training_5_feedback_7.setAutoDraw(true);
    }

    
    // *training_5_feedback_8* updates
    if (t >= 0.0 && training_5_feedback_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_feedback_8.tStart = t;  // (not accounting for frame time here)
      training_5_feedback_8.frameNStart = frameN;  // exact frame index
      
      training_5_feedback_8.setAutoDraw(true);
    }

    
    // *training_5_feedback_9* updates
    if (t >= 0.0 && training_5_feedback_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_5_feedback_9.tStart = t;  // (not accounting for frame time here)
      training_5_feedback_9.frameNStart = frameN;  // exact frame index
      
      training_5_feedback_9.setAutoDraw(true);
    }

    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [training_5_enjoyment_1, training_5_enjoyment_2, training_5_enjoyment_3, training_5_enjoyment_4, training_5_enjoyment_5, training_5_enjoyment_6, training_5_enjoyment_7, training_5_enjoyment_8, training_5_enjoyment_9]) {
            if (obj.contains(mouse_4)) {
              gotValidClick = true;
              mouse_4.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_4.getPos();
          mouse_4.x.push(_mouseXYs[0]);
          mouse_4.y.push(_mouseXYs[1]);
          mouse_4.leftButton.push(_mouseButtons[0]);
          mouse_4.midButton.push(_mouseButtons[1]);
          mouse_4.rightButton.push(_mouseButtons[2]);
          mouse_4.time.push(mouse_4.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var just_selected_enjoyment;
function training_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_5' ---
    for (const thisComponent of training_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_4.x) {  psychoJS.experiment.addData('mouse_4.x', mouse_4.x[0])};
    if (mouse_4.y) {  psychoJS.experiment.addData('mouse_4.y', mouse_4.y[0])};
    if (mouse_4.leftButton) {  psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton[0])};
    if (mouse_4.midButton) {  psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton[0])};
    if (mouse_4.rightButton) {  psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton[0])};
    if (mouse_4.time) {  psychoJS.experiment.addData('mouse_4.time', mouse_4.time[0])};
    if (mouse_4.clicked_name) {  psychoJS.experiment.addData('mouse_4.clicked_name', mouse_4.clicked_name[0])};
    
    // Run 'End Routine' code from code_7
    just_selected_enjoyment = "";
    if ((mouse_4.clicked_name.slice((- 1))[0] === "training_5_enjoyment_1")) {
        training_7_option_7.fillColor = training_5_enjoyment_1.fillColor;
        just_selected_enjoyment = "extremely disliked";
    }
    if ((mouse_4.clicked_name.slice((- 1))[0] === "training_5_enjoyment_2")) {
        training_7_option_7.fillColor = training_5_enjoyment_2.fillColor;
        just_selected_enjoyment = "very disliked";
    }
    if ((mouse_4.clicked_name.slice((- 1))[0] === "training_5_enjoyment_3")) {
        training_7_option_7.fillColor = training_5_enjoyment_3.fillColor;
        just_selected_enjoyment = "somewhat disliked";
    }
    if ((mouse_4.clicked_name.slice((- 1))[0] === "training_5_enjoyment_4")) {
        training_7_option_7.fillColor = training_5_enjoyment_4.fillColor;
        just_selected_enjoyment = "slightly disliked";
    }
    if ((mouse_4.clicked_name.slice((- 1))[0] === "training_5_enjoyment_5")) {
        training_7_option_7.fillColor = training_5_enjoyment_5.fillColor;
        just_selected_enjoyment = "neither liked nor disliked";
    }
    if ((mouse_4.clicked_name.slice((- 1))[0] === "training_5_enjoyment_6")) {
        training_7_option_7.fillColor = training_5_enjoyment_6.fillColor;
        just_selected_enjoyment = "slightly liked";
    }
    if ((mouse_4.clicked_name.slice((- 1))[0] === "training_5_enjoyment_7")) {
        training_7_option_7.fillColor = training_5_enjoyment_7.fillColor;
        just_selected_enjoyment = "somewhat liked";
    }
    if ((mouse_4.clicked_name.slice((- 1))[0] === "training_5_enjoyment_8")) {
        training_7_option_7.fillColor = training_5_enjoyment_8.fillColor;
        just_selected_enjoyment = "very liked";
    }
    if ((mouse_4.clicked_name.slice((- 1))[0] === "training_5_enjoyment_9")) {
        training_7_option_7.fillColor = training_5_enjoyment_9.fillColor;
        just_selected_enjoyment = "extremely liked";
    }
    
    // the Routine "training_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training_6Components;
function training_6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_6' ---
    t = 0;
    training_6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    feedback_text_4.setText((((((("Then, you need to respond to the following question:\n\n" + "Please indicate how certain you are about your choice.\n") + "As a reminder, you just indicated that\n") + "you ") + just_selected_enjoyment) + " the book.\n\n") + "Please click the button to choose your response."));
    // setup some python lists for storing info about the mouse_6
    // current position of the mouse:
    mouse_6.x = [];
    mouse_6.y = [];
    mouse_6.leftButton = [];
    mouse_6.midButton = [];
    mouse_6.rightButton = [];
    mouse_6.time = [];
    mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    training_6Components = [];
    training_6Components.push(feedback_text_4);
    training_6Components.push(training_6_uncertainty_1);
    training_6Components.push(training_6_uncertainty_2);
    training_6Components.push(training_6_uncertainty_3);
    training_6Components.push(training_6_uncertainty_4);
    training_6Components.push(training_6_uncertainty_5);
    training_6Components.push(training_6_uncertainty_6);
    training_6Components.push(training_6_uncertainty_7);
    training_6Components.push(training_6_uncertainty_8);
    training_6Components.push(training_6_uncertainty_9);
    training_6Components.push(uncertainty_text);
    training_6Components.push(uncertainty_text_10);
    training_6Components.push(uncertainty_text_11);
    training_6Components.push(uncertainty_text_12);
    training_6Components.push(uncertainty_text_13);
    training_6Components.push(uncertainty_text_14);
    training_6Components.push(uncertainty_text_15);
    training_6Components.push(uncertainty_text_16);
    training_6Components.push(uncertainty_text_17);
    training_6Components.push(mouse_6);
    
    for (const thisComponent of training_6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_6' ---
    // get current time
    t = training_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text_4* updates
    if (t >= 0.0 && feedback_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text_4.tStart = t;  // (not accounting for frame time here)
      feedback_text_4.frameNStart = frameN;  // exact frame index
      
      feedback_text_4.setAutoDraw(true);
    }

    
    // *training_6_uncertainty_1* updates
    if (t >= 0.0 && training_6_uncertainty_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_6_uncertainty_1.tStart = t;  // (not accounting for frame time here)
      training_6_uncertainty_1.frameNStart = frameN;  // exact frame index
      
      training_6_uncertainty_1.setAutoDraw(true);
    }

    
    // *training_6_uncertainty_2* updates
    if (t >= 0.0 && training_6_uncertainty_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_6_uncertainty_2.tStart = t;  // (not accounting for frame time here)
      training_6_uncertainty_2.frameNStart = frameN;  // exact frame index
      
      training_6_uncertainty_2.setAutoDraw(true);
    }

    
    // *training_6_uncertainty_3* updates
    if (t >= 0.0 && training_6_uncertainty_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_6_uncertainty_3.tStart = t;  // (not accounting for frame time here)
      training_6_uncertainty_3.frameNStart = frameN;  // exact frame index
      
      training_6_uncertainty_3.setAutoDraw(true);
    }

    
    // *training_6_uncertainty_4* updates
    if (t >= 0.0 && training_6_uncertainty_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_6_uncertainty_4.tStart = t;  // (not accounting for frame time here)
      training_6_uncertainty_4.frameNStart = frameN;  // exact frame index
      
      training_6_uncertainty_4.setAutoDraw(true);
    }

    
    // *training_6_uncertainty_5* updates
    if (t >= 0.0 && training_6_uncertainty_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_6_uncertainty_5.tStart = t;  // (not accounting for frame time here)
      training_6_uncertainty_5.frameNStart = frameN;  // exact frame index
      
      training_6_uncertainty_5.setAutoDraw(true);
    }

    
    // *training_6_uncertainty_6* updates
    if (t >= 0.0 && training_6_uncertainty_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_6_uncertainty_6.tStart = t;  // (not accounting for frame time here)
      training_6_uncertainty_6.frameNStart = frameN;  // exact frame index
      
      training_6_uncertainty_6.setAutoDraw(true);
    }

    
    // *training_6_uncertainty_7* updates
    if (t >= 0.0 && training_6_uncertainty_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_6_uncertainty_7.tStart = t;  // (not accounting for frame time here)
      training_6_uncertainty_7.frameNStart = frameN;  // exact frame index
      
      training_6_uncertainty_7.setAutoDraw(true);
    }

    
    // *training_6_uncertainty_8* updates
    if (t >= 0.0 && training_6_uncertainty_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_6_uncertainty_8.tStart = t;  // (not accounting for frame time here)
      training_6_uncertainty_8.frameNStart = frameN;  // exact frame index
      
      training_6_uncertainty_8.setAutoDraw(true);
    }

    
    // *training_6_uncertainty_9* updates
    if (t >= 0.0 && training_6_uncertainty_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_6_uncertainty_9.tStart = t;  // (not accounting for frame time here)
      training_6_uncertainty_9.frameNStart = frameN;  // exact frame index
      
      training_6_uncertainty_9.setAutoDraw(true);
    }

    
    // *uncertainty_text* updates
    if (t >= 0.0 && uncertainty_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text.tStart = t;  // (not accounting for frame time here)
      uncertainty_text.frameNStart = frameN;  // exact frame index
      
      uncertainty_text.setAutoDraw(true);
    }

    
    // *uncertainty_text_10* updates
    if (t >= 0.0 && uncertainty_text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_10.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_10.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_10.setAutoDraw(true);
    }

    
    // *uncertainty_text_11* updates
    if (t >= 0.0 && uncertainty_text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_11.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_11.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_11.setAutoDraw(true);
    }

    
    // *uncertainty_text_12* updates
    if (t >= 0.0 && uncertainty_text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_12.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_12.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_12.setAutoDraw(true);
    }

    
    // *uncertainty_text_13* updates
    if (t >= 0.0 && uncertainty_text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_13.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_13.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_13.setAutoDraw(true);
    }

    
    // *uncertainty_text_14* updates
    if (t >= 0.0 && uncertainty_text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_14.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_14.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_14.setAutoDraw(true);
    }

    
    // *uncertainty_text_15* updates
    if (t >= 0.0 && uncertainty_text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_15.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_15.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_15.setAutoDraw(true);
    }

    
    // *uncertainty_text_16* updates
    if (t >= 0.0 && uncertainty_text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_16.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_16.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_16.setAutoDraw(true);
    }

    
    // *uncertainty_text_17* updates
    if (t >= 0.0 && uncertainty_text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_17.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_17.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_17.setAutoDraw(true);
    }

    // *mouse_6* updates
    if (t >= 3 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [training_6_uncertainty_1, training_6_uncertainty_2, training_6_uncertainty_3, training_6_uncertainty_4, training_6_uncertainty_5, training_6_uncertainty_6, training_6_uncertainty_7, training_6_uncertainty_8, training_6_uncertainty_9]) {
            if (obj.contains(mouse_6)) {
              gotValidClick = true;
              mouse_6.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_6.getPos();
          mouse_6.x.push(_mouseXYs[0]);
          mouse_6.y.push(_mouseXYs[1]);
          mouse_6.leftButton.push(_mouseButtons[0]);
          mouse_6.midButton.push(_mouseButtons[1]);
          mouse_6.rightButton.push(_mouseButtons[2]);
          mouse_6.time.push(mouse_6.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_6' ---
    for (const thisComponent of training_6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_6.x) {  psychoJS.experiment.addData('mouse_6.x', mouse_6.x[0])};
    if (mouse_6.y) {  psychoJS.experiment.addData('mouse_6.y', mouse_6.y[0])};
    if (mouse_6.leftButton) {  psychoJS.experiment.addData('mouse_6.leftButton', mouse_6.leftButton[0])};
    if (mouse_6.midButton) {  psychoJS.experiment.addData('mouse_6.midButton', mouse_6.midButton[0])};
    if (mouse_6.rightButton) {  psychoJS.experiment.addData('mouse_6.rightButton', mouse_6.rightButton[0])};
    if (mouse_6.time) {  psychoJS.experiment.addData('mouse_6.time', mouse_6.time[0])};
    if (mouse_6.clicked_name) {  psychoJS.experiment.addData('mouse_6.clicked_name', mouse_6.clicked_name[0])};
    
    // the Routine "training_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _training_7_key_resp_allKeys;
var training_7Components;
function training_7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_7' ---
    t = 0;
    training_7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_8
    training_7_text.setAlignHoriz("left");
    
    training_7_key_resp.keys = undefined;
    training_7_key_resp.rt = undefined;
    _training_7_key_resp_allKeys = [];
    // keep track of which components have finished
    training_7Components = [];
    training_7Components.push(training_7_text);
    training_7Components.push(training_7_option_1);
    training_7Components.push(training_7_option_2);
    training_7Components.push(training_7_option_3);
    training_7Components.push(training_7_option_4);
    training_7Components.push(training_7_option_5);
    training_7Components.push(training_7_option_6);
    training_7Components.push(training_7_option_7);
    training_7Components.push(training_7_option_8);
    training_7Components.push(training_7_option_9);
    training_7Components.push(training_7_key_resp);
    
    for (const thisComponent of training_7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_7' ---
    // get current time
    t = training_7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *training_7_text* updates
    if (t >= 0.0 && training_7_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_text.tStart = t;  // (not accounting for frame time here)
      training_7_text.frameNStart = frameN;  // exact frame index
      
      training_7_text.setAutoDraw(true);
    }

    
    // *training_7_option_1* updates
    if (t >= 0 && training_7_option_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_option_1.tStart = t;  // (not accounting for frame time here)
      training_7_option_1.frameNStart = frameN;  // exact frame index
      
      training_7_option_1.setAutoDraw(true);
    }

    
    // *training_7_option_2* updates
    if (t >= 0 && training_7_option_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_option_2.tStart = t;  // (not accounting for frame time here)
      training_7_option_2.frameNStart = frameN;  // exact frame index
      
      training_7_option_2.setAutoDraw(true);
    }

    
    // *training_7_option_3* updates
    if (t >= 0 && training_7_option_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_option_3.tStart = t;  // (not accounting for frame time here)
      training_7_option_3.frameNStart = frameN;  // exact frame index
      
      training_7_option_3.setAutoDraw(true);
    }

    
    // *training_7_option_4* updates
    if (t >= 0 && training_7_option_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_option_4.tStart = t;  // (not accounting for frame time here)
      training_7_option_4.frameNStart = frameN;  // exact frame index
      
      training_7_option_4.setAutoDraw(true);
    }

    
    // *training_7_option_5* updates
    if (t >= 0 && training_7_option_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_option_5.tStart = t;  // (not accounting for frame time here)
      training_7_option_5.frameNStart = frameN;  // exact frame index
      
      training_7_option_5.setAutoDraw(true);
    }

    
    // *training_7_option_6* updates
    if (t >= 0 && training_7_option_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_option_6.tStart = t;  // (not accounting for frame time here)
      training_7_option_6.frameNStart = frameN;  // exact frame index
      
      training_7_option_6.setAutoDraw(true);
    }

    
    // *training_7_option_7* updates
    if (t >= 0 && training_7_option_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_option_7.tStart = t;  // (not accounting for frame time here)
      training_7_option_7.frameNStart = frameN;  // exact frame index
      
      training_7_option_7.setAutoDraw(true);
    }

    
    // *training_7_option_8* updates
    if (t >= 0 && training_7_option_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_option_8.tStart = t;  // (not accounting for frame time here)
      training_7_option_8.frameNStart = frameN;  // exact frame index
      
      training_7_option_8.setAutoDraw(true);
    }

    
    // *training_7_option_9* updates
    if (t >= 0 && training_7_option_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_option_9.tStart = t;  // (not accounting for frame time here)
      training_7_option_9.frameNStart = frameN;  // exact frame index
      
      training_7_option_9.setAutoDraw(true);
    }

    
    // *training_7_key_resp* updates
    if (t >= 3 && training_7_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_7_key_resp.tStart = t;  // (not accounting for frame time here)
      training_7_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { training_7_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { training_7_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { training_7_key_resp.clearEvents(); });
    }

    if (training_7_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = training_7_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _training_7_key_resp_allKeys = _training_7_key_resp_allKeys.concat(theseKeys);
      if (_training_7_key_resp_allKeys.length > 0) {
        training_7_key_resp.keys = _training_7_key_resp_allKeys[_training_7_key_resp_allKeys.length - 1].name;  // just the last key pressed
        training_7_key_resp.rt = _training_7_key_resp_allKeys[_training_7_key_resp_allKeys.length - 1].rt;
        training_7_key_resp.duration = _training_7_key_resp_allKeys[_training_7_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_7' ---
    for (const thisComponent of training_7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(training_7_key_resp.corr, level);
    }
    psychoJS.experiment.addData('training_7_key_resp.keys', training_7_key_resp.keys);
    if (typeof training_7_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('training_7_key_resp.rt', training_7_key_resp.rt);
        psychoJS.experiment.addData('training_7_key_resp.duration', training_7_key_resp.duration);
        routineTimer.reset();
        }
    
    training_7_key_resp.stop();
    // the Routine "training_7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _training_8_key_resp_allKeys;
var training_8Components;
function training_8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_8' ---
    t = 0;
    training_8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_9
    training_8_text.setAlignHoriz("left");
    
    training_8_key_resp.keys = undefined;
    training_8_key_resp.rt = undefined;
    _training_8_key_resp_allKeys = [];
    // keep track of which components have finished
    training_8Components = [];
    training_8Components.push(training_8_text);
    training_8Components.push(training_8_option_1);
    training_8Components.push(training_8_option_2);
    training_8Components.push(training_8_option_3);
    training_8Components.push(training_8_option_4);
    training_8Components.push(training_8_option_5);
    training_8Components.push(training_8_option_6);
    training_8Components.push(training_8_option_7);
    training_8Components.push(training_8_option_8);
    training_8Components.push(training_8_option_9);
    training_8Components.push(training_8_key_resp);
    
    for (const thisComponent of training_8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_8' ---
    // get current time
    t = training_8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *training_8_text* updates
    if (t >= 0.0 && training_8_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_text.tStart = t;  // (not accounting for frame time here)
      training_8_text.frameNStart = frameN;  // exact frame index
      
      training_8_text.setAutoDraw(true);
    }

    
    // *training_8_option_1* updates
    if (t >= 0 && training_8_option_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_option_1.tStart = t;  // (not accounting for frame time here)
      training_8_option_1.frameNStart = frameN;  // exact frame index
      
      training_8_option_1.setAutoDraw(true);
    }

    
    // *training_8_option_2* updates
    if (t >= 0 && training_8_option_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_option_2.tStart = t;  // (not accounting for frame time here)
      training_8_option_2.frameNStart = frameN;  // exact frame index
      
      training_8_option_2.setAutoDraw(true);
    }

    
    // *training_8_option_3* updates
    if (t >= 0 && training_8_option_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_option_3.tStart = t;  // (not accounting for frame time here)
      training_8_option_3.frameNStart = frameN;  // exact frame index
      
      training_8_option_3.setAutoDraw(true);
    }

    
    // *training_8_option_4* updates
    if (t >= 0 && training_8_option_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_option_4.tStart = t;  // (not accounting for frame time here)
      training_8_option_4.frameNStart = frameN;  // exact frame index
      
      training_8_option_4.setAutoDraw(true);
    }

    
    // *training_8_option_5* updates
    if (t >= 0 && training_8_option_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_option_5.tStart = t;  // (not accounting for frame time here)
      training_8_option_5.frameNStart = frameN;  // exact frame index
      
      training_8_option_5.setAutoDraw(true);
    }

    
    // *training_8_option_6* updates
    if (t >= 0 && training_8_option_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_option_6.tStart = t;  // (not accounting for frame time here)
      training_8_option_6.frameNStart = frameN;  // exact frame index
      
      training_8_option_6.setAutoDraw(true);
    }

    
    // *training_8_option_7* updates
    if (t >= 0 && training_8_option_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_option_7.tStart = t;  // (not accounting for frame time here)
      training_8_option_7.frameNStart = frameN;  // exact frame index
      
      training_8_option_7.setAutoDraw(true);
    }

    
    // *training_8_option_8* updates
    if (t >= 0 && training_8_option_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_option_8.tStart = t;  // (not accounting for frame time here)
      training_8_option_8.frameNStart = frameN;  // exact frame index
      
      training_8_option_8.setAutoDraw(true);
    }

    
    // *training_8_option_9* updates
    if (t >= 0 && training_8_option_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_option_9.tStart = t;  // (not accounting for frame time here)
      training_8_option_9.frameNStart = frameN;  // exact frame index
      
      training_8_option_9.setAutoDraw(true);
    }

    
    // *training_8_key_resp* updates
    if (t >= 5 && training_8_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_8_key_resp.tStart = t;  // (not accounting for frame time here)
      training_8_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { training_8_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { training_8_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { training_8_key_resp.clearEvents(); });
    }

    if (training_8_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = training_8_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _training_8_key_resp_allKeys = _training_8_key_resp_allKeys.concat(theseKeys);
      if (_training_8_key_resp_allKeys.length > 0) {
        training_8_key_resp.keys = _training_8_key_resp_allKeys[_training_8_key_resp_allKeys.length - 1].name;  // just the last key pressed
        training_8_key_resp.rt = _training_8_key_resp_allKeys[_training_8_key_resp_allKeys.length - 1].rt;
        training_8_key_resp.duration = _training_8_key_resp_allKeys[_training_8_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_8' ---
    for (const thisComponent of training_8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(training_8_key_resp.corr, level);
    }
    psychoJS.experiment.addData('training_8_key_resp.keys', training_8_key_resp.keys);
    if (typeof training_8_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('training_8_key_resp.rt', training_8_key_resp.rt);
        psychoJS.experiment.addData('training_8_key_resp.duration', training_8_key_resp.duration);
        routineTimer.reset();
        }
    
    training_8_key_resp.stop();
    // the Routine "training_8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _transition_key_resp_allKeys;
var transitionComponents;
function transitionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'transition' ---
    t = 0;
    transitionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    transition_key_resp.keys = undefined;
    transition_key_resp.rt = undefined;
    _transition_key_resp_allKeys = [];
    // keep track of which components have finished
    transitionComponents = [];
    transitionComponents.push(transition_text);
    transitionComponents.push(transition_key_resp);
    
    for (const thisComponent of transitionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function transitionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'transition' ---
    // get current time
    t = transitionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *transition_text* updates
    if (t >= 0.0 && transition_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      transition_text.tStart = t;  // (not accounting for frame time here)
      transition_text.frameNStart = frameN;  // exact frame index
      
      transition_text.setAutoDraw(true);
    }

    
    // *transition_key_resp* updates
    if (t >= 3 && transition_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      transition_key_resp.tStart = t;  // (not accounting for frame time here)
      transition_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { transition_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { transition_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { transition_key_resp.clearEvents(); });
    }

    if (transition_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = transition_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _transition_key_resp_allKeys = _transition_key_resp_allKeys.concat(theseKeys);
      if (_transition_key_resp_allKeys.length > 0) {
        transition_key_resp.keys = _transition_key_resp_allKeys[_transition_key_resp_allKeys.length - 1].name;  // just the last key pressed
        transition_key_resp.rt = _transition_key_resp_allKeys[_transition_key_resp_allKeys.length - 1].rt;
        transition_key_resp.duration = _transition_key_resp_allKeys[_transition_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of transitionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function transitionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'transition' ---
    for (const thisComponent of transitionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(transition_key_resp.corr, level);
    }
    psychoJS.experiment.addData('transition_key_resp.keys', transition_key_resp.keys);
    if (typeof transition_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('transition_key_resp.rt', transition_key_resp.rt);
        psychoJS.experiment.addData('transition_key_resp.duration', transition_key_resp.duration);
        routineTimer.reset();
        }
    
    transition_key_resp.stop();
    // the Routine "transition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 15, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixationRoutineEachFrame());
      trialsLoopScheduler.add(fixationRoutineEnd(snapshot));
      trialsLoopScheduler.add(selectionRoutineBegin(snapshot));
      trialsLoopScheduler.add(selectionRoutineEachFrame());
      trialsLoopScheduler.add(selectionRoutineEnd(snapshot));
      trialsLoopScheduler.add(selection_feedback_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(selection_feedback_1RoutineEachFrame());
      trialsLoopScheduler.add(selection_feedback_1RoutineEnd(snapshot));
      trialsLoopScheduler.add(selection_feedback_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(selection_feedback_2RoutineEachFrame());
      trialsLoopScheduler.add(selection_feedback_2RoutineEnd(snapshot));
      trialsLoopScheduler.add(selection_feedback_3RoutineBegin(snapshot));
      trialsLoopScheduler.add(selection_feedback_3RoutineEachFrame());
      trialsLoopScheduler.add(selection_feedback_3RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var recall_check_trials;
function recall_check_trialsLoopBegin(recall_check_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    recall_check_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 16, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'recall_check_trials'
    });
    psychoJS.experiment.addLoop(recall_check_trials); // add the loop to the experiment
    currentLoop = recall_check_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRecall_check_trial of recall_check_trials) {
      snapshot = recall_check_trials.getSnapshot();
      recall_check_trialsLoopScheduler.add(importConditions(snapshot));
      recall_check_trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      recall_check_trialsLoopScheduler.add(fixationRoutineEachFrame());
      recall_check_trialsLoopScheduler.add(fixationRoutineEnd(snapshot));
      recall_check_trialsLoopScheduler.add(recall_checkRoutineBegin(snapshot));
      recall_check_trialsLoopScheduler.add(recall_checkRoutineEachFrame());
      recall_check_trialsLoopScheduler.add(recall_checkRoutineEnd(snapshot));
      recall_check_trialsLoopScheduler.add(recall_check_trialsLoopEndIteration(recall_check_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function recall_check_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(recall_check_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function recall_check_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fix);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var selectionComponents;
function selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'selection' ---
    t = 0;
    selectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    option_2.setFillColor(new util.Color([0.5, 0.5, 0.5]));
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    clickable_options = function () {
        var _pj_a = [], _pj_b = option_list;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var option = _pj_b[_pj_c];
            if ((! _pj.in_es6(option, selected_options))) {
                _pj_a.push(option);
            }
        }
        return _pj_a;
    }
    .call(this);
    console.log(clickable_options);
    
    // keep track of which components have finished
    selectionComponents = [];
    selectionComponents.push(selection_enjoyment_1);
    selectionComponents.push(selection_enjoyment_2);
    selectionComponents.push(selection_enjoyment_3);
    selectionComponents.push(selection_enjoyment_4);
    selectionComponents.push(selection_enjoyment_5);
    selectionComponents.push(selection_enjoyment_6);
    selectionComponents.push(selection_enjoyment_7);
    selectionComponents.push(selection_enjoyment_8);
    selectionComponents.push(selection_enjoyment_9);
    selectionComponents.push(option_1);
    selectionComponents.push(option_2);
    selectionComponents.push(option_3);
    selectionComponents.push(option_4);
    selectionComponents.push(option_5);
    selectionComponents.push(option_6);
    selectionComponents.push(option_7);
    selectionComponents.push(option_8);
    selectionComponents.push(option_9);
    selectionComponents.push(option_10);
    selectionComponents.push(option_11);
    selectionComponents.push(option_12);
    selectionComponents.push(option_13);
    selectionComponents.push(option_14);
    selectionComponents.push(option_15);
    selectionComponents.push(option_16);
    selectionComponents.push(option_17);
    selectionComponents.push(option_18);
    selectionComponents.push(option_19);
    selectionComponents.push(option_20);
    selectionComponents.push(option_21);
    selectionComponents.push(option_22);
    selectionComponents.push(option_23);
    selectionComponents.push(option_24);
    selectionComponents.push(option_25);
    selectionComponents.push(option_26);
    selectionComponents.push(option_27);
    selectionComponents.push(option_28);
    selectionComponents.push(option_29);
    selectionComponents.push(option_30);
    selectionComponents.push(option_31);
    selectionComponents.push(option_32);
    selectionComponents.push(option_33);
    selectionComponents.push(option_34);
    selectionComponents.push(option_35);
    selectionComponents.push(option_36);
    selectionComponents.push(option_37);
    selectionComponents.push(option_38);
    selectionComponents.push(option_39);
    selectionComponents.push(option_40);
    selectionComponents.push(option_41);
    selectionComponents.push(option_42);
    selectionComponents.push(option_43);
    selectionComponents.push(option_44);
    selectionComponents.push(option_45);
    selectionComponents.push(option_46);
    selectionComponents.push(option_47);
    selectionComponents.push(option_48);
    selectionComponents.push(option_49);
    selectionComponents.push(option_50);
    selectionComponents.push(option_51);
    selectionComponents.push(option_52);
    selectionComponents.push(option_53);
    selectionComponents.push(option_54);
    selectionComponents.push(option_55);
    selectionComponents.push(option_56);
    selectionComponents.push(option_57);
    selectionComponents.push(option_58);
    selectionComponents.push(option_59);
    selectionComponents.push(option_60);
    selectionComponents.push(option_61);
    selectionComponents.push(option_62);
    selectionComponents.push(option_63);
    selectionComponents.push(option_64);
    selectionComponents.push(option_65);
    selectionComponents.push(option_66);
    selectionComponents.push(option_67);
    selectionComponents.push(option_68);
    selectionComponents.push(option_69);
    selectionComponents.push(option_70);
    selectionComponents.push(option_71);
    selectionComponents.push(option_72);
    selectionComponents.push(option_73);
    selectionComponents.push(option_74);
    selectionComponents.push(option_75);
    selectionComponents.push(option_76);
    selectionComponents.push(option_77);
    selectionComponents.push(option_78);
    selectionComponents.push(option_79);
    selectionComponents.push(option_80);
    selectionComponents.push(option_81);
    selectionComponents.push(option_82);
    selectionComponents.push(option_83);
    selectionComponents.push(option_84);
    selectionComponents.push(option_85);
    selectionComponents.push(option_86);
    selectionComponents.push(option_87);
    selectionComponents.push(option_88);
    selectionComponents.push(option_89);
    selectionComponents.push(option_90);
    selectionComponents.push(option_91);
    selectionComponents.push(option_92);
    selectionComponents.push(option_93);
    selectionComponents.push(option_94);
    selectionComponents.push(option_95);
    selectionComponents.push(option_96);
    selectionComponents.push(option_97);
    selectionComponents.push(option_98);
    selectionComponents.push(option_99);
    selectionComponents.push(option_100);
    selectionComponents.push(option_101);
    selectionComponents.push(option_102);
    selectionComponents.push(option_103);
    selectionComponents.push(option_104);
    selectionComponents.push(option_105);
    selectionComponents.push(option_106);
    selectionComponents.push(option_107);
    selectionComponents.push(option_108);
    selectionComponents.push(option_109);
    selectionComponents.push(option_110);
    selectionComponents.push(option_111);
    selectionComponents.push(option_112);
    selectionComponents.push(option_113);
    selectionComponents.push(option_114);
    selectionComponents.push(option_115);
    selectionComponents.push(option_116);
    selectionComponents.push(option_117);
    selectionComponents.push(option_118);
    selectionComponents.push(option_119);
    selectionComponents.push(option_120);
    selectionComponents.push(option_121);
    selectionComponents.push(option_122);
    selectionComponents.push(option_123);
    selectionComponents.push(option_124);
    selectionComponents.push(option_125);
    selectionComponents.push(option_126);
    selectionComponents.push(option_127);
    selectionComponents.push(option_128);
    selectionComponents.push(option_129);
    selectionComponents.push(option_130);
    selectionComponents.push(option_131);
    selectionComponents.push(option_132);
    selectionComponents.push(option_133);
    selectionComponents.push(option_134);
    selectionComponents.push(option_135);
    selectionComponents.push(option_136);
    selectionComponents.push(option_137);
    selectionComponents.push(option_138);
    selectionComponents.push(option_139);
    selectionComponents.push(option_140);
    selectionComponents.push(option_141);
    selectionComponents.push(option_142);
    selectionComponents.push(option_143);
    selectionComponents.push(option_144);
    selectionComponents.push(option_145);
    selectionComponents.push(option_146);
    selectionComponents.push(option_147);
    selectionComponents.push(option_148);
    selectionComponents.push(option_149);
    selectionComponents.push(option_150);
    selectionComponents.push(option_151);
    selectionComponents.push(option_152);
    selectionComponents.push(option_153);
    selectionComponents.push(option_154);
    selectionComponents.push(option_155);
    selectionComponents.push(option_156);
    selectionComponents.push(option_157);
    selectionComponents.push(option_158);
    selectionComponents.push(option_159);
    selectionComponents.push(option_160);
    selectionComponents.push(option_161);
    selectionComponents.push(option_162);
    selectionComponents.push(option_163);
    selectionComponents.push(option_164);
    selectionComponents.push(option_165);
    selectionComponents.push(option_166);
    selectionComponents.push(option_167);
    selectionComponents.push(option_168);
    selectionComponents.push(option_169);
    selectionComponents.push(option_170);
    selectionComponents.push(option_171);
    selectionComponents.push(option_172);
    selectionComponents.push(option_173);
    selectionComponents.push(option_174);
    selectionComponents.push(option_175);
    selectionComponents.push(option_176);
    selectionComponents.push(option_177);
    selectionComponents.push(option_178);
    selectionComponents.push(option_179);
    selectionComponents.push(option_180);
    selectionComponents.push(option_181);
    selectionComponents.push(option_182);
    selectionComponents.push(option_183);
    selectionComponents.push(option_184);
    selectionComponents.push(option_185);
    selectionComponents.push(option_186);
    selectionComponents.push(option_187);
    selectionComponents.push(option_188);
    selectionComponents.push(option_189);
    selectionComponents.push(option_190);
    selectionComponents.push(option_191);
    selectionComponents.push(option_192);
    selectionComponents.push(option_193);
    selectionComponents.push(option_194);
    selectionComponents.push(option_195);
    selectionComponents.push(option_196);
    selectionComponents.push(option_197);
    selectionComponents.push(option_198);
    selectionComponents.push(option_199);
    selectionComponents.push(option_200);
    selectionComponents.push(option_201);
    selectionComponents.push(option_202);
    selectionComponents.push(option_203);
    selectionComponents.push(option_204);
    selectionComponents.push(option_205);
    selectionComponents.push(option_206);
    selectionComponents.push(option_207);
    selectionComponents.push(option_208);
    selectionComponents.push(option_209);
    selectionComponents.push(option_210);
    selectionComponents.push(option_211);
    selectionComponents.push(option_212);
    selectionComponents.push(option_213);
    selectionComponents.push(option_214);
    selectionComponents.push(option_215);
    selectionComponents.push(option_216);
    selectionComponents.push(option_217);
    selectionComponents.push(option_218);
    selectionComponents.push(option_219);
    selectionComponents.push(option_220);
    selectionComponents.push(option_221);
    selectionComponents.push(option_222);
    selectionComponents.push(option_223);
    selectionComponents.push(option_224);
    selectionComponents.push(option_225);
    selectionComponents.push(mouse);
    selectionComponents.push(selection_instruction);
    selectionComponents.push(selection_like);
    selectionComponents.push(selection_dislike);
    
    for (const thisComponent of selectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var buttons;
function selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'selection' ---
    // get current time
    t = selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *selection_enjoyment_1* updates
    if (t >= 0.0 && selection_enjoyment_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_enjoyment_1.tStart = t;  // (not accounting for frame time here)
      selection_enjoyment_1.frameNStart = frameN;  // exact frame index
      
      selection_enjoyment_1.setAutoDraw(true);
    }

    
    // *selection_enjoyment_2* updates
    if (t >= 0.0 && selection_enjoyment_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_enjoyment_2.tStart = t;  // (not accounting for frame time here)
      selection_enjoyment_2.frameNStart = frameN;  // exact frame index
      
      selection_enjoyment_2.setAutoDraw(true);
    }

    
    // *selection_enjoyment_3* updates
    if (t >= 0.0 && selection_enjoyment_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_enjoyment_3.tStart = t;  // (not accounting for frame time here)
      selection_enjoyment_3.frameNStart = frameN;  // exact frame index
      
      selection_enjoyment_3.setAutoDraw(true);
    }

    
    // *selection_enjoyment_4* updates
    if (t >= 0.0 && selection_enjoyment_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_enjoyment_4.tStart = t;  // (not accounting for frame time here)
      selection_enjoyment_4.frameNStart = frameN;  // exact frame index
      
      selection_enjoyment_4.setAutoDraw(true);
    }

    
    // *selection_enjoyment_5* updates
    if (t >= 0.0 && selection_enjoyment_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_enjoyment_5.tStart = t;  // (not accounting for frame time here)
      selection_enjoyment_5.frameNStart = frameN;  // exact frame index
      
      selection_enjoyment_5.setAutoDraw(true);
    }

    
    // *selection_enjoyment_6* updates
    if (t >= 0.0 && selection_enjoyment_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_enjoyment_6.tStart = t;  // (not accounting for frame time here)
      selection_enjoyment_6.frameNStart = frameN;  // exact frame index
      
      selection_enjoyment_6.setAutoDraw(true);
    }

    
    // *selection_enjoyment_7* updates
    if (t >= 0.0 && selection_enjoyment_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_enjoyment_7.tStart = t;  // (not accounting for frame time here)
      selection_enjoyment_7.frameNStart = frameN;  // exact frame index
      
      selection_enjoyment_7.setAutoDraw(true);
    }

    
    // *selection_enjoyment_8* updates
    if (t >= 0.0 && selection_enjoyment_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_enjoyment_8.tStart = t;  // (not accounting for frame time here)
      selection_enjoyment_8.frameNStart = frameN;  // exact frame index
      
      selection_enjoyment_8.setAutoDraw(true);
    }

    
    // *selection_enjoyment_9* updates
    if (t >= 0.0 && selection_enjoyment_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_enjoyment_9.tStart = t;  // (not accounting for frame time here)
      selection_enjoyment_9.frameNStart = frameN;  // exact frame index
      
      selection_enjoyment_9.setAutoDraw(true);
    }

    
    // *option_1* updates
    if (t >= 0 && option_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_1.tStart = t;  // (not accounting for frame time here)
      option_1.frameNStart = frameN;  // exact frame index
      
      option_1.setAutoDraw(true);
    }

    
    // *option_2* updates
    if (t >= 0 && option_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_2.tStart = t;  // (not accounting for frame time here)
      option_2.frameNStart = frameN;  // exact frame index
      
      option_2.setAutoDraw(true);
    }

    
    // *option_3* updates
    if (t >= 0 && option_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_3.tStart = t;  // (not accounting for frame time here)
      option_3.frameNStart = frameN;  // exact frame index
      
      option_3.setAutoDraw(true);
    }

    
    // *option_4* updates
    if (t >= 0 && option_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_4.tStart = t;  // (not accounting for frame time here)
      option_4.frameNStart = frameN;  // exact frame index
      
      option_4.setAutoDraw(true);
    }

    
    // *option_5* updates
    if (t >= 0 && option_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_5.tStart = t;  // (not accounting for frame time here)
      option_5.frameNStart = frameN;  // exact frame index
      
      option_5.setAutoDraw(true);
    }

    
    // *option_6* updates
    if (t >= 0 && option_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_6.tStart = t;  // (not accounting for frame time here)
      option_6.frameNStart = frameN;  // exact frame index
      
      option_6.setAutoDraw(true);
    }

    
    // *option_7* updates
    if (t >= 0 && option_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_7.tStart = t;  // (not accounting for frame time here)
      option_7.frameNStart = frameN;  // exact frame index
      
      option_7.setAutoDraw(true);
    }

    
    // *option_8* updates
    if (t >= 0 && option_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_8.tStart = t;  // (not accounting for frame time here)
      option_8.frameNStart = frameN;  // exact frame index
      
      option_8.setAutoDraw(true);
    }

    
    // *option_9* updates
    if (t >= 0 && option_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_9.tStart = t;  // (not accounting for frame time here)
      option_9.frameNStart = frameN;  // exact frame index
      
      option_9.setAutoDraw(true);
    }

    
    // *option_10* updates
    if (t >= 0 && option_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_10.tStart = t;  // (not accounting for frame time here)
      option_10.frameNStart = frameN;  // exact frame index
      
      option_10.setAutoDraw(true);
    }

    
    // *option_11* updates
    if (t >= 0 && option_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_11.tStart = t;  // (not accounting for frame time here)
      option_11.frameNStart = frameN;  // exact frame index
      
      option_11.setAutoDraw(true);
    }

    
    // *option_12* updates
    if (t >= 0 && option_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_12.tStart = t;  // (not accounting for frame time here)
      option_12.frameNStart = frameN;  // exact frame index
      
      option_12.setAutoDraw(true);
    }

    
    // *option_13* updates
    if (t >= 0 && option_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_13.tStart = t;  // (not accounting for frame time here)
      option_13.frameNStart = frameN;  // exact frame index
      
      option_13.setAutoDraw(true);
    }

    
    // *option_14* updates
    if (t >= 0 && option_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_14.tStart = t;  // (not accounting for frame time here)
      option_14.frameNStart = frameN;  // exact frame index
      
      option_14.setAutoDraw(true);
    }

    
    // *option_15* updates
    if (t >= 0 && option_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_15.tStart = t;  // (not accounting for frame time here)
      option_15.frameNStart = frameN;  // exact frame index
      
      option_15.setAutoDraw(true);
    }

    
    // *option_16* updates
    if (t >= 0 && option_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_16.tStart = t;  // (not accounting for frame time here)
      option_16.frameNStart = frameN;  // exact frame index
      
      option_16.setAutoDraw(true);
    }

    
    // *option_17* updates
    if (t >= 0 && option_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_17.tStart = t;  // (not accounting for frame time here)
      option_17.frameNStart = frameN;  // exact frame index
      
      option_17.setAutoDraw(true);
    }

    
    // *option_18* updates
    if (t >= 0 && option_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_18.tStart = t;  // (not accounting for frame time here)
      option_18.frameNStart = frameN;  // exact frame index
      
      option_18.setAutoDraw(true);
    }

    
    // *option_19* updates
    if (t >= 0 && option_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_19.tStart = t;  // (not accounting for frame time here)
      option_19.frameNStart = frameN;  // exact frame index
      
      option_19.setAutoDraw(true);
    }

    
    // *option_20* updates
    if (t >= 0 && option_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_20.tStart = t;  // (not accounting for frame time here)
      option_20.frameNStart = frameN;  // exact frame index
      
      option_20.setAutoDraw(true);
    }

    
    // *option_21* updates
    if (t >= 0 && option_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_21.tStart = t;  // (not accounting for frame time here)
      option_21.frameNStart = frameN;  // exact frame index
      
      option_21.setAutoDraw(true);
    }

    
    // *option_22* updates
    if (t >= 0 && option_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_22.tStart = t;  // (not accounting for frame time here)
      option_22.frameNStart = frameN;  // exact frame index
      
      option_22.setAutoDraw(true);
    }

    
    // *option_23* updates
    if (t >= 0 && option_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_23.tStart = t;  // (not accounting for frame time here)
      option_23.frameNStart = frameN;  // exact frame index
      
      option_23.setAutoDraw(true);
    }

    
    // *option_24* updates
    if (t >= 0 && option_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_24.tStart = t;  // (not accounting for frame time here)
      option_24.frameNStart = frameN;  // exact frame index
      
      option_24.setAutoDraw(true);
    }

    
    // *option_25* updates
    if (t >= 0 && option_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_25.tStart = t;  // (not accounting for frame time here)
      option_25.frameNStart = frameN;  // exact frame index
      
      option_25.setAutoDraw(true);
    }

    
    // *option_26* updates
    if (t >= 0 && option_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_26.tStart = t;  // (not accounting for frame time here)
      option_26.frameNStart = frameN;  // exact frame index
      
      option_26.setAutoDraw(true);
    }

    
    // *option_27* updates
    if (t >= 0 && option_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_27.tStart = t;  // (not accounting for frame time here)
      option_27.frameNStart = frameN;  // exact frame index
      
      option_27.setAutoDraw(true);
    }

    
    // *option_28* updates
    if (t >= 0 && option_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_28.tStart = t;  // (not accounting for frame time here)
      option_28.frameNStart = frameN;  // exact frame index
      
      option_28.setAutoDraw(true);
    }

    
    // *option_29* updates
    if (t >= 0 && option_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_29.tStart = t;  // (not accounting for frame time here)
      option_29.frameNStart = frameN;  // exact frame index
      
      option_29.setAutoDraw(true);
    }

    
    // *option_30* updates
    if (t >= 0 && option_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_30.tStart = t;  // (not accounting for frame time here)
      option_30.frameNStart = frameN;  // exact frame index
      
      option_30.setAutoDraw(true);
    }

    
    // *option_31* updates
    if (t >= 0 && option_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_31.tStart = t;  // (not accounting for frame time here)
      option_31.frameNStart = frameN;  // exact frame index
      
      option_31.setAutoDraw(true);
    }

    
    // *option_32* updates
    if (t >= 0 && option_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_32.tStart = t;  // (not accounting for frame time here)
      option_32.frameNStart = frameN;  // exact frame index
      
      option_32.setAutoDraw(true);
    }

    
    // *option_33* updates
    if (t >= 0 && option_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_33.tStart = t;  // (not accounting for frame time here)
      option_33.frameNStart = frameN;  // exact frame index
      
      option_33.setAutoDraw(true);
    }

    
    // *option_34* updates
    if (t >= 0 && option_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_34.tStart = t;  // (not accounting for frame time here)
      option_34.frameNStart = frameN;  // exact frame index
      
      option_34.setAutoDraw(true);
    }

    
    // *option_35* updates
    if (t >= 0 && option_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_35.tStart = t;  // (not accounting for frame time here)
      option_35.frameNStart = frameN;  // exact frame index
      
      option_35.setAutoDraw(true);
    }

    
    // *option_36* updates
    if (t >= 0 && option_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_36.tStart = t;  // (not accounting for frame time here)
      option_36.frameNStart = frameN;  // exact frame index
      
      option_36.setAutoDraw(true);
    }

    
    // *option_37* updates
    if (t >= 0 && option_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_37.tStart = t;  // (not accounting for frame time here)
      option_37.frameNStart = frameN;  // exact frame index
      
      option_37.setAutoDraw(true);
    }

    
    // *option_38* updates
    if (t >= 0 && option_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_38.tStart = t;  // (not accounting for frame time here)
      option_38.frameNStart = frameN;  // exact frame index
      
      option_38.setAutoDraw(true);
    }

    
    // *option_39* updates
    if (t >= 0 && option_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_39.tStart = t;  // (not accounting for frame time here)
      option_39.frameNStart = frameN;  // exact frame index
      
      option_39.setAutoDraw(true);
    }

    
    // *option_40* updates
    if (t >= 0 && option_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_40.tStart = t;  // (not accounting for frame time here)
      option_40.frameNStart = frameN;  // exact frame index
      
      option_40.setAutoDraw(true);
    }

    
    // *option_41* updates
    if (t >= 0 && option_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_41.tStart = t;  // (not accounting for frame time here)
      option_41.frameNStart = frameN;  // exact frame index
      
      option_41.setAutoDraw(true);
    }

    
    // *option_42* updates
    if (t >= 0 && option_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_42.tStart = t;  // (not accounting for frame time here)
      option_42.frameNStart = frameN;  // exact frame index
      
      option_42.setAutoDraw(true);
    }

    
    // *option_43* updates
    if (t >= 0 && option_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_43.tStart = t;  // (not accounting for frame time here)
      option_43.frameNStart = frameN;  // exact frame index
      
      option_43.setAutoDraw(true);
    }

    
    // *option_44* updates
    if (t >= 0 && option_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_44.tStart = t;  // (not accounting for frame time here)
      option_44.frameNStart = frameN;  // exact frame index
      
      option_44.setAutoDraw(true);
    }

    
    // *option_45* updates
    if (t >= 0 && option_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_45.tStart = t;  // (not accounting for frame time here)
      option_45.frameNStart = frameN;  // exact frame index
      
      option_45.setAutoDraw(true);
    }

    
    // *option_46* updates
    if (t >= 0 && option_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_46.tStart = t;  // (not accounting for frame time here)
      option_46.frameNStart = frameN;  // exact frame index
      
      option_46.setAutoDraw(true);
    }

    
    // *option_47* updates
    if (t >= 0 && option_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_47.tStart = t;  // (not accounting for frame time here)
      option_47.frameNStart = frameN;  // exact frame index
      
      option_47.setAutoDraw(true);
    }

    
    // *option_48* updates
    if (t >= 0 && option_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_48.tStart = t;  // (not accounting for frame time here)
      option_48.frameNStart = frameN;  // exact frame index
      
      option_48.setAutoDraw(true);
    }

    
    // *option_49* updates
    if (t >= 0 && option_49.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_49.tStart = t;  // (not accounting for frame time here)
      option_49.frameNStart = frameN;  // exact frame index
      
      option_49.setAutoDraw(true);
    }

    
    // *option_50* updates
    if (t >= 0 && option_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_50.tStart = t;  // (not accounting for frame time here)
      option_50.frameNStart = frameN;  // exact frame index
      
      option_50.setAutoDraw(true);
    }

    
    // *option_51* updates
    if (t >= 0 && option_51.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_51.tStart = t;  // (not accounting for frame time here)
      option_51.frameNStart = frameN;  // exact frame index
      
      option_51.setAutoDraw(true);
    }

    
    // *option_52* updates
    if (t >= 0 && option_52.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_52.tStart = t;  // (not accounting for frame time here)
      option_52.frameNStart = frameN;  // exact frame index
      
      option_52.setAutoDraw(true);
    }

    
    // *option_53* updates
    if (t >= 0 && option_53.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_53.tStart = t;  // (not accounting for frame time here)
      option_53.frameNStart = frameN;  // exact frame index
      
      option_53.setAutoDraw(true);
    }

    
    // *option_54* updates
    if (t >= 0 && option_54.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_54.tStart = t;  // (not accounting for frame time here)
      option_54.frameNStart = frameN;  // exact frame index
      
      option_54.setAutoDraw(true);
    }

    
    // *option_55* updates
    if (t >= 0 && option_55.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_55.tStart = t;  // (not accounting for frame time here)
      option_55.frameNStart = frameN;  // exact frame index
      
      option_55.setAutoDraw(true);
    }

    
    // *option_56* updates
    if (t >= 0 && option_56.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_56.tStart = t;  // (not accounting for frame time here)
      option_56.frameNStart = frameN;  // exact frame index
      
      option_56.setAutoDraw(true);
    }

    
    // *option_57* updates
    if (t >= 0 && option_57.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_57.tStart = t;  // (not accounting for frame time here)
      option_57.frameNStart = frameN;  // exact frame index
      
      option_57.setAutoDraw(true);
    }

    
    // *option_58* updates
    if (t >= 0 && option_58.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_58.tStart = t;  // (not accounting for frame time here)
      option_58.frameNStart = frameN;  // exact frame index
      
      option_58.setAutoDraw(true);
    }

    
    // *option_59* updates
    if (t >= 0 && option_59.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_59.tStart = t;  // (not accounting for frame time here)
      option_59.frameNStart = frameN;  // exact frame index
      
      option_59.setAutoDraw(true);
    }

    
    // *option_60* updates
    if (t >= 0 && option_60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_60.tStart = t;  // (not accounting for frame time here)
      option_60.frameNStart = frameN;  // exact frame index
      
      option_60.setAutoDraw(true);
    }

    
    // *option_61* updates
    if (t >= 0 && option_61.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_61.tStart = t;  // (not accounting for frame time here)
      option_61.frameNStart = frameN;  // exact frame index
      
      option_61.setAutoDraw(true);
    }

    
    // *option_62* updates
    if (t >= 0 && option_62.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_62.tStart = t;  // (not accounting for frame time here)
      option_62.frameNStart = frameN;  // exact frame index
      
      option_62.setAutoDraw(true);
    }

    
    // *option_63* updates
    if (t >= 0 && option_63.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_63.tStart = t;  // (not accounting for frame time here)
      option_63.frameNStart = frameN;  // exact frame index
      
      option_63.setAutoDraw(true);
    }

    
    // *option_64* updates
    if (t >= 0 && option_64.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_64.tStart = t;  // (not accounting for frame time here)
      option_64.frameNStart = frameN;  // exact frame index
      
      option_64.setAutoDraw(true);
    }

    
    // *option_65* updates
    if (t >= 0 && option_65.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_65.tStart = t;  // (not accounting for frame time here)
      option_65.frameNStart = frameN;  // exact frame index
      
      option_65.setAutoDraw(true);
    }

    
    // *option_66* updates
    if (t >= 0 && option_66.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_66.tStart = t;  // (not accounting for frame time here)
      option_66.frameNStart = frameN;  // exact frame index
      
      option_66.setAutoDraw(true);
    }

    
    // *option_67* updates
    if (t >= 0 && option_67.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_67.tStart = t;  // (not accounting for frame time here)
      option_67.frameNStart = frameN;  // exact frame index
      
      option_67.setAutoDraw(true);
    }

    
    // *option_68* updates
    if (t >= 0 && option_68.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_68.tStart = t;  // (not accounting for frame time here)
      option_68.frameNStart = frameN;  // exact frame index
      
      option_68.setAutoDraw(true);
    }

    
    // *option_69* updates
    if (t >= 0 && option_69.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_69.tStart = t;  // (not accounting for frame time here)
      option_69.frameNStart = frameN;  // exact frame index
      
      option_69.setAutoDraw(true);
    }

    
    // *option_70* updates
    if (t >= 0 && option_70.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_70.tStart = t;  // (not accounting for frame time here)
      option_70.frameNStart = frameN;  // exact frame index
      
      option_70.setAutoDraw(true);
    }

    
    // *option_71* updates
    if (t >= 0 && option_71.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_71.tStart = t;  // (not accounting for frame time here)
      option_71.frameNStart = frameN;  // exact frame index
      
      option_71.setAutoDraw(true);
    }

    
    // *option_72* updates
    if (t >= 0 && option_72.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_72.tStart = t;  // (not accounting for frame time here)
      option_72.frameNStart = frameN;  // exact frame index
      
      option_72.setAutoDraw(true);
    }

    
    // *option_73* updates
    if (t >= 0 && option_73.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_73.tStart = t;  // (not accounting for frame time here)
      option_73.frameNStart = frameN;  // exact frame index
      
      option_73.setAutoDraw(true);
    }

    
    // *option_74* updates
    if (t >= 0 && option_74.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_74.tStart = t;  // (not accounting for frame time here)
      option_74.frameNStart = frameN;  // exact frame index
      
      option_74.setAutoDraw(true);
    }

    
    // *option_75* updates
    if (t >= 0 && option_75.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_75.tStart = t;  // (not accounting for frame time here)
      option_75.frameNStart = frameN;  // exact frame index
      
      option_75.setAutoDraw(true);
    }

    
    // *option_76* updates
    if (t >= 0 && option_76.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_76.tStart = t;  // (not accounting for frame time here)
      option_76.frameNStart = frameN;  // exact frame index
      
      option_76.setAutoDraw(true);
    }

    
    // *option_77* updates
    if (t >= 0 && option_77.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_77.tStart = t;  // (not accounting for frame time here)
      option_77.frameNStart = frameN;  // exact frame index
      
      option_77.setAutoDraw(true);
    }

    
    // *option_78* updates
    if (t >= 0 && option_78.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_78.tStart = t;  // (not accounting for frame time here)
      option_78.frameNStart = frameN;  // exact frame index
      
      option_78.setAutoDraw(true);
    }

    
    // *option_79* updates
    if (t >= 0 && option_79.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_79.tStart = t;  // (not accounting for frame time here)
      option_79.frameNStart = frameN;  // exact frame index
      
      option_79.setAutoDraw(true);
    }

    
    // *option_80* updates
    if (t >= 0 && option_80.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_80.tStart = t;  // (not accounting for frame time here)
      option_80.frameNStart = frameN;  // exact frame index
      
      option_80.setAutoDraw(true);
    }

    
    // *option_81* updates
    if (t >= 0 && option_81.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_81.tStart = t;  // (not accounting for frame time here)
      option_81.frameNStart = frameN;  // exact frame index
      
      option_81.setAutoDraw(true);
    }

    
    // *option_82* updates
    if (t >= 0 && option_82.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_82.tStart = t;  // (not accounting for frame time here)
      option_82.frameNStart = frameN;  // exact frame index
      
      option_82.setAutoDraw(true);
    }

    
    // *option_83* updates
    if (t >= 0 && option_83.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_83.tStart = t;  // (not accounting for frame time here)
      option_83.frameNStart = frameN;  // exact frame index
      
      option_83.setAutoDraw(true);
    }

    
    // *option_84* updates
    if (t >= 0 && option_84.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_84.tStart = t;  // (not accounting for frame time here)
      option_84.frameNStart = frameN;  // exact frame index
      
      option_84.setAutoDraw(true);
    }

    
    // *option_85* updates
    if (t >= 0 && option_85.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_85.tStart = t;  // (not accounting for frame time here)
      option_85.frameNStart = frameN;  // exact frame index
      
      option_85.setAutoDraw(true);
    }

    
    // *option_86* updates
    if (t >= 0 && option_86.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_86.tStart = t;  // (not accounting for frame time here)
      option_86.frameNStart = frameN;  // exact frame index
      
      option_86.setAutoDraw(true);
    }

    
    // *option_87* updates
    if (t >= 0 && option_87.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_87.tStart = t;  // (not accounting for frame time here)
      option_87.frameNStart = frameN;  // exact frame index
      
      option_87.setAutoDraw(true);
    }

    
    // *option_88* updates
    if (t >= 0 && option_88.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_88.tStart = t;  // (not accounting for frame time here)
      option_88.frameNStart = frameN;  // exact frame index
      
      option_88.setAutoDraw(true);
    }

    
    // *option_89* updates
    if (t >= 0 && option_89.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_89.tStart = t;  // (not accounting for frame time here)
      option_89.frameNStart = frameN;  // exact frame index
      
      option_89.setAutoDraw(true);
    }

    
    // *option_90* updates
    if (t >= 0 && option_90.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_90.tStart = t;  // (not accounting for frame time here)
      option_90.frameNStart = frameN;  // exact frame index
      
      option_90.setAutoDraw(true);
    }

    
    // *option_91* updates
    if (t >= 0 && option_91.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_91.tStart = t;  // (not accounting for frame time here)
      option_91.frameNStart = frameN;  // exact frame index
      
      option_91.setAutoDraw(true);
    }

    
    // *option_92* updates
    if (t >= 0 && option_92.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_92.tStart = t;  // (not accounting for frame time here)
      option_92.frameNStart = frameN;  // exact frame index
      
      option_92.setAutoDraw(true);
    }

    
    // *option_93* updates
    if (t >= 0 && option_93.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_93.tStart = t;  // (not accounting for frame time here)
      option_93.frameNStart = frameN;  // exact frame index
      
      option_93.setAutoDraw(true);
    }

    
    // *option_94* updates
    if (t >= 0 && option_94.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_94.tStart = t;  // (not accounting for frame time here)
      option_94.frameNStart = frameN;  // exact frame index
      
      option_94.setAutoDraw(true);
    }

    
    // *option_95* updates
    if (t >= 0 && option_95.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_95.tStart = t;  // (not accounting for frame time here)
      option_95.frameNStart = frameN;  // exact frame index
      
      option_95.setAutoDraw(true);
    }

    
    // *option_96* updates
    if (t >= 0 && option_96.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_96.tStart = t;  // (not accounting for frame time here)
      option_96.frameNStart = frameN;  // exact frame index
      
      option_96.setAutoDraw(true);
    }

    
    // *option_97* updates
    if (t >= 0 && option_97.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_97.tStart = t;  // (not accounting for frame time here)
      option_97.frameNStart = frameN;  // exact frame index
      
      option_97.setAutoDraw(true);
    }

    
    // *option_98* updates
    if (t >= 0 && option_98.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_98.tStart = t;  // (not accounting for frame time here)
      option_98.frameNStart = frameN;  // exact frame index
      
      option_98.setAutoDraw(true);
    }

    
    // *option_99* updates
    if (t >= 0 && option_99.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_99.tStart = t;  // (not accounting for frame time here)
      option_99.frameNStart = frameN;  // exact frame index
      
      option_99.setAutoDraw(true);
    }

    
    // *option_100* updates
    if (t >= 0 && option_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_100.tStart = t;  // (not accounting for frame time here)
      option_100.frameNStart = frameN;  // exact frame index
      
      option_100.setAutoDraw(true);
    }

    
    // *option_101* updates
    if (t >= 0 && option_101.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_101.tStart = t;  // (not accounting for frame time here)
      option_101.frameNStart = frameN;  // exact frame index
      
      option_101.setAutoDraw(true);
    }

    
    // *option_102* updates
    if (t >= 0 && option_102.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_102.tStart = t;  // (not accounting for frame time here)
      option_102.frameNStart = frameN;  // exact frame index
      
      option_102.setAutoDraw(true);
    }

    
    // *option_103* updates
    if (t >= 0 && option_103.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_103.tStart = t;  // (not accounting for frame time here)
      option_103.frameNStart = frameN;  // exact frame index
      
      option_103.setAutoDraw(true);
    }

    
    // *option_104* updates
    if (t >= 0 && option_104.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_104.tStart = t;  // (not accounting for frame time here)
      option_104.frameNStart = frameN;  // exact frame index
      
      option_104.setAutoDraw(true);
    }

    
    // *option_105* updates
    if (t >= 0 && option_105.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_105.tStart = t;  // (not accounting for frame time here)
      option_105.frameNStart = frameN;  // exact frame index
      
      option_105.setAutoDraw(true);
    }

    
    // *option_106* updates
    if (t >= 0 && option_106.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_106.tStart = t;  // (not accounting for frame time here)
      option_106.frameNStart = frameN;  // exact frame index
      
      option_106.setAutoDraw(true);
    }

    
    // *option_107* updates
    if (t >= 0 && option_107.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_107.tStart = t;  // (not accounting for frame time here)
      option_107.frameNStart = frameN;  // exact frame index
      
      option_107.setAutoDraw(true);
    }

    
    // *option_108* updates
    if (t >= 0 && option_108.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_108.tStart = t;  // (not accounting for frame time here)
      option_108.frameNStart = frameN;  // exact frame index
      
      option_108.setAutoDraw(true);
    }

    
    // *option_109* updates
    if (t >= 0 && option_109.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_109.tStart = t;  // (not accounting for frame time here)
      option_109.frameNStart = frameN;  // exact frame index
      
      option_109.setAutoDraw(true);
    }

    
    // *option_110* updates
    if (t >= 0 && option_110.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_110.tStart = t;  // (not accounting for frame time here)
      option_110.frameNStart = frameN;  // exact frame index
      
      option_110.setAutoDraw(true);
    }

    
    // *option_111* updates
    if (t >= 0 && option_111.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_111.tStart = t;  // (not accounting for frame time here)
      option_111.frameNStart = frameN;  // exact frame index
      
      option_111.setAutoDraw(true);
    }

    
    // *option_112* updates
    if (t >= 0 && option_112.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_112.tStart = t;  // (not accounting for frame time here)
      option_112.frameNStart = frameN;  // exact frame index
      
      option_112.setAutoDraw(true);
    }

    
    // *option_113* updates
    if (t >= 0 && option_113.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_113.tStart = t;  // (not accounting for frame time here)
      option_113.frameNStart = frameN;  // exact frame index
      
      option_113.setAutoDraw(true);
    }

    
    // *option_114* updates
    if (t >= 0 && option_114.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_114.tStart = t;  // (not accounting for frame time here)
      option_114.frameNStart = frameN;  // exact frame index
      
      option_114.setAutoDraw(true);
    }

    
    // *option_115* updates
    if (t >= 0 && option_115.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_115.tStart = t;  // (not accounting for frame time here)
      option_115.frameNStart = frameN;  // exact frame index
      
      option_115.setAutoDraw(true);
    }

    
    // *option_116* updates
    if (t >= 0 && option_116.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_116.tStart = t;  // (not accounting for frame time here)
      option_116.frameNStart = frameN;  // exact frame index
      
      option_116.setAutoDraw(true);
    }

    
    // *option_117* updates
    if (t >= 0 && option_117.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_117.tStart = t;  // (not accounting for frame time here)
      option_117.frameNStart = frameN;  // exact frame index
      
      option_117.setAutoDraw(true);
    }

    
    // *option_118* updates
    if (t >= 0 && option_118.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_118.tStart = t;  // (not accounting for frame time here)
      option_118.frameNStart = frameN;  // exact frame index
      
      option_118.setAutoDraw(true);
    }

    
    // *option_119* updates
    if (t >= 0 && option_119.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_119.tStart = t;  // (not accounting for frame time here)
      option_119.frameNStart = frameN;  // exact frame index
      
      option_119.setAutoDraw(true);
    }

    
    // *option_120* updates
    if (t >= 0 && option_120.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_120.tStart = t;  // (not accounting for frame time here)
      option_120.frameNStart = frameN;  // exact frame index
      
      option_120.setAutoDraw(true);
    }

    
    // *option_121* updates
    if (t >= 0 && option_121.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_121.tStart = t;  // (not accounting for frame time here)
      option_121.frameNStart = frameN;  // exact frame index
      
      option_121.setAutoDraw(true);
    }

    
    // *option_122* updates
    if (t >= 0 && option_122.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_122.tStart = t;  // (not accounting for frame time here)
      option_122.frameNStart = frameN;  // exact frame index
      
      option_122.setAutoDraw(true);
    }

    
    // *option_123* updates
    if (t >= 0 && option_123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_123.tStart = t;  // (not accounting for frame time here)
      option_123.frameNStart = frameN;  // exact frame index
      
      option_123.setAutoDraw(true);
    }

    
    // *option_124* updates
    if (t >= 0 && option_124.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_124.tStart = t;  // (not accounting for frame time here)
      option_124.frameNStart = frameN;  // exact frame index
      
      option_124.setAutoDraw(true);
    }

    
    // *option_125* updates
    if (t >= 0 && option_125.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_125.tStart = t;  // (not accounting for frame time here)
      option_125.frameNStart = frameN;  // exact frame index
      
      option_125.setAutoDraw(true);
    }

    
    // *option_126* updates
    if (t >= 0 && option_126.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_126.tStart = t;  // (not accounting for frame time here)
      option_126.frameNStart = frameN;  // exact frame index
      
      option_126.setAutoDraw(true);
    }

    
    // *option_127* updates
    if (t >= 0 && option_127.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_127.tStart = t;  // (not accounting for frame time here)
      option_127.frameNStart = frameN;  // exact frame index
      
      option_127.setAutoDraw(true);
    }

    
    // *option_128* updates
    if (t >= 0 && option_128.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_128.tStart = t;  // (not accounting for frame time here)
      option_128.frameNStart = frameN;  // exact frame index
      
      option_128.setAutoDraw(true);
    }

    
    // *option_129* updates
    if (t >= 0 && option_129.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_129.tStart = t;  // (not accounting for frame time here)
      option_129.frameNStart = frameN;  // exact frame index
      
      option_129.setAutoDraw(true);
    }

    
    // *option_130* updates
    if (t >= 0 && option_130.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_130.tStart = t;  // (not accounting for frame time here)
      option_130.frameNStart = frameN;  // exact frame index
      
      option_130.setAutoDraw(true);
    }

    
    // *option_131* updates
    if (t >= 0 && option_131.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_131.tStart = t;  // (not accounting for frame time here)
      option_131.frameNStart = frameN;  // exact frame index
      
      option_131.setAutoDraw(true);
    }

    
    // *option_132* updates
    if (t >= 0 && option_132.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_132.tStart = t;  // (not accounting for frame time here)
      option_132.frameNStart = frameN;  // exact frame index
      
      option_132.setAutoDraw(true);
    }

    
    // *option_133* updates
    if (t >= 0 && option_133.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_133.tStart = t;  // (not accounting for frame time here)
      option_133.frameNStart = frameN;  // exact frame index
      
      option_133.setAutoDraw(true);
    }

    
    // *option_134* updates
    if (t >= 0 && option_134.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_134.tStart = t;  // (not accounting for frame time here)
      option_134.frameNStart = frameN;  // exact frame index
      
      option_134.setAutoDraw(true);
    }

    
    // *option_135* updates
    if (t >= 0 && option_135.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_135.tStart = t;  // (not accounting for frame time here)
      option_135.frameNStart = frameN;  // exact frame index
      
      option_135.setAutoDraw(true);
    }

    
    // *option_136* updates
    if (t >= 0 && option_136.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_136.tStart = t;  // (not accounting for frame time here)
      option_136.frameNStart = frameN;  // exact frame index
      
      option_136.setAutoDraw(true);
    }

    
    // *option_137* updates
    if (t >= 0 && option_137.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_137.tStart = t;  // (not accounting for frame time here)
      option_137.frameNStart = frameN;  // exact frame index
      
      option_137.setAutoDraw(true);
    }

    
    // *option_138* updates
    if (t >= 0 && option_138.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_138.tStart = t;  // (not accounting for frame time here)
      option_138.frameNStart = frameN;  // exact frame index
      
      option_138.setAutoDraw(true);
    }

    
    // *option_139* updates
    if (t >= 0 && option_139.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_139.tStart = t;  // (not accounting for frame time here)
      option_139.frameNStart = frameN;  // exact frame index
      
      option_139.setAutoDraw(true);
    }

    
    // *option_140* updates
    if (t >= 0 && option_140.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_140.tStart = t;  // (not accounting for frame time here)
      option_140.frameNStart = frameN;  // exact frame index
      
      option_140.setAutoDraw(true);
    }

    
    // *option_141* updates
    if (t >= 0 && option_141.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_141.tStart = t;  // (not accounting for frame time here)
      option_141.frameNStart = frameN;  // exact frame index
      
      option_141.setAutoDraw(true);
    }

    
    // *option_142* updates
    if (t >= 0 && option_142.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_142.tStart = t;  // (not accounting for frame time here)
      option_142.frameNStart = frameN;  // exact frame index
      
      option_142.setAutoDraw(true);
    }

    
    // *option_143* updates
    if (t >= 0 && option_143.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_143.tStart = t;  // (not accounting for frame time here)
      option_143.frameNStart = frameN;  // exact frame index
      
      option_143.setAutoDraw(true);
    }

    
    // *option_144* updates
    if (t >= 0 && option_144.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_144.tStart = t;  // (not accounting for frame time here)
      option_144.frameNStart = frameN;  // exact frame index
      
      option_144.setAutoDraw(true);
    }

    
    // *option_145* updates
    if (t >= 0 && option_145.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_145.tStart = t;  // (not accounting for frame time here)
      option_145.frameNStart = frameN;  // exact frame index
      
      option_145.setAutoDraw(true);
    }

    
    // *option_146* updates
    if (t >= 0 && option_146.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_146.tStart = t;  // (not accounting for frame time here)
      option_146.frameNStart = frameN;  // exact frame index
      
      option_146.setAutoDraw(true);
    }

    
    // *option_147* updates
    if (t >= 0 && option_147.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_147.tStart = t;  // (not accounting for frame time here)
      option_147.frameNStart = frameN;  // exact frame index
      
      option_147.setAutoDraw(true);
    }

    
    // *option_148* updates
    if (t >= 0 && option_148.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_148.tStart = t;  // (not accounting for frame time here)
      option_148.frameNStart = frameN;  // exact frame index
      
      option_148.setAutoDraw(true);
    }

    
    // *option_149* updates
    if (t >= 0 && option_149.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_149.tStart = t;  // (not accounting for frame time here)
      option_149.frameNStart = frameN;  // exact frame index
      
      option_149.setAutoDraw(true);
    }

    
    // *option_150* updates
    if (t >= 0 && option_150.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_150.tStart = t;  // (not accounting for frame time here)
      option_150.frameNStart = frameN;  // exact frame index
      
      option_150.setAutoDraw(true);
    }

    
    // *option_151* updates
    if (t >= 0 && option_151.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_151.tStart = t;  // (not accounting for frame time here)
      option_151.frameNStart = frameN;  // exact frame index
      
      option_151.setAutoDraw(true);
    }

    
    // *option_152* updates
    if (t >= 0 && option_152.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_152.tStart = t;  // (not accounting for frame time here)
      option_152.frameNStart = frameN;  // exact frame index
      
      option_152.setAutoDraw(true);
    }

    
    // *option_153* updates
    if (t >= 0 && option_153.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_153.tStart = t;  // (not accounting for frame time here)
      option_153.frameNStart = frameN;  // exact frame index
      
      option_153.setAutoDraw(true);
    }

    
    // *option_154* updates
    if (t >= 0 && option_154.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_154.tStart = t;  // (not accounting for frame time here)
      option_154.frameNStart = frameN;  // exact frame index
      
      option_154.setAutoDraw(true);
    }

    
    // *option_155* updates
    if (t >= 0 && option_155.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_155.tStart = t;  // (not accounting for frame time here)
      option_155.frameNStart = frameN;  // exact frame index
      
      option_155.setAutoDraw(true);
    }

    
    // *option_156* updates
    if (t >= 0 && option_156.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_156.tStart = t;  // (not accounting for frame time here)
      option_156.frameNStart = frameN;  // exact frame index
      
      option_156.setAutoDraw(true);
    }

    
    // *option_157* updates
    if (t >= 0 && option_157.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_157.tStart = t;  // (not accounting for frame time here)
      option_157.frameNStart = frameN;  // exact frame index
      
      option_157.setAutoDraw(true);
    }

    
    // *option_158* updates
    if (t >= 0 && option_158.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_158.tStart = t;  // (not accounting for frame time here)
      option_158.frameNStart = frameN;  // exact frame index
      
      option_158.setAutoDraw(true);
    }

    
    // *option_159* updates
    if (t >= 0 && option_159.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_159.tStart = t;  // (not accounting for frame time here)
      option_159.frameNStart = frameN;  // exact frame index
      
      option_159.setAutoDraw(true);
    }

    
    // *option_160* updates
    if (t >= 0 && option_160.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_160.tStart = t;  // (not accounting for frame time here)
      option_160.frameNStart = frameN;  // exact frame index
      
      option_160.setAutoDraw(true);
    }

    
    // *option_161* updates
    if (t >= 0 && option_161.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_161.tStart = t;  // (not accounting for frame time here)
      option_161.frameNStart = frameN;  // exact frame index
      
      option_161.setAutoDraw(true);
    }

    
    // *option_162* updates
    if (t >= 0 && option_162.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_162.tStart = t;  // (not accounting for frame time here)
      option_162.frameNStart = frameN;  // exact frame index
      
      option_162.setAutoDraw(true);
    }

    
    // *option_163* updates
    if (t >= 0 && option_163.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_163.tStart = t;  // (not accounting for frame time here)
      option_163.frameNStart = frameN;  // exact frame index
      
      option_163.setAutoDraw(true);
    }

    
    // *option_164* updates
    if (t >= 0 && option_164.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_164.tStart = t;  // (not accounting for frame time here)
      option_164.frameNStart = frameN;  // exact frame index
      
      option_164.setAutoDraw(true);
    }

    
    // *option_165* updates
    if (t >= 0 && option_165.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_165.tStart = t;  // (not accounting for frame time here)
      option_165.frameNStart = frameN;  // exact frame index
      
      option_165.setAutoDraw(true);
    }

    
    // *option_166* updates
    if (t >= 0 && option_166.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_166.tStart = t;  // (not accounting for frame time here)
      option_166.frameNStart = frameN;  // exact frame index
      
      option_166.setAutoDraw(true);
    }

    
    // *option_167* updates
    if (t >= 0 && option_167.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_167.tStart = t;  // (not accounting for frame time here)
      option_167.frameNStart = frameN;  // exact frame index
      
      option_167.setAutoDraw(true);
    }

    
    // *option_168* updates
    if (t >= 0 && option_168.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_168.tStart = t;  // (not accounting for frame time here)
      option_168.frameNStart = frameN;  // exact frame index
      
      option_168.setAutoDraw(true);
    }

    
    // *option_169* updates
    if (t >= 0 && option_169.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_169.tStart = t;  // (not accounting for frame time here)
      option_169.frameNStart = frameN;  // exact frame index
      
      option_169.setAutoDraw(true);
    }

    
    // *option_170* updates
    if (t >= 0 && option_170.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_170.tStart = t;  // (not accounting for frame time here)
      option_170.frameNStart = frameN;  // exact frame index
      
      option_170.setAutoDraw(true);
    }

    
    // *option_171* updates
    if (t >= 0 && option_171.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_171.tStart = t;  // (not accounting for frame time here)
      option_171.frameNStart = frameN;  // exact frame index
      
      option_171.setAutoDraw(true);
    }

    
    // *option_172* updates
    if (t >= 0 && option_172.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_172.tStart = t;  // (not accounting for frame time here)
      option_172.frameNStart = frameN;  // exact frame index
      
      option_172.setAutoDraw(true);
    }

    
    // *option_173* updates
    if (t >= 0 && option_173.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_173.tStart = t;  // (not accounting for frame time here)
      option_173.frameNStart = frameN;  // exact frame index
      
      option_173.setAutoDraw(true);
    }

    
    // *option_174* updates
    if (t >= 0 && option_174.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_174.tStart = t;  // (not accounting for frame time here)
      option_174.frameNStart = frameN;  // exact frame index
      
      option_174.setAutoDraw(true);
    }

    
    // *option_175* updates
    if (t >= 0 && option_175.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_175.tStart = t;  // (not accounting for frame time here)
      option_175.frameNStart = frameN;  // exact frame index
      
      option_175.setAutoDraw(true);
    }

    
    // *option_176* updates
    if (t >= 0 && option_176.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_176.tStart = t;  // (not accounting for frame time here)
      option_176.frameNStart = frameN;  // exact frame index
      
      option_176.setAutoDraw(true);
    }

    
    // *option_177* updates
    if (t >= 0 && option_177.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_177.tStart = t;  // (not accounting for frame time here)
      option_177.frameNStart = frameN;  // exact frame index
      
      option_177.setAutoDraw(true);
    }

    
    // *option_178* updates
    if (t >= 0 && option_178.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_178.tStart = t;  // (not accounting for frame time here)
      option_178.frameNStart = frameN;  // exact frame index
      
      option_178.setAutoDraw(true);
    }

    
    // *option_179* updates
    if (t >= 0 && option_179.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_179.tStart = t;  // (not accounting for frame time here)
      option_179.frameNStart = frameN;  // exact frame index
      
      option_179.setAutoDraw(true);
    }

    
    // *option_180* updates
    if (t >= 0 && option_180.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_180.tStart = t;  // (not accounting for frame time here)
      option_180.frameNStart = frameN;  // exact frame index
      
      option_180.setAutoDraw(true);
    }

    
    // *option_181* updates
    if (t >= 0 && option_181.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_181.tStart = t;  // (not accounting for frame time here)
      option_181.frameNStart = frameN;  // exact frame index
      
      option_181.setAutoDraw(true);
    }

    
    // *option_182* updates
    if (t >= 0 && option_182.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_182.tStart = t;  // (not accounting for frame time here)
      option_182.frameNStart = frameN;  // exact frame index
      
      option_182.setAutoDraw(true);
    }

    
    // *option_183* updates
    if (t >= 0 && option_183.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_183.tStart = t;  // (not accounting for frame time here)
      option_183.frameNStart = frameN;  // exact frame index
      
      option_183.setAutoDraw(true);
    }

    
    // *option_184* updates
    if (t >= 0 && option_184.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_184.tStart = t;  // (not accounting for frame time here)
      option_184.frameNStart = frameN;  // exact frame index
      
      option_184.setAutoDraw(true);
    }

    
    // *option_185* updates
    if (t >= 0 && option_185.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_185.tStart = t;  // (not accounting for frame time here)
      option_185.frameNStart = frameN;  // exact frame index
      
      option_185.setAutoDraw(true);
    }

    
    // *option_186* updates
    if (t >= 0 && option_186.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_186.tStart = t;  // (not accounting for frame time here)
      option_186.frameNStart = frameN;  // exact frame index
      
      option_186.setAutoDraw(true);
    }

    
    // *option_187* updates
    if (t >= 0 && option_187.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_187.tStart = t;  // (not accounting for frame time here)
      option_187.frameNStart = frameN;  // exact frame index
      
      option_187.setAutoDraw(true);
    }

    
    // *option_188* updates
    if (t >= 0 && option_188.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_188.tStart = t;  // (not accounting for frame time here)
      option_188.frameNStart = frameN;  // exact frame index
      
      option_188.setAutoDraw(true);
    }

    
    // *option_189* updates
    if (t >= 0 && option_189.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_189.tStart = t;  // (not accounting for frame time here)
      option_189.frameNStart = frameN;  // exact frame index
      
      option_189.setAutoDraw(true);
    }

    
    // *option_190* updates
    if (t >= 0 && option_190.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_190.tStart = t;  // (not accounting for frame time here)
      option_190.frameNStart = frameN;  // exact frame index
      
      option_190.setAutoDraw(true);
    }

    
    // *option_191* updates
    if (t >= 0 && option_191.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_191.tStart = t;  // (not accounting for frame time here)
      option_191.frameNStart = frameN;  // exact frame index
      
      option_191.setAutoDraw(true);
    }

    
    // *option_192* updates
    if (t >= 0 && option_192.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_192.tStart = t;  // (not accounting for frame time here)
      option_192.frameNStart = frameN;  // exact frame index
      
      option_192.setAutoDraw(true);
    }

    
    // *option_193* updates
    if (t >= 0 && option_193.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_193.tStart = t;  // (not accounting for frame time here)
      option_193.frameNStart = frameN;  // exact frame index
      
      option_193.setAutoDraw(true);
    }

    
    // *option_194* updates
    if (t >= 0 && option_194.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_194.tStart = t;  // (not accounting for frame time here)
      option_194.frameNStart = frameN;  // exact frame index
      
      option_194.setAutoDraw(true);
    }

    
    // *option_195* updates
    if (t >= 0 && option_195.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_195.tStart = t;  // (not accounting for frame time here)
      option_195.frameNStart = frameN;  // exact frame index
      
      option_195.setAutoDraw(true);
    }

    
    // *option_196* updates
    if (t >= 0 && option_196.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_196.tStart = t;  // (not accounting for frame time here)
      option_196.frameNStart = frameN;  // exact frame index
      
      option_196.setAutoDraw(true);
    }

    
    // *option_197* updates
    if (t >= 0 && option_197.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_197.tStart = t;  // (not accounting for frame time here)
      option_197.frameNStart = frameN;  // exact frame index
      
      option_197.setAutoDraw(true);
    }

    
    // *option_198* updates
    if (t >= 0 && option_198.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_198.tStart = t;  // (not accounting for frame time here)
      option_198.frameNStart = frameN;  // exact frame index
      
      option_198.setAutoDraw(true);
    }

    
    // *option_199* updates
    if (t >= 0 && option_199.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_199.tStart = t;  // (not accounting for frame time here)
      option_199.frameNStart = frameN;  // exact frame index
      
      option_199.setAutoDraw(true);
    }

    
    // *option_200* updates
    if (t >= 0 && option_200.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_200.tStart = t;  // (not accounting for frame time here)
      option_200.frameNStart = frameN;  // exact frame index
      
      option_200.setAutoDraw(true);
    }

    
    // *option_201* updates
    if (t >= 0 && option_201.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_201.tStart = t;  // (not accounting for frame time here)
      option_201.frameNStart = frameN;  // exact frame index
      
      option_201.setAutoDraw(true);
    }

    
    // *option_202* updates
    if (t >= 0 && option_202.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_202.tStart = t;  // (not accounting for frame time here)
      option_202.frameNStart = frameN;  // exact frame index
      
      option_202.setAutoDraw(true);
    }

    
    // *option_203* updates
    if (t >= 0 && option_203.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_203.tStart = t;  // (not accounting for frame time here)
      option_203.frameNStart = frameN;  // exact frame index
      
      option_203.setAutoDraw(true);
    }

    
    // *option_204* updates
    if (t >= 0 && option_204.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_204.tStart = t;  // (not accounting for frame time here)
      option_204.frameNStart = frameN;  // exact frame index
      
      option_204.setAutoDraw(true);
    }

    
    // *option_205* updates
    if (t >= 0 && option_205.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_205.tStart = t;  // (not accounting for frame time here)
      option_205.frameNStart = frameN;  // exact frame index
      
      option_205.setAutoDraw(true);
    }

    
    // *option_206* updates
    if (t >= 0 && option_206.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_206.tStart = t;  // (not accounting for frame time here)
      option_206.frameNStart = frameN;  // exact frame index
      
      option_206.setAutoDraw(true);
    }

    
    // *option_207* updates
    if (t >= 0 && option_207.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_207.tStart = t;  // (not accounting for frame time here)
      option_207.frameNStart = frameN;  // exact frame index
      
      option_207.setAutoDraw(true);
    }

    
    // *option_208* updates
    if (t >= 0 && option_208.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_208.tStart = t;  // (not accounting for frame time here)
      option_208.frameNStart = frameN;  // exact frame index
      
      option_208.setAutoDraw(true);
    }

    
    // *option_209* updates
    if (t >= 0 && option_209.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_209.tStart = t;  // (not accounting for frame time here)
      option_209.frameNStart = frameN;  // exact frame index
      
      option_209.setAutoDraw(true);
    }

    
    // *option_210* updates
    if (t >= 0 && option_210.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_210.tStart = t;  // (not accounting for frame time here)
      option_210.frameNStart = frameN;  // exact frame index
      
      option_210.setAutoDraw(true);
    }

    
    // *option_211* updates
    if (t >= 0 && option_211.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_211.tStart = t;  // (not accounting for frame time here)
      option_211.frameNStart = frameN;  // exact frame index
      
      option_211.setAutoDraw(true);
    }

    
    // *option_212* updates
    if (t >= 0 && option_212.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_212.tStart = t;  // (not accounting for frame time here)
      option_212.frameNStart = frameN;  // exact frame index
      
      option_212.setAutoDraw(true);
    }

    
    // *option_213* updates
    if (t >= 0 && option_213.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_213.tStart = t;  // (not accounting for frame time here)
      option_213.frameNStart = frameN;  // exact frame index
      
      option_213.setAutoDraw(true);
    }

    
    // *option_214* updates
    if (t >= 0 && option_214.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_214.tStart = t;  // (not accounting for frame time here)
      option_214.frameNStart = frameN;  // exact frame index
      
      option_214.setAutoDraw(true);
    }

    
    // *option_215* updates
    if (t >= 0 && option_215.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_215.tStart = t;  // (not accounting for frame time here)
      option_215.frameNStart = frameN;  // exact frame index
      
      option_215.setAutoDraw(true);
    }

    
    // *option_216* updates
    if (t >= 0 && option_216.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_216.tStart = t;  // (not accounting for frame time here)
      option_216.frameNStart = frameN;  // exact frame index
      
      option_216.setAutoDraw(true);
    }

    
    // *option_217* updates
    if (t >= 0 && option_217.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_217.tStart = t;  // (not accounting for frame time here)
      option_217.frameNStart = frameN;  // exact frame index
      
      option_217.setAutoDraw(true);
    }

    
    // *option_218* updates
    if (t >= 0 && option_218.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_218.tStart = t;  // (not accounting for frame time here)
      option_218.frameNStart = frameN;  // exact frame index
      
      option_218.setAutoDraw(true);
    }

    
    // *option_219* updates
    if (t >= 0 && option_219.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_219.tStart = t;  // (not accounting for frame time here)
      option_219.frameNStart = frameN;  // exact frame index
      
      option_219.setAutoDraw(true);
    }

    
    // *option_220* updates
    if (t >= 0 && option_220.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_220.tStart = t;  // (not accounting for frame time here)
      option_220.frameNStart = frameN;  // exact frame index
      
      option_220.setAutoDraw(true);
    }

    
    // *option_221* updates
    if (t >= 0 && option_221.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_221.tStart = t;  // (not accounting for frame time here)
      option_221.frameNStart = frameN;  // exact frame index
      
      option_221.setAutoDraw(true);
    }

    
    // *option_222* updates
    if (t >= 0 && option_222.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_222.tStart = t;  // (not accounting for frame time here)
      option_222.frameNStart = frameN;  // exact frame index
      
      option_222.setAutoDraw(true);
    }

    
    // *option_223* updates
    if (t >= 0 && option_223.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_223.tStart = t;  // (not accounting for frame time here)
      option_223.frameNStart = frameN;  // exact frame index
      
      option_223.setAutoDraw(true);
    }

    
    // *option_224* updates
    if (t >= 0 && option_224.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_224.tStart = t;  // (not accounting for frame time here)
      option_224.frameNStart = frameN;  // exact frame index
      
      option_224.setAutoDraw(true);
    }

    
    // *option_225* updates
    if (t >= 0 && option_225.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_225.tStart = t;  // (not accounting for frame time here)
      option_225.frameNStart = frameN;  // exact frame index
      
      option_225.setAutoDraw(true);
    }

    
    // *selection_instruction* updates
    if (t >= 0.0 && selection_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_instruction.tStart = t;  // (not accounting for frame time here)
      selection_instruction.frameNStart = frameN;  // exact frame index
      
      selection_instruction.setAutoDraw(true);
    }

    // Run 'Each Frame' code from code
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    
    if ((mouse.status === PsychoJS.Status.STARTED)) {
        buttons = mouse.getPressed();
        if ((buttons !== prevButtonState)) {
            prevButtonState = buttons;
            if ((util.sum(buttons) > 0)) {
                gotValidClick = false;
                for (var obj, _pj_c = 0, _pj_a = clickable_options, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    obj = _pj_a[_pj_c];
                    if (obj.contains(mouse)) {
                        gotValidClick = true;
                        mouse.clicked_name.push(obj.name);
                    }
                }
                if (gotValidClick) {
                    continueRoutine = false;
                }
            }
        }
    }
    
    
    // *selection_like* updates
    if (t >= 0.0 && selection_like.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_like.tStart = t;  // (not accounting for frame time here)
      selection_like.frameNStart = frameN;  // exact frame index
      
      selection_like.setAutoDraw(true);
    }

    
    // *selection_dislike* updates
    if (t >= 0.0 && selection_dislike.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_dislike.tStart = t;  // (not accounting for frame time here)
      selection_dislike.frameNStart = frameN;  // exact frame index
      
      selection_dislike.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of selectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'selection' ---
    for (const thisComponent of selectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    // Run 'End Routine' code from code
    selected_options.push(option_dict[mouse.clicked_name.slice((- 1))[0]]);
    trials.addData("mouse.clicked_name", mouse.clicked_name);
    
    // the Routine "selection" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var selection_feedback_1Components;
function selection_feedback_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'selection_feedback_1' ---
    t = 0;
    selection_feedback_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    book_text.text = option_text_dict[selected_options.slice((- 1))[0].name];
    book_text.setAlignHoriz("left");
    
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    selection_feedback_1Components = [];
    selection_feedback_1Components.push(book_text);
    selection_feedback_1Components.push(text_2);
    selection_feedback_1Components.push(key_resp);
    
    for (const thisComponent of selection_feedback_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function selection_feedback_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'selection_feedback_1' ---
    // get current time
    t = selection_feedback_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *book_text* updates
    if (t >= 0.0 && book_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      book_text.tStart = t;  // (not accounting for frame time here)
      book_text.frameNStart = frameN;  // exact frame index
      
      book_text.setAutoDraw(true);
    }

    
    // *text_2* updates
    if (t >= 20 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 20 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of selection_feedback_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function selection_feedback_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'selection_feedback_1' ---
    for (const thisComponent of selection_feedback_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "selection_feedback_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var selection_feedback_2Components;
function selection_feedback_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'selection_feedback_2' ---
    t = 0;
    selection_feedback_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    selection_feedback_2Components = [];
    selection_feedback_2Components.push(feedback_text);
    selection_feedback_2Components.push(enjoyment_1);
    selection_feedback_2Components.push(enjoyment_2);
    selection_feedback_2Components.push(enjoyment_3);
    selection_feedback_2Components.push(enjoyment_4);
    selection_feedback_2Components.push(enjoyment_5);
    selection_feedback_2Components.push(enjoyment_6);
    selection_feedback_2Components.push(enjoyment_7);
    selection_feedback_2Components.push(enjoyment_8);
    selection_feedback_2Components.push(enjoyment_9);
    selection_feedback_2Components.push(feedback_like);
    selection_feedback_2Components.push(feedback_dislike);
    selection_feedback_2Components.push(feedback_1);
    selection_feedback_2Components.push(feedback_2);
    selection_feedback_2Components.push(feedback_3);
    selection_feedback_2Components.push(feedback_4);
    selection_feedback_2Components.push(feedback_5);
    selection_feedback_2Components.push(feedback_6);
    selection_feedback_2Components.push(feedback_7);
    selection_feedback_2Components.push(feedback_8);
    selection_feedback_2Components.push(feedback_9);
    selection_feedback_2Components.push(mouse_2);
    
    for (const thisComponent of selection_feedback_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function selection_feedback_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'selection_feedback_2' ---
    // get current time
    t = selection_feedback_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    
    // *enjoyment_1* updates
    if (t >= 0.0 && enjoyment_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enjoyment_1.tStart = t;  // (not accounting for frame time here)
      enjoyment_1.frameNStart = frameN;  // exact frame index
      
      enjoyment_1.setAutoDraw(true);
    }

    
    // *enjoyment_2* updates
    if (t >= 0.0 && enjoyment_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enjoyment_2.tStart = t;  // (not accounting for frame time here)
      enjoyment_2.frameNStart = frameN;  // exact frame index
      
      enjoyment_2.setAutoDraw(true);
    }

    
    // *enjoyment_3* updates
    if (t >= 0.0 && enjoyment_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enjoyment_3.tStart = t;  // (not accounting for frame time here)
      enjoyment_3.frameNStart = frameN;  // exact frame index
      
      enjoyment_3.setAutoDraw(true);
    }

    
    // *enjoyment_4* updates
    if (t >= 0.0 && enjoyment_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enjoyment_4.tStart = t;  // (not accounting for frame time here)
      enjoyment_4.frameNStart = frameN;  // exact frame index
      
      enjoyment_4.setAutoDraw(true);
    }

    
    // *enjoyment_5* updates
    if (t >= 0.0 && enjoyment_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enjoyment_5.tStart = t;  // (not accounting for frame time here)
      enjoyment_5.frameNStart = frameN;  // exact frame index
      
      enjoyment_5.setAutoDraw(true);
    }

    
    // *enjoyment_6* updates
    if (t >= 0.0 && enjoyment_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enjoyment_6.tStart = t;  // (not accounting for frame time here)
      enjoyment_6.frameNStart = frameN;  // exact frame index
      
      enjoyment_6.setAutoDraw(true);
    }

    
    // *enjoyment_7* updates
    if (t >= 0.0 && enjoyment_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enjoyment_7.tStart = t;  // (not accounting for frame time here)
      enjoyment_7.frameNStart = frameN;  // exact frame index
      
      enjoyment_7.setAutoDraw(true);
    }

    
    // *enjoyment_8* updates
    if (t >= 0.0 && enjoyment_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enjoyment_8.tStart = t;  // (not accounting for frame time here)
      enjoyment_8.frameNStart = frameN;  // exact frame index
      
      enjoyment_8.setAutoDraw(true);
    }

    
    // *enjoyment_9* updates
    if (t >= 0.0 && enjoyment_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enjoyment_9.tStart = t;  // (not accounting for frame time here)
      enjoyment_9.frameNStart = frameN;  // exact frame index
      
      enjoyment_9.setAutoDraw(true);
    }

    
    // *feedback_like* updates
    if (t >= 0.0 && feedback_like.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_like.tStart = t;  // (not accounting for frame time here)
      feedback_like.frameNStart = frameN;  // exact frame index
      
      feedback_like.setAutoDraw(true);
    }

    
    // *feedback_dislike* updates
    if (t >= 0.0 && feedback_dislike.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dislike.tStart = t;  // (not accounting for frame time here)
      feedback_dislike.frameNStart = frameN;  // exact frame index
      
      feedback_dislike.setAutoDraw(true);
    }

    
    // *feedback_1* updates
    if (t >= 0.0 && feedback_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_1.tStart = t;  // (not accounting for frame time here)
      feedback_1.frameNStart = frameN;  // exact frame index
      
      feedback_1.setAutoDraw(true);
    }

    
    // *feedback_2* updates
    if (t >= 0.0 && feedback_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_2.tStart = t;  // (not accounting for frame time here)
      feedback_2.frameNStart = frameN;  // exact frame index
      
      feedback_2.setAutoDraw(true);
    }

    
    // *feedback_3* updates
    if (t >= 0.0 && feedback_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_3.tStart = t;  // (not accounting for frame time here)
      feedback_3.frameNStart = frameN;  // exact frame index
      
      feedback_3.setAutoDraw(true);
    }

    
    // *feedback_4* updates
    if (t >= 0.0 && feedback_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_4.tStart = t;  // (not accounting for frame time here)
      feedback_4.frameNStart = frameN;  // exact frame index
      
      feedback_4.setAutoDraw(true);
    }

    
    // *feedback_5* updates
    if (t >= 0.0 && feedback_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_5.tStart = t;  // (not accounting for frame time here)
      feedback_5.frameNStart = frameN;  // exact frame index
      
      feedback_5.setAutoDraw(true);
    }

    
    // *feedback_6* updates
    if (t >= 0.0 && feedback_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_6.tStart = t;  // (not accounting for frame time here)
      feedback_6.frameNStart = frameN;  // exact frame index
      
      feedback_6.setAutoDraw(true);
    }

    
    // *feedback_7* updates
    if (t >= 0.0 && feedback_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_7.tStart = t;  // (not accounting for frame time here)
      feedback_7.frameNStart = frameN;  // exact frame index
      
      feedback_7.setAutoDraw(true);
    }

    
    // *feedback_8* updates
    if (t >= 0.0 && feedback_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_8.tStart = t;  // (not accounting for frame time here)
      feedback_8.frameNStart = frameN;  // exact frame index
      
      feedback_8.setAutoDraw(true);
    }

    
    // *feedback_9* updates
    if (t >= 0.0 && feedback_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_9.tStart = t;  // (not accounting for frame time here)
      feedback_9.frameNStart = frameN;  // exact frame index
      
      feedback_9.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [enjoyment_1, enjoyment_2, enjoyment_3, enjoyment_4, enjoyment_5, enjoyment_6, enjoyment_7, enjoyment_8, enjoyment_9]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of selection_feedback_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function selection_feedback_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'selection_feedback_2' ---
    for (const thisComponent of selection_feedback_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_2
    selected_enjoyment.push(enjoyment_dict[mouse_2.clicked_name.slice((- 1))[0]]);
    selected_options.slice((- 1))[0].fillColor = selected_enjoyment.slice((- 1))[0].fillColor;
    if ((mouse_2.clicked_name.slice((- 1))[0] === "enjoyment_1")) {
        just_selected_enjoyment = "extremely disliked";
    }
    if ((mouse_2.clicked_name.slice((- 1))[0] === "enjoyment_2")) {
        just_selected_enjoyment = "very disliked";
    }
    if ((mouse_2.clicked_name.slice((- 1))[0] === "enjoyment_3")) {
        just_selected_enjoyment = "somewhat disliked";
    }
    if ((mouse_2.clicked_name.slice((- 1))[0] === "enjoyment_4")) {
        just_selected_enjoyment = "slightly disliked";
    }
    if ((mouse_2.clicked_name.slice((- 1))[0] === "enjoyment_5")) {
        just_selected_enjoyment = "neither liked nor disliked";
    }
    if ((mouse_2.clicked_name.slice((- 1))[0] === "enjoyment_6")) {
        just_selected_enjoyment = "slightly liked";
    }
    if ((mouse_2.clicked_name.slice((- 1))[0] === "enjoyment_7")) {
        just_selected_enjoyment = "somewhat liked";
    }
    if ((mouse_2.clicked_name.slice((- 1))[0] === "enjoyment_8")) {
        just_selected_enjoyment = "very liked";
    }
    if ((mouse_2.clicked_name.slice((- 1))[0] === "enjoyment_9")) {
        just_selected_enjoyment = "extremely liked";
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    if (mouse_2.clicked_name) {  psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name[0])};
    
    // the Routine "selection_feedback_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var selection_feedback_3Components;
function selection_feedback_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'selection_feedback_3' ---
    t = 0;
    selection_feedback_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    feedback_text_3.setText(((((("Please indicate how certain you are about your choice.\n" + "As a reminder, you just indicated that\n") + "you ") + just_selected_enjoyment) + " the book.\n\n") + "Please click the button to choose your response."));
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    selection_feedback_3Components = [];
    selection_feedback_3Components.push(feedback_text_3);
    selection_feedback_3Components.push(uncertainty_1);
    selection_feedback_3Components.push(uncertainty_2);
    selection_feedback_3Components.push(uncertainty_3);
    selection_feedback_3Components.push(uncertainty_4);
    selection_feedback_3Components.push(uncertainty_5);
    selection_feedback_3Components.push(uncertainty_6);
    selection_feedback_3Components.push(uncertainty_7);
    selection_feedback_3Components.push(uncertainty_8);
    selection_feedback_3Components.push(uncertainty_9);
    selection_feedback_3Components.push(uncertainty_text_1);
    selection_feedback_3Components.push(uncertainty_text_2);
    selection_feedback_3Components.push(uncertainty_text_3);
    selection_feedback_3Components.push(uncertainty_text_4);
    selection_feedback_3Components.push(uncertainty_text_5);
    selection_feedback_3Components.push(uncertainty_text_6);
    selection_feedback_3Components.push(uncertainty_text_7);
    selection_feedback_3Components.push(uncertainty_text_8);
    selection_feedback_3Components.push(uncertainty_text_9);
    selection_feedback_3Components.push(mouse_3);
    
    for (const thisComponent of selection_feedback_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function selection_feedback_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'selection_feedback_3' ---
    // get current time
    t = selection_feedback_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text_3* updates
    if (t >= 0.0 && feedback_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text_3.tStart = t;  // (not accounting for frame time here)
      feedback_text_3.frameNStart = frameN;  // exact frame index
      
      feedback_text_3.setAutoDraw(true);
    }

    
    // *uncertainty_1* updates
    if (t >= 0.0 && uncertainty_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_1.tStart = t;  // (not accounting for frame time here)
      uncertainty_1.frameNStart = frameN;  // exact frame index
      
      uncertainty_1.setAutoDraw(true);
    }

    
    // *uncertainty_2* updates
    if (t >= 0.0 && uncertainty_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_2.tStart = t;  // (not accounting for frame time here)
      uncertainty_2.frameNStart = frameN;  // exact frame index
      
      uncertainty_2.setAutoDraw(true);
    }

    
    // *uncertainty_3* updates
    if (t >= 0.0 && uncertainty_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_3.tStart = t;  // (not accounting for frame time here)
      uncertainty_3.frameNStart = frameN;  // exact frame index
      
      uncertainty_3.setAutoDraw(true);
    }

    
    // *uncertainty_4* updates
    if (t >= 0.0 && uncertainty_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_4.tStart = t;  // (not accounting for frame time here)
      uncertainty_4.frameNStart = frameN;  // exact frame index
      
      uncertainty_4.setAutoDraw(true);
    }

    
    // *uncertainty_5* updates
    if (t >= 0.0 && uncertainty_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_5.tStart = t;  // (not accounting for frame time here)
      uncertainty_5.frameNStart = frameN;  // exact frame index
      
      uncertainty_5.setAutoDraw(true);
    }

    
    // *uncertainty_6* updates
    if (t >= 0.0 && uncertainty_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_6.tStart = t;  // (not accounting for frame time here)
      uncertainty_6.frameNStart = frameN;  // exact frame index
      
      uncertainty_6.setAutoDraw(true);
    }

    
    // *uncertainty_7* updates
    if (t >= 0.0 && uncertainty_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_7.tStart = t;  // (not accounting for frame time here)
      uncertainty_7.frameNStart = frameN;  // exact frame index
      
      uncertainty_7.setAutoDraw(true);
    }

    
    // *uncertainty_8* updates
    if (t >= 0.0 && uncertainty_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_8.tStart = t;  // (not accounting for frame time here)
      uncertainty_8.frameNStart = frameN;  // exact frame index
      
      uncertainty_8.setAutoDraw(true);
    }

    
    // *uncertainty_9* updates
    if (t >= 0.0 && uncertainty_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_9.tStart = t;  // (not accounting for frame time here)
      uncertainty_9.frameNStart = frameN;  // exact frame index
      
      uncertainty_9.setAutoDraw(true);
    }

    
    // *uncertainty_text_1* updates
    if (t >= 0.0 && uncertainty_text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_1.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_1.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_1.setAutoDraw(true);
    }

    
    // *uncertainty_text_2* updates
    if (t >= 0.0 && uncertainty_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_2.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_2.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_2.setAutoDraw(true);
    }

    
    // *uncertainty_text_3* updates
    if (t >= 0.0 && uncertainty_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_3.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_3.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_3.setAutoDraw(true);
    }

    
    // *uncertainty_text_4* updates
    if (t >= 0.0 && uncertainty_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_4.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_4.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_4.setAutoDraw(true);
    }

    
    // *uncertainty_text_5* updates
    if (t >= 0.0 && uncertainty_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_5.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_5.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_5.setAutoDraw(true);
    }

    
    // *uncertainty_text_6* updates
    if (t >= 0.0 && uncertainty_text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_6.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_6.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_6.setAutoDraw(true);
    }

    
    // *uncertainty_text_7* updates
    if (t >= 0.0 && uncertainty_text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_7.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_7.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_7.setAutoDraw(true);
    }

    
    // *uncertainty_text_8* updates
    if (t >= 0.0 && uncertainty_text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_8.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_8.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_8.setAutoDraw(true);
    }

    
    // *uncertainty_text_9* updates
    if (t >= 0.0 && uncertainty_text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_text_9.tStart = t;  // (not accounting for frame time here)
      uncertainty_text_9.frameNStart = frameN;  // exact frame index
      
      uncertainty_text_9.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [uncertainty_1, uncertainty_2, uncertainty_3, uncertainty_4, uncertainty_5, uncertainty_6, uncertainty_7, uncertainty_8, uncertainty_9]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of selection_feedback_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function selection_feedback_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'selection_feedback_3' ---
    for (const thisComponent of selection_feedback_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
    if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
    if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
    if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
    if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
    if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
    if (mouse_3.clicked_name) {  psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])};
    
    // the Routine "selection_feedback_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _recall_instruction_key_allKeys;
var not_selected_options;
var sampled_options;
var selected_options_sample;
var recall_check_instructionComponents;
function recall_check_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall_check_instruction' ---
    t = 0;
    recall_check_instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    recall_instruction_key.keys = undefined;
    recall_instruction_key.rt = undefined;
    _recall_instruction_key_allKeys = [];
    // Run 'Begin Routine' code from code_6
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    not_selected_options = [];
    sampled_options = [];
    selected_options_sample = [];
    not_selected_options = function () {
        var _pj_a = [], _pj_b = option_list;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var option = _pj_b[_pj_c];
            if ((! _pj.in_es6(option, selected_options))) {
                _pj_a.push(option);
            }
        }
        return _pj_a;
    }
    .call(this);
    
    
    function getRandomSubarray(arr, size) {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }
    
    not_selected_options = getRandomSubarray(not_selected_options, 8);
    selected_options_sample = getRandomSubarray(selected_options, 8);
    console.log(not_selected_options);
    console.log(selected_options_sample);
    console.log("done random sample");
    
    sampled_options = not_selected_options.concat(selected_options_sample);
    console.log(sampled_options);
    function shuffleFunction(arr) {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0)
    }
    
    sampled_options = shuffleFunction(sampled_options);
    
    recall_instruction_text.setAlignHoriz("left");
    // keep track of which components have finished
    recall_check_instructionComponents = [];
    recall_check_instructionComponents.push(recall_instruction_text);
    recall_check_instructionComponents.push(recall_instruction_key);
    
    for (const thisComponent of recall_check_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall_check_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall_check_instruction' ---
    // get current time
    t = recall_check_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_instruction_text* updates
    if (t >= 0.0 && recall_instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_instruction_text.tStart = t;  // (not accounting for frame time here)
      recall_instruction_text.frameNStart = frameN;  // exact frame index
      
      recall_instruction_text.setAutoDraw(true);
    }

    
    // *recall_instruction_key* updates
    if (t >= 3 && recall_instruction_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_instruction_key.tStart = t;  // (not accounting for frame time here)
      recall_instruction_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { recall_instruction_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { recall_instruction_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { recall_instruction_key.clearEvents(); });
    }

    if (recall_instruction_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = recall_instruction_key.getKeys({keyList: ['space'], waitRelease: false});
      _recall_instruction_key_allKeys = _recall_instruction_key_allKeys.concat(theseKeys);
      if (_recall_instruction_key_allKeys.length > 0) {
        recall_instruction_key.keys = _recall_instruction_key_allKeys[_recall_instruction_key_allKeys.length - 1].name;  // just the last key pressed
        recall_instruction_key.rt = _recall_instruction_key_allKeys[_recall_instruction_key_allKeys.length - 1].rt;
        recall_instruction_key.duration = _recall_instruction_key_allKeys[_recall_instruction_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of recall_check_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall_check_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall_check_instruction' ---
    for (const thisComponent of recall_check_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(recall_instruction_key.corr, level);
    }
    psychoJS.experiment.addData('recall_instruction_key.keys', recall_instruction_key.keys);
    if (typeof recall_instruction_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('recall_instruction_key.rt', recall_instruction_key.rt);
        psychoJS.experiment.addData('recall_instruction_key.duration', recall_instruction_key.duration);
        routineTimer.reset();
        }
    
    recall_instruction_key.stop();
    // the Routine "recall_check_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var recall_check_option;
var recall_check_option_text;
var recall_checkComponents;
function recall_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall_check' ---
    t = 0;
    recall_checkClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the recall_check_mouse
    // current position of the mouse:
    recall_check_mouse.x = [];
    recall_check_mouse.y = [];
    recall_check_mouse.leftButton = [];
    recall_check_mouse.midButton = [];
    recall_check_mouse.rightButton = [];
    recall_check_mouse.time = [];
    recall_check_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from code_11
    recall_check_option = sampled_options.pop(0);
    recall_check_option_text = option_text_dict[recall_check_option.name];
    recall_check_book.text = recall_check_option_text;
    recall_check_book.setAlignHoriz("left");
    
    // keep track of which components have finished
    recall_checkComponents = [];
    recall_checkComponents.push(recall_check_text);
    recall_checkComponents.push(recall_check_book);
    recall_checkComponents.push(recall_check_yes);
    recall_checkComponents.push(recall_check_no);
    recall_checkComponents.push(recall_check_yes_text);
    recall_checkComponents.push(recall_check_no_text);
    recall_checkComponents.push(recall_check_mouse);
    
    for (const thisComponent of recall_checkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall_check' ---
    // get current time
    t = recall_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_check_text* updates
    if (t >= 0.0 && recall_check_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_check_text.tStart = t;  // (not accounting for frame time here)
      recall_check_text.frameNStart = frameN;  // exact frame index
      
      recall_check_text.setAutoDraw(true);
    }

    
    // *recall_check_book* updates
    if (t >= 0.0 && recall_check_book.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_check_book.tStart = t;  // (not accounting for frame time here)
      recall_check_book.frameNStart = frameN;  // exact frame index
      
      recall_check_book.setAutoDraw(true);
    }

    
    // *recall_check_yes* updates
    if (t >= 0.0 && recall_check_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_check_yes.tStart = t;  // (not accounting for frame time here)
      recall_check_yes.frameNStart = frameN;  // exact frame index
      
      recall_check_yes.setAutoDraw(true);
    }

    
    // *recall_check_no* updates
    if (t >= 0.0 && recall_check_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_check_no.tStart = t;  // (not accounting for frame time here)
      recall_check_no.frameNStart = frameN;  // exact frame index
      
      recall_check_no.setAutoDraw(true);
    }

    
    // *recall_check_yes_text* updates
    if (t >= 0.0 && recall_check_yes_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_check_yes_text.tStart = t;  // (not accounting for frame time here)
      recall_check_yes_text.frameNStart = frameN;  // exact frame index
      
      recall_check_yes_text.setAutoDraw(true);
    }

    
    // *recall_check_no_text* updates
    if (t >= 0.0 && recall_check_no_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_check_no_text.tStart = t;  // (not accounting for frame time here)
      recall_check_no_text.frameNStart = frameN;  // exact frame index
      
      recall_check_no_text.setAutoDraw(true);
    }

    // *recall_check_mouse* updates
    if (t >= 0.0 && recall_check_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_check_mouse.tStart = t;  // (not accounting for frame time here)
      recall_check_mouse.frameNStart = frameN;  // exact frame index
      
      recall_check_mouse.status = PsychoJS.Status.STARTED;
      recall_check_mouse.mouseClock.reset();
      prevButtonState = recall_check_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (recall_check_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = recall_check_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [recall_check_yes, recall_check_no]) {
            if (obj.contains(recall_check_mouse)) {
              gotValidClick = true;
              recall_check_mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = recall_check_mouse.getPos();
          recall_check_mouse.x.push(_mouseXYs[0]);
          recall_check_mouse.y.push(_mouseXYs[1]);
          recall_check_mouse.leftButton.push(_mouseButtons[0]);
          recall_check_mouse.midButton.push(_mouseButtons[1]);
          recall_check_mouse.rightButton.push(_mouseButtons[2]);
          recall_check_mouse.time.push(recall_check_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of recall_checkComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall_check' ---
    for (const thisComponent of recall_checkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (recall_check_mouse.x) {  psychoJS.experiment.addData('recall_check_mouse.x', recall_check_mouse.x[0])};
    if (recall_check_mouse.y) {  psychoJS.experiment.addData('recall_check_mouse.y', recall_check_mouse.y[0])};
    if (recall_check_mouse.leftButton) {  psychoJS.experiment.addData('recall_check_mouse.leftButton', recall_check_mouse.leftButton[0])};
    if (recall_check_mouse.midButton) {  psychoJS.experiment.addData('recall_check_mouse.midButton', recall_check_mouse.midButton[0])};
    if (recall_check_mouse.rightButton) {  psychoJS.experiment.addData('recall_check_mouse.rightButton', recall_check_mouse.rightButton[0])};
    if (recall_check_mouse.time) {  psychoJS.experiment.addData('recall_check_mouse.time', recall_check_mouse.time[0])};
    if (recall_check_mouse.clicked_name) {  psychoJS.experiment.addData('recall_check_mouse.clicked_name', recall_check_mouse.clicked_name[0])};
    
    // Run 'End Routine' code from code_11
    recall_check_trials.addData("recall_check_option_name", recall_check_option.name);
    
    // the Routine "recall_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(finish_text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finish_text* updates
    if (t >= 0.0 && finish_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_text.tStart = t;  // (not accounting for frame time here)
      finish_text.frameNStart = frameN;  // exact frame index
      
      finish_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (finish_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      finish_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

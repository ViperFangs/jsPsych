const jsPsych = initJsPsych();

let timeline = [];

const hello_trial = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size: 48px;">Welcome to the Experiment!</p>'
}

timeline.push(hello_trial);

const hello_trial2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size: 24px;">Press \'Space\' or \'Enter\' to proceed forward!</p>', 
  choices: [' ', "Enter"]
}

timeline.push(hello_trial2);

let judgment_trials = {
  type: jsPsychImageKeyboardResponse,
  prompt: '<p>Press a number 1-7 to indicate how unusual the image is.</p>',
  choices: ['1','2','3','4','5','6','7', ' ', "Enter"],
  timeline: [
      {stimulus: 'image1.png'},
      {stimulus: 'image2.png'},
      {stimulus: 'image3.png'}
  ]
}

timeline.push(judgment_trials);

jsPsych.run(timeline);


const SkillID = 'amzn1.ask.skill.baf5edcb-6b8e-455f-8b50-473afd780d2c';

const RequestIntentNamesAMAZON = Object.freeze(
  {
    Cancel: 'AMAZON.CancelIntent',
    Help: 'AMAZON.HelpIntent',
    Stop: 'AMAZON.StopIntent',
    Fallback: 'AMAZON.FallbackIntent',
    Resume: 'AMAZON.ResumeIntent',
    Pause: 'AMAZON.PauseIntent',
  },
);

const RequestIntentNamesCustom = Object.freeze(
  {
    SendNotificationWithButton: 'SendNotificationWithButton'
  },
);

const RequestTaskNames = Object.freeze(
  {
    SendNotificationWithButton: `${SkillID}.SendNotificationWithButton`
  },
);

module.exports = {
  RequestIntentNamesAMAZON,
  RequestIntentNamesCustom,
  RequestTaskNames,
};
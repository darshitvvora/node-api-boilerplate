const hookshot = require('../../conn/hookshot');
const { logger } = require('../../components/logger');

exports.upgradeRequestMail = (emailData) => {
  try {
    return hookshot.trigger('email:sendMail', {
      object: 'email',
      event: 'sendMail',
      emailData,
    });
  } catch (err) {
    return logger.error(err);
  }
};

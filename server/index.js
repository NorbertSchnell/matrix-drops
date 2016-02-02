'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

require('source-map-support/register');

// add source map support to nodejs

var _soundworksServer = require('soundworks/server');

var _soundworksServer2 = _interopRequireDefault(_soundworksServer);

var _DropsExperience = require('./DropsExperience');

var _DropsExperience2 = _interopRequireDefault(_DropsExperience);

// const serverServiceManager = soundworks.serverServiceManager;

var experience = new _DropsExperience2['default']();
_soundworksServer2['default'].server.start({ appName: 'Drops' });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUFPLDZCQUE2Qjs7OztnQ0FDYixtQkFBbUI7Ozs7K0JBQ2QsbUJBQW1COzs7Ozs7QUFHL0MsSUFBTSxVQUFVLEdBQUcsa0NBQXFCLENBQUM7QUFDekMsOEJBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9zZXJ2ZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7IC8vIGFkZCBzb3VyY2UgbWFwIHN1cHBvcnQgdG8gbm9kZWpzXG5pbXBvcnQgc291bmR3b3JrcyBmcm9tICdzb3VuZHdvcmtzL3NlcnZlcic7XG5pbXBvcnQgRHJvcHNFeHBlcmllbmNlIGZyb20gJy4vRHJvcHNFeHBlcmllbmNlJztcbi8vIGNvbnN0IHNlcnZlclNlcnZpY2VNYW5hZ2VyID0gc291bmR3b3Jrcy5zZXJ2ZXJTZXJ2aWNlTWFuYWdlcjtcblxuY29uc3QgZXhwZXJpZW5jZSA9IG5ldyBEcm9wc0V4cGVyaWVuY2UoKTtcbnNvdW5kd29ya3Muc2VydmVyLnN0YXJ0KHsgYXBwTmFtZTogJ0Ryb3BzJyB9KTtcblxuIl19
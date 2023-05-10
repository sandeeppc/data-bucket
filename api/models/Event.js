/**
 * Event.js
 * A model for storing all events.
 * Table Name   :   event
 * Database     :   mongodb
 */

module.exports = {
    tableName: 'event',
    attributes: {
        id: { type: 'string', columnName: '_id' },
        headers: {
            type: "json",
            required: false,
            defaultsTo: {},
            columnName: "headers",
        },
        ip: {
            type: "string",
            required: false,
            columnName: "ip",
        },
        eventName: {
            type: "string",
            required: false,
            defaultsTo: "default",
            columnName: "event_name",
        },
        eventProperty: {
            type: "json",
            required: false,
            defaultsTo: {},
            columnName: "event_property",
        },
    }
};


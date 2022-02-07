const _ = require('lodash')

module.exports = {
    sessions: (speaker, args, { dataSources }, info) => {
        const sessions = dataSources.sessionAPI.getSessions()
        return sessions.filter(session => {
            return _.filter(session.speakers, { id: speaker.id }).length > 0
        })
    }
}
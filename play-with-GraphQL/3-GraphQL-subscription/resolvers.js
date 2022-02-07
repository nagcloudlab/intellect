
import { PubSub } from 'graphql-subscriptions'
import Message from './Message.js'

const pubsub = new PubSub()

const resolvers = {
    Query: {
        messages: async () => {
            const messages = await Message.find({})
            return messages
        }
    },
    Mutation: {
        createMessage: async (_, { messageInput: { text, username } }) => {
            const message = { text, createdBy: username }
            await new Message(message).save();
            pubsub.publish('MESSAGE_CREATED', {
                messageCreated: message
            })
            return message;

        }
    },
    Subscription: {
        messageCreated: {
            subscribe: () => {
                return pubsub.asyncIterator('MESSAGE_CREATED')
            }
        }
    }
}

export default resolvers;
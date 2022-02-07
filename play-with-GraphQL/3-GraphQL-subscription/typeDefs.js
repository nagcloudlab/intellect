import { gql } from 'apollo-server'

const typeDefs = gql`

    type Message{
        text: String
        createdBy: String
    }

    input MessageInput{
        text: String
        username: String
    }

    type Mutation{
        createMessage(messageInput:MessageInput):Message
    }

    type Subscription{
        messageCreated:Message
    }

    type Query{
        messages:[Message]
    }

`

export default typeDefs;
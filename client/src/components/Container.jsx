import { useEffect } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import { init, subscribeChat, subscribeInitialsMessages } from '../socketApi'
import { useChat } from '../context/ChatContext'

const Container = () => {
    const { setMessages } = useChat();
    useEffect(() => {
        init();

        subscribeInitialsMessages((messages) => {
            setMessages(messages)
        })

        subscribeChat((message) => {
            setMessages(prevState => [...prevState, { message }])
        });
    }, [])

    return (
        <div className='App'>
            <ChatList />
            <ChatForm />
        </div>
    )
}

export default Container

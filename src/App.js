import "./normalize.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [chatlog, setchatlog] = useState([
    {
      user: "gpt",
      message: "Hello what are you bothering me today for",
    },
    {
      user: "karim",
      message: "do you know how to solve 3 + 3",
    },
  ]);

  function clearChat() {
    setchatlog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(e);

    const chatlogNew = [...chatlog, { user: "me", message: `${input}` }];
    await setInput("");
    setchatlog(chatlogNew);
    const messages = chatlogNew.map((message) => message.message).join("\n");

    const response = await fetch("https://ai-chatbot-backend.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
      }),
    });

    const data = await response.json();
    await setchatlog([
      ...chatlogNew,
      { user: "gpt", message: `${data.message}` },
    ]);
    console.log(data.message);
  }
  return (
    <>
      <div className="App">
        <aside className="side-menu">
          <div className="side-menu-button" onClick={clearChat}>
            <span>+</span>
            New Chat
          </div>
        </aside>
        <section
          className="chatbox"
          style={{ height: "80" + "vh", overflowY: "scroll" }}
        >
          <div className="chat-log">
            {chatlog.map((message, index) => {
              return <ChatMessage key={index} message={message} />;
            })}
          </div>
          <div className="chat-input-holder"></div>
        </section>
      </div>
      <form onSubmit={handleSubmit} style={{position:"absolute",top:"90"+"%",left:"15"+"%",width:"75"+"%"}}>
        <input
      
          className="chat-input-textarea"
          placeholder="Type your message here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>
    </>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user == "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user == "gpt" && "chatgpt"}`}></div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};
export default App;

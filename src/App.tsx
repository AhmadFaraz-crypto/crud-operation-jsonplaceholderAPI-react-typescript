import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

// components
import { PostList, Post, Notification } from "./components";

//interfaces
import { POSTOBJECT, NOTIFICATION } from './Interface/index';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editObj, setEditObj] = useState<POSTOBJECT>({userId: 0, title: "string", body: ""});
  const [notification, setNotification] = useState<NOTIFICATION>({ msg: "", color: "" });
  const [postList, setPostList] = useState<string[]>([]);

  return (
    <div className="App">
      <PostList
        setIsOpen={setIsOpen}
        setEditObj={setEditObj}
        setNotification={setNotification}
        setPostList={setPostList}
        postList={postList}
      />
      <Post
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        editObj={editObj}
        setNotification={setNotification}
        setPostList={setPostList}
        postList={postList}
      />
      {notification.msg && (
        <Notification
          setNotification={setNotification}
          notification={notification}
        />
      )}
    </div>
  );
}

export default App;

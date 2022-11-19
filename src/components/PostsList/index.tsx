/*
 * PostList
 *
 * This is the first thing users see of our App, at the '/' route
 */


import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

// components
import { EditIcon, DeleteIcon } from "./Icons";

// services
import { getPostsAPI, deletePostAPI } from "../../services/service";

// interfaces
import { POSTOBJECT, NOTIFICATION } from '../../Interface/index';

// props
type IProps = {
  setNotification: (msg: NOTIFICATION) => void;
  setIsOpen: (isOpen: boolean) => void;
  setEditObj: (obj: POSTOBJECT) => void;
  setPostList: (arr: string[]) => void;
  postList: string[];
};

const PostList: React.FC<IProps> = (props) => {
  const { setIsOpen, setEditObj, setNotification, postList, setPostList } =
    props;
  const [loader, setLoader] = useState<any>(null);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add new post
  const openModal = () => {
    setIsOpen(true);
  };

  // EDIT POST
  const editPost = (id: number) => {
    openModal();
    const filter = postList.filter((item: any) => item.id === id)[0] as any;
    setEditObj(filter);
  };

  // Delete POST
  const deletePost = async (id: number) => {
    setLoader(id);
    try {
      const response = await deletePostAPI(id);
      if (response.data) {
        const filter = postList.filter((item: any) => item.id !== id);
        setPostList([...filter]);
        setNotification({
          msg: "Post deleted successfully.",
          color: "success",
        });
      }
    } catch (error) {
      setNotification({ msg: "Something went wrong", color: "danger" });
    }
    setLoader(null);
  };

  // GET POSTS list
  const getData = async () => {
    try {
      const response = await getPostsAPI();
      setPostList(response.data);
    } catch (error) {
      setNotification({ msg: "Something went wrong", color: "danger" });
    }
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={() => openModal()}>
          Add New Post
        </Button>
      </div>
      <div className="card mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {postList.slice(0, 10).map((item: any, index: any) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>
                  <span className="pointer" onClick={() => editPost(item.id)}>
                    <EditIcon />
                  </span>
                  <span className="pointer ms-3" onClick={() => deletePost(item.id)}>
                    {(loader === item.id) ? <Spinner color="danger" size="sm" /> : <DeleteIcon />}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;

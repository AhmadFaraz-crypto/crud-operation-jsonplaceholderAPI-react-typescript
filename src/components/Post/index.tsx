/*
 * POST
 *
 */

import React, { useEffect, useState } from "react";

//components
import { Button, Modal, Spinner } from "react-bootstrap";

// services
import { postAPI, patchAPI } from "../../services/service";

// interfaces
import { NOTIFICATION, POSTOBJECT } from '../../Interface/index';

// props
type IProps = {
  setNotification: (msg: NOTIFICATION) => void;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  editObj: POSTOBJECT;
  setPostList: (arr: string[]) => void;
  postList: string[];
};

const Post: React.FC<IProps> = (props) => {
  const { setIsOpen, isOpen, editObj, setNotification, setPostList, postList } =
    props;

  const [value, setValue] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    if (editObj) {
      setValue(editObj.title);
    }
  }, [editObj]);

  // CLOSE modal
  const handleClose = () => {
    setIsOpen(false);
    setValue("");
  };

  const onSubmit = async () => {
    setLoader(true);
    if (editObj) {
      const newObj = { ...editObj, title: value };
      try {
        // ADD NEW POST
        const postRes = await patchAPI(newObj);
        if (postRes.data) {
          const finIndex = postList.findIndex(
            (item: any) => item.id === postRes.data.id
          );
          postList[finIndex] = postRes.data;
          setPostList([...postList]);
          setNotification({
            msg: "Post Updated Successfully",
            color: "success",
          });
        }
      } catch (error) {
        setNotification({ msg: "Something went wrong", color: "danger" });
      }
    } else {
      try {
        const obj = {
          title: value,
          body: "",
          userId: 1
        }
        // EDIT POST POST
        const postRes = await postAPI(obj);
        if (postRes.data) {
          postList.splice(0, 0, postRes.data);
          setPostList([...postList]);
          setNotification({ msg: "Post Added Successfully", color: "success" });
        }
      } catch (error) {
        setNotification({ msg: "Something went wrong", color: "danger" });
      }
    }
    setLoader(false);
    handleClose();
  };

  return (
    <>
      <Modal show={isOpen} animation={true}>
        <Modal.Header className="text-center">
          <Modal.Title >{editObj?.title ? "Edit Post" : "Add New Post"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Post Title</label>
            <div className="input-group mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                name="name"
                data-testid="title-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Post title"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={loader} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button data-testId="add-button" disabled={loader} variant="primary" onClick={onSubmit}>
            {loader ? <Spinner color="primary" size="sm" /> : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Post;

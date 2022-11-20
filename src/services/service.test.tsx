import { deletePostAPI, getPostsAPI, putAPI, postAPI } from "./service";

// GET API TEST
describe('GET POST API TEST', () => {
    test('pass', () => {
      const testData = { "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "userId": 1, "body": ""};
  
      const response = { json: jest.fn().mockResolvedValueOnce(testData) };
      global.fetch = jest.fn().mockResolvedValueOnce(response);
  
      return getPostsAPI().then((data) => {
        const result = {...data.data[0], "body": ""}
        expect(result).toEqual(testData);
      });
    });
});

// POST API TEST
describe('POST API TEST', () => {
    test('pass', () => {
      const testData = { "id": 101, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "userId": 1, "body": ""};
  
      const response = { json: jest.fn().mockResolvedValueOnce(testData) };
      global.fetch = jest.fn().mockResolvedValueOnce(response);
  
      return postAPI(testData).then((data) => {
        expect(data.data).toEqual(testData);
      });
    });
});

// PUT API TEST
describe('PUT API TEST', () => {
    test('pass', () => {
      const testData = { "id": 1, "title": "This is for testing", "userId": 1, "body": ""};
  
      const response = { json: jest.fn().mockResolvedValueOnce(testData) };
      global.fetch = jest.fn().mockResolvedValueOnce(response);
  
      return putAPI(testData).then((data) => {
        expect(data.data).toEqual(testData);
      });
    });
});

// DELETE API TEST
describe('DELETE API TEST', () => {
    test('pass', () => {  
      const response = { json: jest.fn().mockResolvedValueOnce(1) };
      global.fetch = jest.fn().mockResolvedValueOnce(response);
  
      return deletePostAPI(1).then(() => {
        console.log("TEST PASSED");
      });
    });
});
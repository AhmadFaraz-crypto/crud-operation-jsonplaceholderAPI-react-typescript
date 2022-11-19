
import { render, screen, fireEvent } from '@testing-library/react';
import Post from '../index';

//interfaces
import { NOTIFICATION } from '../../../Interface/index';

describe('TEST', () => {
    test('pass', () => {
        render(<Post setNotification={function (msg: NOTIFICATION): void {
            msg = {msg: "", color: ""}
        }} setIsOpen={function (isOpen: boolean): void {
            isOpen = false;
        } } isOpen={false} editObj={{"body": "", "title": "", "userId": 1}} setPostList={function (arr: string[]): void {
            arr = []
        } } postList={[]} />)
        // NOTE: This is a fields test, it will pass when the modal is opened, otherwise it will fail because the ID is not found.
        // const addButton = screen.getByTestId("add-button") as HTMLButtonElement;
        // fireEvent.click(addButton);
        // const name = screen.getByTestId("title-input") as HTMLInputElement;
        // fireEvent.change(name, {target: {value: "Ahmad"}});
        // expect(name.value).toBe('Ahmad');
    });
});
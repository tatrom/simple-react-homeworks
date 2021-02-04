import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://uybor.uz/borless/uybor/img/user-images/user_no_photo_512x512.png",
    name: "Anna",
    message: "Bla bla bla bla",
    time: "08:00"
};

function HW1() {
    return (
        <div>
            <hr/>
            {/*homeworks 1*/}

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;

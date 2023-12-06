import React from "react";
import styles from "./ChatList.module.css";
import Link from "next/link";


export default function ChatListComponent() {
    const chatDataList = [
        {
            userid: 3333,
            profileId: '칼와와',
            profileImg: '/img/profile_test_wawa.png',
            chatTime: '2:00',
            chatContext: '반가워요 wawa입니다반가워요 wawa입니다반가워요 wawa입니다반가워요 wawa입니다',
            unreadCount: 50,
            roomid: 123,
        },
        {
            userid: 2,
            profileImg: '/img/profile_test_dulgi.png',
            profileId: '구국',
            chatTime: '13:40',
            chatContext: 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ',
            unreadCount: 999,
            roomid: 123,
        },
        {
            userid: 3,
            profileImg: '/img/profile_test.png',
            profileId: '치와와',
            chatTime: '00:00',
            chatContext: '여행고여행고여행고여행고여행고여행고여행고여행고여행고여행고여행고여행고여행고여행고여행고여행고여행고여행고',
            unreadCount: 5,
            roomid: 123,
        } //unreadCount0이고 읽으면 빨간 알람 X
    ];

    return (
        <chatlist>
            <div className={styles.chatList}>
                {chatDataList.map((chatData) => (
                    // <Link href={`/chat/${chatData.roomid}`}>
                    <Link href="chat/chatroom" className={styles.link}>
                        <div key={chatData.id} className={styles.userFrame}>
                            <img className={styles.profileImg} src={chatData.profileImg} alt="Profile" />
                            <div className={styles.chatContextFrame}>
                                <div className={styles.topFrame}>
                                    <div className={styles.profileId}>{chatData.profileId}</div>
                                    <div className={styles.chatTime}>{chatData.chatTime}</div>
                                </div>
                                <div className={styles.bottomFrame}>
                                    <div className={styles.chatContext}>{chatData.chatContext}</div>
                                    <div className={styles.unreadCount}>{chatData.unreadCount}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </chatlist >
    );
}
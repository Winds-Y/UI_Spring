package com.example.back_terminal.utils;

import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;

@ServerEndpoint("/websocket")
@Component
public class WebSockTestServer {
    private static int onlineCount=0;
    private static CopyOnWriteArrayList<WebSockTestServer> webSocketSet=new CopyOnWriteArrayList<WebSockTestServer>();
    private Session session;

    @OnOpen
    public void onOpen(Session session){
        this.session=session;
        webSocketSet.add(this);//加入set中
        addOnlineCount();
        System.out.println("有新连接加入！当前在线人数为"+getOnlineCount());
    }



    @OnClose
    public void onClose(){
        webSocketSet.remove(this);
        subOnlineCount();
        System.out.println("有一连接关闭！当前在线人数为" + getOnlineCount());
    }

    @OnMessage
    public void onMessage(String message, Session session){
        System.out.println("来自客户端的消息："+message);
//        群发消息
        for (WebSockTestServer item:webSocketSet){
            try {
                item.sendMessage(message);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @OnError
    public void onError(Session session, Throwable throwable){
        System.out.println("发生错误！");
        throwable.printStackTrace();
    }
    //
    public void sendMessage(String message) throws IOException {
        this.session.getBasicRemote().sendText(message);
    }

    public static synchronized int getOnlineCount(){
        return onlineCount;
    }
    public static synchronized void addOnlineCount(){
        WebSockTestServer.onlineCount++;
    }
    public static synchronized void subOnlineCount(){
        WebSockTestServer.onlineCount--;
    }

}

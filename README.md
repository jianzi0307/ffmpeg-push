### 1. 部署

- docker build --tag ffmpeg-push:v1.0 .
- docker run -dit --restart=always -p 8889:8889 --name ffmpeg-push ffmpeg-push:v1.0

### 2. 应用

```
http://IP地址:8889/#/?channel=38&ipAddress=123.160.10.227&port=524&username=admin&password=Admin123&streamType=sub&width=480&height=270&fit=fill
```

### 3. 常见问题

- 延时大，随着播放时间累积放大

```
降低直播流的最有效方法：
定时检测 HTMLMediaElement 的缓冲区末尾（ HTMLMediaElement.buffered.end(index) ）和当前播放位置(HTMLMediaElement.currentTime) 的差，如果超过一定程度，就将当前播放位置指向一个接近缓冲区末尾的位置。简单来说，就是：主动发现、主动追赶，主动跳帧
```

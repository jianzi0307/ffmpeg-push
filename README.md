docker build -t ffmpeg-push:v1.0
docker run -dit --restart=always -p 8889:8889 --name="ffmpeg-push" ffmpeg-push:v1.0

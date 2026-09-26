# Screen Recorder

Records the screen to a timestamped MP4 with a webcam overlay using Pillow, OpenCV and NumPy. Windows only (uses `win32api`).

**Category:** Python Scripts  
**Tech:** Python

## How to run

Windows only (uses `win32api` for the screen size).

```bash
pip install pillow numpy opencv-python pywin32
python main.py
```

Press `q` in the preview window to stop. The video is saved as `<timestamp>.mp4`. The webcam index is `cv2.VideoCapture(1)`; change it to `0` if you only have one camera.

## Files

```
main.py
```

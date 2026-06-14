from PIL import Image
import sys

img_path = sys.argv[1]
out_path = sys.argv[2]

img = Image.open(img_path).convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # item is (R, G, B, A)
    # White background is > 240, 240, 240
    if item[0] > 230 and item[1] > 230 and item[2] > 230:
        newData.append((255, 255, 255, 0)) # transparent
    else:
        newData.append(item)

img.putdata(newData)
img.save(out_path, "PNG")
print("Saved transparent image to", out_path)

from PIL import Image
import glob

print("Processing images...")
for img_path in glob.glob('public/moza-*.png'):
    try:
        img = Image.open(img_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # item is (R, G, B, A)
            brightness = sum(item[:3]) / 3
            if brightness < 30:
                newData.append((255, 255, 255, 0)) # transparent
            else:
                # White line art
                alpha = int((brightness / 255.0) * 255)
                newData.append((255, 255, 255, alpha))
                
        img.putdata(newData)
        img.save(img_path, "PNG")
        print(f"Made transparent: {img_path}")
    except Exception as e:
        print(f"Failed {img_path}: {e}")
print("Done!")

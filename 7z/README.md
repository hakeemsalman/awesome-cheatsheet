To compress your 17 GB folder using 7-Zip (7z), you can achieve a good balance between compression ratio and speed by carefully selecting the appropriate options. Here's the best setup for compressing large files like videos, text, and other important files while optimizing for maximum compression:

### Best 7-Zip Compression Settings:

1. **Compression Method**: Use `LZMA2`. This is the most efficient method available in 7-Zip and gives the best compression ratio.

2. **Compression Level**: Choose `Ultra`. This provides the maximum compression, though it may take longer to compress.

3. **Dictionary Size**: Set to the highest value your system can handle based on your RAM. A larger dictionary size improves compression at the cost of memory usage. Usually, `64MB` or higher is recommended for large folders.

4. **Word Size**: Set to `273` (the maximum). This is beneficial for compressing large files and should improve the overall ratio.

5. **Solid Block Size**: Use `Solid compression` with a large block size (e.g., `Solid = 4 GB`). This compresses the folder as a single block, improving the compression ratio, especially for many similar files (like text documents).

6. **File Size Splitting**: If you need to transfer the compressed file over networks or store it on external media with size limits, you can split the archive. For example, to split into 4GB chunks, set `4GB` as the file size under the `Split to volumes, bytes` option.

### 7-Zip Command:
You can use the following command for efficient compression using 7-Zip:

```bash
7z a -t7z -m0=lzma2 -mx=9 -ms=on -mfb=273 -md=64m archive.7z /path/to/folder
```

### Explanation of Command:
- `a`: Add to archive.
- `-t7z`: Use the 7z format.
- `-m0=lzma2`: Use LZMA2 compression method.
- `-mx=9`: Maximum compression level (Ultra).
- `-ms=on`: Enables solid compression.
- `-mfb=273`: Maximum word size.
- `-md=64m`: 64 MB dictionary size (adjust based on your system’s RAM).
- `archive.7z`: The name of the output archive.
- `/path/to/folder`: Path to your folder to compress.

### Using the 7-Zip GUI:
1. **Right-click** on your folder and select **7-Zip > Add to Archive**.
2. Set the following options:
   - **Archive Format**: 7z.
   - **Compression Level**: Ultra.
   - **Compression Method**: LZMA2.
   - **Dictionary Size**: 64 MB or higher.
   - **Word Size**: 273.
   - **Solid Block Size**: Leave as default or choose a large value like `4GB`.
3. Press **OK** to begin the compression.

### Note:
- This setup will maximize the compression, but it may take a long time depending on your system's CPU and memory.
- Make sure your system has enough RAM for larger dictionary sizes to avoid slowdown or crashes during compression.

This approach should help you significantly reduce the folder's size while preserving its contents.

# Split files into 1 GB

To split your 17 GB folder into multiple parts of **1 GB each** for easier upload to a cloud drive, you can use 7-Zip’s **"Split to volumes"** option. This will create a series of `.7z` files, each 1 GB in size. When you need to decompress later, you can easily combine them back into the original folder.

### **Steps to Compress and Split Using 7-Zip**

#### **Method 1: Using 7-Zip GUI (Graphical User Interface)**

1. **Right-click the Folder** you want to compress and split.
2. Select **7-Zip > Add to archive**.
3. In the **"Add to Archive"** window, set the following options:
   - **Archive format**: 7z.
   - **Compression level**: Ultra (for maximum compression) or Normal (for a balance between speed and size).
   - **Compression method**: LZMA2.
   - **Split to volumes, bytes**: Enter `1G` (for splitting into 1 GB parts).
     - Example: `1G` = 1 GB. 
     - If you want other sizes, you can input different values (`500M` for 500 MB, etc.).
   - **Solid Block Size**: Leave as default or set it to `4 GB` for better compression of many files.
4. Click **OK** to start the compression and splitting process.

### **Method 2: Using 7-Zip Command Line**

If you prefer using the command line, you can run the following command to split the folder into 1 GB parts:

```bash
7z a -t7z -m0=lzma2 -mx=9 -ms=on -mfb=273 -md=64m -v1g archive.7z /path/to/folder
```

- `-v1g` specifies that each part should be 1 GB.
- `archive.7z` is the base name for the split parts.
- `/path/to/folder` is the path to the folder you want to compress.

This will create files named `archive.7z.001`, `archive.7z.002`, `archive.7z.003`, etc., each 1 GB in size.

### **Decompressing the Split Archive**

Once all parts are uploaded to your drive and you want to decompress them, follow these steps:

#### **Using the 7-Zip GUI**:
1. **Download all parts** (`archive.7z.001`, `archive.7z.002`, etc.) to the same folder.
2. **Right-click on the first part** (`archive.7z.001`) and select **7-Zip > Extract Here** or **Extract to [folder]**.
   - 7-Zip will automatically detect and combine the parts into the original files or folder.

#### **Using the 7-Zip Command Line**:
To extract using the command line, navigate to the folder where the parts are stored and run the following command:

```bash
7z x archive.7z.001
```

This will extract the entire content, combining all the split parts automatically.

### **Important Notes**:
- **All parts are required** for extraction. Make sure you have **all the split files** (e.g., `archive.7z.001`, `archive.7z.002`, etc.). If any part is missing, 7-Zip cannot extract the archive.
- **Upload order does not matter**, but all parts need to be in the same folder during extraction.
- Ensure that the parts are **fully downloaded** without corruption before attempting to extract.

By following this process, you’ll be able to split, upload, and later decompress your 17 GB folder without any issues!
class ImageUploader {
  async upload(file) {
    const url = 'https://api.cloudinary.com/v1_1/dkzyvclig/upload';
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'hzc8w9hn');

    const result = await fetch(url, {
      method: 'POST',
      body: data,
    });
    return await result.json();
  }
}

export default ImageUploader;

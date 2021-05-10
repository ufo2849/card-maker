class ImageUploader {
    async upload(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", "pdzaonz52");
        const result= await fetch(
            'https://api.cloudinary.com/v1_1/duj3mwsdq/upload',
        {
            method: "POST",
            body: formData,
        });
        return await result.json();
    }
}

export default ImageUploader;
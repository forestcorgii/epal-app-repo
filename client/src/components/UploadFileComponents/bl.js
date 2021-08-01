import { useState, useCallback } from "react";

import { useDropzone } from "react-dropzone";
import { UploadImage } from "../../adapters/S3Adapter/index";
export default function BL() {
	const[isUploading, setIsUploading] = useState(false);
	const [images, setImages] = useState([]);

	const handleOnDrop = (files) => {
		setIsUploading(true);
		Promise.all(
			files.map((file) =>
				UploadImage(file).then((newImages) => {
					setImages(images.concat(newImages));
				})
			)
		);
		setIsUploading(false);
	};

	const onDrop = useCallback(handleOnDrop, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return { getRootProps, getInputProps, isDragActive, images, isUploading };
}

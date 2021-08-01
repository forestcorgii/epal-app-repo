import React from 'react'
import BL from './bl'
export default function Upload() {
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		images,
		isUploading,
	} = BL();
	return (
			<div className="App">
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					{isUploading ? (
						<div>Uploading...</div>
					) : isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<p>Drag 'n' drop some files here, or click to select files</p>
					)}
				</div>
				{images.length > 0 ? (
					<div style={{ margin: 30 }}>
						{images.map(({ name, url }) => (
							<img
								key={name}
								alt={name}
								src={url}
								style={{ width: 200, height: 200 }}
							/>
						))}
					</div>
				) : null}
			</div>
	);
}


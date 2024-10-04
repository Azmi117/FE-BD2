import React, { useState, useCallback } from 'react'; 
import { useDropzone } from "react-dropzone";

const DropzoneComponent = ({onFileSelect}) => {
  const [file, setFile] = useState(null); // State untuk menyimpan file yang diupload

  // Callback yang dipanggil ketika file di-drop
  const onDrop = useCallback((acceptedFiles) => {
    const uploadedFile = acceptedFiles[0]; // Ambil file pertama (karena kita hanya ingin satu file)
    setFile({
      preview: URL.createObjectURL(uploadedFile), // Buat URL preview gambar
      name: uploadedFile.name // Simpan nama file
    });
    onFileSelect(uploadedFile);
  }, [onFileSelect]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' // Terima hanya file gambar
  });

  return (
    <div className="dropzone" style={{ width: '230px', margin: '0 auto' }}>
      <div
        {...getRootProps({
          className: 'dropzone-input',
          style: {
            border: '2px dashed #0087F7',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '10px'
          }
        })}
      >
        <input {...getInputProps()} />

        {/* Jika file belum ada, tampilkan teks drag */}
        {!file ? (
          <p>Drag 'n' drop some files here, or click to select files</p>
        ) : (
          // Jika file sudah diupload, tampilkan nama file dan preview gambar
          <div className="file-preview">
            <p className='truncate'><strong>File name:</strong> {file.name}</p>
            <img
              src={file.preview}
              alt={file.name}
              style={{ width: '110px', height: '120px', marginTop: '10px', borderRadius: '5px', margin: 'mx-auto' }}
              className='mx-auto'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DropzoneComponent;

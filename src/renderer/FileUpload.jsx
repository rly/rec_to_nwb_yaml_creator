import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Provides a means to get a file path
 *
 * @param {Object} prop Custom element's properties
 *
 * @returns Virtual DOM for File upload
 */
const FileUpload = (fileProperty) => {
  const {
    title,
    name,
    required,
    placeholder,
    id,
    onTextFieldInput,
    onInput,
    metaData,
  } = fileProperty;
  const fileInputElement = useRef(null);
  const fileObject = useRef(null);
  const onNewFileSelected = (e) => {
    const fileElement = fileObject.current.files;
    const filePath =
      fileElement && fileElement.length > 0 ? fileElement[0].path : '';

    fileInputElement.current.value = filePath;
    onInput(e, filePath, metaData);
  };

  return (
    <div className="container">
      <label className="item1" htmlFor={title} placeholder={placeholder}>
        <span>{title} </span>
      </label>
      <div className="item2 file-upload">
        <input
          type="text"
          ref={fileInputElement}
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          onInput={(e) => onTextFieldInput(e)}
        />
        <input
          type="file"
          id={`${id}-file`}
          ref={fileObject}
          name={name}
          onInput={onNewFileSelected}
        />
      </div>
    </div>
  );
};

FileUpload.propType = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  required: PropTypes.string,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  dataFormat: PropTypes.string,
  fileObjectId: PropTypes.string.isRequired,
  metaData: PropTypes.instanceOf(Object),
  onInput: PropTypes.func.isRequired,
};

FileUpload.defaultProps = {
  required: false,
};

export default FileUpload;

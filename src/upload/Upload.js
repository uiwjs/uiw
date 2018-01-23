import React, { Component } from 'react';
import RcUpload from 'rc-upload';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UploadList from './UploadList';
import { fileToObject, getPercentAdd, getFileItem, removeFileItem } from './utils';
import './style/index.less';


class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: this.props.fileList || this.props.defaultFileList || [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('fileList' in nextProps) {
      this.setState({
        fileList: nextProps.fileList || [],
      });
    }
  }

  componentWillUnmount() {
    this.clearProgressTimer();
  }

  /**
   *   删除图片
   * @param {*} file:上传的文件
   */
  handleRemove(file) {
    const { onRemove } = this.props;

    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then((ret) => {
      if (ret === false) {
        return;
      }

      const removedFileList = removeFileItem(file, this.state.fileList);
      if (removedFileList) {
        this.onChange({
          file,
          fileList: removedFileList,
        });
      }
    });
  }

  /**
   * 处理删除图片
   */
  handleManualRemove = (file) => {
    this.upload.abort(file);
    file.status = 'removed';  // eslint-disable-line
    this.handleRemove(file);
  }

  /**
   * 开始上传处理
   */
  onStart = (file) => {
    let targetItem;
    let nextFileList = this.state.fileList.concat();

    if (file.length > 0) {
      targetItem = file.map((f) => {
        const fileObject = fileToObject(f);
        fileObject.status = 'uploading';
        return fileObject;
      });
      nextFileList = nextFileList.concat(targetItem);
    } else {
      targetItem = fileToObject(file);
      targetItem.status = 'uploading';
      nextFileList.push(targetItem);
    }
    this.onChange({
      file: targetItem,
      fileList: nextFileList,
    });

    // fix ie progress
    if (!(window).FormData) {
      this.autoUpdateProgress(0, targetItem);
    }
  }

  /**
   * 动作条自动加载
   */
  autoUpdateProgress = (_, file) => {
    const getPercent = getPercentAdd();
    let curPercent = 0;
    this.clearProgressTimer();
    this.progressTimer = setInterval(() => {
      curPercent = getPercent(curPercent);
      this.onProgress({
        percent: curPercent,
      }, file);
    }, 200);
  }

  /**
   * 处理上传错误
   */
  onError = (error, response, file) => {
    this.clearProgressTimer();
    const fileList = this.state.fileList;
    const targetItem = getFileItem(file, fileList);

    if (!targetItem) {
      return;
    }
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';
    this.onChange({
      file: { ...targetItem },
      fileList,
    });
  }

  onProgress = (e, file) => {
    const fileList = this.state.fileList;
    const targetItem = getFileItem(file, fileList);

    if (!targetItem) {
      return;
    }
    targetItem.percent = e.percent;
    this.onChange({
      event: e,
      file: { ...targetItem },
      fileList: this.state.fileList,
    });
  }

  /**
   * 处理上传成功
   */
  onSuccess = (response, file) => {
    this.clearProgressTimer();
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) {
      // console.log(e);
    }
    const fileList = this.state.fileList;
    const targetItem = getFileItem(file, fileList);

    if (!targetItem) {
      return;
    }
    targetItem.status = 'done';
    targetItem.response = response;
    this.onChange({
      file: { ...targetItem },
      fileList,
    });
  }

  /**
   * 上传状态发生变化回调。
   * 可以得到各种上传的状态：成功：done， 失败：error 等等
   */
  onChange = (info) => {
    if (!('fileList' in this.props)) {
      this.setState({ fileList: info.fileList });
    }

    const { onChange } = this.props;
    if (onChange) {
      onChange(info);
    }
  }

  /**
   * clearInterval(this.progressTimer)
   */
  clearProgressTimer() {
    clearInterval(this.progressTimer);
  }

  render() {
    const { prefixCls = '', showUploadList, onPreview, children, className } = this.props;
    const locale = {
      uploading: '文件上传中',
      removeFile: '删除文件',
      uploadError: '上传错误',
      previewFile: '预览文件',
    };

    const rcUploadProps = {
      onStart: this.onStart,
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      ...this.props,
    };
    delete rcUploadProps.className;

    const uploadList = showUploadList ? (
      <UploadList
        items={this.state.fileList}
        onRemove={this.handleManualRemove}
        onPreview={onPreview}
        locale={locale}
      />
    ) : null;


    const uploadButtonCls = classNames(prefixCls, {
      [`${prefixCls}-select`]: true,
    });

    const uploadButton = (
      <div className={uploadButtonCls} style={{ display: children ? '' : 'none' }}>
        <RcUpload {...rcUploadProps} ref={(c) => { this.upload = c; }} />
      </div>
    );

    return (
      <span className={className}>
        {uploadButton}
        {uploadList}
      </span>
    );
  }
}

export default Upload;

Upload.defaultProps = {
  prefixCls: 'w-upload',
  showUploadList: true,
};
Upload.propTypes = {
  prefixCls: PropTypes.string,
  fileList: PropTypes.array,
  showUploadList: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

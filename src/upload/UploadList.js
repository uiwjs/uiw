import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Tooltip from '../tooltip';
import Progress from '../progress';
import './style/index.less';

class UploadList extends Component {
  /**
   * 删除某张图片回调
   */
  handleClose = (file) => {
    const { onRemove } = this.props;
    if (onRemove) {
      onRemove(file);
    }
  }
  /**
   * 预览回调
   */
  handlePreview = (file, e) => {
    const { onPreview } = this.props;
    if (!onPreview) {
      return;
    }
    e.preventDefault();
    return onPreview(file);
  }

  render() {
    const { prefixCls, items = [], showRemoveIcon, locale } = this.props;
    const list = items.map((file) => {
      let progress;
      // eslint-disable-next-line
      const icon = file.status === "uploading" ? <Icon spin={true} type="loading" /> : <Icon type="paper-clip" />;
      /**
       * 上传进度条
      */
      if (file.status === 'uploading') {
        const loadingProgress = ('percent' in file) ? (
          <Progress type="line" {...this.props.progressAttr} percent={file.percent} />
        ) : null;

        progress = (
          <div className={`${prefixCls}-list-item-progress`} key="progress">
            {loadingProgress}
          </div>
        );
      }
      const infoUploadingClass = classNames({
        [`${prefixCls}-list-item`]: true,
        [`${prefixCls}-list-item-${file.status}`]: true,
      });

      /**
       * 图片预览
      */
      const preview = file.url ? (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${prefixCls}-list-item-name`}
          onClick={e => this.handlePreview(file, e)}
          title={file.name}
        >
          {file.name}
        </a>
      ) : (
        <span
          className={`${prefixCls}-list-item-name`}
          onClick={e => this.handlePreview(file, e)}
          title={file.name}
        >
          {file.name}
        </span>
      );

      /**
       * 根据type不同使用不同icon
      */
      const actions = showRemoveIcon ? (
        <Icon type="close" title={locale.removeFile} onClick={() => this.handleClose(file)} />
      ) : null;

      /**
       * 提示信息
       */
      let message;
      if (file.response && typeof file.response === 'string') {
        message = file.response;
      } else {
        message = (file.error && file.error.statusText) || locale.uploadError;
      }

      const iconAndPreview = (file.status === 'error')
        ? <Tooltip content={message}>{icon}{preview}</Tooltip>
        : <span>{icon}{preview}</span>;

      return (
        <div className={infoUploadingClass} key={file.uid}>
          <div className={`${prefixCls}-list-item-info`}>
            {iconAndPreview}
            <div style={{ float: 'right' }}>{actions}</div>
          </div>
          {progress}
        </div>
      );
    });
    return (
      <span>
        {list}
      </span>
    );
  }
}

export default UploadList;

UploadList.defaultProps = {
  prefixCls: 'w-upload',
  showRemoveIcon: true,
  progressAttr: {
    strokeWidth: 2,
    showinfo: 'false',
  },
};
UploadList.propTypes = {
  prefixCls: PropTypes.string,
  showRemoveIcon: PropTypes.bool,
  progressAttr: PropTypes.object,
};

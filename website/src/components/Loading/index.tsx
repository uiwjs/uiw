import { Loader, Icon } from 'uiw';

export default function De() {
  return (
    <Loader tip="Loading..." indicator={<Icon type="loading" spin={true} style={{ verticalAlign: 'text-top' }} />} />
  );
}

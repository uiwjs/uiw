import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Loading from './components/Loading';
import BaseLayout from './layouts/BaseLayout';

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import('./routes/home')));
const Extensions = Loadable(lazy(() => import('./routes/extensions')));

const GuideQuickStart = Loadable(lazy(() => import('./routes/guide/quick-start')));
const GuideImport = Loadable(lazy(() => import('./routes/guide/import')));
const GuideCreateReactApp = Loadable(lazy(() => import('./routes/guide/create-react-app')));
const GuideKKT = Loadable(lazy(() => import('./routes/guide/kkt')));
const GuideDocs = Loadable(lazy(() => import('./routes/guide/docs')));
const GuideVscode = Loadable(lazy(() => import('./routes/guide/vscode')));
const GuideRecommendation = Loadable(lazy(() => import('./routes/guide/recommendation')));

const Overview = Loadable(lazy(() => import('./routes/overview')));
const Colors = Loadable(lazy(() => import('./routes/components/colors')));
const Alert = Loadable(lazy(() => import('./routes/components/alert')));
const AutoLink = Loadable(lazy(() => import('./routes/components/auto-link')));
const ResetCss = Loadable(lazy(() => import('./routes/components/reset-css')));
const Avatar = Loadable(lazy(() => import('./routes/components/avatar')));
const Affix = Loadable(lazy(() => import('./routes/components/affix')));
const Calendar = Loadable(lazy(() => import('./routes/components/calendar')));
const Checkbox = Loadable(lazy(() => import('./routes/components/checkbox')));
const CopyToClipboard = Loadable(lazy(() => import('./routes/components/copy-to-clipboard')));
const Collapse = Loadable(lazy(() => import('./routes/components/collapse')));
const Card = Loadable(lazy(() => import('./routes/components/card')));
const Descriptions = Loadable(lazy(() => import('./routes/components/descriptions')));
const Loader = Loadable(lazy(() => import('./routes/components/loader')));
const Icon = Loadable(lazy(() => import('./routes/components/icon')));
const Divider = Loadable(lazy(() => import('./routes/components/divider')));
const Drawer = Loadable(lazy(() => import('./routes/components/drawer')));
const DatePicker = Loadable(lazy(() => import('./routes/components/date-picker')));
const DateInput = Loadable(lazy(() => import('./routes/components/date-input')));
const Dropdown = Loadable(lazy(() => import('./routes/components/dropdown')));
const Badge = Loadable(lazy(() => import('./routes/components/badge')));
const Progress = Loadable(lazy(() => import('./routes/components/progress')));
const Pagination = Loadable(lazy(() => import('./routes/components/pagination')));
const PinCode = Loadable(lazy(() => import('./routes/components/pin-code')));
const Input = Loadable(lazy(() => import('./routes/components/input')));
const Button = Loadable(lazy(() => import('./routes/components/button')));
const Radio = Loadable(lazy(() => import('./routes/components/radio')));
const Select = Loadable(lazy(() => import('./routes/components/select')));
const SearchSelect = Loadable(lazy(() => import('./routes/components/search-select')));
const Split = Loadable(lazy(() => import('./routes/components/split')));
const Switch = Loadable(lazy(() => import('./routes/components/switch')));
const Slider = Loadable(lazy(() => import('./routes/components/slider')));
const Grid = Loadable(lazy(() => import('./routes/components/grid')));
const Form = Loadable(lazy(() => import('./routes/components/form')));
const FileInput = Loadable(lazy(() => import('./routes/components/file-input')));
const Breadcrumb = Loadable(lazy(() => import('./routes/components/breadcrumb')));
const List = Loadable(lazy(() => import('./routes/components/list')));
const Layout = Loadable(lazy(() => import('./routes/components/layout')));
const Notify = Loadable(lazy(() => import('./routes/components/notify')));
const Tree = Loadable(lazy(() => import('./routes/components/tree')));
const TreeChecked = Loadable(lazy(() => import('./routes/components/tree-checked')));
const Tag = Loadable(lazy(() => import('./routes/components/tag')));
const Tabs = Loadable(lazy(() => import('./routes/components/tabs')));
const Tooltip = Loadable(lazy(() => import('./routes/components/tooltip')));
const Table = Loadable(lazy(() => import('./routes/components/table')));
const TimePicker = Loadable(lazy(() => import('./routes/components/time-picker')));
const Rate = Loadable(lazy(() => import('./routes/components/rate')));
const Overlay = Loadable(lazy(() => import('./routes/components/overlay')));
const BackTop = Loadable(lazy(() => import('./routes/components/back-top')));
const Portal = Loadable(lazy(() => import('./routes/components/portal')));
const OverlayTrigger = Loadable(lazy(() => import('./routes/components/overlay-trigger')));
const Popover = Loadable(lazy(() => import('./routes/components/popover')));
const Message = Loadable(lazy(() => import('./routes/components/message')));
const MonthPicker = Loadable(lazy(() => import('./routes/components/month-picker')));
const Textarea = Loadable(lazy(() => import('./routes/components/textarea')));
const Modal = Loadable(lazy(() => import('./routes/components/modal')));
const Formatter = Loadable(lazy(() => import('./routes/components/formatter')));
const Steps = Loadable(lazy(() => import('./routes/components/steps')));
const Menu = Loadable(lazy(() => import('./routes/components/menu')));

export const routes: RouteObject[] = [
  {
    path: '/extensions',
    element: <BaseLayout siderMenu={false} />,
    children: [
      { index: true, element: <Extensions /> },
      { path: '*', element: <NoMatch /> },
    ],
  },
  {
    path: '/guide',
    element: <BaseLayout />,
    children: [
      { index: true, element: <GuideQuickStart /> },
      { path: '/guide/quick-start', element: <GuideQuickStart /> },
      { path: '/guide/import', element: <GuideImport /> },
      { path: '/guide/create-react-app', element: <GuideCreateReactApp /> },
      { path: '/guide/kkt', element: <GuideKKT /> },
      { path: '/guide/vscode', element: <GuideVscode /> },
      { path: '/guide/docs', element: <GuideDocs /> },
      { path: '/guide/recommendation', element: <GuideRecommendation /> },
      { path: '*', element: <NoMatch /> },
    ],
  },
  {
    path: '/components',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: '/components/overview', element: <Overview /> },
      { path: '/components/colors', element: <Colors /> },
      { path: '/components/reset-css', element: <ResetCss /> },
      { path: '/components/alert', element: <Alert /> },
      { path: '/components/auto-link', element: <AutoLink /> },
      { path: '/components/avatar', element: <Avatar /> },
      { path: '/components/affix', element: <Affix /> },
      { path: '/components/calendar', element: <Calendar /> },
      { path: '/components/checkbox', element: <Checkbox /> },
      { path: '/components/copy-to-clipboard', element: <CopyToClipboard /> },
      { path: '/components/collapse', element: <Collapse /> },
      { path: '/components/card', element: <Card /> },
      { path: '/components/descriptions', element: <Descriptions /> },
      { path: '/components/loader', element: <Loader /> },
      { path: '/components/icon', element: <Icon /> },
      { path: '/components/divider', element: <Divider /> },
      { path: '/components/drawer', element: <Drawer /> },
      { path: '/components/date-picker', element: <DatePicker /> },
      { path: '/components/date-input', element: <DateInput /> },
      { path: '/components/dropdown', element: <Dropdown /> },
      { path: '/components/badge', element: <Badge /> },
      { path: '/components/progress', element: <Progress /> },
      { path: '/components/pagination', element: <Pagination /> },
      { path: '/components/pin-code', element: <PinCode /> },
      { path: '/components/input', element: <Input /> },
      { path: '/components/button', element: <Button /> },
      { path: '/components/radio', element: <Radio /> },
      { path: '/components/select', element: <Select /> },
      { path: '/components/search-select', element: <SearchSelect /> },
      { path: '/components/split', element: <Split /> },
      { path: '/components/switch', element: <Switch /> },
      { path: '/components/slider', element: <Slider /> },
      { path: '/components/grid', element: <Grid /> },
      { path: '/components/form', element: <Form /> },
      { path: '/components/file-input', element: <FileInput /> },
      { path: '/components/breadcrumb', element: <Breadcrumb /> },
      { path: '/components/list', element: <List /> },
      { path: '/components/layout', element: <Layout /> },
      { path: '/components/notify', element: <Notify /> },
      { path: '/components/tree', element: <Tree /> },
      { path: '/components/tree-checked', element: <TreeChecked /> },
      { path: '/components/tag', element: <Tag /> },
      { path: '/components/tabs', element: <Tabs /> },
      { path: '/components/tooltip', element: <Tooltip /> },
      { path: '/components/table', element: <Table /> },
      { path: '/components/time-picker', element: <TimePicker /> },
      { path: '/components/rate', element: <Rate /> },
      { path: '/components/overlay', element: <Overlay /> },
      { path: '/components/back-top', element: <BackTop /> },
      { path: '/components/portal', element: <Portal /> },
      { path: '/components/overlay-trigger', element: <OverlayTrigger /> },
      { path: '/components/popover', element: <Popover /> },
      { path: '/components/message', element: <Message /> },
      { path: '/components/month-picker', element: <MonthPicker /> },
      { path: '/components/textarea', element: <Textarea /> },
      { path: '/components/modal', element: <Modal /> },
      { path: '/components/formatter', element: <Formatter /> },
      { path: '/components/steps', element: <Steps /> },
      { path: '/components/menu', element: <Menu /> },
      { path: '*', element: <NoMatch /> },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
];

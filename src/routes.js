import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));



const Home = React.lazy(() => import('./views/Home/Home'));
const Sales = React.lazy(() => import('./views/Order/Order'));
const Customer = React.lazy(() => import('./views/Customer/Customer'));
const CreateCustomer = React.lazy(() => import('./views/Customer/CreateCustomer'));
const CustomerDetail = React.lazy(() => import('./views/Customer/CustomerDetail'));
const CustomerModify = React.lazy(() => import('./views/Customer/CustomerModify'));
const CustomerUnset = React.lazy(() => import('./views/Customer/CustomerUnset'));
const Product = React.lazy(() => import('./views/Product/Product'));
const CreateProduct = React.lazy(() => import('./views/Product/CreateProduct'));
const ProductDetail = React.lazy(() => import('./views/Product/ProductDetail'));
const ProductModify = React.lazy(() => import('./views/Product/ProductModify'));
const ProductUnset = React.lazy(() => import('./views/Product/ProductUnset'));
const Plant = React.lazy(() => import('./views/Plant/Plant'));
const CreateOrder = React.lazy(() => import('./views/Order/CreateOrder'));
//const Stock = React.lazy(() => import('./views/Stock/Stock'));
const StockDetail = React.lazy(() => import('./views/Stock/StockDetail'));
const EditStock = React.lazy(() => import('./views/Stock/EditStock'));
const OrderDetail = React.lazy(() => import('./views/Order/OrderDetail'));
const OrderModify = React.lazy(() => import('./views/Order/OrderModify'));
const Transaction = React.lazy(() => import('./views/Order/Transaction'));
const Post = React.lazy(() => import('./views/Order/Post'));
const Suggestions = React.lazy(() => import('./views/Suggestions/Suggestions'));
const CreateSuggestions = React.lazy(() => import('./views/Suggestions/CreateSuggestions'));
const SuggestionsDetail = React.lazy(() => import('./views/Suggestions/SuggestionsDetail'));
const Manufacture = React.lazy(() => import('./views/Manufacture/Manufacture'));
const CreateManufacture = React.lazy(() => import('./views/Manufacture/CreateManufacture'));
const ManufactureDetail = React.lazy(() => import('./views/Manufacture/ManufactureDetail'));
const ManufactureModify = React.lazy(() => import('./views/Manufacture/ManufactureModify'));
const Produce = React.lazy(() => import('./views/Produce/Produce'));
const CreateProduce = React.lazy(() => import('./views/Produce/CreateProduce'));
const ProduceDetail = React.lazy(() => import('./views/Produce/ProduceDetail'));
const ProduceModify = React.lazy(() => import('./views/Produce/ProduceModify'));
const Message = React.lazy(() => import('./views/Message/Message'));
const Activity = React.lazy(() => import('./views/Activity/Activity'));
const RegisterDetail = React.lazy(() => import('./views/Pages/Register/RegisterDetail'));
const RegisterModify = React.lazy(() => import('./views/Pages/Register/RegisterModify'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/main/home', name: '홈', component: Home},
  { path: '/main/sales/list', exact: true,  name: '주문', component: Sales},
  { path: '/main/customer/list', exact: true,  name: '고객 목록', component: Customer},
  { path: '/customer/create', exact: true,  name: '고객 등록', component: CreateCustomer},
  { path: '/main/customer/:id', exact: true,  name: '고객 상세정보', component: CustomerDetail},
  { path: '/main/customer/edit/:id', exact: true,  name: '고객 수정', component: CustomerModify},
  { path: '/main/customer/list/unset', exact: true,  name: '비활성화 고객 목록', component: CustomerUnset},
  { path: '/main/product/list', exact: true,  name: '상품 목록', component: Product},
  { path: '/main/product/:id', exact: true,  name: '상품 상세정보', component: ProductDetail},
  { path: '/main/product/edit/:id', exact: true,  name: '상품 수정', component: ProductModify},
  { path: '/product/create', exact: true,  name: '상품 등록', component: CreateProduct},
  { path: '/main/product/list/unset', exact: true,  name: '상품 등록', component: ProductUnset},
  { path: '/main/plant', exact: true,  name: '공장', component: Plant},
  { path: '/sales/order', exact: true,  name: '주문', component: CreateOrder},
  { path: '/main/sales/order/:id', exact: true,  name: '주문 상세', component: OrderDetail},
  { path: '/main/stock', exact: true,  name: '재고 관리', component: EditStock},
  { path: '/main/stock/:id', exact: true,  name: '재고 내역', component: StockDetail},
  { path: '/main/order/edit/:id', exact: true,  name: '주문 수정', component: OrderModify},
  { path: '/main/order/transaction/:id', exact: true,  name: '거래 명세서', component: Transaction},
  { path: '/main/order/post/:id', exact: true,  name: '택배 송장', component: Post},
  { path: '/main/suggestions', exact: true,  name: '건의 사항', component: Suggestions},
  { path: '/main/suggestions/write', exact: true,  name: '글쓰기', component: CreateSuggestions},
  { path: '/main/suggestions/:id', exact: true,  name: '건의 내용', component: SuggestionsDetail},
  { path: '/main/manufacture', exact: true,  name: '제조', component: Manufacture},
  { path: '/manufacture/create', exact: true,  name: '제조 등록', component: CreateManufacture},
  { path: '/main/manufacture/:id', exact: true,  name: '제조 상세', component: ManufactureDetail},
  { path: '/main/manufacture/edit/:id', exact: true,  name: '제조 수정', component: ManufactureModify},
  { path: '/main/produce', exact: true,  name: '생산', component: Produce},
  { path: '/produce/create', exact: true,  name: '생산 등록', component: CreateProduce},
  { path: '/main/produce/:id', exact: true,  name: '생산 상세', component: ProduceDetail},
  { path: '/main/produce/edit/:id', exact: true,  name: '생산 수정', component: ProduceModify},
  { path: '/main/message', exact: true,  name: '메세지', component: Message},
  { path: '/main/activity', exact: true,  name: '관광', component: Activity},
  { path: '/main/registerdetail', exact: true,  name: '회원정보', component: RegisterDetail},
  { path: '/main/register/edit', exact: true,  name: '회원정보수정', component: RegisterModify},

  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;

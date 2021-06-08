export default interface IRoute {
  path: string;
  name: string;
  exact: true;
  component: any;
  props?: any;
}

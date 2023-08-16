import attachPropertiesToComponent from '../utils/attachPropertiesToComponent';
import Cascader from './Cascader.mini';
import { prompt } from './prompt';

export type { CascaderProps } from './Cascader.mini';

export default attachPropertiesToComponent(Cascader, { prompt });
